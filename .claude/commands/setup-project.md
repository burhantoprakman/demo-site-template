---
description: Configure a freshly-templated demo site — fills in identity, applies brand tokens, and removes template scaffolding
argument-hint: name="..." tagline="..." owner="Name <email>" url="https://..." [tokens="path/to/tokens.json"]
---

Configure this site as a new project instead of the template placeholder.

Read the arguments in `$ARGUMENTS`. They may arrive as `key="value"` pairs (any
order) or as plain prose — parse whichever was given. Required: `name`,
`tagline`, `owner` (a display name and an email, in any reasonable format).
Optional: `url` (the deployed site URL) and `tokens` (a path to a JSON file
with brand token overrides). If a required field is missing, ask for it before
changing anything — never invent a name, tagline, or owner.

Then, in order:

1. **`src/site.config.ts`** — set `name`, `tagline`, and `owner: { name, email }`
   to the given values. Leave `nav` as-is unless told otherwise.
2. **`astro.config.mjs`** — set `site` to the given `url`. If none was given,
   leave the placeholder and tell the user to set it before deploying.
3. **Brand tokens** — if a `tokens` path was given, read it and merge its
   values into `src/design/tokens.json`, then run `npm run tokens`. Otherwise
   leave the neutral placeholder tokens and say so in your response.
4. **Delete `src/pages/example.astro`.**
5. **Rewrite `src/pages/index.astro`** — remove the `DELETE-ME` block and the
   template's own marketing copy (the "Build an explainer site..." Hero, the
   "Getting from fork to published" Steps, the tokens/rules Callout). Replace
   with a minimal real homepage: `BaseLayout` using the new `name`/`tagline`,
   a `Hero` with a headline stating what this site explains, and one `Section`
   as a placeholder for the first real content block. Do not invent detailed
   content — keep the section short and say in your response that the real
   content still needs to be written.
6. **`README.md`** — replace the `Owner` section's `TODO(owner)` line with the
   given owner name and email.
7. Run `npm run build` and confirm it passes. Report what you changed, and
   list what's still left from the "Making it yours" checklist (real page
   content, a `docs/content-rules.md` review, brand tokens if none were
   supplied).

Never touch `kitchen-sink.astro`, `.claude/`, or anything under `docs/`.
