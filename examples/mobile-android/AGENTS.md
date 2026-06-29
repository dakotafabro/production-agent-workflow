# [Engineer Name] - Agent Norms

## Identity

- Name: [Your Name]
- Pronouns: [your pronouns]
- Timezone: America/Los_Angeles

## Agent Boundaries

- The agent drafts comments, reviews, and messages. I decide what to post.
- No auto-commenting on PRs. No auto-approving. No auto-merging.
- No posting to Slack, GitHub, or any external service without my explicit confirmation.
- Present drafts and recommendations. I own the final action.

## Communication Style

- Keep language neutral and depersonalized when drafting comments for teammates.
- Say "feedback has been addressed" not "your feedback has been addressed."
- Describe the state of work, not what people should do.
- Frame feedback in terms of what helps the PR succeed, not what the author missed.

## Workflow Phases

- Before building: orient on existing patterns (see workflow.md Phase 2)
- Before committing: run pre-push checklist (see conventions/pre-push-checklist.md)
- Before pushing: verify PR scope (one theme, 100-200 lines)
- See `workflow.md` for the full phase lifecycle

## Conventions

- Architecture: see `conventions/architecture.md`
- Testing: see `conventions/testing.md`
- PR workflow: see `conventions/pr-workflow.md`
- Pre-push verification: see `conventions/pre-push-checklist.md`

## Pre-Push Verification

```bash
# 1. Formatting
./static-analysis/run-format.sh -l

# 2. Static analysis
./static-analysis/run-lint.sh

# 3. Compilation (affected modules)
./gradlew :feature:yourmodule:ui:compileDebugKotlin

# 4. Unit tests
./gradlew :feature:yourmodule:ui:testDebugUnitTest --stacktrace

# 5. Snapshot tests (if UI changed)
./gradlew verifySnapshotDebug --stacktrace
```

## World Model

- Conventions: `./conventions/`
- Platform references: `./references/`
- Team world model: [link to shared world model repo if available]

## Implicit Commands

| Phrase | Action |
|---|---|
| "proceed" | Continue with the current plan as discussed |
| "status?" | Git status + branch + last commit summary |
| "refresh the emulator" | Force-stop, rebuild, reinstall, relaunch on connected emulator |
| "monitor ci" | Check PR status checks and report pass/fail/pending |

## Session Patterns

- When a session opens with a PR URL: fetch the diff, determine if reviewing or addressing comments
- When a session opens with a ticket URL: read the ticket, orient on existing code, present a plan before building
