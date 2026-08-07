# Approve for me validation

Run the same read-only SaaS inspection once with Ask for approval and once with
Approve for me. Use a tenant where redirects, menus, and `target="_blank"`
settings links are available.

Record for each action:

- selected permission mode
- requested host, tab ID, action, and target
- final host, tab ID, URL, and action status
- automatic-review decision and rationale, when present
- error category and whether the action executed
- approval-to-execution, target-verification, execution, and total timing

Verify:

1. Read-only tools run without approval.
2. Ask for approval routes writes to the user.
3. Approve for me routes the same writes to automatic review.
4. A redirect that completes before approval uses the final stable host.
5. A redirect during approval fails closed with expected and actual hosts, then
   succeeds after one fresh preparation.
6. A non-link new-tab click returns `approval_arguments` for the blank controlled
   replacement; the site-created tab is never claimed.
7. A rendered same-host or explicitly approved cross-host `target="_blank"`
   link uses `follow_link`, stays in the controlled tab, and requires no
   replacement approval.
8. An exact text fingerprint narrows an otherwise ambiguous CSS target before
   the receipt is consumed.
9. Partially covered controls use an unobscured point inside the target.
10. Fully obscured controls remain inaccessible.
11. `Input.dispatchMouseEvent` gets one same-tab retry and one fresh-tab retry,
   then stops without a DOM-click fallback.
12. Cedar denials prevent execution in every permission mode.
13. Full access removes native review but retains Cedar and receipt checks.
14. Browser documentation is emitted once with the direct documented call;
    there are no length checks, assignments, slices, or proactive pages.
15. A warm replay uses sanitized `browserEntryUrl` and reaches the authenticated
    client with one initial approval and one receipt execution.
16. Altering the short receipt token fails before any browser interaction.
17. Relative and absolute forms of the same href do not trigger a stale-target
    retry, while a changed path, query, or host still fails closed.

Performance targets:

- warm authenticated entry: at most 30 seconds
- cold Slack entry: at most 60 seconds
- documentation calls per fresh Browser runtime: exactly one
- retries on the happy path: zero

If pointer transport fails identically in both interactive modes after a fresh
tab retry, capture a minimal Browser reproduction. That failure is outside the
ObSec approval reviewer.
