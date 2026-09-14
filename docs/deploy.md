# Deploying

> TODO(owner): replace this with your organisation's actual hosting path.
> This is the single most common reason a template goes unused — if the deploy
> story is unclear, people build the site and then abandon it.

The build produces static files in `dist/`. Any static host will serve them.

## Configure first

In `astro.config.mjs`:

- `site` — the full URL the site will be served from
- `base` — only if hosting under a subpath, e.g. `/my-demo`

## Options

**Internal static hosting** — point your host at `dist/`. Preferred if your
organisation has one, since access control comes for free.

**GitHub Pages** — set `base` to `/<repo-name>`, and add a deploy workflow.
Note that Pages sites are public unless the repo is in an Enterprise org with
private Pages enabled. Confirm before using this for anything internal.

**Vendor platforms** — check with security before connecting a repo to an
external build service.

## Access

<!-- TODO(owner): who may view these sites, and how is that enforced? -->
