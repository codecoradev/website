import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Codecora',
  description: 'Developer tools for AI agents — open-source, offline-first, privacy-respecting.',
  lang: 'en',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Codecora — Developer Tools for AI Agents' }],
    ['meta', { property: 'og:description', content: 'Open-source tools that keep your data local, your agents smart, and your code clean.' }],
    ['meta', { property: 'og:image', content: 'https://codecora.dev/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Codecora — Developer Tools for AI Agents' }],
    ['meta', { name: 'twitter:description', content: 'Open-source tools that keep your data local, your agents smart, and your code clean.' }],
  ],
  rewrites: {
    'docs/uteke/:page': 'docs/uteke/:page',
    'docs/cora/:page': 'docs/cora/:page',
    'docs/trapfall/:page': 'docs/trapfall/:page',
  },
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Projects', link: '/projects/' },
      {
        text: 'Docs',
        items: [
          { text: 'Uteke', link: '/docs/uteke/' },
          { text: 'Cora CLI', link: '/docs/cora/' },
          { text: 'TrapFall', link: '/docs/trapfall/' },
        ],
      },
      { text: 'About', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/codecoradev' },
    ],
    sidebar: {
      '/projects/': [],
      '/docs/uteke/': [
        {
          text: 'Uteke',
          items: [
            { text: 'Home', link: '/docs/uteke/' },
            { text: 'Getting Started', link: '/docs/uteke/getting-started' },
            { text: 'CLI Reference', link: '/docs/uteke/cli-reference' },
            { text: 'Configuration', link: '/docs/uteke/configuration' },
            { text: 'Docker', link: '/docs/uteke/docker' },
          ],
        },
        {
          text: 'Features',
          items: [
            { text: 'Rooms', link: '/docs/uteke/getting-started#rooms' },
            { text: 'Time-Travel', link: '/docs/uteke/getting-started#time-travel-queries' },
            { text: 'Multi-Agent', link: '/docs/uteke/multi-agent' },
            { text: 'Smart Decay', link: '/docs/uteke/getting-started#memory-importance-pinning' },
            { text: 'Relationship Graph', link: '/docs/uteke/getting-started#relationship-graph' },
            { text: 'Benchmarks', link: '/docs/uteke/getting-started#benchmarking' },
          ],
        },
        {
          text: 'Reference',
          items: [
            { text: 'Architecture', link: '/docs/uteke/architecture' },
            { text: 'TLS & Reverse Proxy', link: '/docs/uteke/tls' },
            { text: 'Roadmap', link: '/docs/uteke/roadmap' },
          ],
        },
      ],
      '/docs/cora/': [
        {
          text: 'Cora CLI',
          items: [
            { text: 'Home', link: '/docs/cora/' },
            { text: 'Installation', link: '/docs/cora/installation' },
            { text: 'Getting Started', link: '/docs/cora/getting-started' },
            { text: 'Usage', link: '/docs/cora/usage' },
            { text: 'Configuration', link: '/docs/cora/configuration' },
            { text: 'Examples', link: '/docs/cora/examples' },
            { text: 'Providers', link: '/docs/cora/providers' },
            { text: 'CLI Reference', link: '/docs/cora/cli-reference' },
            { text: 'Changelog', link: '/docs/cora/changelog' },
            { text: 'Roadmap', link: '/docs/cora/roadmap' },
          ],
        },
      ],
      '/docs/trapfall/': [
        {
          text: 'TrapFall',
          items: [
            { text: 'Home', link: '/docs/trapfall/' },
            { text: 'Getting Started', link: '/docs/trapfall/guide/getting-started' },
            { text: 'Configuration', link: '/docs/trapfall/guide/configuration' },
            { text: 'API', link: '/docs/trapfall/guide/api' },
            { text: 'CLI', link: '/docs/trapfall/guide/cli' },
            { text: 'Docker', link: '/docs/trapfall/guide/docker' },
            { text: 'SDK Integration', link: '/docs/trapfall/guide/sdk-integration' },
            { text: 'Security', link: '/docs/trapfall/guide/security' },
            { text: 'Search', link: '/docs/trapfall/guide/search' },
            { text: 'Alerts', link: '/docs/trapfall/guide/alerts' },
            { text: 'Multi-Project', link: '/docs/trapfall/guide/multi-project' },
            { text: 'MCP', link: '/docs/trapfall/guide/mcp' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/codecoradev' },
    ],
    footer: {
      message: 'Released under the Apache 2.0 and MIT Licenses.',
    },
  },
})
