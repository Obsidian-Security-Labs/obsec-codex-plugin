---
name: obsidian-cce-builder
license: MIT
description: >
  Build and validate an Obsidian Security Community Connector for a SaaS API.
  Use when the user asks to create a CCE, map SaaS endpoints to Obsidian
  accounts, settings, or activity, implement connector code, or prepare a fork
  and merge request.
---

# Build a Community Connector

Work in the user's `community-connections` checkout and follow its current
repository conventions. Ask for the SaaS name only when it is missing. Determine
repository and fork state before changing code or proposing a push.

## Discover the API

Use official API documentation. For authenticated documentation, load
`browser:control-in-app-browser`, use the Codex Browser profile, and ask the user
to sign in there when needed. Do not launch `ab`, raw CDP, or shell Playwright.

Before implementation, record:

1. authentication model and required scopes
2. confirmed endpoints, pagination, and rate limits
3. endpoint-to-entity mapping for accounts, settings, and activity
4. field conversions and stable identifiers
5. unresolved documentation gaps

Never invent an endpoint. Ask before coding around an unresolved gap.

## Implement

Inspect two or three similar connectors and match their structure, dependency
tooling, state-commit pattern, and tests. Keep retrieval, normalization, and
Obsidian transformation responsibilities separate according to existing code.

Build only the requested entity surfaces. Include operation and endpoint context
in failures. Do not add new abstractions when a repository pattern already fits.

## Verify and hand off

Run the connector's configured formatter, linter, type checker, focused tests,
and a safe local execution when credentials are available. Report any step that
could not be exercised.

Inspect the diff before handoff. Commit, push, fork, or open a merge request only
when the user authorizes that external action.
