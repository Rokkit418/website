import type { APIRoute, GetStaticPaths } from 'astro';
import { ogPages } from '../../data/site';
import { renderOgPng } from '../../lib/og/render';

// Static OG images, one per entry in ogPages: /og/home.png, /og/team.png, etc.
// Generated at build time and served as immutable static assets.
export const getStaticPaths: GetStaticPaths = () =>
  Object.keys(ogPages).map((page) => ({ params: { page } }));

export const GET: APIRoute = async ({ params }) => {
  const key = (params.page ?? 'default') as keyof typeof ogPages;
  const meta = ogPages[key] ?? ogPages.default;
  const png = await renderOgPng(meta);
  return new Response(new Uint8Array(png), {
    headers: {
      'content-type': 'image/png',
      'cache-control': 'public, max-age=31536000, immutable',
    },
  });
};
