# About Codecora

Codecora builds open-source developer tools for the AI agent era.

## Our Philosophy

**Local-first by default.** Your data should stay on your machine. We build tools that work offline, require zero API keys, and never phone home.

**Minimal dependencies.** Single binaries where possible. No Docker required. No database servers to manage. Download and run.

**Open source.** All projects are released under permissive licenses (Apache 2.0 or MIT). Use them, fork them, ship them.

## The Ecosystem

Our tools are designed to work together. Uteke provides the memory layer, Cora reviews the code, and TrapFall captures the errors — all sharing a common philosophy of privacy, simplicity, and local-first operation.

```
codecoradev/
├── uteke/           ← Semantic memory engine (Rust)
├── cora-cli/        ← AI code review (Rust)
├── trapfall/        ← Error capture (Rust + SvelteKit)
└── cora-review-action/ ← GitHub Action for PR review
```

## Contact

- **GitHub:** [github.com/codecoradev](https://github.com/codecoradev)
- **Issues:** Open an issue on any repository
