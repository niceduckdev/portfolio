import { convertSlug } from "../lib/slug";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const prefixImages: Plugin = () => {
    return (tree, file) => {
        const slug = convertSlug(file.data?.astro?.frontmatter?.title);
        if (!slug) return;

        visit(tree, "image", (node: any) => {
            if (node.url.startsWith("http") || node.url.startsWith("/")) return;
            node.url = `/images/articles/${slug}/${node.url}`;
        });
    };
};

export default prefixImages;
