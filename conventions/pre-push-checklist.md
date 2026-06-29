# Pre-Push Checklist

<!--
This is the most important document in this template.

List every command that must pass before code leaves your machine.
Order them the way CI runs them. If any step fails, fix it before pushing.

The goal: CI should never be the first time you discover a problem.
-->

## Why This Exists

Every CI failure costs a cycle:
1. Push code
2. Wait 5-20 minutes for CI
3. See the failure
4. Fix locally
5. Push again
6. Wait again

Running these checks locally before pushing eliminates steps 1-6 entirely. The PR arrives green on the first push.

## The Checklist

Run these in order. Each mirrors a CI job that will block the PR if it fails.

### 1. Formatting

```bash
# Replace with your formatter:
# ./scripts/format-check.sh          # Custom script
# npx prettier --check .             # JavaScript/TypeScript
# cargo fmt --check                  # Rust
# black --check .                    # Python
# ./gradlew ktfmtCheck              # Kotlin
```

### 2. Linting / Static Analysis

```bash
# Replace with your linter:
# npx eslint .                       # JavaScript/TypeScript
# cargo clippy                       # Rust
# flake8 .                           # Python
# ./gradlew detekt                   # Kotlin
# swiftlint                          # Swift
```

### 3. Compilation

```bash
# Replace with your build command:
# npm run build                      # JavaScript/TypeScript
# cargo check                        # Rust
# ./gradlew compileDebugKotlin       # Android (Kotlin)
# xcodebuild -scheme YourApp build   # iOS (Swift)
```

### 4. Unit Tests

```bash
# Replace with your test command:
# npm test                           # JavaScript/TypeScript
# cargo test                         # Rust
# pytest                             # Python
# ./gradlew testDebugUnitTest        # Android
# xcodebuild test                    # iOS
```

### 5. Additional Checks (platform-specific)

```bash
# Snapshot tests (if you have them):
# ./gradlew verifyPaparazziDebug     # Android
# swift test --filter SnapshotTests  # iOS

# Lint (if separate from step 2):
# ./gradlew lintDebug                # Android Lint

# Module dependency boundaries:
# ./gradlew assertModuleGraph        # Gradle module graph

# AI-powered review (if available):
# your-review-tool review             # AI-powered code review (if available)
```

### 6. Manual Checks

- [ ] Code follows existing patterns (reference in PR description if new pattern)
- [ ] No unrelated changes included
- [ ] New strings/copy added through the localization pipeline (not edited directly)
- [ ] PR scope is one theme, bounded size

## Quick Script

Combine your checks into a single command you can run before every push:

```bash
#!/bin/bash
# save as: scripts/pre-push.sh
# usage: ./scripts/pre-push.sh

set -e  # Exit on first failure

echo "1/4 Formatting..."
# [your format check command]

echo "2/4 Linting..."
# [your lint command]

echo "3/4 Compiling..."
# [your compile command]

echo "4/4 Testing..."
# [your test command]

echo "All checks passed. Safe to push."
```

## For Multi-Module Projects

When a change touches multiple modules, verify all affected modules:

```bash
# Example: Android multi-module
MODULE_1=":feature:checkout:ui"
MODULE_2=":feature:checkout:data"

./gradlew ${MODULE_1}:compileDebugKotlin ${MODULE_2}:compileDebugKotlin
./gradlew ${MODULE_1}:testDebugUnitTest ${MODULE_2}:testDebugUnitTest
```

## When to Run

- **Before every push** (non-negotiable)
- **After rebasing** (rebase can introduce compilation errors)
- **After addressing review comments** (before re-pushing)

## The Payoff

Teams that adopt local pre-push verification report:
- CI passes on first push ~90% of the time (vs. ~50% without)
- Review cycles drop (reviewers aren't waiting for green CI)
- Merge conflicts decrease (branches are shorter-lived because they land faster)
