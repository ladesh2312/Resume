# Lades Hutabarat portfolio

Personal website built with **React 19, Tailwind CSS 4, and Vite 7**, preserving the existing design and résumé content.

## Run locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4173. Node.js 20.19+ or 22.12+ is required.

## Build and verify

```sh
npm run build
npm test
npm run preview
```

Vite compiles React and Tailwind into `dist/`. The build renders the complete page to HTML with React, then hydrates it in the browser. Content and the native experience disclosure remain usable before JavaScript loads. Tests verify pre-rendered career content, asset and anchor integrity, and preservation of the résumé download.

## Edit content

- `src/App.jsx`: page composition.
- `src/components/`: page sections and reusable tags and career roles.
- `src/data/experience.js`: career timeline data.
- `src/styles.css`: Tailwind theme tokens, detailed typography, and coverage diagram.
- `public/assets/`: résumé, self-hosted font and license, and favicon.
- `index.html`: title, description and social metadata.

Keep factual changes aligned with the supplied résumé. No portrait, social profile URLs, public project URLs, or certifications were supplied, so these remain omitted.

## Deployment

The existing Site identity is retained in `.openai/hosting.json`, with static output in `dist/`. The hosted audience remains owner-private. No analytics or backend integrations are included.

Manrope is self-hosted under the included SIL Open Font License. Icons and diagrams are native vectors and CSS.
