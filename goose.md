# Why This Works Well With Goose

[Goose](https://github.com/block/goose) is an open-source AI agent built by Block and now part of the Agentic AI Foundation (AAIF). This template was developed using Goose as the primary agent, and the structure aligns with how Goose reads and uses project context.

## How Goose Reads Your Workspace

Goose reads `AGENTS.md` files at session start. This is the entry point for everything in this template. When Goose opens a session in a directory that contains an `AGENTS.md`, it immediately knows:

- Who you are and how to communicate
- What it can do autonomously vs. what requires confirmation
- Where to find conventions, references, and workflow phases
- What verification steps to run before pushing code

This means the structure in this template isn't arbitrary. It maps directly to how Goose discovers and uses context.

## What Goose Does With Each File

| File | How Goose uses it |
|---|---|
| `AGENTS.md` | Read at session start. Shapes all behavior for the session. |
| `workflow.md` | Referenced when you ask Goose to build something. It follows the phases. |
| `conventions/architecture.md` | Consulted before generating code. Goose places logic in the correct layer. |
| `conventions/testing.md` | Consulted when writing tests. Goose follows your testing patterns. |
| `conventions/pre-push-checklist.md` | Run before pushing. Goose executes each command in order. |
| `conventions/pr-workflow.md` | Referenced when drafting PR descriptions or scoping work. |
| `references/` | Consulted for platform-specific knowledge (framework APIs, patterns). |
| `world-model.md` | Explains how to load shared team knowledge alongside personal conventions. |

## Why the Directory Structure Matters

Goose navigates your filesystem. When conventions live in predictable locations, Goose can find and reference them without you pointing to each file manually. The structure:

```
AGENTS.md           → "Start here"
conventions/        → "Rules for generating code"
references/         → "Platform knowledge"
active/             → "Current work context"
```

This gives Goose a mental map of your workspace. When you say "build this feature," Goose knows to check `conventions/architecture.md` for layer placement, `conventions/testing.md` for test patterns, and `conventions/pre-push-checklist.md` before pushing.

## Goose-Specific Features You Can Use

### Implicit Commands

In your `AGENTS.md`, you can define shortcuts that Goose executes without confirmation:

```markdown
| Phrase | Action |
|---|---|
| "proceed" | Continue with the current plan |
| "status?" | Git status + branch + last commit |
```

When you say "proceed," Goose acts immediately. This reduces friction in the workflow.

### Session Patterns

You can tell Goose how to behave based on what you open a session with:

```markdown
- When a session opens with a PR URL: fetch the diff, determine if reviewing or addressing comments
- When a session opens with a ticket URL: read the ticket, orient on existing code, present a plan
```

This means Goose adapts its behavior to your intent without you explaining what you want each time.

### Skills and Extensions

Goose connects to external tools via skills and MCP extensions. Relevant ones for this workflow:

- **World model skills** - load shared team knowledge at session start
- **Git/GitHub extensions** - PR creation, review, CI status
- **Ticket tracker extensions** - read tickets, update status
- **Measurement skills** (like [rp-why](https://github.com/block/agent-skills/tree/main/rp-why)) - track collaboration depth over time

### Pre-Push Verification

When your `AGENTS.md` references the pre-push checklist, Goose can run it as a sequence of shell commands before pushing. If any step fails, Goose stops and reports the failure. This is the mechanism that prevents CI failures on first push.

## Works With Other Agents Too

While this template was built with Goose, the principles apply to any agent that reads project-level configuration:

- **Cursor** - reads `.cursorrules` (similar concept to AGENTS.md)
- **Copilot Workspace** - reads project context from repo structure
- **Windsurf** - reads `.windsurfrules`
- **Aider** - reads `.aider.conf.yml` and project conventions

The directory structure and conventions are agent-agnostic. The `AGENTS.md` file is the Goose-specific entry point, but the knowledge it points to (architecture, testing, PR workflow) is useful regardless of which agent reads it.

## Getting Started With Goose

If you don't have Goose yet:

1. Install from [github.com/block/goose](https://github.com/block/goose) (Desktop app or CLI)
2. Clone this template into your workspace
3. Open a Goose session in the directory
4. Goose reads your `AGENTS.md` and is immediately configured

From there, every session starts with your conventions loaded. The agent knows your workflow before you type your first message.
