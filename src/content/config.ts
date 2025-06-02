import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { imageConfig } from 'astro:assets';

export const statusEnum = ['En Cours', 'Terminé', 'En pause'] as const;
export const tagsEnum = ['Astro.JS', 'React.JS', 'TailwindCSS', 'HTML-CSS', 'JavaScript', 'Python', 'Projet de Groupe' , 'Projet Personnel','Figma', 'Wordpress','Sur GitHub'] as const;
export type StatusType = (typeof statusEnum)[number];

const blog = defineCollection({
    loader: glob({ pattern: ['*.md'], base: 'src/content/blog' }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        image: z.string().optional(),
        date: z.date(),
        status: z.enum(statusEnum).optional(),
        tags: z.array(z.enum(tagsEnum)).optional(),
    }),
});

export const collections = { blog };