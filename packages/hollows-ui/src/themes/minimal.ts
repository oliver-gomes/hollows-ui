import type { Theme } from '../core/types'

export const minimal: Theme = {
  name: 'minimal',
  container: {
    padding: '48px 24px',
    textAlign: 'center',
    background: 'transparent',
  },
  illustration: {
    opacity: 0.6,
    marginBottom: '24px',
  },
  headline: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--hollows-text, #1a1a1a)',
    marginBottom: '8px',
  },
  description: {
    fontSize: '14px',
    color: 'var(--hollows-text-secondary, #6b7280)',
    marginBottom: '24px',
    maxWidth: '320px',
  },
  cta: {
    fontSize: '14px',
    fontWeight: '500',
    padding: '8px 20px',
    borderRadius: '8px',
    background: 'var(--hollows-primary, #1a1a1a)',
    color: 'var(--hollows-primary-text, #ffffff)',
    border: 'none',
  },
}
