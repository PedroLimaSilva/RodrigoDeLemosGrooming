# Rodrigo De Lemos Grooming — CAN D'ORO site

Static marketing site for **CAN D'ORO — Dog Salon & Boutique**: refined grooming, services, testimonials, and booking calls-to-action. Built with [Astro](https://astro.build/), styled with SCSS, and deployed to **GitHub Pages**.

**Live site:** [https://pedrolimasilva.github.io/RodrigoDeLemosGrooming/](https://pedrolimasilva.github.io/RodrigoDeLemosGrooming/)

## Requirements

- **Node.js** — use the version in [`.nvmrc`](.nvmrc) (currently **20.19.0**). With [nvm](https://github.com/nvm-sh/nvm): `nvm use`.

## Scripts

| Command        | Description |
|----------------|-------------|
| `npm install`  | Install dependencies. |
| `npm run dev`  | Start the Astro dev server (hot reload). |
| `npm run build`| Production build to `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm test`     | Run [Playwright](https://playwright.dev/) visual regression tests. |
| `npm run deploy` | Build then publish `dist/` with [gh-pages](https://github.com/tschaub/gh-pages) (requires GitHub Pages setup and permissions). |

## GitHub Pages and `base` path

[`astro.config.mjs`](astro.config.mjs) sets `site` and `base` for a **project** GitHub Pages URL (`/RodrigoDeLemosGrooming`). In development, open the app using that base path (for example `http://localhost:4321/RodrigoDeLemosGrooming/` — port may vary). Playwright tests navigate to `/RodrigoDeLemosGrooming/` for the same reason.

## Tests

Tests live under [`tests/`](tests/). They use full-page screenshots with `prefers-reduced-motion: reduce` so reveal animations do not affect snapshots. First run or after intentional UI changes may require updating snapshots (see Playwright docs for `--update-snapshots`).

Install browsers once if needed:

```bash
npx playwright install
```

## Project layout

- [`src/pages/`](src/pages/) — routes (e.g. [`index.astro`](src/pages/index.astro)).
- [`src/components/`](src/components/) — page sections (hero, services, footer, etc.).
- [`src/layouts/`](src/layouts/) — shared HTML shell and meta defaults.
- [`src/styles/`](src/styles/) — global SCSS and design tokens.
- [`public/`](public/) — static assets (logos, favicons, `robots.txt`).
- [`design/mockup.png`](design/mockup.png) — reference mockup.

## License

MIT — see [`package.json`](package.json) for author metadata.
