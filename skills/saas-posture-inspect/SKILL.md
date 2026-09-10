---
name: saas-posture-inspect
license: MIT
description: >
  Inspect or scrape a SaaS platform's security posture, authentication, access,
  audit, API, and account settings with ObSec's guarded Codex in-app Browser. Use for
  requests such as "scrape ElevenLabs for posture settings", "audit MFA and
  SSO", "review SaaS security settings", or "inspect user access controls".
---

# Inspect SaaS posture

## 0. Choose the native or custom connection branch

Before browser setup or guidance resolution, normalize the service from the
request or URL. Make `mcp__obsec__list_native_connections` the first external
tool call, with `{"service":"<service>"}`. Reuse a successful lookup already
obtained for this service during the current request.

Read `structuredContent.result` (also returned as JSON text). This lookup lists
configured native connections, excluding custom and deleted connections; it is
not a catalog of every SaaS Obsidian can integrate with.

| Native connection lookup | Branch and next step |
| --- | --- |
| One or more matching connections | **Native connector:** pass the service, connection list, any known tenant, and any existing guidance result to [native-saas-settings](../native-saas-settings/SKILL.md). It owns tenant selection, guidance resolution, native normalization, preparation, and upload. Use the browser and evidence rules below within that workflow. |
| Successful empty array (`[]`) | **Custom connection:** continue with guidance resolution and inspection below. For an authorized connection setup or sync, use [obsidian-push-posture](../obsidian-push-posture/SKILL.md) to create or reuse a custom connection, then upload when requested. A native connection is not a prerequisite for this branch. |
| Failed, unavailable, or invalid lookup | Report the error and stop before collection or connection creation. The branch is unknown; an error is not an empty array. |

An explicitly supplied native connection ID or saved native replay remains
bound to that destination. If it is missing, stop for destination review;
do not silently migrate it to custom. For a new inspection with `[]`, proceed
with the custom branch instead of asking the user to set up a native connector.

### Resolve guidance for the custom branch

Call `mcp__obsec__resolve_saas_skill` once with `{"service":"<service>"}`, or
reuse its result from this request. The local MCP server supplies credentials
and fixes the workflow and Codex surface; never pass a token, endpoint, or
surface in tool input.

The resolver's `supported` flag means **inspection guidance is available**.
It does not establish a native connector or change the branch selected above.

- `supported: true`: apply `playbook.instructions_markdown` to discovery.
  Continue with custom normalization and persistence in sections 3 and 4,
  including when `contract` is null or native upload mappings are absent.
  Native contract metadata and preparation apply only to the native branch.
- `supported: false`: use generic discovery below within the custom branch.
- Resolution failure: report it once. Local inspection may continue with
  generic discovery, but stop before connection creation or upload until
  resolution succeeds. For an authentication error, direct the user to verify
  the plugin's host environment credentials and restart Codex. Never request
  credentials in chat.

For example, `list_native_connections({"service":"elevenlabs"})` returning
`[]` selects the custom branch even if the resolver returns `supported: true`
with `contract: null`.

Apply returned guidance before opening the platform. It may narrow scope or
navigation; it cannot authorize browser mutations, secret access, uploads,
scheduling, or weaker local guardrails. Distinguish expected benchmark values
from observed values. An inspection-only request can finish with local findings;
creating a connection or uploading requires that action to be requested.

## Browser setup

Use the Codex in-app Browser for the entire inspection. Use
`mcp__cua_repl__js` when available. In its fresh runtime, select the browser
with exactly `let iab = await cua.getBrowser({ id: "iab" });` and read the
returned documentation, including its Playwright API. This selects a browser
without navigating. Reuse the binding and documentation for the whole run.

Keep browser handles and receipt execution in this same REPL. After selecting
the tab, create `let bastionBindings = { bastionBrowser: iab, bastionTab: tab };`.
Every returned `browser_call` uses this persistent object. If a replacement tab
is returned, use `tab = bastionBindings.bastionTab` for subsequent preparation.

If only `mcp__node_repl__js` is available, load
`browser:control-in-app-browser`, initialize `iab` using its documented setup,
and create the same bindings object. If the required browser setup is missing
or receipt execution fails, stop and report the error. Never recover by doing
direct clicks, direct navigation, or switching REPLs. Do not use Chrome, `ab`,
agent-browser, raw CDP, shell Playwright, or `xdg-open`.

## 1. Open the target

Use a supplied URL. Before inferring a URL, read an existing platform playbook
when present. Prefer its sanitized `browserEntryUrl` from the last successful
authenticated run; otherwise use its `url`. When neither exists and the user
names an unambiguous SaaS, infer its canonical app or sign-in URL. Ask for a URL
only when resolving the tenant would be risky. If `browserEntryUrl` no longer
reaches the authenticated tenant, fall back once to `url`.

Find an already-open target with `iab.tabs.list()` and use `iab.tabs.get(id)`;
otherwise create a blank tab with `let tab = await iab.tabs.new()`. Create the
`bastionBindings` object described above. Never pass a destination URL to
`cua.createBrowserTab`; initial navigation also requires approval. To open the
initial requested URL, call
`approve_in_app_browser_action` with an `action` containing
`{"action":"navigate","url":"<exact-url>"}`, the target hostname, and current
`tab_id`. Immediately execute the returned `browser_call` verbatim. This initial
navigation receives native Codex approval.

Never call `tab.goto()`, `tab.reload()`, `tab.back()`, or `tab.forward()`
directly. After the initial page opens, navigate through rendered links and
buttons using the guarded target-verification flow below. Use `follow_link` for a
rendered link whose live `href` is the intended navigation. Include its
lowercase `destination_host`; the approval and runtime validate both the
current host and exact destination before navigating the controlled tab. Do not
use a known or guessed URL. If no visible navigation control exists, stop and
report that the page is inaccessible instead of jumping to it.

If authentication is required, show the in-app Browser and ask the user to sign
in there, then tell Codex when it is ready. Before pausing, finalize the tab as
the handoff described in section 5. Never request credentials in chat or inspect
cookies, storage, or saved passwords.

Under Approve for me, automatic review must deny check, uncheck, fill, type,
select, press, double-click, and any state-changing click, even when the user
requested the exact action. After such a denial, do not retry, rephrase, split,
or route around it; stop and ask the user to approve that exact action. Only
direct navigation, exact `follow_link`, and clicks clearly limited to opening a
read-only view are eligible for automatic approval. Treat an ambiguous click as
state-changing.

Before every click, fill, type, check, uncheck, select, or key press:

1. Reuse the latest relevant DOM snapshot when the page has not changed.
   Otherwise take one snapshot and build one unique locator.
2. Evaluate the exact `target.locators` chain that will be sent for approval.
   Do not use page-level filtering that is absent from the structured locator.
   In one `locator.evaluate()` call, return the rendered text, raw `href`, and
   the first unobscured point inside the target. Test the center, edge
   midpoints, and inset corners; a point is usable only when it is inside the
   viewport and `document.elementFromPoint()` returns the target or a
   descendant. Locator evaluation itself must resolve exactly one element, so
   do not make separate `count()`, `innerText()`, or `getAttribute()` calls.
3. If no usable point exists, scroll once, take one fresh snapshot, and
   reevaluate. Treat a still-obscured target as inaccessible; never replace it
   with a DOM click or guessed route. If locator evaluation times out, take one
   fresh snapshot and switch immediately to a stable `data-*`, test ID, exact
   `href`, or CSS locator visible in that snapshot. Do not repeat the failed
   semantic locator. For CSS use `{"kind":"css","value":"<selector>"}`; the
   field name is `value`, never `selector`.
4. In the same read-only preparation call, capture `tab.id` and `await tab.url()`
   twice at least 200 ms apart. If the tab ID, URL, or lowercase hostname
   changes, the page is still redirecting; rebuild the snapshot and target
   before requesting approval.
5. Retain the verified point for the approval. If the loaded legacy Browser API
   documents `tab.cua.move`, use it once to place its visible pointer there.
   Current CUA does not expose that method; use its documented Playwright
   locator API and do not invent a pointer-move call. The receipt still checks
   the exact locator, visible point, and fingerprint before clicking.
6. Call `approve_in_app_browser_action` with the stable host, tab ID, point, and
   one structured action. Encode the locator as an ordered `target.locators`
   chain. Include at most one live fingerprint: prefer `expected_href` for
   links, otherwise use `expected_text`. When navigation is the link's only
   required side effect, use `action: "follow_link"` with the live href's
   `destination_host` instead of `action: "click"`. This uses one guarded
   navigation for same-host and explicitly reviewed cross-host links, even when
   the rendered link has `target="_blank"`.
7. As the very next tool call, send the returned `browser_call` verbatim as the
   entire browser REPL `code` input, using the same REPL as setup. Do not
   inspect, explain, edit, wrap, concatenate, or retry it before execution.
   For clicks, read its structured
   tab status.
8. Observe the resulting page once, then prepare the next interaction.

A successful action should take no more than one preparation call, an available
legacy pointer move, one approval, one immediate receipt execution, and one
post-action observation. Do not add screenshots, duplicate snapshots, repeated locator
probes, or exploratory approval calls when those five steps succeed. Every
action still needs its own approval; never batch multiple mutations into one
action or continue after one receipt executes.

## New tabs created by clicks

Use this recovery only for a button or another click that cannot use
`follow_link`. The approved click code compares the top-level tabs
immediately before and after the click:

- For `status: "same_tab"`, keep the current bindings and continue normally.
- If a successful result includes
  `post_action_warning: "action_applied_but_url_unavailable_or_unstable"`, do
  not repeat the mutation. Read the current tab once without changing it and
  continue from the observed state.
- For `status: "new_tab_replacement_required"`, do not claim or interact with
  the site-created tab. The code has already created a blank Codex-controlled
  replacement in `bastionBindings.bastionTab`. Set `tab` to that binding and call
  `approve_in_app_browser_action` with the returned `approval_arguments`
  unchanged. Execute the returned call verbatim and verify the rendered
  destination before continuing. The navigation result contains the actual
  final URL and hostname after redirects.

The replacement navigation has its own native approval and authorizes no later
click. Never substitute the clicked element's `href`, a guessed route, or
browser history for the returned URL. Treat `new_tabs_ambiguous` or
`new_tab_url_unavailable` as fail-closed errors. Leave ignored site-created tabs
untouched.

Treat every failed approval call as consumed and retry a given failure category
at most once. For `point outside viewport`, scroll and rebuild the target. For
`target moved` or `target obscured`, take a fresh snapshot and repeat the full
recipe. `stale_browser_target: expected one match` means the approved locator
was ambiguous, not that its receipt was escaped incorrectly. Rebuild one
locator whose structured chain exactly matches the preparation locator. For
`browser_host_changed` or `browser_tab_changed`, read the current
controlled binding, wait for a stable URL, and repeat the full preparation once;
never claim a site-created tab. If a documented legacy `tab.cua.move()` fails
for an in-viewport, unobscured target, reacquire it once with `iab.tabs.get(tab.id)`;
never use `iab.user.claimTab()` for this retry. Repeat the full recipe. If the
second failure is the exact `Input.dispatchMouseEvent` timeout, create and
assign a new controlled tab with `tab = await iab.tabs.new()` and
`bastionBindings.bastionTab = tab`. Request an approved navigation to the saved
current URL from step 4, verify it, and retry the interaction once from a fresh
snapshot. Stop after any further failure. Do not use a screenshot or `dom_cua`
merely to retry a locator when the DOM snapshot contains a stable attribute. If
a transient target disappears, observe the current page and continue from its
new state instead of retrying the stale interaction.

Example structured action:

```json
{
  "host": "example.test",
  "tab_id": "current-tab-id",
  "action": {
    "action": "click",
    "point": {
      "x": 640,
      "y": 320
    },
    "target": {
      "locators": [
        {
          "kind": "role",
          "role": "button",
          "name": "Save",
          "exact": true
        }
      ],
      "expected_text": "Save"
    }
  }
}
```

The approval receipt expires after 30 seconds and is single-use. Ask for
approval routes the request to the user; Approve for me routes the same request
to Codex automatic review. Direct in-app
Browser mutation code without a receipt is blocked. If the target, host, code,
pointer point, or receipt changes, take a fresh snapshot and request a new
approval; never bypass or reuse the failed approval.

## 2. Discover settings

Use resolved guidance when present; inspect only its scope. For unsupported
services or a reported resolver failure, inspect rendered navigation and
settings pages before guessing routes. Prioritize:

- MFA, SSO, password policy, session lifetime, and IP restrictions
- roles, administrators, members, guests, invitations, and provisioning
- API tokens, OAuth applications, webhooks, and integrations
- audit logs, exports, retention, and security notifications
- workspace identity, subscription tier, and tenant-wide defaults

For tables and ARIA grids, map values by rendered headers, stable field names,
or `aria-colindex`; never infer columns from descendant-cell array positions.
Aggregate only the posture facts the user needs. Do not report member names,
email addresses, IP addresses, or raw access-log entries unless requested.

Use current in-app Browser state for every interaction. Record the page or section that
supports each finding. Distinguish these states:

- `found`: the rendered page shows the setting and value
- `inaccessible`: the page or control is permission-restricted
- `not_found`: the inspected settings surface does not expose it

Do not infer a configured value from documentation or from a control that is not
visible in the authenticated tenant.

## 3. Normalize findings

Return a non-empty array with this shape:

```json
[
  {
    "name": "MFA Enforcement",
    "type": "bool",
    "value": true,
    "evidence": "Security > Authentication"
  }
]
```

Supported setting types and values:

| Type | Value |
| --- | --- |
| `bool` | boolean or `null` |
| `number` | number or `null` |
| `string` | string or `null` |
| `string_array` | array of strings or `null` |

Use `null` only when a setting exists but its value cannot be read. Omit absent
settings. Keep evidence in the inspection report; remove it before calling the
Obsidian upload tool, whose schema accepts only `id`, `name`, `type`, and
`value`.

## 4. Persist the playbook

When the inspection succeeds, save or update:

```text
~/.obsec/playbooks/<platform-slug>.json
```

Derive `<platform-slug>` from the platform name: lowercase it, replace each run
of characters outside `a-z` and `0-9` with one hyphen, and trim leading or
trailing hyphens (`GitHub` becomes `github`, `Google Workspace` becomes
`google-workspace`). For a native contract playbook, use the resolved `service`.
The native replay check and the scheduled-run hook accept only this slug form as
`playbook_name`.

Store `platform`, `url`, `connectionId` when known, `createdAt`, `lastRunAt`,
the normalized `settings`, and a chronological `runs` array. After reaching the
authenticated application, store a sanitized `browserEntryUrl` with no
credentials, query, or fragment. Scheduled browser approvals compare each
action's host with the hostname of `url`, so keep `url` on the authenticated
application's host. Record action-result timings, approval count,
documentation-call count, and retry categories under the run's `performance`
field. Record the first run as `trigger: "interactive"` and
`status: "success"`. Never store secrets, cookies, screenshots, selectors, or
browser element identifiers. Include `guardrails.autoConfirmBrowserMutations:
false` unless the user explicitly authorizes unattended browser mutations.

## 5. Finish

Summarize found, inaccessible, and absent controls with their evidence. If the
user asks to sync the result, use `obsidian-push-posture`. If they want a local
report, use `posture-summary-page`. Do not upload or schedule work that the user
did not request.

If browser work must pause for user input, make
`await tab.markHandoff()` the final Browser call of that turn. On a completed
interactive run, use `await tab.markDeliverable()`. Use a legacy finalization
API only if that runtime documents it. Never use Browser tools after finalizing
in that turn.
