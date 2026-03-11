import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    order: z.number().optional(),
    image: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    organization: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    tags: z.array(z.string()),
    type: z.enum(['research', 'internship', 'work', 'teaching', 'leadership']),
    order: z.number().optional(),
    image: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

export const collections = { projects , experience };
