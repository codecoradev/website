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
| **Uteke** | Semantic memory | 30ms recall, single binary, ONNX runtime |
| **Cora CLI** | Code review | Native speed, zero cold starts, cross-platform |
| **TrapFall** | Error capture | Minimal footprint, 6MB Docker, MUSL static |

## The Problem We Solve

AI agents are getting powerful — but they're forgetful, blind, and noisy:

- **Agents forget context** across conversations → Uteke gives them persistent memory
- **Code review is slow and expensive** → Cora makes it instant and configurable
- **Error monitoring is bloated** → TrapFall fits in 6MB with full Sentry compatibility

## Contact & Community

- **GitHub**: [github.com/codecoradev](https://github.com/codecoradev)
- **Discussions**: [github.com/codecoradev/uteke/discussions](https://github.com/codecoradev/uteke/discussions)

## License

Each project has its own license:

- **Uteke**: Apache 2.0
- **Cora CLI**: MIT
- **TrapFall**: Apache 2.0
