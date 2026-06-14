import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Codecora',
  description: 'Developer tools for AI agents — open-source, offline-first, privacy-respecting.',
  lang: 'en',
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Codecora — Developer Tools for AI Agents' }],
    ['meta', { property: 'og:description', content: 'Open-source tools that keep your data local, your agents smart, and your code clean.' }],
    ['meta', { property: 'og:image', content: 'https://codecora.dev/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Codecora — Developer Tools for AI Agents' }],
    ['meta', { name: 'twitter:description', content: 'Open-source tools that keep your data local, your agents smart, and your code clean.' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Projects', link: '/projects/' },
      {
        text: 'Docs',
        items: [
          { text: 'Uteke', link: 'https://codecora.dev/docs/uteke/' },
          { text: 'Cora CLI', link: 'https://codecora.dev/docs/cora/' },
          { text: 'TrapFall', link: 'https://codecora.dev/docs/trapfall/' },
        ],
      },
      { text: 'About', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/codecoradev' },
    ],
    sidebar: {
      '/projects/': [],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/codecoradev' },
    ],
    footer: {
      message: 'Released under the Apache 2.0 and MIT Licenses.',
    },
  },
})
