import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The shipping log. One Markdown file per shipped change; the feed updates
// itself as a by-product of real work merging. Newest first on /log.
const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    by: z.string().default('the team'),
  }),
});

export const collections = { log };
