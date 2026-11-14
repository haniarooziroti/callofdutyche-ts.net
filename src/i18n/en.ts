import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';
import { SEO_MEDIA } from '../config/media';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'COD Cheats',
    domain: 'cod-cheats.net',
    title: 'Call of Duty Cheats for PC | ESP & Aimbot Features',
    description:
      'Explore Call of Duty cheats for PC, compare available ESP and aimbot features, review game compatibility, and find product details before checkout.',
    brandMarkAlt: 'cod-cheats.net',
  },
  forum: {
    eyebrow: 'Player forum',
    title: 'Call of Duty cheats forum: setup & ESP threads',
    subtitle: 'Aimbot tuning, ESP layouts, loader help, and patch-night threads from PC players.',
    viewAll: 'Browse all forums',
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/forum/', label: 'Forum' },
    { href: '/blogs/', label: 'Blogs' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  reviews: {
    eyebrow: 'Reviews',
    title: 'Call of Duty cheat reviews from buyers',
    kicker: 'Reviews on Call of Duty cheats',
    subtitle:
      'Reviews on aimbot, ESP, wallhack, setup, and support from verified buyers on cod-cheats.net.',
  },
  hero: {
    status: 'Call of Duty supported PC titles — loader online',
    eyebrow: 'Call of Duty cheats PC',
    titleLine1: 'Call of Duty cheats for PC',
    titleLine2: '',
    subtitle:
      'Player ESP, aimbot, wallhack, and loot intel for supported PC titles on PC. This page is the feature overview. Plan prices and checkout steps each have their own page.',
    ctaPrimary: 'Call of Duty cheat plans',
    ctaDiscord: 'Buy now',
    modesLabel: 'Game modes',
    modes: ['Multiplayer', 'Ranked Play', 'Battle Royale', 'Private matches'],
    metrics: [
      { label: 'Module guides', strong: 'On-site' },
      { label: 'Checkout', strong: 'Secure' },
      { label: 'Support', strong: 'FAQ + Forum' },
      { label: 'Capture-friendly', strong: 'Stream-safe' },
    ],
  },
  features: {
    eyebrow: 'Call of Duty hack modules',
    title: 'ESP, aimbot, and wallhack without a noisy HUD',
    subtitle:
      'Call of Duty supported PC titles cheats cover warfare lanes, operations intel, and extraction loot reads—tune one mode at a time on PC.',
    items: [
      {
        title: 'Call of Duty aimbot',
        subtitle: 'Warfare & operations curves',
        desc: 'FOV-capped aimbot smoothing with separate Multiplayer and Operations profiles, plus optional no recoil assist per rifle class.',
        bullets: [
          'Call of Duty warfare aimbot presets',
          'Hip and ADS smoothing splits',
          'No recoil sliders where the build lists them',
          'Visible-check before snap assists',
        ],
        tags: ['Call of Duty aimbot', 'Call of Duty warfare aimbot', 'no recoil'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Call of Duty ESP & wallhack',
        subtitle: 'Operations overlays',
        desc: 'Player boxes, skeletons, and wallhack-style reads tuned for Call of Duty operations ESP—team colors stay muted so night maps stay readable.',
        bullets: ['Call of Duty esp distance caps', 'Helmet and armor tags', 'Teammate mute for squads', 'Chams for breach stairs'],
        tags: ['Call of Duty esp', 'Call of Duty wallhack', 'operations esp'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Loot & extraction intel',
        subtitle: 'Raid economy',
        desc: 'Loot ESP and item ESP with price filters for extraction cheats—computers, corpses, and high-value containers without spamming the screen.',
        bullets: ['Call of Duty loot esp filters', 'Call of Duty extraction esp markers', 'Minimum price gates', 'Combat mode hide for pushes'],
        tags: ['Call of Duty loot esp', 'Call of Duty item esp', 'extraction cheats'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Radar reinforcement',
        subtitle: 'Rotate support',
        desc: 'Optional radar hack dots that agree with audio on wide warfare maps—keep them subtle beside player ESP.',
        bullets: ['Off-screen threat hints', 'Height bias for multi-floor fights', 'Works with wallhack layouts'],
        tags: ['Call of Duty radar hack', 'Call of Duty esp', 'warfare cheats'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Triggerbot timing',
        subtitle: 'Peek discipline',
        desc: 'Call of Duty triggerbot delay for pistols and DMRs—split profiles so warfare duels do not share the same milliseconds as operations room clears.',
        bullets: ['Separate pistol and rifle delays', 'Team damage guard', 'Pairs with aimbot FOV caps'],
        tags: ['Call of Duty triggerbot', 'Call of Duty cheat', 'private cheats'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Misc & loader',
        subtitle: 'Third person, FOV, configs',
        desc: 'Call of Duty misc cheats—FOV changer, third-person hold keys, and cloud configs—behind the same cheat loader download the portal lists for PC.',
        bullets: ['Call of Duty cheat loader status banner', 'Config import for warfare vs operations', 'External cheat path notes when listed', 'Stream-safe capture toggles'],
        tags: ['Call of Duty misc cheats', 'Call of Duty cheat loader', 'Call of Duty cheats download'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Stream-safe capture',
        subtitle: 'Record clean footage',
        desc: 'Hide ESP and menu layers from OBS or Game Bar while you keep intel on your monitor—test locally before any broadcast.',
        bullets: ['Per-module capture hide', 'OBS checklist in portal', 'Works beside wallhack presets'],
        tags: ['Call of Duty hacks', 'Call of Duty cheats pc', 'best Call of Duty cheats'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why operators pick this stack',
    title: 'supported PC titles defaults, loader-first delivery',
    subtitle:
      'Most Call of Duty hack listings push noisy rage sliders. This catalog foregrounds operations ESP, warfare aimbot caps, and quick rebuilds after supported PC titles patches.',
    usLabel: 'This Call of Duty stack',
    otherLabel: 'Typical resellers',
    rows: [
      {
        title: 'Loader-first workflow',
        desc: 'Clear online/offline banner before you inject—no guessing after a Call of Duty security update.',
      },
      {
        title: 'Aim curves you can flatten',
        desc: 'Defaults lean legit-side; rage sliders stay out of the main profile unless you opt in.',
      },
      {
        title: 'Discord operators on shift',
        desc: 'Humans on Discord for HWID resets and warfare vs operations tuning—not copy-paste bots.',
        descParts: ['Humans on ', ' for HWID resets and mode-specific tuning—not copy-paste bots.'],
      },
      {
        title: 'ESP layering discipline',
        desc: 'Skeleton, box, and glow stack without covering crosshair space on 16:9 and 4:3 stretched.',
      },
      {
        title: 'Forum-first context',
        desc: 'Read aimbot vs trigger trade-offs in forum threads, then match presets to warfare or extraction cheats.',
      },
      {
        title: 'Hardware tools when accounts fray',
        desc: 'Spoofer and appeal tools sit beside the main cheat page so you can match software to your situation.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Typical rebuild',
        desc: 'Target window after disruptive Call of Duty patches—check status before queue.',
      },
      {
        value: 'FAQ',
        title: 'On-site help',
        desc: 'Loader and checkout questions start on the FAQ and support pages on this site.',
      },
      {
        value: '10',
        title: 'Module guides',
        desc: 'Hub notes on ESP, wallhack layouts, loaders, and patch-night checks on this site.',
      },
    ],
  },
  setup: {
    eyebrow: 'Quick setup',
    titleLead: 'Three calm steps before your first',
    titleHighlight: 'supported PC titles queue',
    intro:
      'Buy Call of Duty paid cheats through checkout, pull the Call of Duty cheat loader from the portal, import a conservative operations ESP preset, then verify the banner is green on PC.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Read FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Checkout & portal login',
        desc: 'Complete payment on the store page, save your license mail, and sign into the operator portal.',
      },
      {
        step: 'Step 2',
        title: 'Download & whitelist',
        desc: 'Fetch the latest loader, add exclusions where needed, and load a beginner ESP or legit aim preset.',
      },
      {
        step: 'Step 3',
        title: 'Warmup then live modes',
        desc: 'Run a private match check, note FPS impact, then queue Multiplayer or Operations with stream-safe capture confirmed.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Call of Duty cheats PC on Windows',
    subtitle:
      'Call of Duty supported PC titles on current client branch. External cheat builds may list extra steps—read the portal notes before you enable full ESP in warfare.',
    items: [
      'Windows 10 & 11',
      'Steam Call of Duty',
      '64-bit loader',
      'Auto updater',
      'Cloud cfg sync',
      'Live status',
      'HWID tools',
      'Forum + guides',
    ],
  },
  cheats: {
    eyebrow: 'Products',
    title: 'Call of Duty cheats & utilities',
    subtitle:
      'One module catalog with HWID spoofer, UGC appeals, and Cloud DMA—same-tab checkout when you are ready.',
    viewAll: 'View catalog',
    explore: 'Explore',
    items: [],
  },
  products: {
    eyebrow: 'Products',
    title: 'Call of Duty cheats & utilities',
    subtitle:
      'Call of Duty esp, aimbot, and loot modules plus HWID spoofer, UGC appeals, and Cloud DMA in one grid—in stock on the linked store.',
    viewAll: 'View catalog',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'In stock',
        category: 'System utility',
        title: 'Call of Duty HWID spoofer',
        subtitle: 'Fresh fingerprints',
        desc: 'Rebuild disk and MAC identifiers after hardware flags—follow the portal checklist before returning to Call of Duty.',
        features: ['Serial rotation', 'Restore-point walkthrough', 'Conflict scan', 'Post-spoof verifier'],
        more: 8,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'In stock',
        category: 'Account recovery',
        title: 'Call of Duty account appeals',
        subtitle: 'Organize ban notices, receipts, and a timeline here. Appeals are not listed again on the utilities hub.',
        desc: 'Workspace for ban and trade-lock paperwork—organizes evidence, not a promised overturn.',
        features: ['Appeal templates', 'Timeline tracking', 'Secure uploads', 'Multi-platform notes'],
        more: 5,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'In stock',
        category: 'DMA hardware',
        title: 'Call of Duty Cloud DMA',
        subtitle: 'External read path',
        desc: 'What Cloud DMA add-ons are: second PC, cabling, and firmware expectations on the linked store before you buy hardware.',
        features: ['Seller listing alignment', 'Cabling checklist', 'BIOS / IOMMU notes', 'Risk disclaimer'],
        more: 6,
        href: `${productBase}cloud-dma/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blogs',
    title: 'Call of Duty cheat insights',
    subtitle: 'ESP tuning, warfare vs operations presets, extraction loot filters, and loader hygiene.',
    latestTitle: 'Call of Duty blogs and guides',
    latestSubtitle:
      'Setup notes for ESP, aimbot, and wallhack modules—read the guide that matches your stack, then open checkout when you are ready to buy.',
    filterAll: 'All guides',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No guides match this filter.',
    viewAll: 'Browse every Call of Duty guide',
    read: 'Read this guide',
    items: [
      {
        tag: 'Setup',
        title: 'How to install Call of Duty cheats from the portal',
        slug: 'how-to-install-delta-force-cheats',
        image: SEO_MEDIA.heroOperations,
        desc: 'Buy Call of Duty cheats with fewer boot errors—portal download, verify, and first-launch steps before you queue ranked.',
        date: 'Oct 28, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'Call of Duty ESP settings that stay readable in clutches',
        slug: 'delta-force-esp-settings',
        image: SEO_MEDIA.nightRaid,
        desc: 'Pick ESP presets before checkout—box thickness, glow, and teammate mute that stay readable on night Operations maps.',
        date: 'Oct 25, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'Aimbot smoothing for Call of Duty ranked queues',
        slug: 'delta-force-aimbot-smoothing',
        image: SEO_MEDIA.aimbotHud,
        desc: 'Lock aimbot knobs before you pay—FOV caps, bone priority, and delay curves for ranked supported PC titles queues.',
        date: 'Oct 22, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Safety',
        title: 'Call of Duty anti-cheat: what buyers should expect',
        slug: 'delta-force-anti-cheat-notes',
        image: SEO_MEDIA.espTactical,
        desc: 'Platform integrity tools, patch nights, and how operators pause modules after supported PC titles updates.',
        date: 'Oct 19, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Wallhack-style vision without blocking your crosshair',
        slug: 'delta-force-wallhack-layout',
        image: SEO_MEDIA.wallhackLayout,
        desc: 'Choose a wallhack layout before purchase—skeleton under glow, bomb intel in corners, crosshair kept clear.',
        date: 'Oct 15, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'Triggerbot timing for Call of Duty duel peeks',
        slug: 'delta-force-triggerbot-timing',
        image: SEO_MEDIA.lootIntel,
        desc: 'Delay vs burst modes for close-angle duels on breach and extraction sites.',
        date: 'Oct 12, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Troubleshooting',
        title: 'VAC error messages after a Call of Duty patch',
        slug: 'delta-force-loader-errors',
        image: SEO_MEDIA.chamsPreview,
        desc: 'Verify the PC client, restart if errors persist, and pause cheats until the portal banner clears.',
        date: 'Oct 8, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'HWID spoofing before a new Call of Duty account',
        slug: 'hwid-spoof-new-delta-force-account',
        image: SEO_MEDIA.heroOperations,
        desc: 'Cold boot checklist when hardware is tied to an old restriction.',
        date: 'Oct 4, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'Call of Duty radar hack overlays vs audio',
        slug: 'delta-force-radar-overlay-tips',
        image: SEO_MEDIA.dmaSetup,
        desc: 'When to lean on radar reinforcement dots and when squad callouts should stay primary.',
        date: 'Sep 30, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Stream proof setup for Call of Duty overlays',
        slug: 'delta-force-stream-proof-overlays',
        image: SEO_MEDIA.chamsPreview,
        desc: 'OBS scene testing so viewers see clean gameplay while you keep intel.',
        date: 'Sep 26, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'Buying',
        title: 'Call of Duty aimbot: FOV caps and ADS curves',
        slug: 'aimbot-hud-tuning',
        image: SEO_MEDIA.aimbotHud,
        desc: 'Confirm aimbot FOV and ADS smoothing match the module you checkout—then queue Multiplayer with kill-cam-safe curves.',
        date: 'Nov 4, 2025',
        readTime: '4 min read',
      },
      {
        tag: 'Buying',
        title: 'Tactical ESP: distance caps and teammate mute',
        slug: 'esp-tactical-layout',
        image: SEO_MEDIA.espTactical,
        desc: 'Shorten ESP draw distance and mute squad silhouettes so the ESP tier you buy matches night raids and breach pushes.',
        date: 'Nov 3, 2025',
        readTime: '4 min read',
      },
      {
        tag: 'Buying',
        title: 'Wallhack layouts for breach pushes',
        slug: 'wallhack-breach-reads',
        image: SEO_MEDIA.wallhackLayout,
        desc: 'Box-and-distance wallhack presets beat glow stacks on stairs—mirror this layout before you add wallhack to cart.',
        date: 'Nov 2, 2025',
        readTime: '4 min read',
      },
      {
        tag: 'Buying',
        title: 'Extraction cheats: loot esp price filters',
        slug: 'extraction-loot-filters',
        image: SEO_MEDIA.lootIntel,
        desc: 'Set loot ESP minimum value and combat-hide hotkeys before you buy extraction modules—fewer refunds, faster raids.',
        date: 'Nov 1, 2025',
        readTime: '4 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Toolkit',
    title: 'Modules that map to real Call of Duty problems',
    subtitle: 'Stack ESP, wallhack-style boxes, aimbot curves, radar hack dots, or triggerbot delays—never all at once.',
    items: [
      {
        num: '01',
        label: 'Intel',
        title: 'ESP & loot flags',
        desc: 'Player boxes, item esp tags, and extraction intel with distance readouts.',
      },
      {
        num: '02',
        label: 'Combat',
        title: 'Aim & trigger',
        desc: 'Smoothing curves, FOV caps, and trigger delay tuned for duel angles.',
      },
      {
        num: '03',
        label: 'Awareness',
        title: 'Radar & sound',
        desc: 'Off-screen hints that agree with footsteps instead of replacing them.',
      },
      {
        num: '04',
        label: 'Safety',
        title: 'Capture hygiene',
        desc: 'Stream-safe toggles and OBS checks before you clip a highlight.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Workflow',
    badge: 'Call of Duty load order',
    titleBefore: 'Move from checkout to a calm',
    titleHighlight: 'first queue',
    titleAfter: '',
    subtitle: 'From checkout to a working Call of Duty cheat loader—shortcuts break demos, so run the sequence once.',
    ctaLabel: 'Open cheat product catalog',
    ctaHref: productBase,
    ctaSecondary: 'Warfare aimbot forum thread',
    ctaSecondaryHref: '/forum/aimbot-fov-smoothness-ranked-ops/',
    items: [
      {
        num: '01',
        phase: 'Choose',
        title: 'Pick your module set',
        desc: 'Start with operations esp presets, add warfare aimbot and triggerbot only after private match tests.',
      },
      {
        num: '02',
        phase: 'Portal',
        title: 'Download the Call of Duty cheat loader',
        desc: 'Match build numbers to your supported PC titles client before injecting—update the Call of Duty cheat loader after security patches.',
      },
      {
        num: '03',
        phase: 'DM pass',
        title: 'Deathmatch validation',
        desc: 'Test FPS, crosshair clutter, aim curves, and no recoil sliders on moving targets before warfare queues.',
      },
      {
        num: '04',
        phase: 'Live',
        title: 'Save & sync',
        desc: 'Push presets to the cloud before driver updates or LAN travel.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for Call of Duty warfare & extraction economy.',
    items: [
      {
        num: '01',
        title: 'Post-patch patience',
        desc: 'Wait for the green banner after supported PC titles security drops—extraction and operations queues reward patience.',
      },
      {
        num: '02',
        title: 'Modes need different stacks',
        desc: 'Call of Duty warfare cheats want wider FOV; operations esp wants tighter distance caps. Extraction cheats lean on loot esp—not the same profile.',
      },
      {
        num: '03',
        title: 'Demo review habit',
        desc: 'Download a match weekly; if crosshair snaps look sharp, reduce aim strength.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Call of Duty support for loader, keys, and checkout',
    subtitle:
      'Browse setup guides and illustrative forum threads, then open checkout when you are ready to buy.',
    channels: [
      {
        icon: 'messageCircle',
        title: 'Community forum',
        desc: 'Read illustrative threads on ESP, aimbot FOV, loader setup, and patch-night checklists before you buy.',
        linkLabel: 'Open forum',
        href: '/forum/',
        channelAriaLabel: 'Open Call of Duty community forum',
      },
      {
        icon: 'users',
        title: 'Before checkout',
        desc: 'Questions about modules or hardware add-ons.',
        linkLabel: 'Checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'navFaq',
        title: 'Self-serve answers',
        desc: 'Ban risk, platforms, and refunds.',
        linkLabel: 'Call of Duty cheat pre-purchase FAQ',
        href: '/faq/',
      },
    ],
    ticketTitle: 'Include in your email',
    ticketItems: [
      { title: 'Order email', desc: 'The inbox you used on the store receipt.' },
      { title: 'Steam build', desc: 'Call of Duty client build and Windows version.' },
      { title: 'Error text', desc: 'Exact loader or VAC message, no paraphrasing.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Clear answers before you pay',
    subtitle: 'Risk, platforms, and what the listed Call of Duty cheat modules usually cover.',
    items: [
      {
        num: '01',
        q: 'Where do I see if the Call of Duty cheat build is online?',
        a: 'The status banner on cod-cheats.net and your portal dashboard both show online, testing, or offline—read them after every patch.',
      },
      {
        num: '02',
        q: 'What happens right after checkout?',
        a: 'The store emails a license key and portal login—download only from that portal, never from random DMs.',
      },
      {
        num: '03',
        q: 'Can I get banned using Call of Duty cheats?',
        a: 'Yes. VAC Live, Steam replay review, and platform rules all carry risk—this site explains modules; it does not remove consequences.',
      },
      {
        num: '04',
        q: 'What is Call of Duty cheats price and lifetime vs subscription?',
        a: 'Call of Duty cheats lifetime and subscription lengths are set on the store checkout—this site lists modules only. Compare tiers here, then confirm renewal and pause rules when you buy.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Use the HWID reset flow in the portal or open a ticket on the linked store with your key—limits depend on your license type.',
      },
      {
        num: '06',
        q: 'Where are products listed?',
        a: 'The Call of Duty cheat catalog, utilities, and Cloud DMA notes sit on the products hub with module lists and checkout buttons.',
      },
      {
        num: '07',
        q: 'Are Call of Duty cheats VAC safe?',
        a: 'No—VAC Live and platform rules can flag accounts. “Call of Duty cheats vac safe” searches still mean risk: use conservative ESP, skip shady loaders, and stop if the portal banner is not green.',
      },
      {
        num: '08',
        q: 'Is access a one-time buy or a subscription?',
        a: 'Billing is handled on the external store—many operators sell time-based keys. Read the product page when you buy Call of Duty cheats so you know renewal and pause rules.',
      },
    ],
  },
  footer: {
    tagline: 'Call of Duty hacks & Call of Duty supported PC titles cheats—esp, aimbot, wallhack, extraction intel—cod-cheats.net',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Home feature tour', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}call-of-duty-store/`, label: 'Cheat modules page', ariaLabel: 'Call of Duty cheats' },
      { href: productBase, label: 'Product catalog hub', ariaLabel: 'Products' },
      { href: '/forum/', label: 'Community forum', ariaLabel: 'Call of Duty forum' },
      { href: '/blogs/', label: 'Call of Duty guides', ariaLabel: 'Call of Duty blogs and guides' },
      { href: '/reviews/', label: 'Buyer reviews', ariaLabel: 'Reviews' },
      { href: '/faq/', label: 'FAQ for buyers', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About this Call of Duty cheat catalog and guides',
      description: 'Editorial and catalog pages about Call of Duty cheats, loaders, and utilities.',
      sections: [
        {
          heading: 'Purpose',
          paragraphs: [
            'This domain publishes product explanations, blogs and guides, and community forum summaries for Call of Duty players evaluating ESP, aim assist, and related modules.',
            'Checkout happens only on the linked external store; we do not name the operator behind that seller.',
          ],
        },
        {
          heading: 'What you will find',
          paragraphs: [
            'Tier comparisons, anti-cheat caveats, troubleshooting for integrity messages, and forum opinions from buyers with both satisfied and frustrated outcomes.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Order and key questions go through the linked store’s support or ticket system after purchase—include your receipt email, license details, and Call of Duty client build when you open a case.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Call of Duty privacy for cookies and analytics',
      description: 'How cod-cheats.net uses analytics and cookies when you browse.',
      sections: [
        {
          heading: 'Data we collect',
          paragraphs: [
            'Standard server and analytics events—pages opened, approximate region, device type—may be processed when analytics cookies are allowed.',
            'Checkout stores payment data off-site; this domain does not receive card numbers.',
          ],
        },
        {
          heading: 'Store support',
          paragraphs: [
            'If the store collects messages or tickets for your order, those are kept under that provider’s retention and privacy rules.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'You can block non-essential cookies in the browser; core navigation still works.',
          ],
        },
      ],
    },
    terms: {
      title: 'Call of Duty terms for cod-cheats.net',
      description: 'Using cod-cheats.net content, forums, and outbound store links.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'By browsing cod-cheats.net you accept these terms and the privacy policy. Last updated November 2025.',
          ],
        },
        {
          heading: 'No guarantee of status',
          paragraphs: [
            '“Online” labels are snapshots—supported PC titles updates can break loaders without notice. You are responsible for checking the portal before play.',
          ],
        },
        {
          heading: 'Risk',
          paragraphs: [
            'Cheating violates Call of Duty and platform rules when applied in live environments. Account loss is possible; do not spend money you cannot lose.',
          ],
        },
        {
          heading: 'Refunds',
          paragraphs: [
            'Digital access follows the store’s refund rules. cod-cheats.net does not process card refunds directly.',
          ],
        },
        {
          heading: 'Checkout links',
          paragraphs: [
            'Some buttons on cod-cheats.net open secure checkout on our partner platform. Prices, license keys, refunds, and post-purchase tickets are handled there after payment.',
            'On-page product copy is editorial guidance. Read the live listing before you pay.',
          ],
        },
      ],
    },
    support: {
      title: 'Call of Duty buyer support hub',
      description: 'Use the support hub and the linked store for loader keys, HWID rotation, and checkout handoffs.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Checkout',
    browseCheatsMobile: 'Checkout',
    homeAria: 'cod-cheats.net home',
    checkoutAria: 'Open store checkout',
    navTryNow: 'Buy now',
    navTryNowAria: 'Buy Call of Duty cheats',
    discordAria: 'Buy Call of Duty cheats',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
