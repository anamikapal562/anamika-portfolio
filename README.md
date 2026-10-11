# Anamika Pal — portfolio

Personal portfolio for Anamika Pal, a user experience and product designer in Bangalore. Built with Vite and React, without a UI framework.

## Develop

Install dependencies **before** starting the dev server (Vite is a dev dependency):

```bash
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### `vite: command not found`

This means `node_modules` is missing or dev dependencies were skipped. From the project root:

```bash
npm ci
```

If you previously ran `npm install --omit=dev` or have `NODE_ENV=production`, run:

```bash
npm install --include=dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |

## Replace personal assets

Paths live in `src/data/content.ts` and `public/images/`.

- Portrait: `public/images/profile/anamika.svg`
- Project visuals: `public/images/projects/`
- Résumé PDF: `public/images/resume/anamika-pal-resume.pdf` (the résumé page enables the download once this file is a real PDF)
- Email address: `profile.email` in `src/data/content.ts`

## Pages

Home, Work, three case-study frames, About, Résumé, and Contact. Routing is a small client-side history router, so a static host needs to serve `index.html` for those paths.
