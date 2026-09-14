---
description: Scaffold a new page using existing components
argument-hint: <page-slug> <what the page explains>
---

Create a new page at `src/pages/$1.astro`.

Before writing anything:

1. Read `src/design/tokens.json` and `src/pages/kitchen-sink.astro` so you know
   what already exists.
2. Read `docs/content-rules.md`.

Then build the page:

- `BaseLayout` with a real `title` and `description`
- A `Hero` with a headline that states the single thing the reader should leave
  with, and a standfirst of two or three sentences
- `Section` blocks for the body, using existing components only
- No page-level `<style>` block

The page is about: $2

Add it to the `nav` array in `src/site.config.ts` if it belongs in the top
navigation. Then run `npm run build` and confirm it passes.
