#!/usr/bin/env node
/**
 * Downloads a YouTube segment for the homepage hero (1:02–1:25) into public/videos/cod-hero.mp4.
 * Requires: yt-dlp and ffmpeg on PATH.
 */
import { mkdir, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'videos');
const outFile = path.join(outDir, 'cod-hero.mp4');
const videoId = 'lvBUEsqywyg';
const start = '62';
const end = '85';

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: 'inherit', shell: false, ...opts });
    child.on('error', reject);
    child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))));
  });
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const temp = path.join(outDir, '_hero-src.%(ext)s');
  const tempPattern = path.join(outDir, '_hero-src');

  console.log('Fetching source…');
  await run('yt-dlp', [
    '-f',
    'bv*[height<=1080]+ba/b[height<=1080]',
    '--merge-output-format',
    'mp4',
    '-o',
    temp,
    `https://www.youtube.com/watch?v=${videoId}`,
  ]);

  const src = `${tempPattern}.mp4`;
  console.log(`Trimming ${start}s–${end}s → cod-hero.mp4`);
  await run('ffmpeg', ['-y', '-ss', start, '-to', end, '-i', src, '-c', 'copy', outFile]);
  await rm(src, { force: true });
  console.log(`Wrote ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});