/** * Central titles/descriptions for high-traffic routes. * Titles: 50–60 chars; descriptions: 120–155 chars (see scripts/seo-check.mjs). */ export interface PageSeoEntry { title: string; description: string; } const hub = '/products/call-of-duty-cheats/'; export const PAGE_SEO: Record<string, PageSeoEntry> = {   '/': {
    title: 'Call of Duty Cheats for PC | ESP & Aimbot Features',
    description:
      'Call of Duty cheats for PC: ESP, aimbot, wallhack, and loot intel, with compatibility notes for Multiplayer and Operations.',
  }, [hub]: { title: 'Call of Duty Cheat Catalog | Call of Duty Cheats', description: 'Module list for Call of Duty on PC: ESP, aimbot, loot filters, triggers, and the utility pages that sit beside them.', }, [`${hub}modules/`]: {
    title: 'Call of Duty Cheat Modules | Call of Duty Cheats',
    description:
      'ESP, aimbot, loot filters, and triggers in the Call of Duty module set. Scope and compatibility are listed on this page.',
  }, [`${hub}cloud-dma/`]: {
    title: 'Call of Duty Cloud DMA | Call of Duty Cheats',
    description:
      'Cloud DMA for Call of Duty needs a second machine, cabling, and firmware that matches the listing. A single gaming PC is not that setup.',
  }, [`${hub}utilities/`]: { title: 'Call of Duty Utilities | Call of Duty Cheats', description: 'HWID spoofer and Cloud DMA for Call of Duty, listed next to the cheat catalog. Open the page that matches the problem you are solving.', }, [`${hub}hwid-spoofer/`]: {
    title: 'Call of Duty HWID Spoofer | Call of Duty Cheats',
    description:
      'HWID spoofer for Call of Duty on Windows: disk and MAC rotation, a restore point, and a check after a cold boot.',
  }, [`${hub}appeals/`]: {
    title: 'Call of Duty Ban Paperwork | Call of Duty Cheats',
    description:
      'Ban paperwork for Call of Duty: notices, receipts, and a timeline in one place. Organizing evidence does not reverse a ban.',
  },   '/blogs/': {
    title: 'Call of Duty Cheat Guides | Call of Duty Cheats',
    description:
      'Guides for Call of Duty on PC: aimbot FOV, player ESP, wallhack, recoil, setup, and patch days. Each article covers one topic.',
  },   '/reviews/': {
    title: 'Call of Duty Cheat Reviews | Call of Duty Cheats',
    description:
      'Ratings and written notes on Call of Duty cheats for PC. Sort by date or star rating, then open the matching guide.',
  },   '/forum/': {
    title: 'Call of Duty Cheat Forum | Call of Duty Cheats',
    description:
      'Forum threads on Call of Duty loaders, ESP, aimbot FOV, patch nights, and loot filters. Each thread is one question.',
  }, '/faq/': { title: 'Call of Duty Cheat FAQ | Call of Duty Cheats', description: 'Answers on Call of Duty cheat modules, loader status, HWID tools, and Cloud DMA. Longer setup notes stay on the matching guide.', }, '/terms/': {
    title: 'Terms of Use | Call of Duty Cheats Site',
    description:
      'Terms for using callofdutycheats.net, including the guides, forum, and checkout. Refunds follow the terms shown when you pay.',
  }, '/privacy/': { title: 'Privacy Policy | Call of Duty Cheats', description: 'How cookies and analytics are used on callofdutycheats.net, and how to ask a question about your data.', }, '/support/': { title: 'Call of Duty Cheat Support | Call of Duty Cheats', description: 'Help with the Call of Duty loader, keys, and module questions. Include the email from your order when you write in.', }, '/about/': { title: 'About the Call of Duty Cheats Catalog', description: 'callofdutycheats.net publishes Call of Duty cheat guides, a module catalog, and forum threads. It is not the game publisher.', }, }; export function normalizeSeoPath(pathname: string): string { let path = pathname || '/'; if (!path.startsWith('/')) path = `/${path}`; if (path !== '/' && !path.endsWith('/')) path = `${path}/`; return path; } export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined { return PAGE_SEO[normalizeSeoPath(pathname)]; } 