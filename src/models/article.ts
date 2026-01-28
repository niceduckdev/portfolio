import { convertSlug } from "@lib/slug";
import type { CollectionEntry } from "astro:content";

export interface Article {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    image: string;
    date: Date;
    content: CollectionEntry<"articles">;
    hidden: boolean;
}

export function fromContent(article: CollectionEntry<"articles">) {
    return {
        title: article.data.title as string,
        slug: convertSlug(article.data.title as string),
        description: article.data.description as string,
        tags: article.data.tags as string[],
        image: article.data.image as string,
        date: article.data.date as Date,
        content: article as CollectionEntry<"articles">,
        hidden: article.data.hidden as boolean,
    } as Article;
}
