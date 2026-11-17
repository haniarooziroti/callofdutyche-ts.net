/** * Central titles/descriptions for high-traffic routes. * Titles: 50–60 chars; descriptions: 120–155 chars (see scripts/seo-check.mjs). */ export interface PageSeoEntry { title: string; description: string; } const hub = '/products/call-of-duty-cheats/'; export const PAGE_SEO: Record<string, PageSeoEntry> = {   '/': {
    title: 'Call of Duty Cheats for PC | ESP & Aimbot Features',
    description:
      'Explore Call of Duty cheats for PC, including ESP and aimbot features. Compare compatibility, browse product details, and find checkout options.',
  }, [hub]: { title: 'Call of Duty Cheat Catalog | Features & Compatibility', description: 'Browse Call of Duty cheat modules for PC: ESP, aimbot, utilities, and compatibility notes. Compare features here, then open checkout for plans.', }, [`${hub}modules/`]: {
    title: 'Call of Duty Cheat Modules for ESP, Aimbot and Loot',
    description:
      'Call of Duty cheat modules for PC: radar, no recoil, item ESP, and loader path where listed. Read scope here, then open checkout for your plan.',
  }, [`${hub}cloud-dma/`]: {
    title: 'Call of Duty Cloud DMA Hardware | Cabling and Notes',
    description:
      'Cloud DMA basics for Call of Duty on PC: second machine, cabling, and firmware expectations. Read risks here before you add hardware at checkout.',
  }, [`${hub}utilities/`]: { title: 'Compare Call of Duty Utilities | HWID and Cloud DMA', description: 'Compare Call of Duty PC utilities: the HWID spoofer and Cloud DMA sit beside the cheat catalog. Match the tool to the problem, then open its page.', }, [`${hub}hwid-spoofer/`]: {
    title: 'Call of Duty HWID Spoofer | Fresh Windows Identifiers',
    description:
      'HWID spoofer workflow for Call of Duty on Windows: disk and MAC rotation, restore checkpoints, and verification before you relaunch the game on PC.',
  }, [`${hub}appeals/`]: {
    title: 'Account Appeals for Call of Duty | Evidence Workspace',
    description:
      'Appeal workspace for Call of Duty players: organize ban notices, receipts, and timelines. Informational help—not a guaranteed unban. Review before you submit.',
  },   '/blogs/': {
    title: 'COD CHEAT guides and blog articles for PC buyers',
    description:
      'Call of Duty blogs and guides on ESP, aimbot, compatibility, PC settings, and checkout. Search guides on cod-cheats.com before you buy.',
  },   '/reviews/': {
    title: 'COD CHEAT buyer reviews and ratings | cod-cheats.com',
    description:
      'Buyer reviews for Call of Duty cheat: ESP, aimbot, loader setup, and support. Sort by date or rating on cod-cheats.com before checkout.',
  },   '/forum/': {
    title: 'COD CHEAT forum threads | loaders, ESP & aimbot hub',
    description:
      'COD CHEAT forum threads on loaders, ESP clutter, aimbot FOV, patch nights, and loot intel from PC players—read before checkout on cod-cheats.com.',
  }, '/faq/': { title: 'Call of Duty Cheat FAQ | Loader, Risk, and Checkout', description: 'FAQ on Call of Duty cheat modules, loader status, HWID tools, Cloud DMA, and checkout. Scan answers first, then open support or the product hub.', }, '/terms/': {
    title: 'Terms of Use for cod-cheats.com | Liability & Refunds',
    description:
      'Terms for browsing cod-cheats.com, using guides and forum threads, and following outbound store checkout. Refunds follow the seller policy.',
  }, '/privacy/': { title: 'Privacy Policy | Cookies and Analytics on This Site', description: 'How cookies and analytics are used while you browse Call of Duty cheat pages, and how to contact us about data questions.', }, '/support/': { title: 'Call of Duty Cheat Support | Loader, Keys, Checkout', description: 'Support channels for loader issues, checkout questions, and module help on cod-cheats.com. Include your order email when contacting us.', }, '/about/': { title: 'About This Call of Duty Cheat Catalog and Buyer Guides', description: 'What cod-cheats.com covers: Call of Duty ESP, aimbot, and utility explainers plus community forum threads—not the game publisher.', }, }; export function normalizeSeoPath(pathname: string): string { let path = pathname || '/'; if (!path.startsWith('/')) path = `/${path}`; if (path !== '/' && !path.endsWith('/')) path = `${path}/`; return path; } export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined { return PAGE_SEO[normalizeSeoPath(pathname)]; } 