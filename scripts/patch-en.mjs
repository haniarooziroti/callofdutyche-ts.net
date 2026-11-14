import fs from 'node:fs';

const p = 'src/i18n/en.ts';
let s = fs.readFileSync(p, 'utf8');

s = s
  .replaceAll('cs2-cheats.org', 'cod-cheats.net')
  .replaceAll('/products/cs2-cheats/', '/products/call-of-duty-cheats/')
  .replaceAll('cs2-store', 'call-of-duty-store')
  .replaceAll('CS2', 'Call of Duty')
  .replaceAll('Counter-Strike 2', 'Call of Duty')
  .replace(
    /import \{ SEO_MEDIA, SEO_MEDIA_LEGACY \} from '\.\.\/config\/media';/,
    "import { SEO_MEDIA } from '../config/media';\nimport { REVIEW_SUMMARY } from '../data/reviews';",
  )
  .replace(/    \{ href: '\/blog\/', label: 'Articles' \},\n/, '');

if (!s.includes('forum:')) {
  s = s.replace(
    /  nav: \[/,
    `  forum: {
    eyebrow: 'Player forum',
    title: 'Call of Duty cheats forums',
    subtitle: 'Aimbot tuning, ESP layouts, loader help, and patch-night threads from PC players.',
    viewAll: 'Browse all forums',
  },
  nav: [`,
  );
}

s = s.replace(
  /    metrics: \[[\s\S]*?    \],\n    modesLabel:/,
  `    metrics: [
      { label: 'Player feedback', strong: \`\${REVIEW_SUMMARY.total}+ reviews\` },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Support', strong: '24/7' },
      { label: 'Capture-friendly', strong: 'Stream-safe' },
    ],
    modesLabel:`,
);

// Hub articles only (aimbot / esp / wallhack)
s = s.replace(
  /    items: \[[\s\S]*?    \],\n  \},\n  toolkit:/,
  `    items: [
      {
        tag: 'Aimbot',
        title: 'Call of Duty aimbot: FOV caps and ADS curves',
        slug: 'aimbot-hud-tuning',
        image: SEO_MEDIA.aimbotHud,
        desc: 'Keep hip and ADS smoothing separate and verify kill-cam behavior before Multiplayer.',
        date: 'Oct 28, 2025',
        readTime: '5 min read',
      },
      {
        tag: 'ESP',
        title: 'Tactical ESP: distance caps and teammate mute',
        slug: 'esp-tactical-layout',
        image: SEO_MEDIA.espTactical,
        desc: 'Mute squad silhouettes first and shorten enemy draw distance on night raids.',
        date: 'Oct 22, 2025',
        readTime: '4 min read',
      },
      {
        tag: 'Wallhack',
        title: 'Wallhack layouts for breach pushes',
        slug: 'wallhack-breach-reads',
        image: SEO_MEDIA.wallhackLayout,
        desc: 'Box-and-distance presets beat skeleton-plus-glow stacks on stairwell fights.',
        date: 'Oct 15, 2025',
        readTime: '4 min read',
      },
    ],
  },
  toolkit:`,
);

// Fix broken media keys from old CS2 set
const mediaMap = {
  sunnyMiddleEasternStreet: 'heroOperations',
  underpassSmokeGraffiti: 'nightRaid',
  mediterraneanAlleyRifle: 'aimbotHud',
  desertCorridorEsp: 'espTactical',
  bananaAlleyBSite: 'wallhackLayout',
  dustyCourtyardAk: 'lootIntel',
  tacticalSmokeOverpass: 'chamsPreview',
  mediterraneanVillageBanana: 'dmaSetup',
};
for (const [oldKey, newKey] of Object.entries(mediaMap)) {
  s = s.replaceAll(`SEO_MEDIA.${oldKey}`, `SEO_MEDIA.${newKey}`);
  s = s.replaceAll(`SEO_MEDIA_LEGACY.cs1`, `SEO_MEDIA.heroOperations`);
  s = s.replaceAll(`SEO_MEDIA_LEGACY.css11`, `SEO_MEDIA.chamsPreview`);
}

fs.writeFileSync(p, s);
console.log('patched en.ts');
