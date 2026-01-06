import { defineCollection, z } from 'astro:content';

const slides = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  slides,
};