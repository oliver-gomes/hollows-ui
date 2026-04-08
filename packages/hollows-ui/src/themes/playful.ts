import type { Theme } from '../core/types'

export const playful: Theme = {
  name: 'playful',
  container: {
    padding: '56px 24px',
    textAlign: 'center',
    background: 'var(--hollows-surface, #fafafa)',
  },
  illustration: {
    opacity: 1,
    marginBottom: '28px',
  },
  headline: {
    fontSize: '22px',
    fontWeight: '700',
    color: 'var(--hollows-text, #111827)',
    marginBottom: '12px',
  },
  description: {
    fontSize: '15px',
    color: 'var(--hollows-text-secondary, #6b7280)',
    marginBottom: '28px',
    maxWidth: '360px',
  },
  cta: {
    fontSize: '15px',
    fontWeight: '600',
    padding: '12px 28px',
    borderRadius: '24px',
    background: 'var(--hollows-primary, #6366f1)',
    color: 'var(--hollows-primary-text, #ffffff)',
    border: 'none',
  },
}
