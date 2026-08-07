---
name: replay-posture
license: MIT
description: >
  Replay a saved SaaS posture inspection with ObSec's guarded in-app Browser,
  compare settings with the previous successful run, and optionally sync the
  result to Obsidian. Use when the user asks to rerun, replay, refresh, or
  recheck a saved posture playbook.
---

# Replay a posture inspection

Use the Codex in-app Browser, the ObSec approval tools, and the saved
playbook. Load `browser:control-in-app-browser` and explicitly select `iab`. On
a fresh Browser runtime, use the Browser skill's exact direct
`nodeRepl.write(await iab.documentation())` call once. Never assign, measure,
slice, or proactively paginate that documentation; continue only if the tool
itself reports truncation. Reuse an existing binding without rereading it.
Never use Chrome, `ab`, agent-browser, raw CDP, the Pi auth vault, or legacy
container scripts.

## 1. Load the playbook

Resolve the platform slug and read:

```text
~/.obsec/playbooks/<platform-slug>.json
```

Require a target URL and a non-empty prior settings array. Preserve unknown
playbook fields when writing updates.

## 2. Reinspect

Set `globalThis.bastionBrowser = iab`. Prefer a sanitized saved
`browserEntryUrl`; fall back once to `url` if it no longer reaches the
authenticated tenant. Claim that URL when it is already open; otherwise create
a blank tab. Set `globalThis.bastionTab = tab`. Open the selected URL through
`approve_in_app_browser_action` with
`{"action":"navigate","url":"<saved-url>"}`. Execute the returned
`browser_call` verbatim. Never call `tab.goto()`, `tab.reload()`, `tab.back()`,
or `tab.forward()` directly.

Recheck each previously recorded setting using the rendered tenant
configuration. Use the prior setting name and evidence as navigation guidance,
not as proof of the current value. After the initial page opens, navigate only
through rendered links and buttons with the guarded visible-pointer flow. Use
`follow_link` for a navigation-only rendered link and include its lowercase
`destination_host`, including for explicitly reviewed cross-host links. Do not
use a known or guessed URL. If no visible control reaches a setting, record it
as inaccessible instead of jumping directly to a URL.

Under Approve for me, automatic review must deny check, uncheck, fill, type,
select, press, double-click, and any state-changing click, even when the user
requested the exact action. After such a denial, do not retry, rephrase, split,
or route around it; stop and ask the user to approve that exact action. Only
direct navigation, exact `follow_link`, and clicks clearly limited to opening a
read-only view are eligible for automatic approval. Treat an ambiguous click as
state-changing.

Store the selected tab in `globalThis.bastionTab`. For every mutation, use its
current `tab.id`, hostname, and latest snapshot to construct a unique
Playwright locator. Reuse the latest snapshot if the page has not changed. In
one `locator.evaluate()` call on the exact structured locator chain that will
be sent for approval, return the rendered text, raw `href`, and the first
unobscured point among the center, edge midpoints, and inset corners. Do not use
extra page-level filtering that is absent from the approval locator. Accept a
point only when it is in the viewport and `document.elementFromPoint()` returns
the target or a descendant; do not issue separate count, text, or attribute
calls. If no usable point exists, scroll once, take one fresh snapshot, and
rebuild it. Treat a still-obscured target as inaccessible rather than using a
DOM click or guessed route. After a locator timeout, switch once to a stable
`data-*`, test ID, exact `href`, or CSS locator from the fresh snapshot. Encode
CSS as `{"kind":"css","value":"<selector>"}`, never with a `selector` field.

Capture `tab.id` and `await tab.url()` twice at least 200 ms apart in the same
preparation call. If the tab, URL, or hostname changes, rebuild the target
before approval. Call `tab.cua.move({ x, y })` only after those checks, then call
`approve_in_app_browser_action` with the point and exact action. Include at most
one fingerprint: prefer live `expected_href` for links, otherwise
`expected_text`. When navigation is the link's only required side effect, use
`action: "follow_link"` with its exact live href and `destination_host` to avoid
opening and replacing its `target="_blank"` tab. Make execution of the returned
`browser_call` verbatim as the entire
`mcp__node_repl__js` input the very next tool call, without intervening
inspection or explanation. Observe the result once before the next mutation.
Every action requires its own approval; never batch mutations.

A successful ordinary click should use no more than one preparation call, one
pointer move, one approval, one immediate receipt execution, and one
post-click observation. Retry each failure category at most once.

For `status: "navigated"` after `follow_link`, continue in the same controlled
tab. For `status: "same_tab"`, continue normally. For
`post_action_warning: "action_applied_but_url_unavailable_or_unstable"`, do not
repeat the mutation; read the current tab once without changing it and continue
from the observed state. For
`status: "new_tab_replacement_required"`, do not claim the site-created tab.
The approved click code has already created a blank controlled tab in
`globalThis.bastionTab`. Set `tab` to that binding, pass the returned
`approval_arguments` unchanged to `approve_in_app_browser_action`, then execute
the returned call verbatim and verify the final URL and hostname. Never
substitute an element `href`, guessed route, or browser history. Stop on
`new_tabs_ambiguous` or `new_tab_url_unavailable`.

For `browser_host_changed` or `browser_tab_changed`, read the current controlled
binding, wait for a stable URL, and repeat the full preparation once. Never
claim a site-created tab.

If `tab.cua.move()` fails for a verified target, reacquire the same controlled
tab once with `iab.tabs.get(tab.id)` and repeat the full recipe. Never use
`iab.user.claimTab()` for this retry. After a second exact
`Input.dispatchMouseEvent` timeout, assign a fresh controlled tab using
`tab = await iab.tabs.new()` and `globalThis.bastionTab = tab`. Navigate it to
the saved current URL through MCP approval and retry once from a fresh snapshot.
Stop after any further failure.

Treat `stale_browser_target: expected one match` as locator ambiguity, not
escaping. Rebuild one unique structured locator that exactly matches the chain
used during preparation.

Interactive approvals route to the user in Ask for approval mode or Codex
automatic review in Approve for me mode. During a scheduled replay,
include the playbook slug as `playbook_name`; the hook permits it without an
interactive prompt only when `guardrails.autoConfirmBrowserMutations` is
`true`.

If the in-app Browser is signed out during an interactive run, ask the user to
sign in there after finalizing the tab with `status: "handoff"`. During a
scheduled run, stop and record a failed run instead of requesting or bypassing
authentication.

## 3. Calculate the diff

Compare by stable `id` when present, otherwise by setting name. Produce:

- `added`: settings absent from the previous successful state
- `removed`: prior settings no longer present
- `changed`: settings whose type or value changed, with before and after values

Do not treat temporary inaccessibility as removal. Record it as an error or
inaccessible result according to what the Browser shows.

## 4. Sync and record

If the playbook contains `connectionId`, use `obsidian-push-posture` to upload
and commit the new settings to that connection. If it is absent, keep the replay
local and say that Obsidian sync was skipped unless the user asks to find or
create a destination.

On success, replace top-level `settings`, update `lastRunAt`, refresh the
sanitized `browserEntryUrl`, and append a run with `trigger: "replay"`,
`status: "success"`, `settingsCount`, `diff`, and a `performance` object
containing action timings, approval count, documentation-call count, and retry
categories.
On failure, preserve the last successful settings and append a failed run with
the error context.

Use `posture-summary-page` to regenerate the local report when requested.

If browser work must pause for user input, make
`iab.tabs.finalize({ keep: [{ tab, status: "handoff" }] })` the final Browser
call of that turn. On a completed interactive replay, instead finalize with
`status: "deliverable"`. Never use Browser tools after finalizing in that turn.
