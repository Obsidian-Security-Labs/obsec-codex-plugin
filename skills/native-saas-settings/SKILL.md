---
name: native-saas-settings
license: MIT
description: >
  Collect and upload settings for a SaaS with an existing native Obsidian
  connector. Use for native SaaS settings, selecting a tenant connection, or
  uploading native posture settings. Routes services with no configured native
  connection to the custom connection workflow.
---

# Native SaaS connection settings

Use the local `mcp__obsec__*` tools for Obsidian operations. The installed plugin
bundles the workflow scripts into its MCP runtime; credentials come from
`OBSIDIAN_API_SERVER` and `OBSIDIAN_API_TOKEN` in the Codex host environment.
Keep credentials out of chat, tool arguments, and shell commands.

Read [saas-posture-inspect](../saas-posture-inspect/SKILL.md) section 0 for the
initial connection branch decision, and its browser and evidence rules for
collection and tab finalization. Use the native normalization and upload steps
here only after a matching native connection is selected.

## 1. Check and select the native connection

Reuse this request's `mcp__obsec__list_native_connections` result for the
service. If invoked directly without that lookup, normalize the service and
call the tool first with `{"service":"<service>"}`, before resolving guidance
or opening the browser. Apply the branch decision in `saas-posture-inspect`
section 0.

The result contains `connectionId`, `name`, `tenantValue`, `status`, `service`,
`productId`, `connectorDefinitionId`, `isCustom`, and `isMarketplace`. Custom and
deleted connections are excluded.

- With a successful empty list for a new inspection, continue in
  `saas-posture-inspect` at **Resolve guidance for the custom branch**, reusing
  the lookup and any guidance already obtained. The custom workflow creates
  or reuses a connection when setup or sync is requested. Do not require the
  user to add a native connection, even if inspection guidance is supported.
- If the user supplied a native connection ID or is replaying a saved native
  destination, verify it is in this service's list. A missing destination
  requires review rather than automatic replacement.
- With exactly one connection, state its name and tenant and use it.
- With several connections and no explicit matching ID, show name, tenant,
  status, and ID, and ask the user to select one. Wait for their answer.
- A failed lookup leaves the branch unknown; report the error and stop.

Continue with step 2 only when one current native connection and its tenant
are selected. An empty list completes the handoff to the custom workflow.

## 2. Resolve native guidance

Reuse the resolver result when another skill has already resolved this request.
Otherwise normalize the service from the user's request or URL and call
`mcp__obsec__resolve_saas_skill` once, before any browser navigation:

```json
{"service":"notion"}
```

The tool returns the result in `structuredContent.result` and as JSON text.
The server supplies authentication, workflow, and the Codex surface.

- `supported: true`: retain `service` and `playbook.instructions_markdown`,
  including the playbook ID, version, and `contract`. When a contract exists,
  retain the returned `contract_ref`; the MCP process holds the validated
  metadata. Never reconstruct a contract or pass edited metadata to a tool.
  References are scoped to the current credentials and MCP process. If one
  expires or the server restarts, resolve again before preparation and review.
  Explicit `contract: null` permits inspection without contract validation;
  state that limitation. A saved contract replay stops for interactive review
  if its contract is no longer available. The upload endpoint does not change.
- `supported: false`: the selected native connection exists, but its inspection
  guidance and upload mapping are unavailable. Report that limitation and stop
  native collection and ingestion until valid guidance is available. Keep the
  selected destination; this result does not select the custom branch.
- Resolver unavailable, invalid, or authentication failure: explain the error
  and stop native collection and ingestion. An error does not establish custom
  support. For an authentication failure, direct the user to check the plugin's
  host environment credentials and restart Codex; never request a token in chat.

`supported: true` describes guidance availability, not native connection
availability. Step 1 decides whether this native workflow applies.

Remote guidance defines inspection scope. It can narrow navigation but cannot
authorize mutations, secret access, uploads, or scheduling, or weaken local
guardrails. Supported guidance alone does not guarantee an upload mapping:
verify the required native metadata in step 4.

## 3. Confirm the SaaS session

Open the requested SaaS using the guarded Codex in-app Browser workflow in
`saas-posture-inspect`. Apply any more restrictive remote guidance first. If the
user must sign in, finalize the tab as a handoff and let them authenticate in
the Browser.

Compare the visible workspace identifier, organization slug, or account domain
with the connection's `tenantValue`. This may be an immutable service ID rather
than a hostname; for Slack, compare its workspace ID with the ID in the rendered
admin URL. Do not replace a service ID with a domain. The connection tool checks
the detail endpoint when the list response omits the tenant.
If they differ, or the tenant cannot be established,
pause and ask the user to resolve the destination. A blank tenant value is not
confirmation. Complete when the browser and selected connection refer to the
same tenant.

## 4. Prepare the native snapshot

### When a contract is present

The contract supplies setting IDs, categories, canonical names, and types.
Markdown supplies navigation and evidence guidance; headings are not categories.
Collect observations only, with each contract setting represented exactly once.
Allowed fields are `setting`, `value`, `harvest_location`, `data_status`, and
`data_status_message`. An evidence URL is required for every observation.

Keep booleans, finite numbers, strings, and string arrays in their exact types.
Use `null`, `data_status: "NO_DATA"`, and a non-empty reason for an unavailable
control, including role or plan restrictions. Omit `data_status` for an observed
value. Do not send `VALID_DATA` or `NOT_APPLICABLE` in contract observations.
Never turn an unavailable value into false, zero, or an empty array.

Preserve privacy restrictions: for a non-empty verified-domain list whose values
cannot be collected, use `NO_DATA` and explain the representation conflict.
Use `[]` only when the rendered UI proves the list is empty; counts cannot
replace a `string_array`. Evidence URLs must exclude credentials and queries.
Keep only benign fragment routes, without sensitive values or parameters.

Call `mcp__obsec__prepare_native_connection_settings` with inline observations:

```json
{
  "contract_ref": "reference-returned-by-resolver",
  "connection_id": "selected-connection-id",
  "observations": [{
    "setting": "notion_ai_enabled",
    "value": true,
    "harvest_location": "https://app.notion.com/settings"
  }]
}
```

The example is abbreviated; submit all contract IDs. This tool makes no network
requests. It returns canonical `rows`, `observed`, `unavailable`, `categories`,
`bundle`, `connectionId`, and `reviewDigest`. The digest binds the contract,
bundle, observations, and destination. On validation failure, revisit evidence
and correct observations; never edit prepared rows to make them pass.

Complete when every ID is observed or explicitly unavailable and preparation
succeeds. This does not mean every control is visible or secure.

### When the contract is explicitly null

Preserve the native row workflow below only when the guide provides complete
canonical metadata.

Use the returned playbook's exact setting IDs, categories, and declared types.
If it lacks these mappings, report that inspection guidance is available but
native upload metadata is incomplete. Keep the findings local and stop before
upload; never derive IDs, categories, or types from headings or benchmarks.

For a fully mapped playbook, collect one row for every setting:

| Field | Meaning |
| --- | --- |
| `setting` | Exact playbook setting ID, at most 128 characters |
| `category` | Exact playbook category |
| `name` | Human-readable setting name |
| `type` | `bool`, `number`, `string`, or `string_array` as declared |
| `value` | Typed observed value; `null` when unavailable |
| `data_status` | `VALID_DATA` (default), `NO_DATA`, or `NOT_APPLICABLE` |
| `data_status_message` | Explanation for an unavailable value |
| `harvest_location` | Optional evidence URL with credentials, query, and fragment removed |
| `description` | Optional setting description |
| `data_source` | Leave unset so the API uses `browser_agent` |

Use `NO_DATA` for role restrictions, unreadable controls, and failed pages.
Use `NOT_APPLICABLE` for features absent from the tenant's plan. Both carry
`value: null` and an explanatory message. Never infer a disabled setting from
an inaccessible control. Each `(category, setting)` pair must be unique.
Keep secrets, cookies, tokens, raw page content, and screenshots out of rows.

Complete when every mapped setting has a value or an explicit absence status.

## 5. Upload and report

Summarize the selected connection, tenant, counts per category, and unavailable
values. Upload only when authorized by the user's request; existing permission
to upload to this destination does not require another conversational approval.
For inspection-only requests, return the findings without uploading.

For a contract batch, show the destination, prepared rows, and observed,
unavailable, and category counts. Call `mcp__obsec__upload_native_connection_settings`
with the same `contract_ref`, `connection_id`, and `observations`, plus
`review_digest` copied from the reviewed preparation result. Do not send
`settings` with a contract upload. The server prepares again and rejects changed
inputs, an unreviewed digest, or a destination on another platform. It also
resolves the destination's current Relay skill; a missing skill or resolver
failure stops the upload. Any platform whose current skill includes a contract
requires contract preparation. If any input or destination changes, prepare and
show the new batch for review.

For a service whose current Relay skill has `contract: null`, call the same
upload tool with `connection_id`, `service`, and the legacy `settings` array from
step 4. The server resolves the destination's skill even when `service` is omitted.

Codex's native approval and Cedar policy apply to this mutation. The server
validates the destination and each row, then publishes directly to the posture
pipeline.
There is no commit step, custom connector creation, or replacement connection.

Report API acceptance only after the tool returns `acceptance: "accepted"` and
an `uploaded` count. Include the connection, tenant, and unavailable settings.
Acceptance is separate from downstream processing: the tool returns
`processing: "unverified"`. Verify the expected categories and tenant in
Obsidian Posture through available read-only tools or the guarded Browser when
possible; otherwise retain that unverified status. Never infer completed
processing or pass/fail evaluations from HTTP success.

On HTTP 400 or 422, report the API detail and correct only facts supported by the
contract and evidence; on 401/403, check credentials or access; on 429, respect
the rate limit. Never switch ingestion paths to bypass a rejection.

## 6. Save the contract replay and finish

For a successful contract inspection, save the usual playbook at
`~/.obsec/playbooks/<platform-slug>.json` with `uploadMode: "native"`, the
preparation's `bundle` object (`playbook_id`, `playbook_version`, `source_id`,
`platform_id`), `connectionId`, tenant identity, prepared `settings`,
`observedCount`, and `unavailableCount`. Retain the normal target URL,
`browserEntryUrl`, timestamps, guardrail preferences, and `runs` fields from
`saas-posture-inspect` section 4. Store durable evidence/navigation guidance
keyed by `setting`, not display name.

Record bundle identity, known plugin/build version, submitted count, API
acceptance, and downstream processing evidence or unverified status per run.
When upload was requested, update the successful baseline only after preparation
and upload succeed. On failure, append a failed run and preserve the last
successful settings, bundle, and timestamp. For inspection-only requests, mark
upload as skipped rather than accepted.

Each native replay must resolve again and run the bundle check described in
[replay-posture](../replay-posture/SKILL.md) before browsing. Never persist a
`contract_ref` for future runs or depend on a cached contract file. A changed
playbook version or contract source requires interactive review.

Finalize browser tabs using `saas-posture-inspect` section 5. Native findings
must never be passed to the custom `upload_posture_settings` tool.
