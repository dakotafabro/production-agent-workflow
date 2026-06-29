# Production Agent Workflow

A template for practitioners ready to level up from AI-generated code to production-grade agent-assisted engineering.

## The Problem

AI tools generate code fast. But speed without structure produces:

- **Large PRs** (500+ lines, multiple concerns tangled together)
- **Failing CI** on first push (and second, and third)
- **Merge conflicts** from long-lived branches
- **Code nobody understands** because the human never read what the agent generated

The cost compounds. Every oversized PR creates review burden. Every CI failure burns a cycle. Every merge conflict blocks the team. The agent moved fast, but the team moved slower.

## The Shift

The difference between generating code and shipping production code isn't the tool. It's the structure around it.

| Without Structure | With Structure |
|---|---|
| "Generate a feature" | Orient on existing patterns, then build one layer |
| Push and see if CI passes | Run the pre-push checklist locally |
| One big PR with everything | Stacked PRs, one concern each |
| Trust the AI output | Understand every line before committing |
| No conventions documented | Conventions encoded so the agent follows them |
| Hope it works | Verify it works, then ship |

The core insight: **an agent is only as good as the conventions you give it.** Without a world model, AI generates plausible code. With one, it generates correct code.

## What This Template Provides

A directory structure and set of fill-in documents that teach your agent how to work in your codebase. When you fill these in, your agent:

- Knows your architecture before generating code
- Runs your verification steps before you push
- Scopes work to reviewable increments
- Follows your team's patterns instead of inventing new ones

## Quickstart

```bash
# Clone the template
git clone https://github.com/dakotafabro/production-agent-workflow.git ~/research

# Or if you already have a workspace repo, copy the structure in
cp -r production-agent-workflow/* ~/your-workspace/
```

Then run the interactive setup:

```bash
cd ~/research
./setup.sh
```

The script walks you through configuring your identity, agent boundaries, and pre-push checklist. It writes your `AGENTS.md` and `conventions/pre-push-checklist.md` based on your answers.

Or fill in manually:

1. **`AGENTS.md`** - Your identity, boundaries, and what the agent can do autonomously
2. **`conventions/pre-push-checklist.md`** - Every command that must pass before code leaves your machine
3. **`conventions/architecture.md`** - Where logic lives in your codebase
4. **`workflow.md`** - Your phases from idea to shipped code

You can be productive in 15 minutes. The rest compounds over weeks.

## Directory Structure

```
~/research/
├── AGENTS.md                    # Agent norms and boundaries
├── workflow.md                  # Idea-to-ship phases
├── conventions/
│   ├── architecture.md          # Layer responsibilities
│   ├── testing.md               # Test design principles
│   ├── pr-workflow.md           # PR size, stacking, review norms
│   ├── pre-push-checklist.md    # Platform-specific verification
│   ├── shipping-safely.md       # Feature flags, prototype lifecycle
│   └── convention-mining.md     # Learning from code reviews
├── references/                  # Platform knowledge (frameworks, APIs)
├── active/                      # Current work-in-progress
├── sessions/                    # Session logs (optional)
└── examples/
    └── mobile-android/          # Worked example
```

## The Three Layers

### Layer 1: Identity and Boundaries

Who are you? What can the agent do without asking? What requires your confirmation?

This lives in `AGENTS.md`. It's the first thing your agent reads.

### Layer 2: Workflow and Verification

How does work move from idea to shipped code? What gates exist between "generated" and "merged"?

This lives in `workflow.md` and `conventions/pre-push-checklist.md`. The pre-push checklist is the single highest-leverage document in this template. If you fill in nothing else, fill in this.

### Layer 3: Conventions and World Model

What does your codebase expect? Where does logic live? How are things tested? What patterns already exist?

This lives in `conventions/` and `references/`. Over time, this becomes your world model - the accumulated knowledge that makes your agent effective in your specific codebase.

## Convention Mining

One of the most powerful practices in this template: **learning from code reviews.**

Every PR review surfaces implicit team norms. When a senior engineer says "this belongs in the repository layer, not the use case," that's a convention. When a reviewer says "never combine fixes with explorative code," that's a convention.

By capturing these as you encounter them (in `conventions/`), you:
- Build your own understanding of the codebase architecture as a system
- Give your agent the same knowledge senior engineers carry in their heads
- Reduce review cycles because your PRs align with team expectations from the first draft

See `conventions/convention-mining.md` for how to practice this.

## For Teams

When everyone on a team maintains their own conventions repo:
- PRs get smaller (the agent knows the scoping rules)
- CI passes on first push (the pre-push checklist runs locally)
- Reviews are faster (the code already follows team patterns)
- Onboarding accelerates (new engineers build their world model by mining reviews)

The template is individual, but the benefits are collective.

## Context and Assumptions

This template was developed from 145+ days of daily agent-assisted engineering practice. Some context on the environment it was built in:

- **Team-wide world model available.** The author's team maintains a shared knowledge base that the agent can consult. If you don't have this, the `conventions/` and `references/` directories serve as your local equivalent.
- **Cross-disciplinary work.** The author works across engineering, psychology, education, and organizational systems. The workflow is designed to handle context-switching between domains. If you work in a single domain, the structure still applies but some phases (like Orient) may be simpler.
- **Goose as the primary agent.** The workflow was developed using [Goose](https://github.com/block/goose), but the principles apply to any AI agent that reads project-level configuration (Cursor, Copilot Workspace, Windsurf, Aider, etc.).
- **Everything stays local until shared.** The workflow assumes you work locally and only push when verified. Nothing leaves your machine until the pre-push checklist passes.

You don't need any of these conditions to use the template. Start with `AGENTS.md` and `pre-push-checklist.md`. Add complexity as your practice matures.

## Worked Example

See `examples/mobile-android/` for a complete, filled-in example based on a real production mobile app with 100+ modules. It demonstrates how each document looks when populated with real conventions.

## Related Projects

- [AGENTS.md](https://github.com/agentsmd) - The spec this template builds on
- [Goose](https://github.com/block/goose) - An open-source AI agent that reads AGENTS.md
- [rp-why](https://github.com/block/agent-skills/tree/main/rp-why) - A Goose skill for measuring collaboration depth over time

## Author

Dakota Fabro (they/them)
AAIF Ambassador | [Agentic AI Foundation](https://agentic-ai.org)

## License

MIT
