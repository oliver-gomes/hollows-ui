import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import type { HollowDescriptor, HollowConfig } from '../core/types'

export function writeHollowDescriptor(
  descriptor: HollowDescriptor,
  outDir: string
): string {
  const filePath = path.join(outDir, `${descriptor.name}.hollows.json`)

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  fs.writeFileSync(filePath, JSON.stringify(descriptor, null, 2), 'utf-8')
  return filePath
}

export function readHollowDescriptor(
  name: string,
  outDir: string
): HollowDescriptor | null {
  const filePath = path.join(outDir, `${name}.hollows.json`)

  if (!fs.existsSync(filePath)) return null

  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(content)
  } catch {
    return null
  }
}

export function computeHash(content: string): string {
  return crypto.createHash('md5').update(content).digest('hex').slice(0, 8)
}

export function hasChanged(
  name: string,
  newHash: string,
  outDir: string
): boolean {
  const existing = readHollowDescriptor(name, outDir)
  if (!existing) return true
  return existing.hash !== newHash
}
