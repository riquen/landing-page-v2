import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'apl4t2gy',
  dataset: 'production',
  title: 'Landing Page v2',
  apiVersion: '2024-07-24',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: { types: schemas },
})

export default config
