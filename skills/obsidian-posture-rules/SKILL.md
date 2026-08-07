---
name: obsidian-posture-rules
license: MIT
description: >
  List, preview, create, update, or retire Obsidian Security posture rules
  through the local ObSec MCP server. Use for posture-rule discovery and
  lifecycle operations or to create rules from newly uploaded SaaS settings.
---

# Manage posture rules

Use only the `mcp__obsec__*` tools described below for Obsidian operations.
Do not invoke repository scripts, bundled workflow files, `tsx`, `curl`, or raw
Obsidian API endpoints.

The local MCP server receives `OBSIDIAN_API_TOKEN` and `OBSIDIAN_API_SERVER`
from the Codex host. Never expose the token or include it in tool input.

Codex applies native approval to every rule mutation. Listing and previewing do
not prompt. The Cedar guardrails may still deny an approved call.

## List

Call `mcp__obsec__list_posture_rules` with only requested filters:

```json
{
  "platform": "ElevenLabs",
  "tenant_uuid": "tenant-uuid",
  "risk_level": "high",
  "state": "active",
  "limit": 50
}
```

Omit filters the user did not request. Pass the returned cursor in a subsequent
request when more results are needed.

## Create one

First call `mcp__obsec__preview_posture_rule` with the full proposed rule:

```json
{
  "rule": {
    "rule_name": "Require MFA",
    "comment": "Flag tenants where MFA is not required.",
    "description": "MFA should be required for all users.",
    "domain": "IAM",
    "risk_level": "high",
    "filter_group": {
      "combinator": "and",
      "filter_items": []
    }
  },
  "connection_id": "connection-id",
  "preview_tenant": "tenant-uuid"
}
```

Inspect the resolved dashboard, filter identifiers, and preview results. Rules
represent violations, so the definition must match the bad state.

After presenting a successful preview, pass the same rule and selectors to
`mcp__obsec__create_posture_rule`. Set `skip_preview` only when the user
knowingly requests it. Creation triggers Codex's native approval.

## Create from uploaded settings

Call `mcp__obsec__preview_posture_rules_from_settings`:

```json
{
  "connection_id": "connection-id",
  "platform": "ElevenLabs",
  "tenant_uuid": "tenant-uuid",
  "risk_level": "medium"
}
```

It discovers the settings dashboard, reads captured settings, skips settings
already covered by rules, and returns candidates and previews. Show the
candidates before calling `mcp__obsec__create_posture_rules_from_settings`
with the same selectors:

```json
{
  "connection_id": "connection-id",
  "platform": "ElevenLabs",
  "tenant_uuid": "tenant-uuid",
  "risk_level": "medium"
}
```

Bulk creation repeats discovery and preview inside the approved operation, then
triggers one native approval.

## Update

Call `mcp__obsec__update_posture_rule` with only the fields that should
change:

```json
{
  "rule_id": "rule-id",
  "risk_level": "medium",
  "definition": {
    "comment": "Update the MFA violation logic.",
    "definition": {
      "combinator": "and",
      "filter_items": []
    }
  }
}
```

Include metadata only when requested. Updating triggers native approval.

## Retire

Call `mcp__obsec__retire_posture_rule`:

```json
{
  "rule_id": "rule-id"
}
```

Retirement triggers native approval. Do not describe this operation as a hard
delete.

For settings dashboards, scope filters to `id = <setting-id>` and then apply
the typed condition (`booltype`, `numbertype`, or `strtype`). Always use preview
results instead of guessing filter or operator IDs.
