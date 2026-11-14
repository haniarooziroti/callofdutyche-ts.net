import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/images/heroes');
fs.mkdirSync(dir, { recursive: true });
const slugs = [
  'buy-delta-force-cheats',
  'delta-force-aimbot-fov',
  'delta-force-cheats-free-vs-paid',
  'wallhack-vs-esp-delta-force',
  'delta-force-esp-settings',
  'delta-force-no-recoil-guide',
  'delta-force-cheats-setup',
  'delta-force-patch-day-status',
  'delta-force-stream-safe-obs',
  'delta-force-patch-log',
  'delta-force-choose-plan',
];
slugs.forEach((slug, i) => {
  const hue = (i * 28) % 360;
  const label = slug.replaceAll('-', ' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="hsl(${hue},28%,12%)"/><rect x="48" y="48" width="1104" height="534" fill="none" stroke="hsl(${hue},55%,62%)" stroke-width="4"/><text x="80" y="320" fill="hsl(${hue},40%,92%)" font-family="Arial,sans-serif" font-size="42">${label}</text></svg>`;
  fs.writeFileSync(path.join(dir, `${slug}.svg`), svg);
});
console.log(`wrote ${slugs.length} heroes`);
