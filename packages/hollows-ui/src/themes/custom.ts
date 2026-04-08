import type { Theme } from '../core/types'
import { minimal } from './minimal'

export function createTheme(overrides: Partial<Theme>): Theme {
  return {
    name: overrides.name ?? 'custom',
    container: { ...minimal.container, ...overrides.container },
    illustration: { ...minimal.illustration, ...overrides.illustration },
    headline: { ...minimal.headline, ...overrides.headline },
    description: { ...minimal.description, ...overrides.description },
    cta: { ...minimal.cta, ...overrides.cta },
  }
}

export function getTheme(name: string): Theme | null {
  const themes: Record<string, () => Promise<{ default?: Theme } & Record<string, Theme>>> = {
    minimal: () => import('./minimal'),
    playful: () => import('./playful'),
    corporate: () => import('./corporate'),
  }

  return null
}

export { minimal } from './minimal'
export { playful } from './playful'
export { corporate } from './corporate'
