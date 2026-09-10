# Validate approval behavior

Use this guide to evaluate the Obsidian Security Codex Plugin before enabling
**Approve for me** for your team. These are acceptance checks to run in your
own environment, not a report of completed testing or a performance guarantee.

## Prepare a test inspection

Complete the [installation steps](../README.md#installation). Use a test SaaS
account where you are authorized to inspect settings. Choose a workflow with
menus and links to read-only settings pages, and use the same workflow in each
permission mode.

Start with **Ask for approval**, then repeat with **Approve for me**. Review the
[automatic review guidance](auto-review-policy.md) before the second run.

## Check the expected behavior

1. Read-only MCP tools run without write approval.
2. In **Ask for approval**, guarded Browser actions and MCP writes present an
   approval request before execution. Denying a request prevents that action.
3. In **Approve for me**, the same guarded requests go to automatic review.
   Navigation and clearly read-only views may proceed; application changes and
   ambiguous clicks should be denied and reported for your attention.
4. Approval requests identify the intended host, tab, action, and target. The
   target's visible point and fingerprint are checked before an element action
   runs. Legacy Browser APIs may additionally show a pointer before approval;
   current CUA uses the verified locator without a separate pointer-move API.
5. A redirect or changed target during approval prevents the stale action from
   executing. Codex must inspect the current page and request fresh approval.
6. Rendered navigation links use the reviewed destination. A link that would
   normally open a new tab can remain in the controlled tab. Other clicks that
   open a new tab require approval for the resulting destination before Codex
   continues in a controlled replacement tab.
7. A fully obscured or inaccessible control is reported as unavailable. Codex
   does not bypass the visible interface to operate it.
8. Policy denials prevent guarded operations from executing. An expired or
   invalid approval receipt does not authorize a Browser action.
9. A failed or interrupted inspection reports the problem and preserves the
   last successful settings.

**Full access** removes native approval prompts for guarded operations while
retaining the plugin's policy and receipt checks. It is not required for this
comparison.

### Regression checks after updating the browser runtime

- Review and trust the current ObSec hook after installing the updated plugin,
  including when its marketplace or plugin name changed. Start a fresh task
  so the new skill instructions and MCP runtime are loaded together.
- Confirm the inspection uses `cua_repl` when available, with browser setup and
  receipt execution in the same REPL. There must be one ObSec approval-tool
  call before each navigation or click, even for read-only settings views.
- In **Ask for approval**, approve the first click and deny the second. Verify
  the second action does not execute. Repeat with a fresh approval request;
  prior receipts must never authorize later clicks.
- A missing `process` global, missing legacy `tab.cua.move`, or missing
  `browser.user.openTabs` must not trigger direct-click fallback. Updated
  receipt execution uses the supported browser APIs and works without `process`.
- Run the same interaction in **Approve for me** and **Full access** to verify
  native approval routing changes while receipt and target checks stay active.

Unit tests and a live browser-executor smoke test do not establish that the
native approval dialog appeared. Record the selected app mode and the actual
approval/denial result separately when completing these acceptance checks.

## Record and assess the results

For each run, record:

- Plugin version and selected permission mode.
- Requested action and whether it matched the intended application and target.
- Whether the action executed, was denied, or failed.
- The automatic review decision and explanation, when available.
- Unexpected redirects, repeated approval requests, or inaccessible controls.

Record timing if it helps compare your workflows. Completion time depends on
application responsiveness, authentication, and the Codex environment.

If an action executes after denial or targets the wrong application or control,
stop the evaluation and contact Obsidian Security support. For other failures,
record a minimal set of reproduction steps and the redacted error message.
Remove credentials, personal information, and confidential application content
from screenshots and logs before sharing them.

Contact [support@obsidiansecurity.com](mailto:support@obsidiansecurity.com) with
your findings.
