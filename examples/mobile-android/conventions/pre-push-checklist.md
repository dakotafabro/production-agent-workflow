# Pre-Push Checklist - Android Multi-Module App

Run these in order. Each mirrors a CI job that will block the PR if it fails.

## 1. Formatting (CI: format check)

```bash
./gradlew ktfmtCheck    # Check only (no writes)
./gradlew ktfmtFormat   # Auto-fix formatting
```

## 2. Static Analysis (CI: detekt)

```bash
./gradlew detekt
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

## 5. Snapshot Tests (CI: verifyPaparazziDebug)

Only if the PR touches Compose UI:
```bash
./gradlew verifyPaparazziDebug --stacktrace
```

## 6. Android Lint (CI: lintDebug)

```bash
./gradlew :app:lintDebug
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

./gradlew ktfmtCheck && \
./gradlew detekt && \
./gradlew ${MODULE}:compileDebugKotlin && \
./gradlew ${MODULE}:testDebugUnitTest --stacktrace
```

## When to Run

- **Before every push** (non-negotiable)
- **After rebasing on develop** (rebase can introduce compilation errors from new code)
- **After addressing review comments** (before re-pushing)
