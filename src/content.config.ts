import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        hidden: z.boolean().optional(),
    }),
});

const user = z.object({
    name: z.string(),
    website: z.string().optional(),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        team: z.array(user).optional(),
        image: z.string(),
        date: z.union([z.date(), z.tuple([z.date(), z.date()])]),
        hidden: z.boolean().optional(),
    }),
});

export const collections = { articles, projects };
