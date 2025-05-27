import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const statusEnum = ['En Cours', 'Terminé', 'En pause'] as const;
export const tagsEnum = ['astro', 'react', 'tailwindcss', 'html-css', 'javascript', 'python', 'projet-de-groupe' , 'projet-personnel','figma', 'wordpress','sur-github'] as const;
export type StatusType = (typeof statusEnum)[number];

const blog = defineCollection({
    loader: glob({ pattern: ['*.md'], base: 'src/content/blog' }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        date: z.date(),
        status: z.enum(statusEnum).optional(),
        tags: z.array(z.enum(tagsEnum)).optional(),
    }),
});

export const collections = { blog };