import { sortOnDate } from "@lib/sort";
import { fromContent, type Article } from "@models/article";
import { getCollection } from "astro:content";

export async function getArticles(all: boolean = false): Promise<Article[]> {
    const articles = (await getCollection("articles"))
        .map((article) => fromContent(article))
        .filter((article) => all || !article.hidden);

    return sortOnDate(articles);
}
