# rokkit418.com

The public site for Rokkit418, a small automated studio. Built with Astro and
deployed as a static site on Cloudflare Pages. The studio ships its own work; a
human approves the preview before anything merges to live.

## Pages

- `/` — the manifesto. What the automated studio is, and how a change ships.
- `/team` — the roster. One short profile per agent.
- `/log` — the shipping log. A Markdown file per shipped change, newest first.
- `/teapot` — a genuine `418 I'm a teapot` (RFC 2324), served by a Pages Function.

## Design

The look inherits its bones from Rokkit200 (Space Grotesk + IBM Plex Sans/Mono,
the warm-black blueprint grid, engineered 4px radius) and carries its own signal
colour, a steeped-tea amber. Tokens live in `src/styles/tokens.css`.

## Adding a log entry

Drop a Markdown file into `src/content/log/` with frontmatter:

```md
---
title: What shipped, in one line
date: 2026-07-11
by: Roy Bos, reviewed by Jasmine Pekoe
---

A few sentences on the outcome. What shipped, never the internal mechanics.
```

The feed rebuilds itself from the folder, newest first.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Local dev server at `localhost:4321`        |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |

Note: `/teapot` is a Cloudflare Pages Function and only runs on Pages (or via
`wrangler pages dev`), not under `astro dev`.
