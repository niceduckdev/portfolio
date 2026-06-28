import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import prefixImages from "./src/plugins/prefix-images";
import jellybean from "./src/plugins/jellybean";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://niceduck.dev",
    vite: {
        plugins: [tailwindcss()],
    },

    markdown: {
        remarkPlugins: [prefixImages],
        shikiConfig: {
            theme: jellybean,
        },
    },

    integrations: [sitemap()],
});
