import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const postsPath = path.join(root, 'src/data/blogs/posts.ts');
const contentPath = path.join(root, 'src/data/blogs/content/index.ts');
const forumPath = path.join(root, 'src/data/forum.ts');

const newBlogs = [
  {
    slug: 'cod-esp-guide',
    clone: 'cod-esp-settings',
    title: 'COD ESP Features Explained',
    seoTitle: 'Call of Duty ESP Features Explained for PC',
    seoDescription:
      'How Call of Duty player ESP works on PC: boxes, distance tags, visibility settings, and teammate filters before merchant checkout.',
    category: 'Features',
    excerpt: 'Player ESP terms on Call of Duty PC—what boxes, skeletons, and distance caps actually change in-game.',
    relatedSlugs: ['cod-wallhack-guide', 'cod-aimbot-guide', 'buy-cod-cheats'],
  },
  {
    slug: 'cod-aimbot-guide',
    clone: 'cod-aimbot-fov',
    title: 'COD Aimbot Features Explained',
    seoTitle: 'Call of Duty Aimbot Features Explained',
    seoDescription:
      'Call of Duty aimbot feature primer: FOV, smoothing, ADS curves, and visible-check—verify on the merchant product before you buy.',
    category: 'Features',
    excerpt: 'Aimbot sliders on Call of Duty PC builds—FOV, smoothing, and when to test in private lobbies.',
    relatedSlugs: ['cod-esp-guide', 'cod-recoil-guide', 'cod-cheats-safety'],
  },
  {
    slug: 'cod-compatibility',
    clone: 'buy-cod-cheats',
    title: 'Call of Duty Cheats Compatibility Guide',
    seoTitle: 'Call of Duty Cheats Compatibility Guide for PC',
    seoDescription:
      'Check which Call of Duty titles and PC builds the merchant product supports before checkout—no assumed Warzone or console support.',
    category: 'Compatibility',
    excerpt: 'Match the merchant module list to your Call of Duty install—verify titles and anti-cheat notes at checkout.',
    relatedSlugs: ['cod-requirements', 'cod-anticheat', 'buy-cod-cheats'],
  },
  {
    slug: 'cod-cheats-faq',
    clone: 'cod-choose-plan',
    title: 'Call of Duty Cheats FAQ',
    seoTitle: 'Call of Duty Cheats FAQ | Checkout and Modules',
    seoDescription:
      'Frequently asked questions on Call of Duty cheat modules, loader status, checkout, and account risk—read before merchant payment.',
    category: 'Guides',
    excerpt: 'Short answers on modules, checkout, loader status, and risks for Call of Duty PC buyers.',
    relatedSlugs: ['buy-cod-cheats', 'cod-cheats-safety', 'cod-feature-checklist'],
  },
];

let content = fs.readFileSync(contentPath, 'utf8');
for (const blog of newBlogs) {
  if (!content.includes(`'${blog.slug}'`)) {
    const re = new RegExp(`'${blog.clone}':\\s*\\{`, 'm');
    const m = content.match(re);
    if (!m) throw new Error(`Missing clone ${blog.clone}`);
    const start = m.index;
    let depth = 0;
    let end = start;
    for (let i = start; i < content.length; i++) {
      if (content[i] === '{') depth++;
      if (content[i] === '}') {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
    const block = content.slice(start, end).replace(`'${blog.clone}'`, `'${blog.slug}'`);
    content = content.replace(/\n};\s*$/, `,\n${block}\n};\n`);
  }
}
fs.writeFileSync(contentPath, content);

let posts = fs.readFileSync(postsPath, 'utf8');
const insertBefore = '];\n\nfunction applyCatalogPrices';
const extras = newBlogs
  .map(
    (b) => `  {
    slug: '${b.slug}',
    title: '${b.title}',
    category: '${b.category}',
    published: '2026-11-10',
    modified: '2026-11-10',
    readTime: '8 min read',
    excerpt: '${b.excerpt.replace(/'/g, "\\'")}',
    seoTitle: '${b.seoTitle}',
    seoDescription: '${b.seoDescription}',
    image: '/images/heroes/placeholder.svg',
    imageAlt: '${b.title} — Call of Duty guide illustration',
    heroWidth: 1200,
    heroHeight: 630,
    relatedSlugs: ${JSON.stringify(b.relatedSlugs)},
  }`,
  )
  .join(',\n');

if (!posts.includes('cod-esp-guide')) {
  posts = posts.replace(insertBefore, `,\n${extras}\n${insertBefore}`);
  fs.writeFileSync(postsPath, posts);
}

const extraForums = `
  {
    slug: 'cod-ricochet-overview',
    category: 'Safety',
    categoryTone: 'orange',
    title: 'RICOCHET notes for Call of Duty PC — illustrative thread',
    excerpt: 'What anti-cheat visibility means for module choice (not a bypass guide).',
    author: 'example_mod',
    age: '5 days ago',
    commentsCount: 4,
    upvotes: 88,
    body: ['Merchant lists supported titles—anti-cheat behavior varies by branch. No undetectable promises here.'],
    comments: [
      { author: 'read_faq', age: '5 days ago', score: 22, body: 'Start with FAQ and patch notes; pause after major game updates.' },
      { author: 'example_mod', age: '4 days ago', score: 9, body: 'Illustrative only—not live support.' },
      { author: 'pc_only', age: '4 days ago', score: 14, body: 'Console paths differ; verify PC loader scope at checkout.' },
      { author: 'risk_aware', age: '3 days ago', score: 11, body: 'Account bans remain possible—merchant handles keys only.' },
    ],
  },
  {
    slug: 'cod-mouse-sensitivity-baseline',
    category: 'Guides',
    categoryTone: 'green',
    title: 'Mouse sensitivity baseline before aim profiles',
    excerpt: 'Stable cm/360 first, then overlay FOV tweaks.',
    author: 'example_aim',
    age: '6 days ago',
    commentsCount: 5,
    upvotes: 102,
    body: ['Jumping sensitivity every patch makes aim module tuning meaningless.'],
    comments: [
      { author: 'baseline_first', age: '6 days ago', score: 28, body: 'Lock sensitivity a week, then touch FOV caps only.' },
      { author: 'example_aim', age: '5 days ago', score: 7, body: 'used 28cm/360 as anchor' },
      { author: 'ads_split', age: '5 days ago', score: 16, body: 'Separate ADS multiplier like in-game settings.' },
      { author: 'forum_note', age: '4 days ago', score: 5, body: 'Illustrative thread—read-only examples.' },
      { author: 'guide_link', age: '4 days ago', score: 8, body: 'See blogs for longer sensitivity walkthroughs.' },
    ],
  },
  {
    slug: 'cod-ranked-play-esp-density',
    category: 'ESP & Awareness',
    categoryTone: 'green',
    title: 'Ranked Play ESP density — less clutter?',
    excerpt: 'Ranked lobbies punish thick boxes.',
    author: 'example_ranked',
    age: '1 week ago',
    commentsCount: 4,
    upvotes: 76,
    body: ['Ranked movement is faster; I shrink distance tags during snd.'],
    comments: [
      { author: 'minimal_esp', age: '1 week ago', score: 19, body: 'Distance cap 80m, mute teammates, thin boxes.' },
      { author: 'example_ranked', age: '6 days ago', score: 6, body: 'trying 70m cap tonight' },
      { author: 'compare_articles', age: '6 days ago', score: 10, body: 'ESP guide on /blogs/ has similar presets.' },
      { author: 'illustrative', age: '5 days ago', score: 4, body: 'Example discussion—not verified customer chat.' },
    ],
  },
  {
    slug: 'cod-config-profile-swap',
    category: 'Configuration',
    categoryTone: 'blue',
    title: 'Switching config profiles between playlists',
    excerpt: 'One cfg for BR, another for multiplayer?',
    author: 'example_cfg',
    age: '1 week ago',
    commentsCount: 4,
    upvotes: 69,
    body: ['Merchant loader mentions profiles—do you split BR vs MP toggles?'],
    comments: [
      { author: 'split_profiles', age: '1 week ago', score: 17, body: 'Yes—BR wants wider ESP, MP wants tighter aim FOV.' },
      { author: 'example_cfg', age: '6 days ago', score: 5, body: 'imported second cfg, working' },
      { author: 'hotkeys', age: '6 days ago', score: 12, body: 'Bind profile swap if the build lists hotkeys.' },
      { author: 'read_only', age: '5 days ago', score: 3, body: 'Illustrative replies only.' },
    ],
  },
  {
    slug: 'cod-merchant-checkout-plans',
    category: 'Checkout',
    categoryTone: 'blue',
    title: 'Where plan pricing shows up',
    excerpt: 'Site removed price cards—checkout is on zadeyo.',
    author: 'example_buyer',
    age: '2 days ago',
    commentsCount: 3,
    upvotes: 54,
    body: ['Proceed to Checkout button hits affiliate link; plans appear there.'],
    comments: [
      { author: 'affiliate_note', age: '2 days ago', score: 15, body: 'HANIA referral path—same tab checkout.' },
      { author: 'example_buyer', age: '2 days ago', score: 4, body: 'saw monthly+lifetime on store' },
      { author: 'illus', age: '1 day ago', score: 6, body: 'Example thread, not a live ticket.' },
    ],
  },
  {
    slug: 'cod-windows-11-loader-notes',
    category: 'Support',
    categoryTone: 'orange',
    title: 'Windows 11 loader first boot checklist',
    excerpt: 'Defender and overlay stack order.',
    author: 'example_win',
    age: '3 days ago',
    commentsCount: 4,
    upvotes: 91,
    body: ['Fresh Win11 install—which exclusions before first inject?'],
    comments: [
      { author: 'defender_path', age: '3 days ago', score: 20, body: 'Follow support article order; reboot between steps.' },
      { author: 'example_win', age: '2 days ago', score: 5, body: 'reboot after exclusion helped' },
      { author: 'overlay_off', age: '2 days ago', score: 13, body: 'Disable stray overlays (Discord/Xbox) during first boot.' },
      { author: 'illus_forum', age: '2 days ago', score: 4, body: 'Read-only illustrative forum.' },
    ],
  },`;

let forum = fs.readFileSync(forumPath, 'utf8');
if (!forum.includes('cod-ricochet-overview')) {
  forum = forum.replace(/\n];\n\nexport function getForumPost/, `${extraForums}\n];\n\nexport function getForumPost`);
  fs.writeFileSync(forumPath, forum);
}

// Rename slugs in posts for consistency
const renames = [
  ['cod-cheats-setup', 'cod-requirements'],
  ['cod-patch-day-status', 'cod-anticheat'],
];
for (const [from, to] of renames) {
  if (!posts.includes(`slug: '${to}'`)) {
    let p = fs.readFileSync(postsPath, 'utf8');
    p = p.replaceAll(`'${from}'`, `'${to}'`);
    fs.writeFileSync(postsPath, p);
    let c = fs.readFileSync(contentPath, 'utf8');
    c = c.replaceAll(`'${from}':`, `'${to}':`);
    fs.writeFileSync(contentPath, c);
  }
}

console.log('cod-expand-content: blogs + forum threads updated');