---
name: browser-session
license: MIT
description: >
  Keep Codex browser work in a persistent JavaScript REPL aligned with the active
  browser API and page state. Use during browser setup or recovery from missing
  locator methods, selector timeouts, or stale tab bindings. Complements the
  selected browser tool and application workflow; does not select a new provider.
---

# Browser session reliability

## Use the active API

Follow the browser tool's initialization instructions and read its returned
browser-specific documentation before constructing locators or issuing actions.
Reuse that documentation during the session; refresh it after a runtime reset
or provider change. Examples in another skill are conditional on those methods
being documented by the active tool. A Playwright-like wrapper does not imply
the full Playwright API is available.

If a method is missing, correct the API call before retrying the page operation.
For example, do not call `locator.boundingBox()` unless it is documented. If
read-only `locator.evaluate()` is supported and geometry is needed, read
`element.getBoundingClientRect()` there and return plain numeric fields. Do not
use evaluation to click or otherwise mutate the page. If the tool exposes only
accessibility or screenshot actions, use that documented interface only when
the application's workflow supports it. Report a required adapter mismatch
instead of inventing methods or bypassing a guarded action path.

## Keep bindings current

Use `let` for top-level browser, tab, and locator bindings that may need
reassignment in the persistent REPL. Reassign existing bindings according to
the REPL's rules; a `const` warning is a binding issue, not evidence of a missing
page element. If an existing `const` cannot be reassigned, use a fresh `let`
binding and update its consumers. Do not reset the entire session just to
redeclare a variable.

Bindings required by generated code in later calls must live at the REPL's
top level, outside temporary blocks or functions, in the same REPL that will
execute that code. Follow the application's preflight before requesting an
action that depends on them. A successful call that created a tab does not
prove that a separately required bindings object exists across calls.

After changing or replacing the controlled tab, update any workflow-owned
binding and rebuild locators from that tab. After navigation or a page-state
change, obtain fresh evidence before reusing element indices, coordinates, or
assumptions about the target. A locator may re-resolve automatically; its old
text and geometry are still only observations of the earlier state.

## Recover from selector timeouts

A selector deadline means the operation did not finish in time. It does not
by itself prove that the target is absent, the selector is wrong, or the browser
bridge has failed.

1. Use documented read-only observations to check the current controlled tab,
   URL, and page state, including frame context when relevant and supported.
   Explicitly emit returned values when the tool does not display them itself;
   blank tool output alone is not evidence of a blank page.
2. If the page navigated, is loading, or no longer contains the target, continue
   from the observed state. If the intended tab binding is stale, reacquire
   that same authorized tab through the documented API before rebuilding the
   target. Do not choose another tab merely because it has similar text.
3. If the target is present, make one evidence-based retry with a unique
   locator or target supported by the workflow. Prefer a stable test ID, `data-*`
   attribute, exact link, or accessible name from the fresh observation. If a
   stable selector already failed, do not cycle through positional alternatives
   such as `nth(1)` without evidence that the selector was the problem.
4. If the same failure persists after refreshing context, stop that interaction
   and report the failed operation and latest observable state. Distinguish a
   responsive page with failing locator evaluation from failed page observations;
   neither establishes the root cause alone. Continue independent work if any.

Do not extend this retry budget by renaming selectors or increasing timeouts
without new evidence. Browser reloads, replacement tabs, alternate providers,
and mutations remain subject to the application's workflow and authorization.
If an action may already have succeeded, inspect its outcome before considering
a retry; do not replay a mutation or approval receipt to diagnose a read failure.
