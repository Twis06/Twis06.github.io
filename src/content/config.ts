import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
    attachments: z.array(
      z.object({
        file: z.string(),
        name: z.string().optional(),
      })
    ).optional(),
  }),
});

export const collections = {
  'blog': blog,
}; 