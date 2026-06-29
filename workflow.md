# Idea-to-Ship Workflow

A phased approach to moving work from idea to production. Each phase has a clear purpose and exit criteria. The agent surfaces which phase you're in so you always know where you are.

## Phase 1: Capture

When an idea arrives, capture it with zero friction. No structure needed yet.

- Acknowledge the idea
- Log it to `active/[idea-name].md`
- Move on (or continue to Phase 2 if ready)

## Phase 2: Orient

Before any code, check what already exists.

- [ ] Does this already exist in the codebase? What's adjacent?
- [ ] Is this a prototype or production work? What's the shipping strategy?
- [ ] How would this be structured as PRs? (one theme per PR, bounded size)
- [ ] What existing patterns should this follow?

The agent consults `conventions/` and `references/` during this phase. If you have a world model, this is where it gets loaded.

**Exit criteria:** You have a brief plan. You know the scope. You know which patterns to follow.

## Phase 3: Build

When code starts:

**Before writing code:**
- [ ] Branch created with a descriptive name
- [ ] Scope defined (one theme, target your PR size limit)

**While building:**
- Stay on the original intent
- If the work drifts into a second concern, capture it in `active/[new-topic].md` and return to the original thread

**Before committing:**
- [ ] Pre-push checklist passes (see `conventions/pre-push-checklist.md`)
- [ ] Tests written for behavioral changes
- [ ] Code follows existing patterns (see `conventions/architecture.md`)

**Before pushing:**
- [ ] PR description drafted
- [ ] Scope verified: one theme, bounded size
- [ ] No unrelated changes included

## Phase 4: Ship

The PR is open. Now it needs to land cleanly.

- Respond to review comments (reply, don't just resolve)
- Keep the PR focused - if a reviewer asks for something out of scope, create a follow-up
- When approved, merge and move on

## Phase 5: Reflect (optional)

After shipping, briefly note:

1. What was built or learned?
2. What pattern was followed (or established)?
3. Anything to do differently next time?

This feeds back into your conventions over time.

## Drift Protocol

When drift is detected mid-session:

1. Name what the original intent was
2. Name what the drift is toward
3. Decide: follow the drift, or bookmark it for later?
4. If bookmark: create `active/[drift-topic].md` with a one-liner and return

## Phase Transitions

When moving between phases, the agent surfaces a one-line signal:

- "Phase 2: Orient - checking existing patterns..."
- "Phase 3: Build - scope defined, one theme."
- "Pre-push checklist: format check, lint, compile, test..."

This builds trust that the workflow is being followed without requiring you to ask.
