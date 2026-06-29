"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            Production Agent Workflow
          </p>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
            Stop Vibe Coding.
            <br />
            <span className="text-[var(--text-secondary)]">Start Shipping.</span>
          </h1>
          <p className="text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            A template for engineers and non-engineers moving from AI-generated code
            to production-grade agent-assisted engineering. Small PRs. Passing CI.
            Code your team can actually review.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-1">
          <a
            href="https://github.com/dakotafabro/production-agent-workflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg)] font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Get the Template
          </a>
          <a
            href="#the-shift"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--warning)] uppercase tracking-[0.2em] mb-4">
            The Problem
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Speed Without Structure
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            AI tools generate code fast. But speed without structure produces work that
            slows down everyone else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up delay-1">
          <ProblemCard
            icon="📏"
            title="Large PRs"
            description="500+ lines, multiple concerns tangled together. Reviewers can't hold the full context. Reviews take hours instead of minutes."
          />
          <ProblemCard
            icon="🔴"
            title="Failing CI"
            description="Push, wait 15 minutes, see the failure, fix, push again. Each cycle burns time and blocks the team."
          />
          <ProblemCard
            icon="⚔️"
            title="Merge Conflicts"
            description="Long-lived branches diverge from main. The longer a branch lives, the more painful the merge."
          />
          <ProblemCard
            icon="🤷"
            title="Code Nobody Understands"
            description="The agent generated it, the human committed it, but nobody can explain what it does or why."
          />
        </div>

        <p className="text-sm text-[var(--text-muted)] mt-8 animate-fade-up delay-2">
          The cost compounds. Every oversized PR creates review burden. Every CI failure
          burns a cycle. Every merge conflict blocks the team. The agent moved fast, but
          the team moved slower.
        </p>
      </section>

      {/* ── THE SHIFT ── */}
      <section id="the-shift" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            The Shift
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Orient. Verify. Scope.
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            The difference between vibe coding and production engineering isn&apos;t the tool.
            It&apos;s the structure around it.
          </p>
        </div>

        <div className="overflow-x-auto animate-fade-up delay-1">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 pr-4 text-[var(--warning)] font-medium">Vibe Coding</th>
                <th className="text-left py-3 pl-4 text-[var(--accent)] font-medium">Production Engineering</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <ComparisonRow left="&quot;Generate a feature&quot;" right="Orient on existing patterns, then build one layer" />
              <ComparisonRow left="Push and see if CI passes" right="Run the pre-push checklist locally" />
              <ComparisonRow left="One big PR with everything" right="Stacked PRs, one concern each" />
              <ComparisonRow left="Trust the AI output" right="Understand every line before committing" />
              <ComparisonRow left="No conventions documented" right="Conventions encoded so the agent follows them" />
              <ComparisonRow left="Hope it works" right="Verify it works, then ship" />
            </tbody>
          </table>
        </div>

        <div className="mt-10 p-6 rounded-xl border border-[var(--accent-dim)] bg-[var(--accent-dim)] animate-fade-up delay-2">
          <p className="text-sm text-[var(--accent)] font-medium mb-2">The Core Insight</p>
          <p className="text-[var(--text-primary)] leading-relaxed">
            An agent is only as good as the conventions you give it. Without a world model,
            AI generates plausible code. With one, it generates correct code.
          </p>
        </div>
      </section>

      {/* ── THREE LAYERS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            What Production Looks Like
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Three Layers of Agent Configuration
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            A production agent workflow is built from three layers. Each one makes the agent
            more effective in your specific codebase.
          </p>
        </div>

        <div className="space-y-6 animate-fade-up delay-1">
          <LayerCard
            number="1"
            title="Identity and Boundaries"
            description="Who are you? What can the agent do without asking? What requires your confirmation? This is your AGENTS.md file - the first thing your agent reads."
            file="AGENTS.md"
            example="&quot;The agent can commit to feature branches. It cannot push to main. It cannot post to Slack without confirmation.&quot;"
          />
          <LayerCard
            number="2"
            title="Workflow and Verification"
            description="How does work move from idea to shipped code? What gates exist between 'generated' and 'merged'? The pre-push checklist is the single highest-leverage document."
            file="workflow.md + conventions/pre-push-checklist.md"
            example="Format check, lint, compile, test - all locally, before every push. CI should never be the first time you discover a problem."
          />
          <LayerCard
            number="3"
            title="Conventions and World Model"
            description="What does your codebase expect? Where does logic live? How are things tested? This is the accumulated knowledge that makes your agent effective in your specific codebase."
            file="conventions/"
            example="&quot;Side effects belong in the repository layer. Use cases are thin one-liner delegations. State that derives from other state is computed, not stored.&quot;"
          />
        </div>
      </section>

      {/* ── CONVENTION MINING ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            The Compound Effect
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Convention Mining
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            Every code review surfaces implicit team norms. Most of these live in people&apos;s
            heads. Convention mining is the practice of capturing them as they appear so they
            compound into a shared knowledge base.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-up delay-1">
          <BenefitCard
            title="For You"
            description="Your PRs align with team expectations from the first draft. Fewer review cycles. Faster merges."
          />
          <BenefitCard
            title="For Your Agent"
            description="Encoded conventions mean the agent generates code that follows team patterns instead of inventing new ones."
          />
          <BenefitCard
            title="For the Team"
            description="Implicit knowledge becomes explicit. Onboarding accelerates. New engineers learn the codebase architecture as a system."
          />
        </div>

        <div className="mt-8 p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] animate-fade-up delay-2">
          <p className="text-sm text-[var(--text-primary)] font-medium mb-3">How it works:</p>
          <ol className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex gap-3">
              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">01</span>
              <span>Notice when a review comment expresses a general principle (not a one-time fix)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">02</span>
              <span>Capture it in imperative form with source attribution</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">03</span>
              <span>Categorize it (architecture, testing, PR workflow, security)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">04</span>
              <span>Cross-reference with existing conventions (don&apos;t duplicate, note tensions)</span>
            </li>
          </ol>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            After a few weeks, your conventions directory reflects how your team actually thinks about code.
          </p>
        </div>
      </section>

      {/* ── DIRECTORY STRUCTURE ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            The Template
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            What You Get
          </h2>
        </div>

        <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] font-mono text-sm animate-fade-up delay-1">
          <pre className="text-[var(--text-secondary)] overflow-x-auto leading-relaxed">
{`~/research/
├── AGENTS.md                    # Agent norms and boundaries
├── workflow.md                  # Idea-to-ship phases
├── conventions/
│   ├── architecture.md          # Layer responsibilities
│   ├── testing.md               # Test design principles
│   ├── pr-workflow.md           # PR size, stacking, review norms
│   ├── pre-push-checklist.md    # Platform-specific verification
│   ├── shipping-safely.md       # Feature flags, prototype lifecycle
│   └── convention-mining.md     # Learning from code reviews
├── references/                  # Platform knowledge
├── active/                      # Current work-in-progress
├── sessions/                    # Session logs (optional)
└── examples/
    └── mobile-android/          # Worked example`}
          </pre>
        </div>

        <div className="mt-8 space-y-4 animate-fade-up delay-2">
          <p className="text-sm text-[var(--text-secondary)]">
            <span className="text-[var(--accent)] font-medium">Start here:</span> Fill in{" "}
            <code className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] text-[var(--text-primary)] text-xs">AGENTS.md</code> and{" "}
            <code className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] text-[var(--text-primary)] text-xs">conventions/pre-push-checklist.md</code>.
            You can be productive in 15 minutes. The rest compounds over weeks.
          </p>
        </div>
      </section>

      {/* ── GET STARTED ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            Get Started
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            15 Minutes to Production Workflow
          </h2>
        </div>

        <div className="space-y-6 animate-fade-up delay-1">
          <StepCard
            number="1"
            title="Clone the template"
            code="git clone https://github.com/dakotafabro/production-agent-workflow.git ~/research"
          />
          <StepCard
            number="2"
            title="Fill in your AGENTS.md"
            description="Identity, boundaries, what the agent can do autonomously. This is the file your agent reads first."
          />
          <StepCard
            number="3"
            title="Fill in your pre-push checklist"
            description="Every command that must pass before code leaves your machine. Format, lint, compile, test. In the order CI runs them."
          />
          <StepCard
            number="4"
            title="Start using it"
            description="Point your agent at the repo. It now knows your conventions. Over time, add architecture docs, testing patterns, and mined conventions from reviews."
          />
        </div>

        <div className="mt-10 text-center animate-fade-up delay-2">
          <a
            href="https://github.com/dakotafabro/production-agent-workflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-medium rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Get the Template
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--border)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm text-[var(--text-secondary)]">
              Built by Dakota Fabro (they/them)
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              AAIF Ambassador &middot; Agentic AI Foundation
            </p>
          </div>
          <div className="flex gap-4 text-xs text-[var(--text-muted)]">
            <a href="https://github.com/agentsmd" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              AGENTS.md
            </a>
            <a href="https://github.com/block/goose" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              Goose
            </a>
            <a href="https://agentic-ai.org" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              AAIF
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProblemCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg">{icon}</span>
        <h3 className="text-sm font-medium text-[var(--text-primary)]">{title}</h3>
      </div>
      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

function ComparisonRow({ left, right }: { left: string; right: string }) {
  return (
    <tr className="border-b border-[var(--border)]">
      <td className="py-3 pr-4 text-[var(--text-muted)]">{left}</td>
      <td className="py-3 pl-4 text-[var(--text-primary)]">{right}</td>
    </tr>
  );
}

function LayerCard({ number, title, description, file, example }: { number: string; title: string; description: string; file: string; example: string }) {
  return (
    <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors">
      <div className="flex items-start gap-4">
        <span className="text-2xl font-light text-[var(--accent)] opacity-50">{number}</span>
        <div className="flex-1">
          <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">{title}</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{description}</p>
          <p className="text-xs text-[var(--text-muted)]">
            <span className="text-[var(--accent)] font-mono">{file}</span>
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-2 italic">{example}</p>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
      <h3 className="text-sm font-medium text-[var(--accent)] mb-2">{title}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, code, description }: { number: string; title: string; code?: string; description?: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-dim)] flex items-center justify-center">
        <span className="text-xs font-mono text-[var(--accent)]">{number}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">{title}</h3>
        {code && (
          <pre className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-3 py-2 rounded-lg overflow-x-auto">
            {code}
          </pre>
        )}
        {description && (
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
