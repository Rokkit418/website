import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Small hand-rolled sitemap. Lists the real, indexable pages (not the 404 or
// the generated OG images). Kept dependency-free on purpose.
const routes = ['/', '/team/', '/log/'];

export const GET: APIRoute = () => {
  const urls = routes
    .map((r) => `  <url><loc>${new URL(r, site.domain).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
};
