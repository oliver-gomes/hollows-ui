import type { ComponentClassification } from './types'

interface CTAConfig {
  label: string
  action: 'navigate' | 'create' | 'retry' | 'clear' | 'custom'
  icon?: string
}

const CTA_MAP: Record<ComponentClassification, CTAConfig> = {
  inbox: { label: 'Compose a message', action: 'create' },
  search: { label: 'Clear filters', action: 'clear' },
  list: { label: 'Add item', action: 'create' },
  table: { label: 'Add data', action: 'create' },
  chart: { label: 'Import data', action: 'create' },
  'card-grid': { label: 'Create first item', action: 'create' },
  feed: { label: 'Create a post', action: 'create' },
  cart: { label: 'Browse products', action: 'navigate' },
  favorites: { label: 'Explore items', action: 'navigate' },
  notifications: { label: 'Notification settings', action: 'navigate' },
  upload: { label: 'Upload files', action: 'create' },
  comments: { label: 'Write a comment', action: 'create' },
  gallery: { label: 'Add media', action: 'create' },
  form: { label: 'Refresh', action: 'retry' },
  conversation: { label: 'Send a message', action: 'create' },
  error: { label: 'Try again', action: 'retry' },
  generic: { label: 'Get started', action: 'create' },
}

export function getCTAForClassification(classification: ComponentClassification): CTAConfig {
  return CTA_MAP[classification] ?? CTA_MAP.generic
}

export function getCTALabel(classification: ComponentClassification): string {
  return CTA_MAP[classification]?.label ?? 'Get started'
}
