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
  - icon: "🔍"
    title: "Cora CLI — Code Review"
    details: "AI-powered code review with BYOK. Multi-LLM, pre-commit hooks, SARIF output, deterministic scanners, quality gates. 100% open source."
    link: /projects/#cora-cli
    linkText: Learn more

  - icon: "🧠"
    title: "Uteke — Semantic Memory"
    details: "Offline-first semantic memory engine for AI agents. Hybrid vector + FTS search, 30ms recall. Fully offline, zero API keys."
    link: /projects/#uteke
    linkText: Learn more

  - icon: "🪤"
    title: "TrapFall — Error Capture"
    details: "Lightweight self-hosted error capture. Sentry-compatible, Blake3 fingerprinting, real-time dashboard, 6MB Docker image."
    link: /projects/#trapfall
    linkText: Learn more

  - icon: "💬"
    title: "Rungu — Feedback Board"
    details: "Self-hosted feedback collection board. Feature requests, bug reports, roadmap — simple, fast, no SaaS lock-in."
    link: /projects/#rungu
    linkText: Learn more
---

<div class="install-bar">
  <p>Quick start — install Cora CLI</p>
  <code class="install-code" onclick="navigator.clipboard.writeText(this.textContent.trim());this.classList.add('copied');setTimeout(()=>this.classList.remove('copied'),800)" title="Click to copy">curl -fsSL https://raw.githubusercontent.com/codecoradev/cora-cli/main/install.sh | sh</code>
</div>

<div class="vp-doc">

## Why Codecora?

<div class="why-grid">
  <div class="why-card">
    <div class="why-icon">🔒</div>
    <h3>Local-First</h3>
    <p>Your data stays on your machine. Zero cloud dependency, zero API keys required. Works offline.</p>
  </div>
  <div class="why-card">
    <div class="why-icon">🦀</div>
    <h3>Rust-Powered</h3>
    <p>Native speed, zero cold starts, tiny footprints. Single binary installs, cross-platform.</p>
  </div>
  <div class="why-card">
    <div class="why-icon">🧩</div>
    <h3>Composable</h3>
    <p>Use any tool standalone, or combine them. Cora + Uteke = reviews that learn. TrapFall + Cora = full-cycle quality.</p>
  </div>
</div>

</div>

<style>
/* Install bar */
.install-bar {
  text-align: center;
  margin: -1rem auto 2rem;
  max-width: 640px;
  padding: 0 1rem;
}
.install-bar p {
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}
.install-code {
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 0.85rem;
  cursor: pointer;
  user-select: all;
  word-break: break-all;
  transition: outline 0.2s;
}
.install-code.copied {
  outline: 2px solid var(--vp-c-brand-1);
}

/* Why Codecora grid */
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem auto;
  max-width: 960px;
  padding: 0 1rem;
}
.why-card {
  text-align: center;
  padding: 1rem;
}
.why-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.why-card h3 {
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.why-card p {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Hero gradient */
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
