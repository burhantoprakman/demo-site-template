# Accessibility baseline

Every site from this template meets these. They are not aspirational.

## Contrast

- Body text against its background: at least 4.5:1
- Large text (24px+ or 19px+ bold): at least 3:1
- Interactive borders and focus rings: at least 3:1

Check any token change against these before committing. A brand colour that
fails contrast gets a darker variant for text use, not an exception.

## Structure

- One `h1` per page
- Headings descend without skipping levels
- Landmarks: the layout provides `header`, `main`, `footer` — use them
- A skip link to `#main`, which `BaseLayout` includes

## Keyboard

- Every interactive element is reachable by Tab, in a sensible order
- Focus is always visible — `:focus-visible` is styled globally, do not remove it
- Nothing is reachable only by hover

## Images and figures

- Every `img` has an `alt`. Decorative images get `alt=""`.
- Diagrams get a `Figure` caption explaining what the reader should take from it
- Never use a screenshot of text as the only way to get information

## Motion

`prefers-reduced-motion` is respected globally. Do not add animation that
ignores it.

## Tables

- Every table has a `caption`
- Header cells use `th` with a `scope`
- Layout is never done with tables

## Quick check before a PR

Tab through the page. Zoom to 200%. Run the page through an automated checker.
None of that catches everything, but it catches most of what ships broken.
