# Workflow - Android Multi-Module App

## Phase 1: Orient

Before any code:

- [ ] Does this pattern already exist in the codebase? What module owns this domain?
- [ ] Is this behind a feature flag? What's the rollout plan?
- [ ] How should this be structured as PRs? (one theme per PR, 100-200 lines)
- [ ] Identify affected modules (UI, domain, data)
- [ ] Is there an approved ticket for this work?

## Phase 2: Build

**Before writing code:**
- [ ] Branch created (ticket-prefixed if approved work, descriptive if proposal)
- [ ] Scope defined: one theme, 100-200 lines target

**Before committing:**
- [ ] Pre-push checklist passes (format, lint, compile, test)
- [ ] Unit tests written for data layer logic (filtering, gating, mapping)
- [ ] Code follows existing patterns

**Before pushing:**
- [ ] PR description drafted (What to Look For + Testing Strategy)
- [ ] Scope verified: one theme, bounded size
- [ ] Confirm: approved work (ticket in title) or design proposal (draft PR, no ticket)

## Phase 3: Ship

- Respond to review comments (reply before resolving)
- Keep scope tight (out-of-scope requests become follow-up tickets)
- When approved, squash merge

## Phase 4: Learn

After shipping:
1. What was built?
2. What pattern was followed or established?
3. Anything to do differently next time?
4. Any convention worth mining from the review feedback?

## PR Review (when reviewing others' work)

1. Understand the design intent before surfacing issues
2. Reinforce what's working
3. Frame issues as things that help the PR succeed
4. Check: layer placement, state management, testing patterns, PR scope
5. If a new convention surfaces, capture it in `conventions/`
