import { sortOnDate, type CollectionEntryLike } from "@lib/date";
import { convertSlug } from "@lib/slug";
import { getCollection } from "astro:content";

export async function getAllProjects() {
    return await getCollection("projects").then((projects) =>
        sortOnDate(projects as CollectionEntryLike[]),
    );
}

export async function getProject(slug: string) {
    const posts = await getAllProjects();
    return posts.find(post => convertSlug(post.data.title) === slug);
}