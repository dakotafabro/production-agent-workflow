# Prompts

Starter prompts to use with your agent when filling in this template. Copy and paste these into a session to get help populating your conventions.

## Filling In Architecture Conventions

### If you have an existing codebase

```
Look at the directory structure of [path to your project]. Identify the architectural
layers (UI, business logic, data, networking). For each layer, describe what it's
responsible for and what it should NOT contain. Write the results into
conventions/architecture.md following the template structure already there.
```

### If you're starting fresh

```
I'm building a [type of app] using [language/framework]. Help me define layer
responsibilities for a clean architecture. What should each layer own? What are
the dependency rules between layers? Write the results into conventions/architecture.md.
```

## Filling In Testing Conventions

### From an existing test suite

```
Look at the test files in [path to your tests]. Identify the patterns being used:
- What test framework and assertion library?
- How are tests named?
- Are fakes or mocks preferred?
- How is async code tested?

Summarize these as conventions and write them into conventions/testing.md.
```

### From scratch

```
I'm using [test framework] with [assertion library]. Help me define testing
conventions for my project:
- Test naming format
- When to use fakes vs mocks
- How to handle async testing
- What needs tests vs what doesn't

Write the results into conventions/testing.md.
```

## Filling In PR Workflow

### From your team's existing norms

```
Here's how our team works:
- [describe your PR process, review expectations, merge strategy]
- [describe any tooling: GitHub, Graphite, GitLab, etc.]
- [describe any size or scope expectations]

Turn this into a conventions/pr-workflow.md that my agent can reference when
scoping work and drafting PR descriptions.
```

### If you're defining norms for the first time

```
Help me define PR workflow conventions. I want:
- A target PR size (in lines)
- Rules for what goes in one PR vs gets split
- A PR description template
- Guidelines for responding to review comments

Write these into conventions/pr-workflow.md.
```

## Building Your Pre-Push Checklist

### From your CI configuration

```
Look at [path to your CI config - .github/workflows/, .gitlab-ci.yml, Jenkinsfile, etc.].
Identify every check that runs on PRs. For each one, find the equivalent local command
I can run before pushing. Write these into conventions/pre-push-checklist.md in the
order CI runs them.
```

### From your package.json / build file

```
Look at my [package.json / build.gradle / Cargo.toml / Makefile]. Identify all the
available commands for formatting, linting, building, and testing. Assemble these into
a pre-push checklist in conventions/pre-push-checklist.md that I should run before
every push.
```

## Convention Mining From a PR Review

### After receiving review feedback

```
I just received this review feedback on my PR:

[paste the review comment]

Is this a general convention (applies to any similar code) or a one-time scope
decision? If it's a convention, write it in imperative form and tell me which
file in conventions/ it belongs in.
```

### After reviewing someone else's PR

```
I left this comment on a teammate's PR:

[paste your comment]

Does this express a general principle that should be encoded as a convention?
If so, capture it in the appropriate conventions file with source attribution.
```

## Building Your World Model

### Mapping an existing codebase

```
Look at the top-level directory structure of [path to project]. For each major
directory or module, describe:
- What domain it owns
- What it depends on
- What depends on it

Write a summary into references/ as a starting point for my world model.
```

### After joining a new team

```
I just joined a team working on [description]. I have access to:
- [list repos, wikis, docs you can see]

Help me build an initial world model by identifying:
- The major components and who owns them
- The architectural patterns in use
- Any conventions I should know about

Start with what you can see and note what I should ask teammates about.
```

## Customizing Your Workflow

### Adapting the phases to your process

```
Here's how I actually work:
- [describe your process from idea to shipped code]
- [describe any tools you use: ticket trackers, CI, deploy tools]
- [describe any rituals: standups, reviews, retros]

Rewrite workflow.md to match my actual process while keeping the gate structure
(orient before building, verify before pushing, scope before merging).
```

## Ongoing Maintenance

### Weekly convention review

```
Look at the conventions in conventions/. Are there any that:
- Contradict each other?
- Are too vague to be actionable?
- Are missing examples?
- Should be split into separate files?

Suggest improvements.
```

### After a CI failure

```
My CI failed with this error:

[paste error]

Is there a check I should add to my pre-push checklist in
conventions/pre-push-checklist.md so this doesn't happen again?
```
