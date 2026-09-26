import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const vitePkg = join(root, 'node_modules', 'vite', 'package.json')

if (!existsSync(vitePkg)) {
  console.error(`
Dependencies are missing or devDependencies were not installed.

From the project root, run:
  npm ci

If you use production-only installs (NODE_ENV=production or npm install --omit=dev), include dev dependencies:
  npm install --include=dev
`)
  process.exit(1)
}
