import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        hidden: z.boolean().optional(),
    }),
});

export const collections = { articles };
