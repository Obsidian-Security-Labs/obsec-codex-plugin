---
name: posture-summary-page
license: MIT
description: >
  Generate or refresh a self-contained HTML summary of a SaaS posture playbook
  for viewing from Codex. Use after an inspection or replay, or when the user
  asks to see settings, changes, run history, or a local posture report.
---

# Generate a posture summary

Read the selected playbook from `~/.obsec/playbooks/<platform-slug>.json` and
write:

```text
~/.obsec/summaries/<platform-slug>.html
```

Create a single self-contained HTML document with inline CSS and no remote
scripts, fonts, images, or other runtime dependencies.

Include:

- platform, target URL, last successful run, and latest status
- current settings grouped by category when categories are available
- the latest added, removed, and changed settings
- chronological run history with failures and errors
- an explicit empty state for sections with no data

For `uploadMode: "native"`, show bundle/source identity and separate observed
and unavailable counts. Group canonical rows by contract category and match
changes by `setting` ID. Display `NO_DATA` reasons separately from observed
values; absence is not false, zero, or a security verdict. Show API acceptance
and downstream processing evidence or unverified status as separate facts.
Failed runs must leave the last successful baseline visible.

HTML-escape every value read from the playbook. When embedding serialized JSON,
escape `<` so playbook content cannot terminate a script element. Do not render
secrets, tokens, cookies, raw page content, or screenshots.

Return a clickable absolute file link to the generated report. Do not call
`xdg-open`. If the user explicitly asks to open it in the built-in browser,
load `browser:control-in-app-browser` and navigate to the file using that
skill's supported behavior.
