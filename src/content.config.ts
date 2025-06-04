import { z, defineCollection } from "astro:content";

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        image: z.string().optional(),
        date: z.date(),
    }),
});

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        image: z.string().optional(),
        date: z.date(),
    }),
});

export const collections = { posts, projects };
