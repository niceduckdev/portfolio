---
title: iO Website
description: Made during my internship at iO Digital
tags: ["nextjs", "payload", "tailwind", "docker"]
team:
    - name: "Ayla"
      website: "https://aylacarmonalozano.dev"
image: home.webp
date: 2026-06-12
hidden: true
---

During our internship at iO Digital, Ayla and I were tasked with building a new public website for the company. iO is a digital agency with over 20 years of experience and 12 offices spread across Europe. The assignment came with a lot of freedom, we got to pick the entire tech stack ourselves.

> I was mainly responsible for the backend, CMS architecture, deployment pipeline, and the block registry system.

The goal was to build a new public website for iO Digital. It had to be maintainable, fast, and content-managed. All pages had to be editable through a CMS. The tech stack was entirely our choice.

We worked in weekly sprints using SCRUM, with a daily standup at 9:30 and a sprint review every Monday morning.

# Tech stack

We evaluated a handful of options for both the frontend framework and the CMS before making a decision.

> **Frontend candidates**<br />
> Next.js, Astro, and Nuxt

> **CMS candidates**<br />
> Squidex, BCMS, Sanity, Strapi, and Payload

We landed on Next.js paired with Payload CMS.

Next.js was the obvious choice, it's the industry standard, it supports both SSR and CSR, and it had the most support within iO. Payload was chosen because it's fully open source, self-hostable, has a solid community, and integrates naturally with Next.js. The developer experience is excellent, and content editors can use it without having a technical background.

For the database, we initially considered PostgreSQL, but our KdG coach advised us to go with MongoDB to avoid migration headaches down the line.

# Collections

We structured all content into categories.

> **Pages**<br />
> Home, Cases, Privacy, Cookie, Terms & Conditions, and Custom Pages

> **Page Layout**<br />
> Navigation, Contact, and Footer. All of these are visible on every page

> **Cases**<br />
> Cases, Customers, and Categories

> **Organization**<br />
> Locations and People

# Blocks

Each page is built from blocks, these are modular content sections that editors can assemble in the CMS. Every block follows the same structure: a Payload config, a React component, and an index.ts file.

Early on, adding a new block required five manual steps. I automated most of it with a custom `.mjs` script that scans all block index files, generates the import lines and registry entries, and writes everything to a single `registry.generated.ts` file.

Blocks are rendered via a `getComponent` function that looks up the `blockType` in the generated registry. Some blocks (like `CALL_TO_ACTION_DOUBLE` and `BACKGROUND`) render directly in a `<section>` tag without padding. Everything else gets wrapped in a `Container` component for consistent spacing.

```ts
export function getComponent(block: NonNullable<Page["elements"]>[number]) {
    const { blockType: type, ...rawProps } = block;
    const entry = Registry[type as keyof typeof Registry];

    if (!entry) {
        console.error(`Could not find block "${type}" in registry`);
        return null;
    }

    return {
        component: entry.component as React.ComponentType<
            Record<string, unknown>
        >,
        data: rawProps,
    };
}
```

# Cases

One of the must-have requirements was a cases overview with category filtering, pagination, and detail pages.

We debated between client-side and server-side rendering for the filtering and pagination. CSR would give a snappier feel but search engines and LLMs wouldn't be able to crawl the results. SSR would solve that, but every filter change would trigger a full page reload.

We ended up combining both. On first load, everything is server-rendered using the current URL params as query input. Once the page is interactive, a client-side component takes over. It updates the URL parameters as the user filters, which keeps the page bookmarkable and shareable.

**Crawlers see the server-rendered version. Users get a smooth filter experience.**

```tsx
{/* Component that manages filters and shows the cases */}
{/* Initial results are rendered server-side, filters work client-side */}
<Cases
    initial={initialResult.docs}
    initialHasNextPage={initialResult.hasNextPage}
    initialTotalPages={initialResult.totalPages}
    items={...}
    limit={LIMIT}
>
    {/* Server-rendered highlighted cases */}
    <Highlighted />
</Cases>
```

For related cases on the detail page, we query based on the current case's tags and customer.

# Frontend

Ayla handled the frontend components, structuring everything using Atomic Design (atoms, molecules and organisms) and building each component in isolation using Storybook.

This made it easy for both of us to know exactly what props a component expected, which smoothed out the integration between the CMS blocks and the frontend components significantly.

# Deployment & Automation

Deployment was fully automated via a GitLab Pipeline triggered on every push to the `main`-branch.

Two additional pipelines run on every merge request. A merge request can't be merged into the `main`-branch if either pipeline fails.

> **Linter**<br />
> This pipeline runs ESLint across the full codebase

> **Tests**<br />
> This pipeline runs all Vitest tests.

# Reflection

Six sprints, six weeks, and a lot of tickets closed. Here are some things I'd do differently.

> **Story point estimations**<br />
> We underestimated story points early on, our initial estimates were consistently too low.

> **Scope creep**<br />
> We constantly wanted to add new features while not thinking about the time investment.

> **Customer planning**<br />
> I'd invest more time in the customer planning earlier rather than adjusting our planning mid-project.
