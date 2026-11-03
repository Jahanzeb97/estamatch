import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const DEFAULT_META_PIXEL_ID = '1658782218956943'
const PIXEL_TOKEN = '__META_PIXEL_ID__'

function metaPixelId(env: Record<string, string>): string {
  const configured = (env.VITE_META_PIXEL_ID ?? '').trim()
  if (!configured) return DEFAULT_META_PIXEL_ID
  if (!/^\d{8,20}$/.test(configured)) {
    throw new Error('VITE_META_PIXEL_ID must be a numeric Meta Pixel ID')
  }
  return configured
}

function applyPixelId(html: string, id: string): string {
  return html.replaceAll(PIXEL_TOKEN, id)
}

function metaPixelPlugin(id: string): Plugin {
  const root = process.cwd()
  const stamp = (html: string) => {
    const next = applyPixelId(html, id)
    if (next.includes(PIXEL_TOKEN) || !next.includes(`fbq('init', '${id}')`)) {
      throw new Error('Meta Pixel base code was not installed')
    }
    return next
  }

  return {
    name: 'meta-pixel-id',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.includes(PIXEL_TOKEN) ? stamp(html) : html
      },
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split('?')[0]
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        if (pathname !== '/' && pathname !== '/index.html') return next()
        const html = stamp(readFileSync(resolve(root, 'public/index.html'), 'utf8'))
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(html)
      })
    },
    closeBundle() {
      for (const name of ['index.html', 'app.html']) {
        const file = resolve(root, 'dist', name)
        const html = readFileSync(file, 'utf8')
        const next = html.includes(PIXEL_TOKEN) ? stamp(html) : html
        if (!next.includes(`fbq('init', '${id}')`) || !next.includes("fbq('track', 'PageView')")) {
          throw new Error(`Meta Pixel base code missing from ${name}`)
        }
        if (next !== html) writeFileSync(file, next)
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const id = metaPixelId(loadEnv(mode, process.cwd(), 'VITE_'))
  return {
    plugins: [metaPixelPlugin(id), react(), tailwindcss()],
    // The React app (contact page and other routes) is built from app.html.
    // The static marketing home page lives in public/index.html.
    build: { rollupOptions: { input: 'app.html' } },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  }
})
