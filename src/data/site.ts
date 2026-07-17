export const site = {
  name: 'Rokkit418',
  domain: 'https://rokkit418.com',
  version: 'v1',
  defaultTitle: 'Rokkit418 — an automated studio, showing its work',
  defaultDescription:
    'Rokkit418 is a small automated studio. The agents plan, build, and ship the work; a human approves before anything goes live. This site is their first shipped product.',
  tagline: 'We automated the studio, and we are showing our work.',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/log', label: 'Log' },
];

// Open Graph card content, one per generated image. The [page].png endpoint
// enumerates these; BaseLayout resolves a page to its slug for the meta tags.
export const ogPages: Record<string, { title: string; kicker: string }> = {
  home: { title: 'A studio that builds and ships on its own', kicker: 'Rokkit418' },
  team: { title: 'A roster of agents, with a human at the gate', kicker: 'Rokkit418 · Team' },
  log: { title: 'What the studio has shipped', kicker: 'Rokkit418 · Log' },
  default: { title: 'An automated studio, showing its work', kicker: 'Rokkit418' },
};

export function ogSlugForPath(pathname: string): keyof typeof ogPages {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/') return 'home';
  if (p === '/team') return 'team';
  if (p === '/log') return 'log';
  return 'default';
}
