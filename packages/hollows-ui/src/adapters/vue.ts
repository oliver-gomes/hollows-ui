import type { HollowDescriptor, Theme } from '../core/types'
import { getTheme } from '../themes/index'

export interface HollowVueProps {
  name: string
  loading?: boolean
  empty?: boolean
  theme?: string
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

export const HollowVue = {
  name: 'Hollow',
  props: {
    name: { type: String, required: true },
    loading: { type: Boolean, default: false },
    empty: { type: Boolean, default: false },
    theme: { type: String, default: 'minimal' },
    customCopy: { type: Object, default: null },
  },
  emits: ['action'],
  setup(props: HollowVueProps, { emit, slots }: any) {
    return () => {
      if (props.loading) {
        return { template: '<div data-hollows-loading class="hollows-loading">Loading...</div>' }
      }

      if (props.empty) {
        const descriptor = getDescriptor(props.name)
        if (descriptor) {
          const theme = getTheme(props.theme ?? 'minimal')
          const copy = {
            headline: props.customCopy?.headline ?? descriptor.copy.headline,
            description: props.customCopy?.description ?? descriptor.copy.description,
            cta: props.customCopy?.cta ?? descriptor.copy.cta,
          }

          return {
            template: `
              <div data-hollows="${descriptor.name}" style="display:flex;flex-direction:column;align-items:center;padding:${theme.container.padding};text-align:center">
                <h3 style="font-size:${theme.headline.fontSize};font-weight:${theme.headline.fontWeight};color:${theme.headline.color};margin-bottom:${theme.headline.marginBottom}">${copy.headline}</h3>
                <p style="font-size:${theme.description.fontSize};color:${theme.description.color};margin-bottom:${theme.description.marginBottom}">${copy.description}</p>
                <button @click="$emit('action')" style="font-size:${theme.cta.fontSize};padding:${theme.cta.padding};border-radius:${theme.cta.borderRadius};background:${theme.cta.background};color:${theme.cta.color};border:${theme.cta.border}">${copy.cta}</button>
              </div>
            `,
          }
        }

        return { template: '<div data-hollows>Nothing here yet</div>' }
      }

      return slots.default?.()
    }
  },
}

export default HollowVue
