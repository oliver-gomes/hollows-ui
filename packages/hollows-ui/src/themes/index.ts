import type { Theme } from '../core/types'
import { minimal } from './minimal'
import { playful } from './playful'
import { corporate } from './corporate'
export { createTheme } from './custom'

const themes: Record<string, Theme> = {
  minimal,
  playful,
  corporate,
}

export function getTheme(name: string): Theme {
  return themes[name] ?? minimal
}

export { minimal, playful, corporate }
