# Architecture Conventions

<!--
This document tells your agent where logic lives in your codebase.
When the agent generates code, it uses these rules to place things correctly.

Fill in the sections that apply to your stack. Delete what doesn't apply.
-->

## Layer Responsibilities

<!--
Define what each layer in your architecture is responsible for.
This prevents the agent from putting business logic in the UI layer
or side effects in the wrong place.
-->

| Layer | Responsibility |
|---|---|
| [UI / View / Composable] | [Render state, emit user events. No business logic.] |
| [ViewModel / Controller] | [UI state management, event handling, navigation] |
| [Use Case / Interactor] | [Thin orchestration between layers] |
| [Repository / Data] | [Data operations and their side effects] |
| [Network / API] | [HTTP calls, serialization, error mapping] |

## Decision Tree

<!--
When the agent isn't sure where something belongs, it follows this tree.
-->

1. Is this a side effect of a data operation? -> **Repository layer**
2. Is this UI state derived from other state? -> **Computed property on the state object**
3. Is this orchestrating multiple data sources? -> **Use case layer**
4. Is this rendering data for the user? -> **UI layer**

## Module Boundaries

<!--
If your project has multiple modules (Gradle, Swift packages, npm workspaces),
define what each module owns and what it can depend on.
-->

```
[your-module-structure]
├── feature/        # Feature modules (UI + ViewModel)
├── domain/         # Domain models, use cases
├── data/           # Repositories, data sources
├── core/           # Shared utilities, DI, networking
└── app/            # Application entry point, wiring
```

**Dependency rules:**
- Feature modules depend on domain and core
- Domain modules have no Android/iOS/platform dependencies
- Data modules implement domain interfaces
- Core modules are leaf dependencies (no feature knowledge)

## State Management

<!--
How is state managed in your app? Where does it live?
This prevents the agent from creating duplicate state or putting state in the wrong scope.
-->

1. Does this state already exist somewhere? -> Use it, don't duplicate it.
2. Am I changing state programmatically? -> Update both current and persisted state.
3. Could this value drift from another source? -> Extract to a single source of truth.
4. Is this derived from existing state? -> Compute it, don't store it separately.

## Patterns to Follow

<!--
List specific patterns your codebase uses. Include brief examples.
The agent will reference these when generating code.
-->

### Example: Derived state as computed properties

When a UI element's visibility depends purely on existing state fields (no async, no side effects), compute it as a property on the state object rather than managing it as a separate field.

```
// Preferred: derived from existing fields, always consistent
data class ScreenState(
    val price: Int?,
    val isEnabled: Boolean,
) {
    val showWarning: Boolean
        get() = isEnabled && (price ?: 0) < MINIMUM_PRICE
}
```

### Example: Domain model design

Derived booleans over scattered enum checks:

```
// Preferred: readable, self-documenting
val isPublished: Boolean get() = status == Status.Published

// Avoid: checking the enum at every call site
if (item.status == Status.Published) { ... }
```

## Anti-Patterns

<!--
What should the agent NOT do? Be explicit about common mistakes.
-->

- Do not put side effects in the UI layer
- Do not create wrapper functions with the same signature as the thing they wrap
- Do not store state in a shared singleton when only one consumer uses it
- Do not duplicate a source of truth across layers
