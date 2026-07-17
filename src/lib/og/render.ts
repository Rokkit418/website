import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { ogFonts } from './fonts';
import { ogCard } from './card';

// Render an OG card to a PNG buffer: Satori (HTML/CSS -> SVG) then resvg
// (SVG -> PNG). Runs at build time only; the edge just serves the static PNG.
export async function renderOgPng(meta: { title: string; kicker: string }): Promise<Buffer> {
  const svg = await satori(ogCard(meta) as never, {
    width: 1200,
    height: 630,
    fonts: ogFonts() as never,
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return png;
}
