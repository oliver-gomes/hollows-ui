import * as fs from 'fs'
import * as path from 'path'
import type { HollowConfig } from '../core/types'
import { scanForHollows } from './scan'
import { analyzeComponents } from './analyze'
import { generateAll } from './generate'

export async function watchMode(
  rootDir: string,
  config: HollowConfig,
  onChange?: (result: { generated: number; skipped: number }) => void
): Promise<{ close: () => void }> {
  const extensions = ['.tsx', '.jsx', '.ts', '.js', '.vue', '.svelte']
  let debounceTimer: ReturnType<typeof setTimeout> | null = null

  async function rebuild() {
    try {
      const components = await scanForHollows(rootDir, config.ignore)
      const analyzed = await analyzeComponents(components, config)
      const result = generateAll(analyzed, config, rootDir)
      onChange?.(result)
    } catch (error) {
      console.error('Watch rebuild failed:', error)
    }
  }

  const watcher = fs.watch(rootDir, { recursive: true }, (event, filename) => {
    if (!filename) return

    const ext = path.extname(filename)
    if (!extensions.includes(ext)) return
    if (filename.includes('node_modules')) return
    if (filename.includes(config.outDir)) return

    if (debounceTimer) clearTimeout(debounceTimer)
    debounceTimer = setTimeout(rebuild, 300)
  })

  // Initial build
  await rebuild()

  return {
    close() {
      watcher.close()
      if (debounceTimer) clearTimeout(debounceTimer)
    },
  }
}
