---
title: About Codecora
description: "Codecora builds developer tools for AI agents — Rust-powered, open-source, offline-first. Learn about our mission, philosophy, and the tools we build."
head:
  - ['meta', { property: 'og:title', content: 'About Codecora — Developer Tools for AI Agents' }]
  - ['meta', { property: 'og:description', content: 'Codecora builds developer tools for AI agents — Rust-powered, open-source, offline-first.' }]
  - ['meta', { property: 'og:image', content: 'https://codecora.dev/logo.png' }]
  - ['meta', { property: 'og:url', content: 'https://codecora.dev/about' }]
---

# About Codecora

Codecora builds developer tools for the AI agent era — open-source at heart, with room to grow.

## Our Philosophy

**Local-first by default.** Your data should stay on your machine. We build tools that work offline, need zero API keys, and never phone home.

**Simple to start, powerful to scale.** Single binary installs, sensible defaults, and configurable enough for any workflow — from a solo dev to a team of AI agents.

**Open-source core.** Our tools are MIT or Apache 2.0 licensed. We believe in transparent, community-driven development — and we may offer paid tiers for teams and enterprise in the future.

## The Stack

All of our tools are built with Rust for performance and reliability:

| Project | Role | Why Rust? |
|---|---|---|
| **Cora CLI** | Code review | Native speed, zero cold starts, cross-platform |
| **Cora Review Action** | CI/CD integration | GitHub Action wrapper for Cora CLI |
| **Uteke** | Semantic memory | 30ms recall, single binary, ONNX runtime |
| **TrapFall** | Error capture | Minimal footprint, 6MB Docker, MUSL static |
| **Rungu** | Feedback board | Lightweight self-hosted, zero dependencies |

## The Problem We Solve

AI agents are getting powerful — but they're forgetful, blind, and noisy:

- **Code review is slow and expensive** → Cora makes it instant and configurable
- **Agents forget context** across conversations → Uteke gives them persistent memory
- **Error monitoring is bloated** → TrapFall fits in 6MB with full Sentry compatibility
- **User feedback is scattered** → Rungu keeps it in one self-hosted place

## Contact & Community

- **GitHub**: [github.com/codecoradev](https://github.com/codecoradev)

## License

Each project has its own license:

- **Cora CLI**: MIT
- **Cora Review Action**: MIT
- **Uteke**: Apache 2.0
- **TrapFall**: Apache 2.0
- **Rungu**: MIT
