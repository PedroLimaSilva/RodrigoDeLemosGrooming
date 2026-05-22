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
| `npm run test:update-snapshots` | Refresh `*-linux.png` baselines in Docker (same environment as GitHub Actions). Requires [Docker](https://www.docker.com/). |
| `npm run deploy` | Build then publish `dist/` with [gh-pages](https://github.com/tschaub/gh-pages) (requires GitHub Pages setup and permissions). |

## GitHub Pages and `base` path

[`astro.config.mjs`](astro.config.mjs) sets `site` and `base` for a **project** GitHub Pages URL (`/RodrigoDeLemosGrooming`). In development, open the app using that base path (for example `http://localhost:4321/RodrigoDeLemosGrooming/` — port may vary). Playwright tests navigate to `/RodrigoDeLemosGrooming/` for the same reason.

## Tests

Tests live under [`tests/`](tests/). They use full-page screenshots with `prefers-reduced-motion: reduce` so reveal animations do not affect snapshots. Baselines are committed under [`tests/test.test.ts-snapshots/`](tests/test.test.ts-snapshots/).

Install browsers once if needed:

```bash
npx playwright install chromium
```

### Updating snapshots

GitHub Actions runs tests on **Ubuntu** and compares against `*-linux.png` files. `npm run test:update-snapshots` always runs Playwright inside Docker so baselines match CI, even on macOS.

After intentional UI changes:

```bash
npm run test:update-snapshots
```

Then commit the updated `*-linux.png` files under `tests/test.test.ts-snapshots/`.

The script uses `mcr.microsoft.com/playwright:v1.60.0-noble`. Keep that tag in sync with `@playwright/test` in [`package.json`](package.json) when you upgrade Playwright.

[`playwright.config.ts`](playwright.config.ts) sets `updateSnapshots: 'missing'`, so a normal `npm test` only creates missing baselines; use `test:update-snapshots` when the UI has changed.

## Project layout

- [`src/pages/`](src/pages/) — routes (e.g. [`index.astro`](src/pages/index.astro)).
- [`src/components/`](src/components/) — page sections (hero, services, footer, etc.).
- [`src/layouts/`](src/layouts/) — shared HTML shell and meta defaults.
- [`src/styles/`](src/styles/) — global SCSS and design tokens.
- [`public/`](public/) — static assets (logos, favicons, `robots.txt`).
- [`design/mockup.png`](design/mockup.png) — reference mockup.

## License

MIT — see [`package.json`](package.json) for author metadata.
