import { glob } from "astro/loaders";
import { z } from "astro/zod";
import {defineCollection} from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
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
        date: z.date(),
        highlighted: z.boolean().optional(),
    }),
});

const content = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content" }),
});

export const collections = { articles, projects, content };
