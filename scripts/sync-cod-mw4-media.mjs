/**
 * Download COD MW4 showcase WebPs from Supabase, optimize for light delivery, emit responsive widths.
 * Usage: node scripts/sync-cod-mw4-media.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const masterDir = path.join(root, 'scripts', '.media-masters', 'call-of-duty');
const publicDir = path.join(root, 'public', 'images', 'call-of-duty');
const WIDTHS = [320, 400, 512, 640, 960];
const WEBP_OPTS = { quality: 74, effort: 4, smartSubsample: true };
const MAX_MASTER_WIDTH = 1058;

/** Remote URLs in display order → master basename (must match src/config/media.ts slots). */
const SOURCES = [
  {
    name: 'showcase-esp.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794331833175-3r6fnz-the-true-fox-melhor-external-mw4-hack-2026-w-kzt-vhlv4-1058x595-0m31s.webp',
  },
  {
    name: 'showcase-aim.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794331830056-fgvvr9-the-true-fox-melhor-external-mw4-hack-2026-w-kzt-vhlv4-1058x595-0m37s.webp',
  },
  {
    name: 'showcase-wall.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794331818252-92h7vc-the-true-fox-melhor-external-mw4-hack-2026-w-kzt-vhlv4-1058x595-0m51s.webp',
  },
  {
    name: 'showcase-loot.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794331805917-2axvvw-the-true-fox-melhor-external-mw4-hack-2026-w-kzt-vhlv4-1058x595-1m07s.webp',
  },
  {
    name: 'showcase-ops.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794331801336-oy7mrc-the-true-fox-melhor-external-mw4-hack-2026-w-kzt-vhlv4-1058x595-1m11s.webp',
  },
  {
    name: 'chams-s1.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324347257-brtgs3-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'chams-s2.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324341600-c1vx6f-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-08.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324333551-y6896h-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-09.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324325890-lvxcvq-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-10.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324314811-xhv1fe-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-11.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324305307-v9crh1-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-12.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324300409-qcfxel-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-13.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324298029-5e6svc-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-14.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324290650-zk4l45-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-15.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1794324281962-r9ravw-xylo-mw4-cheats-i-test-the-most-insane-mw4-cheat-its-external-and-undetected-uxa.webp',
  },
  {
    name: 'gallery-16.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1793979623128-xgmjno-anyway-i-tested-the-new-cod-mw4-cheat-client-is-it-worth-it-mlwkplvdalk-1058x595.webp',
  },
  {
    name: 'gallery-17.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/51ffc2cc-57ef-429b-83ff-03a57de958e9/1793979620338-l83nuw-anyway-i-tested-the-new-cod-mw4-cheat-client-is-it-worth-it-mlwkplvdalk-1058x595.webp',
  },
  {
    name: 'mw-modernwarfare6.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/05c202fe-8171-4881-bc3a-b25833919850/1793540978261-k5nelh-modernwarfare6.webp',
  },
  {
    name: 'mw-modernwarfare3.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/05c202fe-8171-4881-bc3a-b25833919850/1793540514707-88r970-modernwarfare3.webp',
  },
  {
    name: 'mw-modernwarfare2.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/05c202fe-8171-4881-bc3a-b25833919850/1793540505567-1if1nz-modernwarfare2.webp',
  },
  {
    name: 'mw-modernwarfare1.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/05c202fe-8171-4881-bc3a-b25833919850/1793540473398-rb06zu-modernwarfare1.webp',
  },
  {
    name: 'gallery-21.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212518776-4hayps-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
  },
  {
    name: 'gallery-22.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212488634-tl5ahh-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
  },
  {
    name: 'gallery-23.webp',
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212441860-jnx6rb-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
  },
];

fs.mkdirSync(masterDir, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });

async function fetchAndOptimize(entry) {
  const res = await fetch(entry.url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${entry.name}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const masterPath = path.join(masterDir, entry.name);
  await sharp(buf)
    .resize({ width: MAX_MASTER_WIDTH, withoutEnlargement: true })
    .webp(WEBP_OPTS)
    .toFile(masterPath);

  const base = entry.name.replace(/\.webp$/i, '');
  for (const width of WIDTHS) {
    const output = path.join(publicDir, `${base}-${width}.webp`);
    await sharp(masterPath)
      .resize({ width, withoutEnlargement: true })
      .webp(WEBP_OPTS)
      .toFile(output);
  }
  const stat = fs.statSync(masterPath);
  console.log(`${entry.name} → variants (${(stat.size / 1024).toFixed(1)} KB master)`);
}

for (const entry of SOURCES) {
  await fetchAndOptimize(entry);
}

console.log(`sync-cod-mw4-media: ${SOURCES.length} masters, ${WIDTHS.length} widths each → public/images/call-of-duty/`);