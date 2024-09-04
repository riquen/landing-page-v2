import { defineConfig, isDev } from 'sanity'
import { structureTool } from 'sanity/structure'

import { visionTool } from '@sanity/vision'

import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'apl4t2gy',
  dataset: 'production',
  title: 'Landing Page v2',
  apiVersion: '2024-07-24',
  basePath: '/admin',
  plugins: isDev ? [structureTool(), visionTool()] : [structureTool()],
  schema: { types: schemas },
})

export default config
