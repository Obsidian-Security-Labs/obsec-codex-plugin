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
   visible Browser pointer matches the target before an element action runs.
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
