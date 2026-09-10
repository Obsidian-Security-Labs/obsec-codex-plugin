---
name: obsidian-push-posture
license: MIT
description: >
  Upload SaaS posture settings through the local ObSec MCP server, routing native
  settings to existing connections and custom settings through upload and commit.
  Use when the user asks to upload, push, sync, or send inspected settings to
  Obsidian.
---

# Push posture settings

Use only the `mcp__obsec__*` tools described below for Obsidian operations.
Do not invoke repository scripts, bundled workflow files, `tsx`, `curl`, or raw
Obsidian API endpoints.

The local MCP server receives `OBSIDIAN_API_TOKEN` and `OBSIDIAN_API_SERVER`
from the Codex host. Never print either value, put a token in tool input, or ask
the user to paste one into chat.

Codex applies native approval to every ObSec mutation. Read-only previews do
not prompt. The Cedar guardrails may still deny an approved call.

## 1. Normalize settings

First establish the ingestion path. For findings already associated with a
verified custom connector, continue below. Otherwise follow
[saas-posture-inspect](../saas-posture-inspect/SKILL.md) section 0: reuse this
request's native connection lookup or call `mcp__obsec__list_native_connections`
first. A matching native connection selects
[native-saas-settings](../native-saas-settings/SKILL.md); a successful empty
array selects the custom flow below. A failed lookup stops ingestion. Preserve
an explicit native destination or saved native replay for review if it is
missing, rather than replacing it with a custom connection.

Reuse this request's guidance result or resolve once as directed by the selected
branch. `supported: true` means guidance is available and does not change a
custom branch to native. With `[]` and either successful resolver result, use
the custom schema below and create or reuse the destination in step 2. Missing
native upload metadata is not a blocker for custom settings.

For the native branch, preserve `setting`, `category`, status, and harvest
metadata; do not convert native rows to custom rows or create a custom connector.
Native uploads have no commit step.

For a native branch with `playbook.contract`, pass the resolver's `contract_ref`,
observations, and selected connection to
`mcp__obsec__prepare_native_connection_settings`. Show
its canonical rows and counts, then upload the same observations/reference and
destination with `review_digest`. A native replay instead supplies
`playbook_name` after `mcp__obsec__check_native_replay_bundle` succeeds; it must
use a freshly resolved reference. Never submit canonical metadata as observation
fields. The uploader resolves the destination's current Relay skill and requires
contract preparation for every platform whose skill includes a contract, even
when `service` is omitted. Resolver failures, missing skills, or platform
mismatches stop upload. Report API acceptance separately from downstream processing.

On resolution failure, stop ingestion and report the error; do not treat it as
an unsupported result or a successful empty native connection lookup.

Build the settings array directly in MCP tool input. Each item may contain only
`id`, `name`, `type`, and `value`. Remove browser evidence, URLs, presentation
fields, secrets, tokens, cookies, raw page content, and screenshots.

Supported values are boolean or `null` for `bool`, number or `null` for
`number`, string or `null` for `string`, and string array or `null` for
`string_array`. The server generates an ID from the name when it is omitted.

Example:

```json
{
  "settings": [
    {
      "id": "mfa-required",
      "name": "MFA required",
      "type": "bool",
      "value": true
    }
  ]
}
```

## 2. Resolve the destination

Call `mcp__obsec__ensure_obsidian_connection` with inline JSON:

```json
{
  "name": "ElevenLabs",
  "tenant": "example",
  "connection": "ElevenLabs - example"
}
```

Include `category`, `description`, or `logo` only when known or requested.
The tool reuses a valid matching connection and creates only what is missing.
Set `force_new` only when the user explicitly requests a duplicate connector.
Connection or connector creation triggers Codex's native approval.

## 3. Upload and commit

Call `mcp__obsec__upload_posture_settings` with the returned connection ID and
the normalized array:

```json
{
  "connection_id": "connection-id",
  "settings": [
    {
      "id": "mfa-required",
      "name": "MFA required",
      "type": "bool",
      "value": true
    }
  ]
}
```

This mutation uploads and commits as one semantic operation and triggers native
approval. Set `create_replacement` only after explaining that the selected
connection is stale and the user requests a replacement.

Report the connector, connection ID, number of settings, and commit result.
After success, use `obsidian-posture-rules` when the user asks to create rules.

## Repair

Call `mcp__obsec__preview_connection_repair` first:

```json
{}
```

Show the returned proposed repair. To apply the same deterministic repair, call
`mcp__obsec__apply_connection_repair`:

```json
{}
```

The apply tool triggers Codex's native approval.
