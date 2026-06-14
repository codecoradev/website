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
    link: https://uteke.codecora.dev
    linkText: Read the docs

  - icon: "🔍"
    title: "Cora CLI — Code Review"
    details: "CLI-first AI code review with BYOK. Supports diff, scan, branch modes and pre-commit hooks. 100% open source."
    link: https://github.com/codecoradev/cora-cli
    linkText: View on GitHub

  - icon: "🪤"
    title: "TrapFall — Error Capture"
    details: "Lightweight self-hosted error capture engine. Sentry-compatible API, built with Rust and SvelteKit 5."
    link: https://github.com/codecoradev/trapfall
    linkText: View on GitHub
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
