# Obsidian Security Codex Plugin

Inspect your SaaS security settings and synchronize findings with Obsidian
Security, directly from Codex. The Obsidian Security Codex Plugin provides
guided workflows for reviewing authentication, access controls, audit settings,
and other security posture information through the Codex in-app Browser.

You can ask Codex to:

- Inspect a SaaS application's security settings.
- Upload collected posture findings to Obsidian Security.
- Summarize posture scores and review changes over time.
- Create reusable inspection playbooks and schedule posture workflows.

## Prerequisites

Before installing, make sure you have:

- A Codex desktop environment with Plugins access and the in-app Browser plugin
  available. Browser inspection workflows require the in-app Browser.
- The Codex CLI and Git installed on the same machine. Run
  `codex plugin --help` to confirm your CLI supports plugin installation.
- A macOS or Linux host with `/bin/sh` and Node.js 22 or newer. The launchers use
  a compatible Node.js on `PATH`, then try Codex's bundled runtime if available.
  Host runtime support alone does not provide the required desktop Browser.
- An Obsidian Security API server URL and API token for your organization.
  Contact your Obsidian Security administrator if you need these details.
- Access to the SaaS applications you want to inspect, with permission to view
  the relevant security settings.

The plugin includes its runtime dependencies. You do not need to clone this
repository, build the plugin, or install npm packages.

## Installation

### 1. Install the plugin

Run these commands in a terminal:

```bash
codex plugin marketplace add \
  https://github.com/Obsidian-Security-Labs/obsec-codex-plugin.git
codex plugin add obsec-codex-plugin@bastion-codex
codex plugin list --json
```

In the final command's output, confirm that
`obsec-codex-plugin@bastion-codex` appears under `installed` with both
`installed` and `enabled` set to `true`.

The command uses the plugin's package identifier. In the plugin directory, the
Obsidian Security Codex Plugin currently appears as **Obsidian Security** under
**Obsidian Security Plugins**.

For general plugin management, see the
[OpenAI plugin documentation](https://learn.chatgpt.com/docs/plugins).

### 2. Connect to Obsidian Security

Set these variables in the environment that launches your Codex desktop app,
using your organization's approved secret-management process:

| Variable | Value |
| --- | --- |
| `OBSIDIAN_API_SERVER` | Your organization's Obsidian Security API server URL |
| `OBSIDIAN_API_TOKEN` | Your Obsidian Security API token |

Keep the token out of chat, command-line arguments, repository files, and Codex
configuration files. A variable set in a terminal is not necessarily available
to an app launched from your desktop; configure the environment used by the app
itself.

In your Codex configuration file (`~/.codex/config.toml` by default, or
`$CODEX_HOME/config.toml` if you use a custom Codex home), exclude the token from
agent shell commands:

```toml
[shell_environment_policy]
exclude = ["OBSIDIAN_API_TOKEN"]
```

If this section or list already exists, add `"OBSIDIAN_API_TOKEN"` to the
existing list. Preserve your other settings and excluded variables, and do not
create a duplicate TOML section. The plugin's MCP configuration separately
forwards the API variables to its local server.

### 3. Enable the Browser and verify the connection

1. Enable the Codex in-app Browser plugin.
2. Restart your desktop app after configuring its environment, then start a new
   Codex task to load the installed plugin.
3. Open `/hooks`, review the plugin's hook, and trust it. Its current description
   is **Evaluate ObSec Cedar guardrails before shell, browser, and Obsidian calls.**
4. Open `/mcp` and confirm that the `obsec` server initialized successfully.
5. Use **Ask for approval** for your first inspection.

Installation is ready to use once the plugin is installed and enabled, its hook
is trusted, and the MCP server has initialized. API access and SaaS permissions
are verified when you use the corresponding workflow.

## Your first inspection

Start a new Codex task and try:

```text
Use the Obsidian Security Codex Plugin to inspect the security settings
of my SaaS application. Start at <your application's sign-in URL> and
summarize the findings.
```

Replace the placeholder with your application's URL. If authentication is
required, sign in directly in the in-app Browser and tell Codex when you are
ready. Do not share passwords or tokens in chat.

Review each approval request against the intended application and action. When
the inspection is complete, you can ask:

```text
Upload these posture findings to Obsidian Security.
```

## Approvals and security controls

The plugin runs an MCP server locally and checks supported operations against
bundled Cedar policies. Browser actions use approvals tied to the specific tab
and target; expired or changed targets require a fresh request.

- **Ask for approval:** Review requests before guarded Browser actions and MCP
  writes run. Read-only MCP tools do not require write approval.
- **Approve for me:** Codex's automatic reviewer evaluates requests. The plugin's
  guidance limits automatic approval to navigation and clearly read-only UI
  actions. Changes to application settings require your attention after a
  denial. Automatic review is model-based and is not a deterministic security
  boundary.
- **Full access:** Actions can proceed without an approval prompt. The plugin's
  policy and Browser receipt checks still apply to guarded operations.
- Modes that cannot show approvals and do not explicitly grant Full access are
  rejected for guarded mutations.

Scheduled Browser changes require explicit opt-in through the playbook setting
`guardrails.autoConfirmBrowserMutations: true`; policy and stale-target checks
still apply. Review a playbook before enabling unattended changes.

For more detail, see the [approval policy guide](docs/auto-review-policy.md).

## Updating

Refresh the marketplace and reinstall the plugin from the refreshed snapshot:

```bash
codex plugin marketplace upgrade bastion-codex
codex plugin add obsec-codex-plugin@bastion-codex
codex plugin list --json
```

Start a new Codex task after updating. Review and trust any updated hook
configuration in `/hooks`, then check the server in `/mcp`.

## Troubleshooting

- **`codex` or its `plugin` command is unavailable:** Install or update the
  Codex CLI to a release with plugin support.
- **The marketplace cannot be downloaded or Git requests a login:** Confirm the
  repository URL and network access. Contact Obsidian Security support if the
  installation URL requires access you do not have.
- **The plugin does not appear in a task:** Confirm it is installed and enabled
  with `codex plugin list --json`, then start a new task.
- **The MCP server or hook cannot start:** Confirm Node.js 22 or newer is
  available to the desktop app and review the error in `/mcp` or `/hooks`.
- **Obsidian API requests fail:** Verify the app receives both API environment
  variables and that your token has the required access. Do not include the
  token in diagnostics.
- **Browser actions are blocked:** Confirm the in-app Browser is enabled, the
  hook is trusted, and the task uses a supported approval mode.

For help with the Obsidian Security Codex Plugin, contact
[support@obsidiansecurity.com](mailto:support@obsidiansecurity.com). Include the
plugin version and a redacted error message.

