# Convention Mining

How to learn your codebase's implicit norms by paying attention to code reviews.

## What Is Convention Mining?

Every code review surfaces implicit team norms. When a senior engineer says "this belongs in the data layer, not the use case," that's a convention. When a reviewer says "never combine fixes with explorative code," that's a convention.

Most of these norms live in people's heads. They surface one PR at a time, in review comments that get resolved and forgotten. Convention mining is the practice of capturing them as they appear so they compound into a shared knowledge base.

## Why It Matters

- **For you:** Your PRs align with team expectations from the first draft. Fewer review cycles. Faster merges.
- **For your agent:** Encoded conventions help the agent generate code that is more likely to follow team patterns instead of inventing new ones.
- **For the team:** Implicit knowledge becomes explicit. Onboarding accelerates. Consistency improves.

## How to Practice

### Step 1: Notice the convention

When reviewing a PR (or receiving review feedback), watch for comments that express a general principle rather than a one-time fix.

**Signals that something is a convention:**
- "We always do X in this situation"
- "This belongs in [layer], not [other layer]"
- "Never combine X with Y"
- "The pattern for this is..."
- A correction that would apply to any similar code, not just this instance

**Signals that something is NOT a convention:**
- One-time scope decisions ("let's descope this for now")
- Praise or acknowledgment
- Context specific to a single PR that doesn't generalize

### Step 2: Capture it

Write the convention in imperative form with a source attribution:

```markdown
### Never combine fixes and explorative code in the same PR

Fixes need to move fast. Explorative UX changes need design sign-off.
When combined, the fix is blocked by the exploration, and reviewers
can't identify what's urgent vs. what's experimental.

_Source: Senior engineer on PR review - "I'd suggest not to combine
fixes and explorative code in this way, as it makes it hard for us
to identify what's what."_
```

### Step 3: Categorize it

Place the convention in the appropriate file:

| Category | File |
|---|---|
| Architecture decisions | `conventions/architecture.md` |
| Testing patterns | `conventions/testing.md` |
| PR workflow norms | `conventions/pr-workflow.md` |
| Naming conventions | `conventions/architecture.md` (or create `naming.md`) |
| Security principles | create `conventions/security.md` if needed |

### Step 4: Cross-reference

Before adding a new convention, check whether it:
- **Already exists** in your conventions (skip, don't duplicate)
- **Aligns** with existing conventions (add as a new facet or clearer articulation)
- **Contradicts** something existing (flag the tension, decide which to keep)

## What to Capture

Good conventions to mine from reviews:

- **Layer placement:** "Side effects belong in the repository, not the use case"
- **Naming:** "Name methods for what they actually do, not what they're called from"
- **State management:** "App-scoped singletons that store callbacks must clear them on every dismissal path"
- **Testing:** "Always exercise production code, never re-implement logic in tests"
- **PR workflow:** "One issue = one PR, even if you're in the same area"
- **Security:** "Security boundaries fail closed (drop), not fail open (redirect)"

## What NOT to Capture

- Bot/automated review suggestions (unless a human reviewer confirms the same principle)
- One-time decisions that don't generalize
- Praise or acknowledgment
- Anything your existing conventions already cover

## The Compound Effect

After a few weeks of convention mining:
- Your `conventions/` directory reflects how your team actually thinks about code
- Your agent is more likely to generate code that passes review with fewer iterations
- You understand the codebase architecture as a system, not just individual files
- New team members can read your conventions and get up to speed faster

## Getting Started

1. Pick your next 3 PR reviews (giving or receiving)
2. For each, ask: "Did any comment express a general principle?"
3. If yes, capture it in the appropriate conventions file
4. After a week, read through what you've collected - patterns will emerge
