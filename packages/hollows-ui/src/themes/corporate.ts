import type { Theme } from '../core/types'

export const corporate: Theme = {
  name: 'corporate',
  container: {
    padding: '40px 24px',
    textAlign: 'center',
    background: 'transparent',
  },
  illustration: {
    opacity: 0.5,
    marginBottom: '20px',
  },
  headline: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--hollows-text, #374151)',
    marginBottom: '8px',
  },
  description: {
    fontSize: '13px',
    color: 'var(--hollows-text-secondary, #9ca3af)',
    marginBottom: '20px',
    maxWidth: '300px',
  },
  cta: {
    fontSize: '13px',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '6px',
    background: 'transparent',
    color: 'var(--hollows-primary, #2563eb)',
    border: '1px solid var(--hollows-primary, #2563eb)',
  },
}
