import { sortOnDate, type CollectionEntryLike } from "@lib/date";
import { convertSlug } from "@lib/slug";
import { getCollection } from "astro:content";

export async function getAllPosts(includeAll: boolean) {
    const posts = await getCollection("posts").then((posts) =>
        sortOnDate(posts as CollectionEntryLike[]),
    );

    return includeAll ? posts : posts.filter((post) => !post.data.hide)
}