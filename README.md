# cod-cheats.net (Astro)

**Production site:** https://cod-cheats.net/

**Git remote (Workers / Pages must use this repo):**  
https://github.com/haniarooziroti/cod-che-ts.net.git

Default branch: `main` (alias `master` also exists for older build configs).

## Cloudflare Workers build

| Setting | Value |
|--------|--------|
| Root directory | `/` (repository root) |
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node version | 22+ |

Environment variables (dashboard or Worker secrets):

- `PUBLIC_SITE_ORIGIN=https://cod-cheats.net`
- `PUBLIC_GA_MEASUREMENT_ID` — your GA4 ID (optional)
- `GA_MEASUREMENT_ID` — same ID for runtime HTML rewrite (optional)

If the build log shows **“error occurred while fetching repository”**, reconnect Git in the Cloudflare dashboard: Worker → Settings → Builds → **Disconnect** and link again to `haniarooziroti/cod-che-ts.net`, branch `main`, and confirm the GitHub app can access this repository.

## Local

```bash
npm ci
npm run dev
npm run build
```