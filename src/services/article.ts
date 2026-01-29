import { fromContent, type Article } from "@models/article";
import { getCollection, render, type RenderResult } from "astro:content";

export async function getArticles(all: boolean = false): Promise<Article[]> {
    const articles = (await getCollection("articles")).map((article) =>
        fromContent(article),
    );

    return sortOnDate(
        all ? articles : articles.filter((article) => !article.hidden),
    );
}

function sortOnDate(collection: Article[]): Article[] {
    return collection.sort((a: Article, b: Article) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export async function getPaths() {
    const articles = await getArticles(true);

    return articles.map((article) => ({
        params: { slug: article.slug },
        props: { article },
    }));
}

export async function renderArticle(article: Article): Promise<RenderResult> {
    return await render(article.content);
}

export function getReadTime(article: Article): number {
    const body: string = article.content.body as string;
    const words = body.trim().split(/\s+/).length;
    return Math.ceil(words / 60);
}
