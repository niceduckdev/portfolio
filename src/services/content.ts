import type { Article } from "@models/article";
import type { Project } from "@models/project";
import { render as renderContent, type RenderResult } from "astro:content";

export function getReadTime(content: string): number {
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / 60);
}

export async function render(file: Article | Project): Promise<RenderResult> {
    return await renderContent(file.content);
}

export async function getPaths(collection: Article[] | Project[]) {
    return collection.map((content: Article | Project) => ({
        params: { slug: content.slug },
        props: { content },
    }));
}
