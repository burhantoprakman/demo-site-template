# Project guide

An internal explainer/demo site built from the company template. Astro, static
output, no framework components unless a page genuinely needs interactivity.

## Before writing any UI

1. Read `src/design/tokens.json`. It is the source of truth for every colour,
   size, space, and font on this site.
2. Look at `src/pages/kitchen-sink.astro` to see which components already exist.
3. Use an existing component. Only build a new one if nothing fits, and say so
   in your response when you do.

Never hard-code a colour, font, or pixel value. Reference the CSS variable.
Never edit `src/styles/tokens.css` — it is generated. Edit the JSON and run
`npm run tokens`.

## Commands

- `npm run dev` — local server
- `npm run build` — production build, must pass before any PR
- `npm run check` — type and template check
- `npm run tokens` — regenerate tokens.css from tokens.json

## Page conventions

Pages live in `src/pages/`. Every page is a `BaseLayout` with a `title` and
`description`, then `Hero`, then `Section` blocks. Page-level `<style>` is a
smell — if you need it, the component library is probably missing something.

## Rules

@docs/design-principles.md
@docs/content-rules.md
@docs/accessibility.md

## Things to leave alone

- `src/styles/tokens.css` — generated
- `kitchen-sink.astro` — keep it current when components change
- `.env` — never read it, never commit it
