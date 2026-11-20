import { CANONICAL_ORIGIN, legacyBlogRedirect } from './blog-redirects';

interface Env {
  ASSETS: Fetcher;
  GA_MEASUREMENT_ID?: string;
}

const PRODUCTION_HOST = 'callofdutycheats.net';

/** Prior clone hostnames only — never include cod-cheats.com (independent site). */
const LEGACY_ALIAS_HOSTS = new Set(['www.callofdutycheats.net', 'cod-cheats.net', 'www.cod-cheats.net']);

function withRobots(response: Response, hostname: string): Response {
  if (!hostname.endsWith('.workers.dev') && !hostname.endsWith('.pages.dev')) return response;
  const headers = new Headers(response.headers);
  if (!headers.has('X-Robots-Tag')) headers.set('X-Robots-Tag', 'noindex, nofollow');
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname;

    if (host !== PRODUCTION_HOST && LEGACY_ALIAS_HOSTS.has(host)) {
      const target = `${CANONICAL_ORIGIN}${url.pathname}${url.search}`;
      return withRobots(Response.redirect(target, 301), host);
    }

    const blogTarget = legacyBlogRedirect(url.pathname);
    if (blogTarget) return withRobots(Response.redirect(blogTarget, 301), host);

    const assetResponse = await env.ASSETS.fetch(request);
    const headers = new Headers(assetResponse.headers);
    headers.set('X-Content-Type-Options', 'nosniff');
    let response = new Response(assetResponse.body, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers,
    });

    const gaId = env.GA_MEASUREMENT_ID?.trim();
    const type = response.headers.get('content-type') ?? '';
    const isPreview = host.endsWith('.workers.dev') || host.endsWith('.pages.dev');
    if ((gaId || isPreview) && type.includes('text/html')) {
      let rewriter = new HTMLRewriter();
      if (gaId) {
        rewriter = rewriter.on('meta[name="ga4-measurement-id"]', {
          element(element) {
            element.setAttribute('content', gaId);
          },
        });
      }
      if (isPreview) {
        rewriter = rewriter.on('head', {
          element(element) {
            element.prepend('<meta name="robots" content="noindex,nofollow">', { html: true });
          },
        });
      }
      response = rewriter.transform(response);
    }

    return withRobots(response, host);
  },
};