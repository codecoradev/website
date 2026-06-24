// Cloudflare Worker — codecora.dev router (service bindings version)
// Alternative to worker/index.js. Deployed manually via deploy-website.yml
// (workflow_dispatch). Auto-deploy uses worker/index.js (hostname-based).
//
// Routes:
//   codecora.dev/install              → 302 → uteke install.sh
//   codecora.dev/install/uteke        → 302 → uteke install.sh
//   codecora.dev/install/cora         → 302 → cora-cli install.sh
//   codecora.dev/install/trapfall     → 302 → trapfall install.sh
//   codecora.dev/                     → CF Pages service: codecora-dev
//   codecora.dev/docs/uteke/*         → CF Pages service: uteke
//   codecora.dev/docs/cora/*          → CF Pages service: cora
//   codecora.dev/docs/trapfall/*      → CF Pages service: trapfall
//   codecora.dev/docs/rungu/*         → CF Pages service: rungu-docs

// ── Install script redirects (curl | sh compatible) ──
const INSTALL_SCRIPTS = {
  '/install':          'https://raw.githubusercontent.com/codecoradev/uteke/main/install.sh',
  '/install/uteke':    'https://raw.githubusercontent.com/codecoradev/uteke/main/install.sh',
  '/install/cora':     'https://raw.githubusercontent.com/codecoradev/cora-cli/main/install.sh',
  '/install/trapfall': 'https://raw.githubusercontent.com/codecoradev/trapfall/main/install.sh',
};

// ── Docs routes → CF Pages service bindings ──
const ROUTES = [
  { prefix: '/docs/uteke',    binding: 'UTEKE' },
  { prefix: '/docs/cora',     binding: 'CORA' },
  { prefix: '/docs/trapfall', binding: 'TRAPFALL' },
  { prefix: '/docs/rungu',    binding: 'RUNGU' },
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Install redirects
    if (path in INSTALL_SCRIPTS) {
      return Response.redirect(INSTALL_SCRIPTS[path], 302);
    }

    // Find matching docs route (longest prefix match)
    for (const { prefix, binding } of ROUTES) {
      if (path.startsWith(prefix) || path.startsWith(prefix + '/')) {
        return env[binding].fetch(request);
      }
    }

    // /docs/* with no matching project → 404
    if (path.startsWith('/docs')) {
      return new Response('Not Found', { status: 404 });
    }

    // Default: landing page → website CF Pages
    return env.WEBSITE.fetch(request);
  },
};
