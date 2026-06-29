# Workflow

A phased approach to moving work from idea to shipped code. Adapt these phases to your own process. The key principle: every phase has a gate that prevents unverified work from reaching the next stage.

## Phase 1: Orient

Before generating any code, understand what already exists.

- [ ] Does this pattern already exist in the codebase?
- [ ] What existing code is adjacent to this change?
- [ ] Is this approved work or exploration?
- [ ] How should this be scoped? (one theme per PR, bounded size)

If you have architecture docs, a world model, or a conventions directory, consult them here. The goal is to avoid generating code that conflicts with existing patterns.

**Exit criteria:** You know the scope, you know which patterns to follow, and you have a plan.

## Phase 2: Build

When code starts:

**Before writing code:**
- [ ] Branch created
- [ ] Scope defined (one theme, target your PR size limit)

**Before committing:**
- [ ] Pre-push checklist passes (see `conventions/pre-push-checklist.md`)
- [ ] Tests written for behavioral changes
- [ ] Code follows existing patterns (see `conventions/architecture.md`)

**Before pushing:**
- [ ] PR description drafted
- [ ] Scope verified: one theme, bounded size
- [ ] No unrelated changes included

## Phase 3: Ship

The PR is open. Now it needs to land cleanly.

- Respond to review comments (reply, don't just resolve)
- Keep the PR focused. If a reviewer asks for something out of scope, create a follow-up.
- When approved, merge and move on.

## Phase 4: Learn (optional)

After shipping, briefly note:

1. What was built or learned?
2. What pattern was followed (or established)?
3. Anything to do differently next time?

This feeds back into your conventions over time. See `conventions/convention-mining.md` for how to turn review feedback into encoded knowledge.

## Customization

This workflow is intentionally minimal. Adapt it to your process:

- **If you use a ticket tracker:** Add a step in Phase 1 to check for an approved ticket before building.
- **If you have a world model or shared knowledge base:** Add a step in Phase 1 to consult it.
- **If you track sessions:** Add a Phase 4 step to log what was accomplished.
- **If you prototype before shipping:** Add a prototype lifecycle between Orient and Build (see `conventions/shipping-safely.md`).
- **If you work across disciplines:** Add an Orient step to check whether the work touches multiple domains and scope accordingly.

The phases are a starting point. What matters is that gates exist between "generated" and "merged."
