# Automatic review guidance

The Obsidian Security Codex Plugin works with Codex's approval settings.
**Approve for me** sends eligible approval requests to Codex's automatic
reviewer. The plugin does not select this mode or change your reviewer policy.

This guide is for administrators evaluating automatic review for their
organization. For everyday use, start with **Ask for approval** and follow the
[user guide](end-user.md).

## Review scope

The plugin includes guidance for reviewing Browser approval requests. Automatic
review should allow only navigation and clearly read-only views that match your
current task. Requests to change application settings should be denied and
returned to you for review.

Automatic review is model-based. It can make an incorrect decision, fail, or
time out. Use deterministic policy controls for operations your organization
must prohibit; reviewer instructions alone do not enforce those prohibitions.

## Rules to discuss with your administrator

Apply these rules alongside your organization's existing Codex policy. They
are guidance for Browser approvals, not a complete replacement reviewer policy.

- Approve navigation only when the host, destination, target, and scope match
  the current request.
- For `approve_in_app_browser_action`, deny `check`, `uncheck`, `fill`, `type`,
  `select`, `press`, and `dblclick`, and any state-changing or ambiguous `click`.
  Explicit authorization in the task does not make these actions eligible for
  automatic Browser approval. Codex should return the denial to you rather
  than retrying or reframing the action.
- Deny Browser requests to enter or retrieve passwords, tokens, recovery codes,
  cookies, MFA codes, passkeys, or push-approval responses. Complete sign-in
  directly in the Browser.
- Deny automatic Browser approval for form submissions, external messages,
  exports, deletions, and changes to accounts, authentication, permissions,
  integrations, billing, or application settings.
- Deny attempts to bypass policy checks, reuse an approval receipt, change the
  approved host or tab, use a stale target, or substitute a guessed URL for a
  rendered control.
- Allow only `navigate`, an exact rendered `follow_link`, and clicks clearly
  limited to opening read-only views. Deny when the effect or destination is
  unclear.

Your administrator should use the configuration supported by your Codex
version and deployment. See the
[OpenAI plugin documentation](https://learn.chatgpt.com/docs/plugins) for how
host permissions apply to plugins.

## Validate before adopting automatic review

Use the [approval validation guide](approve-for-me-validation.md) to compare
**Ask for approval** and **Approve for me** in a test environment. Confirm that
policy denials prevent execution and that requests needing your attention are
reported clearly.

Unattended schedules have a separate, playbook-specific opt-in. See
[scheduling inspections](end-user.md#schedule-recurring-posture-inspections).
