import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}
function write(rel, content) {
  fs.writeFileSync(path.join(root, rel), content, 'utf8');
}

// --- en.ts core rebrand ---
const enPath = 'src/i18n/en.ts';
let en = read(enPath);
if (!en.includes('REVIEW_SUMMARY')) {
  en = en.replace(
    "import { SEO_MEDIA, SEO_MEDIA_LEGACY } from '../config/media';",
    "import { REVIEW_SUMMARY } from '../data/reviews';\nimport { SEO_MEDIA } from '../config/media';",
  );
}

const siteBlock = `  site: {
    name: 'Call of Duty cheats',
    domain: 'callofdutycheats.net',
    title: '[COD Cheats] Esp, Aimbot & Wallhack | callofdutycheats.net',
    description:
      'Call of Duty cheats for PC bring ESP, aimbot, and wallhack-style intel to large-scale fights. Compare modules here, then open checkout for keys when you are ready.',
    brandMarkAlt: 'Call of Duty cheats site mark',
  },
  nav: [
    { href: \`\${productBase}\`, label: 'Products' },
    { href: '/forum/', label: 'Forums' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  forum: {
    eyebrow: 'Community',
    title: 'Call of Duty cheats forum',
    subtitle: 'Loader setup, aimbot FOV, ESP clutter, loot intel, and honest patch-night talk from PC players.',
    viewAll: 'Browse all forums',
  },
  hero: {
    status: 'Call of Duty — portal online',
    eyebrow: 'Tactical operations on PC',
    titleLine1: '[COD Cheats]',
    titleLine2: 'Esp, Aimbot & Wallhack',
    subtitle:
      'Large-scale modern warfare on PC deserves readable ESP, calm aimbot curves, and loot intel without a noisy HUD. Explore how modules fit Multiplayer and extraction runs—pricing and keys sit on checkout when you are ready.',
    ctaPrimary: 'Compare Call of Duty modules',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Modes',
    modes: ['Multiplayer', 'Operations', 'Night raids', 'Extraction'],
    metrics: [
      { label: 'Player voices', strong: \`\${REVIEW_SUMMARY.total}+\` },
      { label: 'Patch focus', strong: 'Call of Duty' },
      { label: 'Platform', strong: 'Win64' },
      { label: 'Help', strong: 'FAQ' },
    ],
  },`;

en = en.replace(
  /  site: \{[\s\S]*?    metrics: \[[\s\S]*?\],\n  \},\n  features:/,
  `${siteBlock}\n  features:`,
);

en = en.replaceAll('cs2-cheats.org', 'callofdutycheats.net');
en = en.replaceAll('CS2 ', 'Call of Duty ');
en = en.replaceAll('CS2', 'Call of Duty');
en = en.replaceAll('Counter-Strike 2', 'Call of Duty');
en = en.replaceAll('cs2-store', 'call-of-duty-store');
en = en.replaceAll('${productBase}cs2-store/', '${productBase}call-of-duty-store/');
en = en.replaceAll("href: '/blog/'", "href: '/forum/'");
en = en.replace(
  /ctaSecondaryHref: '\/blog\/[^']+'/,
  "ctaSecondaryHref: '/forum/aimbot-fov-smoothness-ranked-ops/'",
);

// Minimal blog stub (type still requires blog key)
en = en.replace(
  /  blog: \{[\s\S]*?    items: \[[\s\S]*?\],\n  \},\n  toolkit:/,
  `  blog: {
    eyebrow: '',
    title: '',
    subtitle: '',
    latestTitle: '',
    latestSubtitle: '',
    filterAll: '',
    sortLabel: '',
    sortNewest: '',
    sortOldest: '',
    sortShortRead: '',
    sortLongRead: '',
    emptyFilter: '',
    viewAll: '',
    read: '',
    items: [],
  },
  toolkit:`,
);

write(enPath, en);

// types: optional forum
const typesPath = 'src/i18n/types.ts';
let types = read(typesPath);
if (!types.includes('forum?:')) {
  types = types.replace(
    '  nav: NavLink[];\n  hero:',
    `  nav: NavLink[];\n  forum?: {\n    eyebrow: string;\n    title: string;\n    subtitle: string;\n    viewAll: string;\n  };\n  hero:`,
  );
  write(typesPath, types);
}

console.log('Patched en.ts and i18n types');
