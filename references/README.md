# References

Platform-specific knowledge lives here. This is where you store documentation, API references, and framework guides that your agent should consult when generating code.

## What to Put Here

- Framework documentation summaries (Compose, SwiftUI, React patterns)
- API reference for libraries your codebase uses heavily
- Architecture decision records (ADRs) from your team
- Style guides or design system documentation
- Anything the agent needs to "know" about your platform

## Example Structure

```
references/
├── android/
│   ├── compose-state.md
│   ├── coroutines-flow.md
│   ├── dependency-injection.md
│   └── viewmodel-lifecycle.md
├── ios/
│   ├── swiftui-patterns.md
│   ├── combine-publishers.md
│   └── navigation.md
└── web/
    ├── react-hooks.md
    ├── state-management.md
    └── api-patterns.md
```

## How the Agent Uses This

When the agent encounters a task that touches a specific framework or pattern, it consults the relevant reference document before generating code. This prevents the agent from using outdated patterns or APIs that have been superseded in your codebase.

## Keeping References Current

- Update when a major framework version ships
- Update when the team adopts a new pattern
- Remove references to deprecated approaches
- Date-stamp entries so you know when they were last verified
