import { convertSlug } from "@lib/slug";
import type { CollectionEntry } from "astro:content";

export interface User {
    name: string;
    website: string | null;
}

export interface Project {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    team: User[];
    image: string;
    date: Date;
    content: CollectionEntry<"projects">;
}

export function fromContent(project: CollectionEntry<"projects">) {
    return {
        title: project.data.title as string,
        slug: convertSlug(project.data.title as string),
        description: project.data.description as string,
        tags: project.data.tags as string[],
        team: project.data.team as User[],
        image: project.data.image as string,
        date: project.data.date as Date,
        content: project as CollectionEntry<"projects">,
    } as Project;
}
