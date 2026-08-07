# ObSec Codex plugin

This repository contains the self-contained Codex plugin and its Git-backed
marketplace. The internal development checkout also contains maintainer source
and verification tooling; the public mirror contains only the distributable
plugin artifacts.

## Contents

| Path | Purpose |
| --- | --- |
| `.agents/plugins/marketplace.json` | Repo marketplace catalog |
| `.codex-plugin/plugin.json` | Codex plugin manifest |
| `.mcp.json` | Local ObSec MCP server and native approval policy |
| `mcp/launch.sh` | MCP launcher |
| `hooks/hooks.json` | Cedar pre-tool guardrail wiring |
| `hooks/launch.sh` | Cedar hook launcher |
| `runtime/` | Bundled MCP server, Cedar hook, compact browser executor, and Cedar runtime |
| `policies/` | Bundled Cedar policy and schema |
| `skills/` | Codex-native workflow entrypoints |

The Codex in-app Browser handles navigation, snapshots, authentication, and the
actual interaction. Before each element mutation, ObSec moves the Browser's
visible pointer to the target and calls one write-annotated MCP tool. Initial
direct navigation uses that same tool without a pointer. Codex routes native
approval to the user or automatic review, then ObSec issues a short-lived,
single-use receipt for that exact action. The returned call is deliberately
small: it passes only an opaque receipt token to a bundled browser executor.
The executor atomically claims the receipt and validates its stored tab, host,
locator, fingerprint, and pointer point before acting, including when an outer
tool wrapper prevents the `PreToolUse` hook from seeing the nested execution.
When the hook sees a direct call, it verifies the exact code and reruns Cedar
without consuming the receipt before the runtime. The same hook blocks direct
browser mutation commands, including unapproved navigation, reload, back, and
forward calls.

For a rendered navigation-only link, `follow_link` validates its exact locator,
canonical href, pointer point, current host, and explicit destination host
before navigating the current controlled tab. This avoids a second approval for
same-host and reviewed cross-host `target="_blank"` links. After any other
approved click, the receipt-bound code detects whether that click opened one
new top-level tab. It prepares a Codex-controlled replacement for
the exact resulting URL, which still requires its own native navigation
approval. At a turn boundary, the skills preserve a work-in-progress or final
tab with the Browser's supported `tabs.finalize()` API.


## Installation

Add this Git-backed marketplace with Codex:

```bash
codex plugin marketplace add \
  https://gitlab.com/obsec1/dataplatform/bastion-codex-public.git
```

For local development, add the repository checkout instead:

```bash
codex plugin marketplace add "$PWD"
```

Open the Plugins Directory in the ChatGPT desktop app, select **Obsidian
Security Plugins**, and install **Obsidian Security**. Alternatively, install it
from the command line after adding the marketplace:

```bash
codex plugin add bastion-codex-plugin@bastion-codex
```

Start a new Codex task after installing or upgrading so the updated skills
load. Refresh an existing checkout with
`codex plugin marketplace upgrade bastion-codex`.

### Copy-paste setup prompt

Paste the prompt below into a local coding agent to automate the safe parts of
installation or upgrade. The agent will leave API-token entry, app restart, and
hook trust to you because those steps require a secret or an explicit user
decision.

```text
Set up the Obsidian Security Codex plugin on this machine.

Use this marketplace:
https://gitlab.com/obsec1/dataplatform/bastion-codex-public.git

Plugin selector: bastion-codex-plugin@bastion-codex

Requirements:
1. Never ask me to paste OBSIDIAN_API_TOKEN into chat. Never read, print, log,
   copy, or pass its value in a shell command. Do not put the token in a config
   file.
2. Confirm this is macOS or Linux, `codex` is installed, and its `plugin`
   command is available. Stop with a clear explanation if a prerequisite is
   missing.
3. Inspect configured marketplaces with `codex plugin marketplace list --json`.
   If `bastion-codex` is absent, add the Git marketplace above. If it is already
   present, upgrade it instead.
4. Install or refresh the plugin with
   `codex plugin add bastion-codex-plugin@bastion-codex`.
5. Safely update `~/.codex/config.toml` so `shell_environment_policy.exclude`
   contains `"OBSIDIAN_API_TOKEN"`. Preserve every existing setting and every
   existing excluded variable. If the file cannot be merged safely, show me
   the proposed non-secret edit and ask before changing it.
6. Verify installation with `codex plugin list --json`. Do not clone this
   repository, run its build, or install its development dependencies.
7. Report what you changed, then tell me to:
   - securely set OBSIDIAN_API_SERVER and OBSIDIAN_API_TOKEN in the environment
     that launches the ChatGPT desktop app (without sharing the token with you),
   - enable the Codex in-app Browser plugin,
   - restart the app and start a new Codex task,
   - open `/hooks` and review and trust the ObSec hook, and
   - open `/mcp` and confirm the required `obsec` server initialized.

Ask for approval only when your execution environment requires it. Do not
claim the setup is complete until the CLI verification succeeds; list any
remaining manual steps separately.
```

## Runtime setup

Enable the Codex in-app Browser plugin. Sign in inside the in-app Browser
when a SaaS tenant requires authentication. Never put credentials in chat.

The plugin currently supports macOS and Linux hosts with `/bin/sh`. The local
MCP server and guardrail hook require Node.js 22 or newer. The MCP
launcher first uses Node.js from `PATH`, then falls back to Codex's bundled
Node.js runtime. The committed bundles do not require `tsx`, npm, pnpm, or a
separate SDK installation.

Set both of these environment variables in the Codex process environment:

- `OBSIDIAN_API_TOKEN`
- `OBSIDIAN_API_SERVER`

Never paste the token into a prompt or pass it as a command-line argument.

## Guardrails and approvals

Codex starts the bundled MCP server locally over stdio. The `.mcp.json`
configuration forwards the token to that process. Keep the token out of
arbitrary shell commands by excluding it from Codex's shell environment:

```toml
[shell_environment_policy]
exclude = ["OBSIDIAN_API_TOKEN"]
```

- Read-only MCP tools run without an approval prompt.
- Every MCP mutation is marked as a write. With
  `default_tools_approval_mode: "writes"`, Codex asks for native approval before
  sending the tool call to the server.
- In Ask for approval, the user reviews the request. In Approve for me, Codex
  automatic review evaluates the same request. Both use Codex's interactive
  `default` or `acceptEdits` hook permission mode.
- ObSec instructs automatic review to deny check, uncheck, fill, type, select,
  press, double-click, and any state-changing or ambiguous click, even when the
  user requested it. The agent must stop and ask the user after that denial.
  Only direct navigation, exact `follow_link`, and clearly read-only UI
  navigation are eligible for automatic approval.
- In Full access (`bypassPermissions`) mode, mutations proceed without a prompt,
  but Cedar checks and browser approval receipts remain enforced.
- The hook denies mutations in `Never ask`, plan, or unknown modes because those
  modes cannot surface the required approval and do not explicitly grant Full
  access.
- The Cedar hook can deny a call but cannot approve it or create a confirmation
  dialog. Approval remains a Codex host decision.
- The MCP server evaluates Cedar again immediately before an operation so the
  hook is not the sole enforcement boundary.
- Automatic review remains model-evaluated rather than a deterministic security
  boundary. See
  [`docs/auto-review-policy.md`](docs/auto-review-policy.md) for recommended
  reviewer guidance and deterministic-policy boundaries.
- Browser mutations must use current in-app Browser snapshots. The visible
  pointer moves to the target before approval. Approved receipts expire after
  30 seconds, are single-use, and are rejected when the host, pointer target,
  target fingerprint, or receipt changes. The runtime returns non-sensitive
  approval handoff, verification, execution, and total timings.
- Initial direct navigation uses the same approval tool. After that, SaaS
  navigation must use rendered links and buttons through the guarded
  visible-pointer flow; known URLs cannot substitute for approval.
- Redirected navigation reports its actual final host and URL. A click-created
  tab is copied into a blank controlled replacement only after the exact
  destination receives a second host-aware approval.
- Navigation-only rendered links use one guarded `follow_link` approval with an
  explicit destination host. Exact text fingerprints narrow CSS targets before
  uniqueness checks, relative and absolute hrefs compare canonically, and
  receipt calls contain only an opaque token.
- Scheduled browser applies can skip the interactive prompt only when their
  named playbook has `guardrails.autoConfirmBrowserMutations: true`. Cedar and
  stale-ref checks still run.

After installing or changing the plugin, start a new Codex task. Open `/hooks`
to review and trust the current hook definition, then open `/mcp` to verify that
the `obsec` server initialized.

Use [`docs/approve-for-me-validation.md`](docs/approve-for-me-validation.md) to
compare Ask for approval and Approve for me against the same SaaS workflow.
