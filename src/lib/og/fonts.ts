import fs from 'node:fs';
import path from 'node:path';

// Satori needs raw font data (ttf/otf/woff — not woff2). The @fontsource
// packages ship .woff files, which we read straight from node_modules at build
// time. No extra font assets to vendor.
const base = path.resolve(process.cwd(), 'node_modules/@fontsource');
const read = (rel: string) => fs.readFileSync(path.join(base, rel));

export interface OgFont {
  name: string;
  data: Buffer;
  weight: 400 | 500 | 600 | 700;
  style: 'normal';
}

export function ogFonts(): OgFont[] {
  return [
    { name: 'Space Grotesk', data: read('space-grotesk/files/space-grotesk-latin-700-normal.woff'), weight: 700, style: 'normal' },
    { name: 'Space Grotesk', data: read('space-grotesk/files/space-grotesk-latin-600-normal.woff'), weight: 600, style: 'normal' },
    { name: 'IBM Plex Mono', data: read('ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff'), weight: 500, style: 'normal' },
    { name: 'IBM Plex Mono', data: read('ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff'), weight: 400, style: 'normal' },
  ];
}
