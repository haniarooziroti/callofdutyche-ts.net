/**
 * Generate responsive WebP variants from committed masters (no network).
 * Masters: scripts/.media-masters/delta-force/*.webp
 * Output: public/images/delta-force/{name}-{width}.webp
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const masterDir = path.join(root, 'scripts', '.media-masters', 'call-of-duty');
const outDir = path.join(root, 'public', 'images', 'call-of-duty');
const WIDTHS = [320, 400, 512, 640, 960];
const WEBP_OPTS = { quality: 80, effort: 4 };

async function main() {
  if (!fs.existsSync(masterDir)) {
    console.log('emit-delta-media-variants: no masters folder — skipping');
    return;
  }
  fs.mkdirSync(outDir, { recursive: true });
  const masters = fs.readdirSync(masterDir).filter((f) => /\.webp$/i.test(f));
  if (masters.length === 0) {
    console.log('emit-delta-media-variants: no master webp files — skipping');
    return;
  }
  for (const file of masters) {
    const base = file.replace(/\.webp$/i, '');
    const masterFile = path.join(masterDir, file);
    for (const width of WIDTHS) {
      const output = path.join(outDir, `${base}-${width}.webp`);
      await sharp(masterFile)
        .resize({ width, withoutEnlargement: true })
        .webp(WEBP_OPTS)
        .toFile(output);
    }
    console.log(`Variants for ${base} → ${WIDTHS.join(', ')}w`);
  }
  console.log('emit-delta-media-variants: complete');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
