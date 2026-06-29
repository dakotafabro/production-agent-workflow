# Production Agent Workflow

A template for organizing your individual context and work style so your agent can meet you where you are. The result: more impactful collaboration, smaller PRs, passing CI, and code your team can review in minutes.

## What This Is

This is a structured place to put the knowledge you already carry - your architecture understanding, your testing patterns, your verification habits - so your agent has access to it every session. You don't need to change how you work. You're giving your agent the context it needs to work the way you already do.

## The Opportunity

When practitioners work with AI agents without organized context, common friction points emerge:

- **Large PRs** - the agent doesn't know your team's scoping norms
- **CI failures** - the agent doesn't know which checks to run locally
- **Merge conflicts** - work stays on branches longer than it needs to
- **Misaligned code** - the agent invents patterns instead of following existing ones

These aren't failures of the practitioner. They're the natural result of an agent that doesn't have enough context about your codebase and workflow. This template gives you a place to organize that context.

## The Core Insight

**An agent is only as good as the context you give it.** The more your agent knows about your architecture, testing patterns, and verification steps, the more likely its output aligns with what you expect. Your expertise still drives the final decision - the template helps your agent get closer on the first draft.

## What This Template Provides

A directory structure and set of fill-in documents that organize your individual context for your agent. When you fill these in, your agent:

- Knows your architecture before generating code
- Runs your verification steps before you push
- Scopes work to the increments your team expects
- Follows your existing patterns instead of inventing new ones

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
├── world-model.md              # How shared + individual knowledge work together
├── goose.md                    # Why this structure works with Goose
├── prompts.md                  # Copy-paste prompts for your agent
├── setup.sh                    # Interactive setup script
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

This lives in `AGENTS.md`. It's the first thing your agent reads. It shapes how the agent communicates and what it does autonomously vs. what it brings to you first.

### Layer 2: Workflow and Verification

How does work move from idea to shipped code? What gates exist between "generated" and "merged"?

This lives in `workflow.md` and `conventions/pre-push-checklist.md`. The pre-push checklist is the single highest-leverage document in this template. It encodes the verification steps you already run (or want to run) so your agent handles them consistently.

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

When everyone on a team organizes their individual context:
- PRs get smaller (the agent knows the scoping norms)
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

Dakota Fabro, B.Psy, M.Ed, M.Th (they/them)
AAIF Ambassador | [Agentic AI Foundation](https://agentic-ai.org)

## License

MIT
