---
layout: home

hero:
  name: "Codecora"
  text: "Developer Tools for AI Agents"
  tagline: "Open-source tools that keep your data local, your agents smart, and your code clean."
  image:
    src: /logo.png
    alt: Codecora
  actions:
    - theme: brand
      text: Explore Projects
      link: /projects/
    - theme: alt
      text: GitHub
      link: https://github.com/codecoradev

features:
  - icon: "🧠"
    title: "Uteke — Semantic Memory"
    details: "Offline-first semantic memory engine for AI agents. Single Rust binary, zero dependencies, 30ms recall. Fully offline, zero API keys."
    link: /docs/uteke/
    linkText: Read the docs

  - icon: "🔍"
    title: "Cora CLI — Code Review"
    details: "CLI-first AI code review with BYOK. Multi-LLM support, pre-commit hooks, SARIF output, deterministic scanners. 100% open source."
    link: /docs/cora/
    linkText: Read the docs

  - icon: "🪤"
    title: "TrapFall — Error Capture"
    details: "Lightweight self-hosted error capture engine. Sentry-compatible, Rust + SvelteKit 5 dashboard, Blake3 fingerprinting, 6MB Docker image."
    link: /docs/trapfall/
    linkText: Read the docs
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #d97706 30%, #fbbf24);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #d97706aa 50%, #fbbf24aa 50%);
  --vp-home-hero-image-filter: blur(44px);
}
@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}
@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
