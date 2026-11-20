import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const srcDir = path.join(root, 'public/images/call-of-duty');
const outDir = path.join(root, 'public/images/blogs');
fs.mkdirSync(outDir, { recursive: true });

/** Unique source frame per article. Output basename matches the visible H1. */
const jobs = [
  ['how-to-buy-call-of-duty-cheat', 'gallery-08-960.webp'],
  ['call-of-duty-aimbot-fov-and-smoothness-settings-guide', 'showcase-aim-960.webp'],
  ['free-vs-paid-call-of-duty-cheat-risks-and-what-you-get', 'gallery-09-960.webp'],
  ['wallhack-vs-esp-in-call-of-duty-what-you-actually-need', 'showcase-wall-960.webp'],
  ['call-of-duty-esp-settings-clean-readable-player-esp', 'showcase-esp-960.webp'],
  ['call-of-duty-no-recoil-tuning-guide-per-weapon', 'gallery-10-960.webp'],
  ['call-of-duty-cheat-setup-first-night-checklist', 'gallery-11-960.webp'],
  ['call-of-duty-patch-day-wait-before-you-launch', 'gallery-12-960.webp'],
  ['stream-safe-setup-obs-capture-checklist-for-call-of-duty', 'gallery-13-960.webp'],
  ['call-of-duty-season-patch-log-habits', 'gallery-14-960.webp'],
  ['monthly-or-lifetime-which-call-of-duty-plan-fits-you', 'gallery-15-960.webp'],
];

for (const [base, sourceName] of jobs) {
  const input = path.join(srcDir, sourceName);
  if (!fs.existsSync(input)) throw new Error(`Missing source ${input}`);
  const master = sharp(input).resize(1200, 630, { fit: 'cover', position: 'centre' });
  await master.clone().webp({ quality: 82 }).toFile(path.join(outDir, `${base}-1200.webp`));
  await master.clone().resize(640, 336, { fit: 'cover' }).webp({ quality: 80 }).toFile(path.join(outDir, `${base}-640.webp`));
  await master.clone().resize(400, 210, { fit: 'cover' }).webp({ quality: 78 }).toFile(path.join(outDir, `${base}-400.webp`));
}

console.log(`Wrote ${jobs.length} blog heroes to public/images/blogs`);
