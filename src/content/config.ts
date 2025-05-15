import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const statusEnum = ['En Cours', 'Terminé', 'En pause'] as const;
export type StatusType = (typeof statusEnum)[number];

const blog = defineCollection({
    loader: glob({ pattern: ['*.md'], base: 'src/content/blog' }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        date: z.date(),
        status: z.enum(statusEnum),
    }),
});

export const collections = { blog };