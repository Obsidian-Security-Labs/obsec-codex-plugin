---
name: posture-history
license: MIT
description: >
  Answer questions about prior SaaS posture inspection runs from a saved Codex
  playbook. Use for run history, last-run status, failures, setting changes,
  historical values, or questions such as "has MFA ever changed?".
---

# Review posture history

Resolve the platform slug and read:

```text
~/.obsec/playbooks/<platform-slug>.json
```

If it does not exist, list available playbook filenames and ask the user to
clarify. Do not invoke Browser or Obsidian tools for history-only questions.

Use the chronological `runs` array plus top-level `settings`, `createdAt`, and
`lastRunAt`.

## Common questions

- **Last run:** report timestamp, trigger, status, and failure error when present.
- **Last successful changes:** summarize `diff.added`, `diff.removed`, and
  `diff.changed` from the newest successful run.
- **All runs:** show newest first with timestamp, trigger, status, and change count.
- **Failures:** list failed timestamps and their recorded error context.
- **Setting history:** match setting names case-insensitively and report each
  recorded before/after transition in chronological order.

For a historical value, reconstruct only when the run data establishes a
reliable baseline. If top-level settings represent only the latest state and
earlier values cannot be derived from diffs, state the limitation instead of
guessing.

When the user requests a visual report, use `posture-summary-page`.
