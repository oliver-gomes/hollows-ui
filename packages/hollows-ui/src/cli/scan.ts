import * as fs from 'fs'
import * as path from 'path'
import { glob } from 'glob'
import type { ScannedComponent } from '../core/types'

const HOLLOW_PATTERN = /<Hollow\s+[^>]*name\s*=\s*["']([^"']+)["'][^>]*>/g
const HOLLOW_PATTERN_ALT = /Hollow\(\s*\{[^}]*name\s*:\s*["']([^"']+)["']/g

export async function scanForHollows(rootDir: string, ignore: string[] = []): Promise<ScannedComponent[]> {
  const extensions = ['tsx', 'jsx', 'ts', 'js', 'vue', 'svelte']
  const patterns = extensions.map(ext => path.join(rootDir, `**/*.${ext}`))

  const files: string[] = []
  for (const pattern of patterns) {
    const matched = await glob(pattern.replace(/\\/g, '/'), {
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/.next/**',
        '**/hollows/**',
        ...ignore.map(i => `**/${i}/**`),
      ],
    })
    files.push(...matched)
  }

  const components: ScannedComponent[] = []

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const lines = content.split('\n')

    // Reset regex lastIndex
    HOLLOW_PATTERN.lastIndex = 0
    HOLLOW_PATTERN_ALT.lastIndex = 0

    let match: RegExpExecArray | null

    while ((match = HOLLOW_PATTERN.exec(content)) !== null) {
      const name = match[1]
      const upToMatch = content.slice(0, match.index)
      const line = upToMatch.split('\n').length

      if (!shouldIgnore(name, ignore)) {
        components.push({
          name,
          filePath: path.relative(rootDir, file),
          line,
          props: extractProps(match[0]),
        })
      }
    }

    while ((match = HOLLOW_PATTERN_ALT.exec(content)) !== null) {
      const name = match[1]
      const upToMatch = content.slice(0, match.index)
      const line = upToMatch.split('\n').length

      if (!components.some(c => c.name === name) && !shouldIgnore(name, ignore)) {
        components.push({
          name,
          filePath: path.relative(rootDir, file),
          line,
          props: {},
        })
      }
    }
  }

  return components
}

function shouldIgnore(name: string, ignore: string[]): boolean {
  return ignore.some(pattern => {
    if (pattern.endsWith('*')) {
      return name.startsWith(pattern.slice(0, -1))
    }
    return name === pattern
  })
}

function extractProps(tag: string): Record<string, unknown> {
  const props: Record<string, unknown> = {}

  const booleanProps = ['loading', 'empty']
  for (const prop of booleanProps) {
    if (tag.includes(`${prop}={`) || tag.includes(`${prop}="`)) {
      props[prop] = true
    }
  }

  const themeMatch = tag.match(/theme\s*=\s*["']([^"']+)["']/)
  if (themeMatch) {
    props.theme = themeMatch[1]
  }

  return props
}

export function formatScanResults(components: ScannedComponent[]): string {
  if (components.length === 0) {
    return 'No <Hollow> components found.'
  }

  const lines = [
    `Found ${components.length} <Hollow> component${components.length > 1 ? 's' : ''}:`,
    '',
  ]

  for (const comp of components) {
    lines.push(`  ${comp.name}`)
    lines.push(`    └─ ${comp.filePath}:${comp.line}`)
  }

  return lines.join('\n')
}
