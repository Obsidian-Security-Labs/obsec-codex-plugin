---
name: schedule-posture
license: MIT
description: >
  Create or update a Codex recurring automation for a saved SaaS posture
  playbook. Use when the user asks to schedule, automate, or run recurring
  posture inspections in the Codex desktop app.
---

# Schedule a posture replay

Use Codex's recurring-automation capability. Do not call `obsec schedule`, edit
cron, create launch agents, or invoke the Pi host scheduler.

## Validate

Require an existing playbook at:

```text
~/.obsec/playbooks/<platform-slug>.json
```

Confirm the requested local time, frequency, and timezone. Default to daily at
08:00 only when the user did not specify a schedule.

## Create or update

Maintain one recurring automation per playbook unless the user explicitly asks
for multiple schedules. Its prompt must:

- name the `obsec-codex-plugin` plugin and `replay-posture` skill
- include the playbook slug and absolute playbook path
- require the Codex in-app Browser plus ObSec's browser approval tool
- preserve the prior successful settings if authentication or inspection fails
- upload only when the playbook contains an Obsidian connection ID
- append success or failure details to the playbook run history

Require `guardrails.autoConfirmBrowserMutations: true` before creating an
unattended schedule that may mutate the in-app Browser. If it is false or absent, ask
the user whether to enable that playbook-scoped setting. Do not edit it without
explicit approval. This opt-in skips only Codex's interactive prompt for the
scheduled browser approval; Cedar, exact-code, host, pointer, and stale-target
checks still run.

State that website access and sign-in can stop a scheduled browser run. Never
enable the environment-wide approval bypass on the user's behalf.

After creating or updating the automation, report its name, schedule, timezone,
and next expected run.
