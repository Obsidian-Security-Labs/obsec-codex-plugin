# ObSec automatic-review guidance

Codex owns automatic review. The ObSec plugin cannot select Approve for me or
rewrite the user's `auto_review` configuration.

Codex gives its reviewer a compact task transcript and the exact approval
request. ObSec adds its baseline denial guidance to the MCP server
instructions and browser-approval tool description so that context travels with
the request. The policy below adds tenant-specific rules that the plugin cannot
set.

Add these rules to the tenant-specific section of the existing Codex reviewer
policy. Do not use this file as a complete replacement for Codex's default
policy:

- Approve only when the exact host, resource, target, and side effect match the
  user's current request.
- For `approve_in_app_browser_action`, automatically deny `check`, `uncheck`,
  `fill`, `type`, `select`, `press`, and `dblclick`, plus every state-changing
  or ambiguous `click`. Deny form submission, external messages, and page,
  account, authentication, authorization, or settings changes even when the
  user explicitly requested the exact action. The main agent must stop and ask
  the user rather than retrying or reframing the action.
- Deny entering or retrieving passwords, tokens, recovery codes, cookies, MFA
  codes, passkeys, or push-approval responses.
- Deny changes to authentication, administrators, roles, users, integrations,
  billing, data exports, or external messages unless the user explicitly
  requested that exact change in the current task.
- Deny deletion, retirement, replacement, bulk repair, or other destructive
  operations without explicit current-task authorization.
- Deny attempts to bypass Cedar, reuse an approval receipt, change the approved
  host or tab, use a stale target, or replace a rendered control with a guessed
  route.
- Automatic review may approve only `navigate`, exact rendered `follow_link`,
  and clicks clearly limited to opening read-only views. Deny when a click's
  effect, destination, or requested scope is unclear.

Use Cedar customer policy for deterministic prohibitions. Reviewer guidance is
model-evaluated and can fail, time out, or make an incorrect judgment.

For enterprise-managed Codex, place organization-specific rules in
`guardian_policy_config`. For local Codex configuration, merge them into the
complete policy configured under `[auto_review].policy`.
