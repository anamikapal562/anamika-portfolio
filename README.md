# anamika-portfolio

Personal portfolio site built with [Vite](https://vite.dev/) and [React](https://react.dev/).

## Development

Install dependencies **before** starting the dev server (Vite is a dev dependency):

```bash
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

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
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Cloud Agents

Environment configuration lives in [`.cursor/environment.json`](.cursor/environment.json). The `dev` terminal starts the Vite server on port 5173.
