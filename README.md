# Anamika Pal — portfolio

Personal portfolio for Anamika Pal, a user experience and product designer in Bangalore. Built with Vite and React, without a UI framework.

## Develop

```bash
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

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
