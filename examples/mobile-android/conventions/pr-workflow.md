# PR Workflow - Android Multi-Module App

## PR Size

Target **100-200 lines** per PR. A reviewer should be able to hold the full context in their head and complete the review in 5-15 minutes.

## One Theme Per PR

| PR | Contains |
|----|----------|
| 1 | Domain models |
| 2 | Repository implementation |
| 3 | ViewModel + UI |
| 4 | Tests |

Never combine:
- Bug fixes with feature code (fixes need to move fast)
- Explorative/prototype code with urgent fixes (reviewers need to identify what's what)
- Multiple ticket issues in one PR (even if in the same area)

## PR Stacking

Use a stacking tool for dependent PR chains. Each PR in the stack must compile and pass CI independently.

**Feature-then-tests pattern:** Feature code ships in one PR, tests follow in a separate stacked PR. This allows the feature to land and unblock dependents while tests are reviewed independently.

**Bug fix dependency:** If a feature depends on a bug fix, the fix PR merges first (standalone, targets main/develop), then the feature PR merges after (rebased on the now-fixed base).

## PR Description Format

```markdown
## What to Look For

[2-4 sentences: design intent, tradeoffs made, where to focus review attention]

<details>
<summary>Testing Strategy</summary>

- Unit tests for [specific behavior]
- Manual verification: [steps]
- Not tested: [what and why]

</details>

Estimated review time: ~[N] minutes
```

## Addressing Review Comments

- **Reply to comments** before resolving. Open threads are the reviewer's anchors.
- Don't just resolve threads without explanation.
- If a comment is out of scope, say so and create a follow-up.
- When preparing for re-review: resolve outdated threads, categorize remaining as "code issues" (fix then resolve) vs. "intent questions" (reply, let reviewer close).

## Bot Review Comments

Automated reviewers can surface real bugs (missing metadata, null-safety gaps, incomplete data mapping). They don't set conventions (only human reviewers do that), but they flag issues worth investigating.

Before requesting human review, check bot comments and address valid ones proactively. This reduces review cycles.

## Commit Messages

- PR title: `TM-1303: Brief description` (ticket reference + imperative description)
- Branch commits: free-form
- On squash merge: PR title becomes the git history entry
- Design-proposal PRs: keep ticket identifiers out (auto-close prevention)

## AI Co-Authoring

```
Co-Authored-By: Claude Opus 4 <noreply@anthropic.com>
```

## Descoping Mid-Stack

When descoping a feature from a multi-PR stack:
1. Close the dedicated PRs for the descoped feature
2. Delete all code (models, API clients, repositories, UI, strings)
3. Grep the entire stack for references to removed types
4. Rebase the chain and verify each PR compiles independently
5. Track the descoped feature as a separate ticket
