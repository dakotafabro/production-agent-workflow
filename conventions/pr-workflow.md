# PR Workflow Conventions

## PR Size

Target **100-200 lines** per PR. This is the range where:
- A reviewer can hold the full context in their head
- Review takes 5-15 minutes (not an hour)
- Merge conflicts are rare (the branch is short-lived)
- CI feedback is fast (small change = fast build)

If a PR exceeds 200 lines, ask: can this be split into two PRs that each make sense independently?

## One Theme Per PR

Each PR should do one thing:
- Domain models
- Repository contract
- ViewModel state management
- UI implementation
- Tests for the above

Mixing concerns (a bug fix + a feature + a refactor) makes review harder and blocks the urgent piece behind the exploratory piece.

## PR Stacking

When a feature requires multiple PRs, stack them:

```
PR 1: Domain models (merges first)
  └── PR 2: Repository implementation (depends on PR 1)
       └── PR 3: ViewModel + UI (depends on PR 2)
            └── PR 4: Tests (depends on PR 3)
```

Each PR in the stack should compile and pass CI independently. Use your platform's stacking tool (Graphite, git-town, stacked PRs in GitHub, etc.).

## Feature-Then-Tests Pattern

Feature code ships in one PR. Tests follow in a separate stacked PR. This allows the feature to land and unblock dependents while tests are reviewed independently.

Exception: if the test is trivial (< 20 lines), include it in the feature PR.

## Bug Fixes Are Never Combined With Features

Fixes need to move fast. Features need design review. When they're combined:
- The fix is blocked by the feature review
- Reviewers can't identify what's urgent vs. exploratory
- Rollback becomes complicated

Separate PR, separate merge. Always.

## PR Description Format

Every PR description should include:

### What to Look For

A brief (2-4 sentences) guide for the reviewer. What's the design intent? What tradeoff was made? Where should they focus their attention?

### Testing Strategy

<details>
<summary>Testing Strategy</summary>

- What was tested (unit, integration, manual)
- What was NOT tested and why
- How to verify locally if needed

</details>

## Addressing Review Comments

When addressing feedback:
- **Reply to comments** before resolving them. The reviewer needs to see what changed.
- Don't just resolve threads - open comments are the reviewer's anchors for re-review.
- If a comment is out of scope, say so and create a follow-up ticket/issue.

## One Ticket = One PR

Even if you're in the same area of the codebase, separate issues get separate PRs. This keeps the review scope tight and lets urgent fixes land independently.

## Commit Messages

- PR title carries the ticket reference (e.g., "TM-1303: Add purchase flow")
- Individual commits on the branch are free-form
- On squash merge, the PR title becomes the git history entry

## AI Co-Authoring

If the agent contributed significantly to the code:

```
Co-Authored-By: [Agent Name] <noreply@provider.com>
```

Standard practice. No need to hide AI assistance.
