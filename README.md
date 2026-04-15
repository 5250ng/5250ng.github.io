# 5250ng.com

Source for the marketing site at **<https://5250ng.com>**, hosted on
GitHub Pages from this repository.

Built with [Astro](https://astro.build/). Output is pure static HTML and CSS;
zero JavaScript ships to the browser by default.

## Local development

```bash
npm install
npm run dev        # serve at http://localhost:4321
npm run build      # production build into ./dist
npm run preview    # serve the built site
```

## Project layout

```
public/                    # static assets copied verbatim to the site root
  CNAME                    # "5250ng.com" — binds the custom domain
  robots.txt
  sitemap.xml
  fonts/                   # self-hosted IBM Plex Mono + Inter (WOFF2)
  img/                     # screenshots, favicon, OG card
src/
  pages/                   # one .astro file per route
    index.astro
    themes/index.astro
    scripting/index.astro
    docs/index.astro
    404.astro
  layouts/Base.astro       # shared <head>, header, footer
  components/              # reusable UI (FeatureCard, ThemeSwatch, …)
  data/
    site.ts                # site-wide constants (URL, GitHub repo, …)
    themes.ts              # loads src/data/themes/*.json at build time
    themes/*.json          # copied from 5250ng/src/ui/themes/data/terminal/
    mcp-tools.ts
    codepages.ts
  content/docs/
    5250script.md          # copied from 5250ng/docs/5250script.md
  styles/global.css
.github/workflows/
  deploy.yml               # build + publish to GitHub Pages
```

## Keeping content in sync

A handful of files are copied from the main
[`5250ng/5250ng`](https://github.com/5250ng/5250ng) repo rather than
reimplemented here:

| Source in `5250ng/` | Destination in this repo |
|---|---|
| `.github/i5_OS_Login.png`                       | `public/img/hero-login.png` |
| `.github/i5_OS_Main_Menu.png`                   | `public/img/main-menu.png`  |
| `resources/icons/5250ng.{png,ico}`              | `public/img/favicon.{png,ico}` |
| `src/ui/themes/data/terminal/*.json`            | `src/data/themes/*.json`    |
| `docs/5250script.md`                            | `src/content/docs/5250script.md` |

When the upstream files change, re-copy them and rebuild. (A `sync.sh`
helper script may be added later.)

## Deploying

See [`DEPLOY.md`](./DEPLOY.md) for the one-time GitHub Pages and DNS setup.
Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the
site and publishes it to Pages.

## License

Site content: see the parent [5250ng project's license](https://github.com/5250ng/5250ng/blob/main/LICENSE) (GPL-3.0).
