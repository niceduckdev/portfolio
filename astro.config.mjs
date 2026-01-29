import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import prefixImages from "./src/plugins/prefix-images";
import jellybean from "./src/plugins/jellybean";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        remarkPlugins: [prefixImages],
        shikiConfig: {
            theme: jellybean,
        },
    },
});
