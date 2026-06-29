# [Your Name] - Agent Norms

<!--
This file tells your AI agent how to behave in your workspace.
Fill in each section with your preferences. Delete the guidance comments
when you're done.

The agent reads this file at the start of every session. Everything here
shapes how it generates code, drafts messages, and interacts with your tools.
-->

## Identity

<!--
How should the agent refer to you? What pronouns? What name format in docs?
This matters when the agent drafts PR descriptions, commit messages, or messages.
-->

- Name: [Your full name]
- Pronouns: [your pronouns]
- Timezone: [your timezone, e.g., America/Los_Angeles]

## Agent Boundaries

<!--
What can the agent do without asking? What requires your explicit confirmation?
Be specific. The default should be conservative - the agent drafts, you decide.
-->

- The agent drafts comments, reviews, and messages. I decide what to post.
- No auto-commenting on PRs. No auto-approving. No auto-merging.
- No posting to external services without my explicit confirmation.
- Present drafts and recommendations. I own the final action.

<!--
Add or remove boundaries based on your comfort level. Examples:
- "The agent can commit to feature branches without asking"
- "The agent must confirm before any git push"
- "The agent can run tests autonomously but not deploy"
-->

## Communication Style

<!--
How should the agent communicate when drafting on your behalf?
This shapes PR comments, Slack messages, code review feedback.
-->

- [Describe your preferred tone: direct, conversational, formal, etc.]
- [Any language patterns to follow or avoid]
- [How to frame feedback: growth-oriented, neutral, etc.]

## Workflow Phases

<!--
Reference your workflow.md here. This tells the agent which phase you're in
and what checks apply at each transition.
-->

- Before building: orient on existing patterns (see workflow.md Phase 2)
- Before committing: run pre-push checklist (see conventions/pre-push-checklist.md)
- Before pushing: verify PR scope (one theme, bounded size)
- See `workflow.md` for the full phase lifecycle

## Conventions

<!--
Point the agent at your conventions directory. These are the rules it follows
when generating code.
-->

- Architecture: see `conventions/architecture.md`
- Testing: see `conventions/testing.md`
- PR workflow: see `conventions/pr-workflow.md`
- Pre-push verification: see `conventions/pre-push-checklist.md`

## Pre-Push Verification

<!--
The most important section. List every command that must pass before code
leaves your machine. Order them the way CI runs them.
-->

```bash
# Example (replace with your actual commands):
# 1. Formatting
# ./scripts/format-check.sh

# 2. Linting / static analysis
# ./scripts/lint.sh

# 3. Compilation
# ./gradlew compileDebugKotlin   (or: npm run build, cargo check, etc.)

# 4. Tests
# ./gradlew testDebugUnitTest    (or: npm test, cargo test, etc.)

# 5. Any additional CI checks that run remotely
# (list them so you can run locally before pushing)
```

## World Model

<!--
Where does the agent find knowledge about your codebase?
This could be architecture docs, API references, or a dedicated world model repo.
-->

- Conventions: `./conventions/`
- Platform references: `./references/`
- [If you have a world model repo or skill, reference it here]

## Implicit Commands (optional)

<!--
Shortcuts you say often that the agent should execute without confirmation.
Only add these once you trust the agent's behavior in each case.
-->

| Phrase | Action |
|---|---|
| "proceed" | Continue with the current plan as discussed |
| "status?" | Git status + branch + last commit summary |
| [add your own] | [what it does] |

## Session Patterns (optional)

<!--
How should the agent behave when a session opens with certain inputs?
Examples: a PR URL means review mode, a ticket URL means build mode.
-->

- When a session opens with a PR URL: fetch the diff, determine if reviewing or addressing comments
- When a session opens with a ticket URL: read the ticket, orient on existing code, present a plan
