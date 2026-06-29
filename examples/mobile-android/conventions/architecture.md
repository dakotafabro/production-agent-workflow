# Architecture Conventions - Android Multi-Module App

## Layer Responsibilities

| Layer | Responsibility |
|---|---|
| Use case | Thin delegation - invoke one repo method, return result |
| Repository | Own the operation AND its side effects (optimistic updates, count adjustments, cache evictions) |
| ViewModel | UI state management, event handling, navigation |
| Composable | Render state, emit events. No business logic. |

## Decision Tree

1. Side effect follows from a data operation -> **Repository**
2. Would create a DI cycle -> **Use case** (explain in PR description)
3. Use case doing more than a one-liner -> **Question it**
4. UI visibility depends on existing state -> **Computed property on ViewState**

## Module Structure

```
app/
├── feature/
│   └── checkout/
│       ├── ui/          # Composables + ViewModel
│       ├── domain/      # Use cases + domain models
│       └── data/        # Repository implementations
├── core/
│   ├── di/             # Dependency injection setup
│   ├── network/        # HTTP client, interceptors
│   └── design-system/  # Shared UI components
└── app/
    └── application/    # App entry point, wiring
```

**Dependency rules:**
- Feature UI depends on feature domain and core
- Feature domain has no Android framework dependencies
- Feature data implements domain interfaces
- Core modules are leaf dependencies (no feature knowledge)
- No feature module depends on another feature module directly

## State Management

### Derived State on ViewState

When a UI element's visibility depends purely on existing state fields (no async, no side effects), compute it as a `get()` property on the ViewState data class.

```kotlin
data class Content(
    val priceCents: Int?,
    val isPaidContent: Boolean,
    val isGatingEnabled: Boolean,
) : ViewState {
    val priceGuidance: PriceGuidance
        get() {
            if (!isGatingEnabled || !isPaidContent) return PriceGuidance.NONE
            val price = priceCents ?: return PriceGuidance.NONE
            return when {
                price <= 0 -> PriceGuidance.NONE
                price < MIN_VALID_PRICE_CENTS -> PriceGuidance.INVALID_TOO_LOW
                price < CHART_ELIGIBLE_MIN_PRICE_CENTS -> PriceGuidance.CHART_INELIGIBLE
                else -> PriceGuidance.NONE
            }
        }
}
```

Why: The value is always consistent with its inputs because it recomputes from the same object. The tradeoff (recomputes on every access) is negligible for simple expressions.

### Domain Model Design

Derived booleans over scattered enum checks:

```kotlin
val isPublished: Boolean get() = publishStatus == PublishStatus.Published
```

## Anti-Patterns

- Do not put side effects in use cases when they belong in the repository
- Do not create wrapper functions with the same signature as the thing they wrap
- Do not store state in a shared singleton when only one consumer uses it
- Do not build minimal legacy models from new API data - resolve the full object instead
- Do not add new dependencies on deprecated/temporary modules

## Security Principles

- Security boundaries fail closed (drop), not fail open (redirect)
- When validating input at a security boundary, rejected input should be silently dropped
- Do not redirect rejected input to an alternative path

## Localization

- Never edit locale/string files directly
- Create keys in the localization platform first, then sync via the platform's import command
- String files are generated artifacts - editing them by hand creates merge conflicts on next sync
