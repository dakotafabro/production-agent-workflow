# Pre-Push Checklist - Android Multi-Module App

Run these in order. Each mirrors a CI job that will block the PR if it fails.

## 1. Formatting (CI: format check)

```bash
./static-analysis/run-format.sh -l    # Lint check only (no writes)
./static-analysis/run-format.sh       # Auto-fix formatting
```

## 2. Static Analysis (CI: lint/detekt)

```bash
./static-analysis/run-lint.sh
```

## 3. Module Compilation

```bash
./gradlew :feature:yourmodule:ui:compileDebugKotlin
```

For multi-module changes, compile all affected modules:
```bash
./gradlew :feature:checkout:ui:compileDebugKotlin :feature:checkout:data:compileDebugKotlin :feature:checkout:domain:compileKotlin
```

## 4. Unit Tests (CI: testDebugUnitTest)

```bash
./gradlew :feature:yourmodule:ui:testDebugUnitTest --stacktrace    # Single module
./gradlew testDebugUnitTest --stacktrace                           # Full suite (slow)
```

## 5. Snapshot Tests (CI: verifySnapshotDebug)

Only if the PR touches Compose UI:
```bash
./gradlew verifySnapshotDebug --stacktrace
```

## 6. Android Lint (CI: lintDebug)

```bash
./gradlew :app:application:lintDebug
```

## 7. Module Graph (CI: assertModuleGraph)

Only if the PR adds new module dependencies:
```bash
./gradlew assertModuleGraph
```

## 8. Manual Checks

- [ ] Code follows existing patterns (reference in PR description if new)
- [ ] No comments added to code (context in PR description)
- [ ] New strings added through localization platform, not edited directly
- [ ] `Co-Authored-By` trailer if AI-assisted

## Quick Pre-Push Script

For a typical feature PR touching one module:

```bash
MODULE=":feature:checkout:ui"

./static-analysis/run-format.sh -l && \
./static-analysis/run-lint.sh && \
./gradlew ${MODULE}:compileDebugKotlin && \
./gradlew ${MODULE}:testDebugUnitTest --stacktrace
```

## When to Run

- **Before every push** (non-negotiable)
- **After rebasing on develop** (rebase can introduce compilation errors from new code)
- **After addressing review comments** (before re-pushing)
