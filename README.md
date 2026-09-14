# Demo site template

A starting point for internal sites that explain or demo something. Company
design system and content rules included, so you write the content and not the
scaffolding.

## Quick start

```bash
npm install
npm run dev
```

That is the whole setup. If it took more than that, open an issue — the promise
of this template is fork-to-running in one command.

Requires Node 20 or later (`.nvmrc` is provided; `nvm use` picks it up).

## Making it yours

1. **Use as template** on GitHub — not fork. You get a clean history and no
   upstream link.
2. Edit `src/site.config.ts`: name, tagline, owner, navigation.
3. Edit `src/design/tokens.json` if your project needs to differ from the
   company defaults, then run `npm run tokens`.
4. Write your pages in `src/pages/`. Start by copying `example.astro`.
5. Delete every `DELETE-ME` block and `src/pages/example.astro`.
6. Set `site` in `astro.config.mjs` to your deployed URL.

## Layout

```
src/
  design/tokens.json     design source of truth - edit this
  styles/tokens.css      generated - do not edit
  components/            the component library
  pages/
    kitchen-sink.astro   every component, on one page - keep it
  site.config.ts         the four fields most people need
docs/                    company rules - read before publishing
.claude/                 skills and commands for Claude Code
```

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Local server with hot reload |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type and template check |
| `npm run tokens` | Regenerate `tokens.css` from `tokens.json` |

## Working with Claude Code

`CLAUDE.md` and `.claude/skills/` are set up so Claude reads the tokens and the
component inventory before writing UI. Useful commands:

- `/setup-project name="..." tagline="..." owner="Name <email>" url="https://..."` —
  do the entire "Making it yours" checklist below in one go: fills in
  `site.config.ts`, sets the deployed URL, applies brand tokens if given,
  deletes the example page, and rewrites the homepage. Run this first, right
  after `npm install`, instead of hand-editing the files.
- `/new-page <slug> <what it explains>` — scaffolds a page from existing components

If Claude builds a component that duplicates something in `kitchen-sink.astro`,
that is a bug in the skill files — please fix it upstream rather than locally.

## Before you share the link

- `npm run build` passes
- No `DELETE-ME` blocks, no placeholder text
- `site.config.ts` has a real owner
- You have read `docs/content-rules.md`

## Owner

<!-- TODO(owner): who maintains this template, and where to raise issues. -->

## Improving the template

If you worked around something, open an issue. The most useful signal is
"I needed a component that didn't exist" or "Claude kept doing X" — both mean
the shared files need a change, not your fork.
