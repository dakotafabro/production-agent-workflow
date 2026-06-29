#!/bin/bash
# Production Agent Workflow - Interactive Setup
# Run this after cloning to configure your workspace.

set -e

GREEN='\033[0;32m'
CYAN='\033[0;36m'
DIM='\033[2m'
BOLD='\033[1m'
NC='\033[0m'

echo ""
echo -e "${GREEN}${BOLD}Production Agent Workflow${NC}"
echo -e "${DIM}Interactive setup - let's configure your workspace.${NC}"
echo ""

# ─── AGENTS.md ───

echo -e "${CYAN}${BOLD}Step 1: Identity${NC}"
echo -e "${DIM}This goes in your AGENTS.md - the file your agent reads first.${NC}"
echo ""

read -p "Your name: " NAME
read -p "Your pronouns (e.g., they/them, she/her, he/him): " PRONOUNS
read -p "Your timezone (e.g., America/Los_Angeles, Europe/London): " TIMEZONE

echo ""
echo -e "${CYAN}${BOLD}Step 2: Agent Boundaries${NC}"
echo -e "${DIM}What can the agent do without asking you first?${NC}"
echo ""
echo "  Common choices:"
echo "    1) Conservative - agent drafts everything, I decide what to post/push"
echo "    2) Moderate - agent can commit to branches, but I push and post"
echo "    3) Autonomous - agent can commit and push to feature branches"
echo ""
read -p "Choose (1/2/3) [1]: " BOUNDARY_CHOICE
BOUNDARY_CHOICE=${BOUNDARY_CHOICE:-1}

case $BOUNDARY_CHOICE in
  1)
    BOUNDARIES="- The agent drafts comments, reviews, and messages. I decide what to post.
- No auto-commenting on PRs. No auto-approving. No auto-merging.
- No posting to external services without my explicit confirmation.
- No pushing code without my explicit confirmation.
- Present drafts and recommendations. I own the final action."
    ;;
  2)
    BOUNDARIES="- The agent can commit to feature branches without asking.
- The agent must confirm before any git push.
- No auto-commenting on PRs. No auto-approving. No auto-merging.
- No posting to external services without my explicit confirmation.
- Present drafts and recommendations for external communication."
    ;;
  3)
    BOUNDARIES="- The agent can commit and push to feature branches without asking.
- The agent must confirm before merging or posting to external services.
- No auto-approving or auto-merging PRs.
- Present drafts for PR descriptions and review comments before posting."
    ;;
esac

# ─── Pre-Push Checklist ───

echo ""
echo -e "${CYAN}${BOLD}Step 3: Pre-Push Checklist${NC}"
echo -e "${DIM}What commands must pass before code leaves your machine?${NC}"
echo -e "${DIM}(This is the single highest-leverage part of the setup.)${NC}"
echo ""
echo "  What's your primary language/platform?"
echo "    1) JavaScript/TypeScript (npm/pnpm)"
echo "    2) Python"
echo "    3) Rust"
echo "    4) Kotlin/Android (Gradle)"
echo "    5) Swift/iOS (Xcode)"
echo "    6) Other / I'll fill this in manually"
echo ""
read -p "Choose (1-6) [6]: " PLATFORM_CHOICE
PLATFORM_CHOICE=${PLATFORM_CHOICE:-6}

case $PLATFORM_CHOICE in
  1)
    CHECKLIST="# 1. Formatting
npx prettier --check .

# 2. Linting
npx eslint .

# 3. Type checking / Compilation
npx tsc --noEmit

# 4. Tests
npm test"
    ;;
  2)
    CHECKLIST="# 1. Formatting
black --check .

# 2. Linting
ruff check .

# 3. Type checking
mypy .

# 4. Tests
pytest"
    ;;
  3)
    CHECKLIST="# 1. Formatting
cargo fmt --check

# 2. Linting
cargo clippy -- -D warnings

# 3. Compilation
cargo check

# 4. Tests
cargo test"
    ;;
  4)
    CHECKLIST="# 1. Formatting
./gradlew ktfmtCheck

# 2. Static analysis
./gradlew detekt

# 3. Compilation
./gradlew compileDebugKotlin

# 4. Tests
./gradlew testDebugUnitTest --stacktrace"
    ;;
  5)
    CHECKLIST="# 1. Linting
swiftlint

# 2. Build
xcodebuild -scheme YourApp -destination 'platform=iOS Simulator,name=iPhone 16' build

# 3. Tests
xcodebuild -scheme YourApp -destination 'platform=iOS Simulator,name=iPhone 16' test"
    ;;
  6)
    CHECKLIST="# Fill in your commands here:
# 1. Formatting
# [your format check command]

# 2. Linting / static analysis
# [your lint command]

# 3. Compilation
# [your build/compile command]

# 4. Tests
# [your test command]"
    ;;
esac

# ─── Write AGENTS.md ───

echo ""
echo -e "${CYAN}${BOLD}Step 4: Writing your files...${NC}"

cat > AGENTS.md << EOF
# ${NAME} - Agent Norms

## Identity

- Name: ${NAME}
- Pronouns: ${PRONOUNS}
- Timezone: ${TIMEZONE}

## Agent Boundaries

${BOUNDARIES}

## Communication Style

- [Describe your preferred tone: direct, conversational, formal, etc.]
- [Any language patterns to follow or avoid]

## Workflow Phases

- Before building: orient on existing patterns (see workflow.md)
- Before committing: run pre-push checklist (see conventions/pre-push-checklist.md)
- Before pushing: verify PR scope (one theme, bounded size)
- See \`workflow.md\` for the full phase lifecycle

## Conventions

- Architecture: see \`conventions/architecture.md\`
- Testing: see \`conventions/testing.md\`
- PR workflow: see \`conventions/pr-workflow.md\`
- Pre-push verification: see \`conventions/pre-push-checklist.md\`

## Pre-Push Verification

\`\`\`bash
${CHECKLIST}
\`\`\`

## World Model

- Conventions: \`./conventions/\`
- Platform references: \`./references/\`

## Implicit Commands (optional)

| Phrase | Action |
|---|---|
| "proceed" | Continue with the current plan as discussed |
| "status?" | Git status + branch + last commit summary |

## Session Patterns (optional)

- When a session opens with a PR URL: fetch the diff, determine if reviewing or addressing comments
- When a session opens with a ticket URL: read the ticket, orient on existing code, present a plan
EOF

echo -e "  ${GREEN}✓${NC} AGENTS.md written"

# ─── Write pre-push-checklist.md with their commands ───

cat > conventions/pre-push-checklist.md << EOF
# Pre-Push Checklist

Run these in order before every push. Each mirrors a CI job that will block the PR if it fails.

\`\`\`bash
${CHECKLIST}
\`\`\`

## When to Run

- **Before every push** (non-negotiable)
- **After rebasing** (rebase can introduce compilation errors)
- **After addressing review comments** (before re-pushing)

## Quick Script

\`\`\`bash
#!/bin/bash
set -e
$(echo "$CHECKLIST" | grep -v "^#" | grep -v "^$" | sed 's/^//')
echo "All checks passed. Safe to push."
\`\`\`
EOF

echo -e "  ${GREEN}✓${NC} conventions/pre-push-checklist.md written"

# ─── Summary ───

echo ""
echo -e "${GREEN}${BOLD}Setup complete.${NC}"
echo ""
echo "  Your workspace is configured with:"
echo -e "    ${GREEN}✓${NC} AGENTS.md (identity + boundaries + pre-push commands)"
echo -e "    ${GREEN}✓${NC} conventions/pre-push-checklist.md (verification steps)"
echo ""
echo "  Next steps:"
echo "    1. Review and customize AGENTS.md (add communication style, implicit commands)"
echo "    2. Fill in conventions/architecture.md (where does logic live in your codebase?)"
echo "    3. Fill in conventions/testing.md (how does your team write tests?)"
echo "    4. Start a session with your agent - it will read AGENTS.md automatically"
echo ""
echo -e "  ${DIM}The rest compounds over weeks. Add conventions as you learn them.${NC}"
echo ""
