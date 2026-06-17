---
title: "Projects — Cora CLI, Uteke, TrapFall, Rungu"
description: "Explore Codecora's open-source developer tools: Cora CLI (AI code review), Uteke (semantic memory), TrapFall (error capture), and Rungu (feedback board). Built with Rust for AI agents."
head:
  - ['meta', { property: 'og:title', content: 'Codecora Projects — Open-Source Developer Tools for AI Agents' }]
  - ['meta', { property: 'og:description', content: 'Cora CLI, Uteke, TrapFall, and Rungu — open-source tools built with Rust for the AI agent era.' }]
  - ['meta', { property: 'og:image', content: 'https://codecora.dev/logo.png' }]
  - ['meta', { property: 'og:url', content: 'https://codecora.dev/projects/' }]
---

# Projects

Open-source developer tools built for the AI agent era.

---

## [🔍 Cora CLI](/docs/cora/) {#cora-cli}

**AI Code Review, Your Way** — CLI-first code review with BYOK.

| | |
|---|---|
| **Language** | Rust |
| **Install** | `curl -fsSL https://raw.githubusercontent.com/codecoradev/cora-cli/main/install.sh \| sh` |
| **License** | MIT |
| **Stars** | ![GitHub stars](https://img.shields.io/github/stars/codecoradev/cora-cli?style=social) |
| **Version** | ![Crates.io](https://img.shields.io/crates/v/cora-cli.svg) |

Review code with any LLM — OpenAI, Anthropic, Groq, Ollama, or any OpenAI-compatible API. Works in your terminal, CI/CD, git hooks, or directly inside AI coding agents.

**Key features:**
- **Multi-LLM** — Any OpenAI-compatible API, no lock-in
- **Deterministic scanners** — 11 security + 12 secret detection patterns, no LLM needed
- **Pre-commit hooks** — Catch issues before they reach CI
- **SARIF output** — Upload to GitHub Code Scanning
- **Quality gate** — Configurable pass/fail thresholds for CI enforcement
- **MCP server** — Expose rules to AI agents (Claude Code, Cursor, Copilot)
- **Diff-hash caching** — Skip repeat reviews automatically
- **Custom rule engine** — Write your own regex rules in `.cora.yaml`

[Read the docs →](/docs/cora/) · [GitHub →](https://github.com/codecoradev/cora-cli)

### GitHub Action: cora-review-action

[![GitHub Marketplace](https://img.shields.io/badge/Marketplace-Cora%20AI%20Code%20Review-blue?logo=github)](https://github.com/marketplace/actions/cora-ai-code-review)

AI-powered code review as a GitHub Action. Runs Cora CLI on every PR, posts review comments automatically. BYOK, supports any OpenAI-compatible LLM.

[GitHub →](https://github.com/codecoradev/cora-review-action) · [Install from Marketplace →](https://github.com/marketplace/actions/cora-ai-code-review)

---

## [🧠 Uteke](/docs/uteke/) {#uteke}

**The Brain for Your AI** — Offline-first semantic memory engine for AI agents.

| | |
|---|---|
| **Language** | Rust |
| **Install** | `curl -sSL https://raw.githubusercontent.com/codecoradev/uteke/main/install.sh \| sh` |
| **License** | Apache 2.0 |
| **Stars** | ![GitHub stars](https://img.shields.io/github/stars/codecoradev/uteke?style=social) |
| **Version** | ![Crates.io](https://img.shields.io/crates/v/uteke.svg) |

Single binary, zero dependencies, zero API keys. Your AI agent's memories never leave your machine.

**Key features:**
- **Hybrid search** — Vector (ONNX 768d) + FTS5 full-text, merged by Reciprocal Rank Fusion
- **Rooms** — Group memories by context (meetings, projects) with author attribution
- **Time-travel queries** — Recall memories as they existed at any point in time
- **Relationship graph** — Typed edges between memories (supersedes, contradicts, references)
- **Smart decay** — Composite importance scoring, pin critical memories
- **Pluggable embeddings** — ONNX (default), future OpenAI/Ollama backends
- **Multi-agent namespaces** — Fully isolated memory per agent, zero overhead
- **30ms recall** — Library mode, ~42ms server mode

[Read the docs →](/docs/uteke/) · [GitHub →](https://github.com/codecoradev/uteke)

---

## [🪤 TrapFall](/docs/trapfall/) {#trapfall}

**Self-Hosted Error Capture** — Sentry-compatible, lightweight, and fast.

| | |
|---|---|
| **Language** | Rust + SvelteKit 5 |
| **Install** | `docker pull ghcr.io/codecoradev/trapfall:latest` |
| **License** | Apache 2.0 |
| **Image size** | ![Docker](https://img.shields.io/docker/image-size/codecoradev/trapfall/latest) |
| **Version** | Latest |

Drop-in Sentry alternative. Swap your DSN and errors flow to your own server. Real-time dashboard, Blake3 fingerprinting, webhook alerts — all in a 6MB Docker image.

**Key features:**
- **Sentry-compatible ingest** — Drop-in DSN swap, any Sentry SDK
- **Multi-project support** — Web, mobile, API — isolated DSN per project
- **Real-time dashboard** — SvelteKit 5 + Tailwind v4 + shadcn-svelte
- **Blake3 fingerprinting** — Automatic error grouping and deduplication
- **Alert rules** — Per-project condition-based webhooks with cooldown
- **Full-text search** — SQLite FTS5 + trigram substring search
- **OpenAPI docs** — Swagger UI at `/api/docs`
- **MCP server** — 12 AI agent tools via stdio JSON-RPC
- **Tiny Docker image** — 5.75MB (scratch + MUSL static binary)

[Read the docs →](/docs/trapfall/) · [GitHub →](https://github.com/codecoradev/trapfall)

---

## [💬 Rungu](https://github.com/codecoradev/rungu) {#rungu}

**Self-Hosted Feedback Board** — Collect feature requests, bug reports, and roadmap priorities. Simple, fast, no SaaS lock-in.

| | |
|---|---|
| **Language** | Rust |
| **License** | MIT |
| **Stars** | ![GitHub stars](https://img.shields.io/github/stars/codecoradev/rungu?style=social) |

Lightweight self-hosted feedback collection. Give your users a place to share ideas and report issues — without depending on external SaaS services.

**Key features:**
- **Feature request collection** — Let users submit and vote on ideas
- **Bug report tracking** — Structured bug reports with status tracking
- **Self-hosted** — Your data, your server, zero external dependencies

[GitHub →](https://github.com/codecoradev/rungu)
