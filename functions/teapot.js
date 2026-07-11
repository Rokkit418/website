// GET /teapot -> a genuine HTTP 418. The site's easter egg is a real response,
// not a mention of one. Runs as a Cloudflare Pages Function.
// RFC 2324 section 2.3.2: any attempt to brew coffee with a teapot returns 418.

const TEAPOT = [
  '        ( (',
  '         ) )',
  '      .--------.',
  '   ___|        |___',
  '  (   |  418   |   )',
  "   `--| teapot |--'",
  "      '--------'",
  '',
  "418 I'm a teapot.",
  '',
  'Rokkit418 is short and stout. It declines, correctly, to brew coffee.',
  'Ask it for tea instead. (RFC 2324, section 2.3.2.)',
  '',
].join('\n');

export function onRequest() {
  return new Response(TEAPOT, {
    status: 418,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'x-teapot': 'short and stout',
      'cache-control': 'no-store',
    },
  });
}
