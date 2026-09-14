# Design principles

> TODO(owner): this file is a starting point. Replace the placeholder sections
> with the company's actual principles. The structure is what matters — keep
> each principle short enough that someone will actually read all of them.

## Brand

<!-- TODO(owner): fill in -->

- Logo files: `public/` — which mark, at what minimum size, with how much clear space
- Approved colours: set them in `src/design/tokens.json`, not here
- Company name: the exact form to use in running text, and what never to abbreviate
- Typefaces: the licensed brand faces and where to get them

Until these are filled in, the tokens in `src/design/tokens.json` are neutral
placeholders and no site built from this template should be shared externally.

## Principles

1. **One idea per page.** These sites explain a single thing. If a page needs
   two headlines, it is two pages.
2. **The content is the design.** Structure comes from what the material is —
   a sequence gets steps, a trade-off gets a table, a system gets a diagram.
   Decoration that encodes nothing gets cut.
3. **Restraint by default.** Spend visual emphasis in one place per page. If
   everything is highlighted, nothing is.
4. **Consistency over novelty.** A reader moving between two demo sites should
   recognise both as ours. Personal styling belongs in personal projects.

## Layout

- Running text stays under 68 characters per line
- One `h1` per page, headings descend in order
- Vertical rhythm comes from `Section`, not from ad-hoc margins
- Everything works at 375px wide

## When to break these

Rarely, and say why in the PR description.
