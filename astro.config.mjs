import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import prefixImages from "./src/plugins/prefix-images";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        remarkPlugins: [prefixImages],
        shikiConfig: {
            theme: "gruvbox-dark-soft",
        },
    },
});
