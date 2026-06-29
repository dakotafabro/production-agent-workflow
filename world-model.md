# World Model

## What It Is

A world model is a structured knowledge base that gives your agent context about your codebase, your team's architecture, and how the system works as a whole. Without it, your agent generates plausible code. With it, your agent generates code that fits.

Think of it as the difference between asking a contractor to build a room in "a house" vs. giving them the blueprints, the building codes, and the history of past renovations.

## Why It Matters

When an agent has no world model:
- It generates code that compiles but lives in the wrong layer
- It creates new patterns when existing ones already solve the problem
- It duplicates functionality that exists in another module
- It makes architecture decisions that conflict with past team decisions

When an agent has a world model:
- It knows which module owns a domain before generating code
- It follows established patterns instead of inventing new ones
- It references past decisions to avoid re-litigating settled questions
- It understands boundaries between components

## Two Layers of Context

Most effective agent setups have two layers of knowledge:

```
Shared knowledge (team-wide)
  "What does the codebase expect?"
  → System architecture, module ownership, API contracts
  → Team conventions that apply to everyone
  → Decision history and strategic direction
  → Service catalog, dependency maps

Individual knowledge (per-engineer)
  "How do I work within it?"
  → Your identity, boundaries, communication style
  → Conventions you've mined from reviews
  → Your pre-push checklist for your modules
  → Your active work and session logs
```

This template provides the individual layer. The shared layer might be:
- A team wiki or Confluence space your agent can read
- A dedicated repo with architecture docs and ADRs
- A Goose skill or MCP server that provides codebase context
- Even just a well-maintained README in your main repo

## Building Your World Model

### Start Small

You don't need a complete system map on day one. Start with:

1. **Where does logic live?** (your `conventions/architecture.md`)
2. **What patterns exist?** (add examples as you encounter them)
3. **What's been decided?** (capture ADRs when you learn about past decisions)

### Grow It Through Convention Mining

Every PR review teaches you something about the system. When a senior engineer says "this belongs in the data layer because of X," that's world model knowledge. Capture it in your conventions directory. Over weeks, your local knowledge base reflects how the system actually works.

### Graduate to a Shared World Model

Once your individual conventions are mature, you might notice:
- Some conventions apply to everyone on the team (not just you)
- Some architecture knowledge should be shared (not rediscovered by each person)
- Some decision history needs to be preserved (not lost when people leave)

That's when a shared world model becomes valuable. It could be:
- A repo that the whole team contributes to
- A skill or plugin your agent loads at session start
- Architecture docs that live alongside the code

## How the Two Layers Work Together

### Session Start

1. Shared world model loads (system context)
2. Your AGENTS.md is read (personal workflow context)
3. The agent now has both layers

### During Orient Phase

The shared world model answers:
- "Does this pattern already exist?"
- "What module owns this domain?"
- "Has this been decided before?"

Your individual conventions answer:
- "How should I structure this PR?"
- "What's my testing pattern?"
- "What checks need to pass before I push?"

### What Each Layer Unlocks

| Setup | What you get |
|---|---|
| Neither | Agent generates generic code with no codebase awareness |
| Individual only | Agent follows your workflow but may miss existing patterns |
| Shared only | Agent knows the system but doesn't know your style or verification steps |
| Both | Full context at every phase - orients on the system, builds with your conventions, verifies with your checklist |

## Getting Started

If you don't have a shared world model yet, your `conventions/` and `references/` directories serve as your local equivalent. Fill them in as you learn. The structure is already here - you're building your world model one convention at a time.

If your team does have shared architecture docs, point your agent at them:

```markdown
## World Model

- Conventions: `./conventions/`
- Platform references: `./references/`
- Team architecture docs: [link to shared docs]
- Codebase knowledge: [link to world model repo or skill]
```

The more context your agent has, the less it invents on its own.
