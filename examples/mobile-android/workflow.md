# Workflow - Android Multi-Module App

## Phase 1: Capture

When an idea or task arrives, log it to `active/[topic].md`. No structure needed yet.

## Phase 2: Orient

Before any code:

- [ ] Check the world model: does this pattern already exist? What module owns this domain?
- [ ] Check shipping safely: is this behind a feature flag? What's the rollout plan?
- [ ] Check team conventions: how should this be structured as PRs?
- [ ] Identify affected modules (UI, domain, data)

## Phase 3: Build

**Before writing code:**
- [ ] Branch created (ticket-prefixed if approved work, descriptive if proposal)
- [ ] Scope defined: one theme, 100-200 lines target

**Before committing:**
- [ ] Pre-push checklist passes (format, lint, compile, test)
- [ ] Unit tests written for data layer logic (filtering, gating, mapping)
- [ ] No code comments added (context in PR description)
- [ ] Commit message follows conventions

**Before pushing:**
- [ ] PR description drafted (What to Look For + Testing Strategy)
- [ ] Scope verified: one theme, bounded size
- [ ] Confirm: approved work (ticket in title) or design proposal (draft PR, no ticket)

## Phase 4: Ship

- Respond to review comments (reply before resolving)
- Keep scope tight (out-of-scope requests become follow-up tickets)
- When approved, squash merge

## Phase 5: Reflect

After shipping:
1. What was built?
2. What pattern was followed or established?
3. Anything to do differently next time?
4. Any convention worth mining from the review feedback?

## PR Review (when reviewing others' work)

When reviewing a teammate's PR:
1. Understand the design intent before surfacing issues
2. Reinforce what's working
3. Frame issues as things that help the PR succeed
4. Check: does the PR follow team conventions? (layer placement, state management, testing)
5. If a new convention surfaces, capture it in `conventions/`

## Always-On Checks

These happen automatically at phase transitions:
- World model consulted at session start for any codebase work
- Shipping safely consulted before any code leaves local
- Team conventions consulted before any commit
- Pre-push checklist run before any push
