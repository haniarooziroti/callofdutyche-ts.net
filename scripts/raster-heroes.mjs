import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'public', 'images', 'heroes');
const svgs = fs.readdirSync(dir).filter((name) => name.endsWith('.svg'));

for (const name of svgs) {
  const svg = fs.readFileSync(path.join(dir, name));
  const out = path.join(dir, name.replace(/\.svg$/, '.png'));
  await sharp(svg, { density: 96 }).resize(1200, 630).png().toFile(out);
  const meta = await sharp(out).metadata();
  console.log(name, '->', path.basename(out), meta.width, meta.height);
}
