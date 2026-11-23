// News-image entry (Node 22, standard library only).
//
// The finished front page (entry.png, 1024x1024, rendered by draw.py from
// verified 23 November 2026 reporting) is copied to the directory the
// grader reads. Nothing here is generated at run time: no clock, no random
// numbers, no network. Two runs therefore write byte-identical output.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);

// The grader runs this program twice and compares the bytes, so prove the
// copy landed whole before exiting: hash both files and refuse a mismatch.
const digest = (path: string | URL) =>
  createHash('sha256').update(readFileSync(path)).digest('hex');
if (digest(src) !== digest(dst)) {
  throw new Error('entry.png copy failed the integrity check');
}
