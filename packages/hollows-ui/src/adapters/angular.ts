import type { HollowDescriptor } from '../core/types'
import { getTheme } from '../themes/index'

export interface HollowAngularConfig {
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

export function getHollowTemplate(config: HollowAngularConfig): string {
  if (config.loading) {
    return `
      <div [attr.data-hollows-loading]="'${config.name}'" class="hollows-loading" role="status" aria-label="Loading">
        <div class="hollows-skeleton-circle"></div>
        <div class="hollows-skeleton-line"></div>
        <div class="hollows-skeleton-line hollows-skeleton-line--short"></div>
      </div>
    `
  }

  if (config.empty) {
    const descriptor = getDescriptor(config.name)
    if (!descriptor) {
      return `<div [attr.data-hollows]="'${config.name}'"><p>Nothing here yet</p></div>`
    }

    const theme = getTheme(config.theme ?? 'minimal')
    const copy = {
      headline: config.customCopy?.headline ?? descriptor.copy.headline,
      description: config.customCopy?.description ?? descriptor.copy.description,
      cta: config.customCopy?.cta ?? descriptor.copy.cta,
    }

    return `
      <div [attr.data-hollows]="'${descriptor.name}'" class="hollows-empty-state" role="status" [attr.aria-label]="'${copy.headline}'">
        <h3 class="hollows-headline">${copy.headline}</h3>
        <p class="hollows-description">${copy.description}</p>
        <button class="hollows-cta" (click)="onAction()">${copy.cta}</button>
      </div>
    `
  }

  return '<ng-content></ng-content>'
}

export function getHollowStyles(themeName: string = 'minimal'): string {
  const theme = getTheme(themeName)

  return `
    .hollows-empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${theme.container.padding};
      text-align: ${theme.container.textAlign};
      background: ${theme.container.background};
    }
    .hollows-headline {
      font-size: ${theme.headline.fontSize};
      font-weight: ${theme.headline.fontWeight};
      color: ${theme.headline.color};
      margin-bottom: ${theme.headline.marginBottom};
    }
    .hollows-description {
      font-size: ${theme.description.fontSize};
      color: ${theme.description.color};
      margin-bottom: ${theme.description.marginBottom};
      max-width: ${theme.description.maxWidth};
    }
    .hollows-cta {
      font-size: ${theme.cta.fontSize};
      font-weight: ${theme.cta.fontWeight};
      padding: ${theme.cta.padding};
      border-radius: ${theme.cta.borderRadius};
      background: ${theme.cta.background};
      color: ${theme.cta.color};
      border: ${theme.cta.border};
      cursor: pointer;
    }
    .hollows-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${theme.container.padding};
      animation: hollows-pulse 1.5s ease-in-out infinite;
    }
    @keyframes hollows-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `
}

export default { getHollowTemplate, getHollowStyles }
