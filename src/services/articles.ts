import {getCollection} from "astro:content";
import {sortOnDate} from "@lib/sort.ts";

export async function getAllArticles() {
    const articles = await getCollection("articles");
    return sortOnDate(articles);
}