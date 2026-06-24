// Cloudflare Worker — codecora.dev router
// Routes:
//   codecora.dev/               → CF Pages: codecora-dev (landing page)
//   codecora.dev/docs/uteke/*   → CF Pages: uteke
//   codecora.dev/docs/cora/*    → CF Pages: cora
//   codecora.dev/docs/trapfall/* → CF Pages: trapfall
//   codecora.dev/docs/rungu/*    → CF Pages: rungu

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // ── Install redirects (curl | sh compatible) ──
    //   codecora.dev/install           → uteke install.sh
    //   codecora.dev/install/uteke      → uteke install.sh
    //   codecora.dev/install/cora       → cora-cli install.sh
    //   codecora.dev/install/trapfall   → trapfall install.sh
    const INSTALL_SCRIPTS = {
      '/install':         'https://raw.githubusercontent.com/codecoradev/uteke/main/install.sh',
      '/install/uteke':   'https://raw.githubusercontent.com/codecoradev/uteke/main/install.sh',
      '/install/cora':    'https://raw.githubusercontent.com/codecoradev/cora-cli/main/install.sh',
      '/install/trapfall':'https://raw.githubusercontent.com/codecoradev/trapfall/main/install.sh',
    };
    if (path in INSTALL_SCRIPTS) {
      return Response.redirect(INSTALL_SCRIPTS[path], 302);
    }

    // Route: /docs/uteke/* → uteke CF Pages
    if (path.startsWith('/docs/uteke')) {
      return env.UTEKE.fetch(request);
    }

    // Route: /docs/cora/* → cora CF Pages
    if (path.startsWith('/docs/cora')) {
      return env.CORA.fetch(request);
    }

    // Route: /docs/trapfall/* → trapfall CF Pages
    if (path.startsWith('/docs/trapfall')) {
      return env.TRAPFALL.fetch(request);
    }

    // Route: /docs/rungu/* → rungu CF Pages
    if (path.startsWith('/docs/rungu')) {
      return env.RUNGU.fetch(request);
    }

    // Route: /docs/* (no matching project) → 404
    if (path.startsWith('/docs')) {
      return new Response('Not Found', { status: 404 });
    }

    // Default: landing page → website CF Pages
    return env.WEBSITE.fetch(request);
  },
};
