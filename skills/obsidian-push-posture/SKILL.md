---
name: obsidian-push-posture
license: MIT
description: >
  Find or create an Obsidian Security connector and connection, then upload and
  commit normalized SaaS posture settings through the local ObSec MCP server.
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
