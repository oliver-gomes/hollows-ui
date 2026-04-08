import type { ComponentClassification, IllustrationMeta } from './types'

const ILLUSTRATION_MAP: Record<ComponentClassification, string> = {
  inbox: 'inbox-empty',
  search: 'search-no-results',
  list: 'list-empty',
  table: 'table-empty',
  chart: 'chart-no-data',
  'card-grid': 'generic-empty',
  feed: 'feed-empty',
  cart: 'cart-empty',
  favorites: 'favorites-empty',
  notifications: 'notifications-empty',
  upload: 'upload-empty',
  comments: 'comments-empty',
  gallery: 'generic-empty',
  form: 'generic-empty',
  conversation: 'feed-empty',
  error: 'error-state',
  generic: 'generic-empty',
}

export function getIllustrationForClassification(classification: ComponentClassification): string {
  return ILLUSTRATION_MAP[classification] ?? 'generic-empty'
}

export function getIllustrationSvg(illustrationId: string): string {
  try {
    const illustrations = getAllIllustrations()
    const match = illustrations.find(i => i.id === illustrationId)
    return match?.svg ?? illustrations.find(i => i.id === 'generic-empty')!.svg
  } catch {
    return ''
  }
}

export function getAllIllustrations(): IllustrationMeta[] {
  return [
    { id: 'inbox-empty', name: 'Inbox Empty', category: 'inbox', svg: '' },
    { id: 'search-no-results', name: 'Search No Results', category: 'search', svg: '' },
    { id: 'list-empty', name: 'List Empty', category: 'list', svg: '' },
    { id: 'table-empty', name: 'Table Empty', category: 'table', svg: '' },
    { id: 'chart-no-data', name: 'Chart No Data', category: 'chart', svg: '' },
    { id: 'feed-empty', name: 'Feed Empty', category: 'feed', svg: '' },
    { id: 'cart-empty', name: 'Cart Empty', category: 'cart', svg: '' },
    { id: 'favorites-empty', name: 'Favorites Empty', category: 'favorites', svg: '' },
    { id: 'notifications-empty', name: 'Notifications Empty', category: 'notifications', svg: '' },
    { id: 'upload-empty', name: 'Upload Empty', category: 'upload', svg: '' },
    { id: 'comments-empty', name: 'Comments Empty', category: 'comments', svg: '' },
    { id: 'error-state', name: 'Error State', category: 'error', svg: '' },
    { id: 'generic-empty', name: 'Generic Empty', category: 'generic', svg: '' },
  ]
}
