# Shipping Prototypes Safely

How prototype ideas become production features without risking the codebase.

## The Standard

Prototype code should be **invisible when off** and **indistinguishable from production code when on.**

This means:
- **Feature gating** - the mechanism that makes prototype code unreachable in production until it's ready
- **Code quality** - the discipline that ensures prototype code meets the same bar as any other code

## The Prototype Lifecycle

### 1. Build to present

Work on a branch. No open PR. Distribute via build artifacts (APK, TestFlight, local build) for feedback.

### 2. Get feedback

Demo to the team. Gather reactions. Iterate on the branch.

### 3. Get alignment

Relevant stakeholders decide whether this is worth shipping to production.

### 4. Define the experiment

What's being tested? How will insights be gathered? What does success look like?

### 5. Make it shippable

Gate behind a feature flag. Ensure isolation from production paths. Meet code quality bar.

### 6. Gather insights

Run the experiment. Measure. Decide next steps.

Steps 1-2 are about selling the idea. Steps 3-6 are about preparing it for production.

## Feature Flags

### When to use a flag

- Any new user-facing behavior that isn't ready for 100% rollout
- Any prototype code that needs to live in the main branch
- Any A/B test or experiment

### Flag architecture

```
// Register the flag
object YourFeatureFlag : BooleanFeatureFlag(
    description = "Human-readable label",
    key = "your-feature-flag",
    defaultValue = false,
)

// Check the flag
if (featureFlags.isEnabled(YourFeatureFlag)) {
    // new behavior
}
```

### Two-layer gating

When a prototype includes a user-facing settings toggle:
- **Remote flag** controls rollout (off = feature invisible)
- **User preference** controls user choice (off = feature visible but disabled)

## Isolation Principles

- Minimal touchpoints with production code
- Feature flag gating at all entry points
- No production behavior changes when flag is off
- Design for clean removal

## Rollback Safety

- If the flag is turned off, the app behaves exactly as it did before
- No orphaned state from a partially-enabled feature
- Clear state on navigation away from prototype screens

## Code Hygiene

- No stub or dead code
- No mock/demo data in production builds
- No debug logging in committed code
- Remove unused types immediately when descoping

## Pre-PR Checklist for Prototypes

**Gating:**
- [ ] Feature flag created with appropriate type and default value
- [ ] All entry points gated behind flag checks
- [ ] Flag toggleable in debug/dev menu
- [ ] Feature invisible in all builds without flag enabled
- [ ] Prototype code isolated from production paths

**Code:**
- [ ] No hardcoded mock data in UI
- [ ] No demo screens reachable in release builds
- [ ] Implementation plan discussed with the team

**Testing:**
- [ ] Tests assert on outcomes, not intermediate calls
- [ ] Flag-off path tested (no regressions)
