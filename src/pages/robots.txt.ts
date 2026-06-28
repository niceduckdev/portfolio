import type { APIRoute } from "astro";

const getRobots = (url: URL) => `\
User-agent: *
Allow: /

Sitemap: ${url.href}
`;

export const GET: APIRoute = ({ site }) => {
    const url = new URL("sitemap-index.xml", site);
    return new Response(getRobots(url));
};
