// Cloudflare Worker — codecora.dev router
// Single canonical worker (auto-deployed via deploy-worker.yml)
//
// Routes:
//   codecora.dev/install              → 302 → uteke install.sh
//   codecora.dev/install/uteke        → 302 → uteke install.sh
//   codecora.dev/install/cora         → 302 → cora-cli install.sh
//   codecora.dev/install/trapfall     → 302 → trapfall install.sh
//   codecora.dev/                     → CF Pages: codecora-dev (landing)
//   codecora.dev/docs/uteke/*         → CF Pages: uteke.pages.dev
//   codecora.dev/docs/cora/*          → CF Pages: cora-cli.pages.dev
//   codecora.dev/docs/trapfall/*      → CF Pages: trapfall.pages.dev
//   codecora.dev/docs/rungu/*         → CF Pages: rungu-docs.pages.dev

// ── Install script redirects (curl | sh compatible) ──
// 302 → raw GitHub. curl follows redirects with -L flag.
const INSTALL_SCRIPTS = {
  '/install':          'https://raw.githubusercontent.com/codecoradev/uteke/main/install.sh',
  '/install/uteke':    'https://raw.githubusercontent.com/codecoradev/uteke/main/install.sh',
  '/install/cora':     'https://raw.githubusercontent.com/codecoradev/cora-cli/main/install.sh',
  '/install/trapfall': 'https://raw.githubusercontent.com/codecoradev/trapfall/main/install.sh',
};

// ── Docs routes → CF Pages subdomains ──
// NOTE: cora-cli.pages.dev (NOT cora.pages.dev — that's a placeholder)
// NOTE: rungu-docs.pages.dev (NOT rungu.pages.dev — that's spam)
// stripPrefix: true → rewrite path before proxying (for docs with base='/')
const ROUTES = {
  '/docs/uteke':    { host: 'uteke.pages.dev' },
  '/docs/cora':     { host: 'cora-cli.pages.dev' },
  '/docs/trapfall': { host: 'trapfall.pages.dev' },
  '/docs/rungu':    { host: 'rungu-docs.pages.dev', stripPrefix: true },
};

const LANDING_PAGE = 'codecora-dev.pages.dev';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Install redirects
    if (path in INSTALL_SCRIPTS) {
      return Response.redirect(INSTALL_SCRIPTS[path], 302);
    }

    // Find matching docs route (longest prefix match)
    let target = null;
    let matchedPrefix = '';
    let stripPrefix = false;
    for (const [prefix, cfg] of Object.entries(ROUTES)) {
      if (path.startsWith(prefix) || path.startsWith(prefix + '/')) {
        if (prefix.length > matchedPrefix.length) {
          target = cfg.host;
          stripPrefix = !!cfg.stripPrefix;
          matchedPrefix = prefix;
        }
      }
    }

    // /docs/* with no matching project → 404
    if (path.startsWith('/docs') && !target) {
      return new Response('Not Found', { status: 404, headers: { 'content-type': 'text/plain' } });
    }

    // Default: landing page or matched docs subdomain
    url.hostname = target || LANDING_PAGE;

    // Rewrite path for docs served at root (base='/')
    if (stripPrefix && matchedPrefix) {
      url.pathname = path.slice(matchedPrefix.length) || '/';
    }

    return fetch(new Request(url.toString(), request));
  },
};
