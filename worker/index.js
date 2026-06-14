// Cloudflare Worker — codecora.dev router
// Routes:
//   codecora.dev/               → CF Pages: codecora-dev (landing page)
//   codecora.dev/docs/uteke/*   → CF Pages: uteke.pages.dev
//   codecora.dev/docs/cora/*    → CF Pages: cora-cli.pages.dev
//   codecora.dev/docs/trapfall/* → CF Pages: trapfall.pages.dev

const ROUTES = {
  '/docs/uteke':    'uteke.pages.dev',
  '/docs/cora':     'cora-cli.pages.dev',
  '/docs/trapfall': 'trapfall.pages.dev',
};

const LANDING_PAGE = 'codecora-dev.pages.dev';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Find matching route (longest prefix match)
    let target = null;
    let matchedPrefix = '';
    for (const [prefix, host] of Object.entries(ROUTES)) {
      if (path.startsWith(prefix) || path.startsWith(prefix + '/')) {
        if (prefix.length > matchedPrefix.length) {
          target = host;
          matchedPrefix = prefix;
        }
      }
    }

    // /docs/* with no matching project → 404
    if (path.startsWith('/docs') && !target) {
      return new Response('Not Found', { status: 404, headers: { 'content-type': 'text/plain' } });
    }

    // Default: landing page
    url.hostname = target || LANDING_PAGE;

    return fetch(new Request(url.toString(), request));
  },
};
