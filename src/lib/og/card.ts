// The Open Graph card, expressed as a Satori element tree (plain objects, the
// shape Satori accepts without JSX). Mirrors the site: warm-black ground, amber
// signal, Space Grotesk display, IBM Plex Mono furniture. 1200x630.

const BG = '#0b0807';
const FG = '#f0ece9';
const MUTED = '#9a8c85';
const AMBER = '#c8791f';
const AMBER_LIGHT = '#e6a75a';

type El = { type: string; props: Record<string, unknown> };
const el = (type: string, style: Record<string, unknown>, children?: unknown): El => ({
  type,
  props: children === undefined ? { style } : { style, children },
});

export function ogCard({ title, kicker }: { title: string; kicker: string }): El {
  return el(
    'div',
    {
      width: '1200px',
      height: '630px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: BG,
      color: FG,
      padding: '72px 80px',
      fontFamily: 'Space Grotesk',
      borderTop: `8px solid ${AMBER}`,
    },
    [
      // header row
      el('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }, [
        el('div', { display: 'flex', alignItems: 'baseline', fontSize: '30px', fontWeight: 700 }, [
          el('span', { display: 'flex' }, 'Rokkit'),
          el('span', { display: 'flex', color: AMBER }, '418'),
        ]),
        el('div', { display: 'flex', fontFamily: 'IBM Plex Mono', fontSize: '20px', color: MUTED, letterSpacing: '0.08em' }, 'rokkit418.com'),
      ]),
      // middle: kicker + title
      el('div', { display: 'flex', flexDirection: 'column' }, [
        el('div', {
          display: 'flex',
          fontFamily: 'IBM Plex Mono',
          fontWeight: 500,
          fontSize: '22px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: AMBER_LIGHT,
        }, kicker),
        el('div', {
          display: 'flex',
          fontSize: '64px',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginTop: '24px',
          maxWidth: '1000px',
        }, title),
      ]),
      // footer row
      el('div', { display: 'flex', alignItems: 'center', width: '100%' }, [
        el('div', { display: 'flex', width: '14px', height: '14px', backgroundColor: AMBER, marginRight: '16px' }, ''),
        el('div', { display: 'flex', fontFamily: 'IBM Plex Mono', fontSize: '22px', color: MUTED, letterSpacing: '0.04em' }, 'An automated studio, shipped by the team'),
      ]),
    ],
  );
}
