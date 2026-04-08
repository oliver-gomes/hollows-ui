import type { HollowDescriptor } from '../core/types'
import { getTheme } from '../themes/index'

export interface HollowSvelteProps {
  name: string
  loading?: boolean
  empty?: boolean
  theme?: string
  onAction?: () => void
  customCopy?: {
    headline?: string
    description?: string
    cta?: string
  }
}

function getDescriptor(name: string): HollowDescriptor | undefined {
  if (typeof globalThis !== 'undefined' && (globalThis as any).__HOLLOWS_REGISTRY__) {
    return (globalThis as any).__HOLLOWS_REGISTRY__[name]
  }
  return undefined
}

export function createHollowStore(name: string) {
  const descriptor = getDescriptor(name)
  return {
    descriptor,
    theme: getTheme('minimal'),
    getEmptyStateHTML(props: HollowSvelteProps) {
      const desc = descriptor ?? getDescriptor(props.name)
      if (!desc) return '<div data-hollows>Nothing here yet</div>'

      const theme = getTheme(props.theme ?? 'minimal')
      const copy = {
        headline: props.customCopy?.headline ?? desc.copy.headline,
        description: props.customCopy?.description ?? desc.copy.description,
        cta: props.customCopy?.cta ?? desc.copy.cta,
      }

      return `
        <div data-hollows="${desc.name}" style="display:flex;flex-direction:column;align-items:center;padding:${theme.container.padding};text-align:center">
          <h3 style="font-size:${theme.headline.fontSize};font-weight:${theme.headline.fontWeight};color:${theme.headline.color};margin-bottom:${theme.headline.marginBottom}">${copy.headline}</h3>
          <p style="font-size:${theme.description.fontSize};color:${theme.description.color};margin-bottom:${theme.description.marginBottom}">${copy.description}</p>
          <button style="font-size:${theme.cta.fontSize};padding:${theme.cta.padding};border-radius:${theme.cta.borderRadius};background:${theme.cta.background};color:${theme.cta.color};border:${theme.cta.border};cursor:pointer">${copy.cta}</button>
        </div>
      `
    },
  }
}

export default { createHollowStore }
