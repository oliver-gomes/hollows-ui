import type { ComponentClassification, ScannedComponent, AnalyzedComponent } from './types'

interface DOMInfo {
  tagNames: string[]
  classNames: string[]
  textContent: string
  attributes: Record<string, string>
  childCount: number
  hasTable: boolean
  hasListItems: boolean
  hasSearchInput: boolean
  hasChartElements: boolean
  hasCardPattern: boolean
  hasFormElements: boolean
  hasMessagePattern: boolean
  hasMediaGrid: boolean
}

const KEYWORD_MAP: Record<string, ComponentClassification[]> = {
  inbox: ['inbox'],
  message: ['inbox', 'conversation'],
  email: ['inbox'],
  mail: ['inbox'],
  search: ['search'],
  filter: ['search'],
  result: ['search'],
  list: ['list'],
  items: ['list'],
  table: ['table'],
  row: ['table'],
  column: ['table'],
  chart: ['chart'],
  graph: ['chart'],
  analytics: ['chart'],
  metric: ['chart'],
  card: ['card-grid'],
  grid: ['card-grid'],
  feed: ['feed'],
  post: ['feed'],
  timeline: ['feed'],
  activity: ['feed'],
  cart: ['cart'],
  basket: ['cart'],
  shop: ['cart'],
  order: ['cart'],
  favorite: ['favorites'],
  bookmark: ['favorites'],
  saved: ['favorites'],
  wishlist: ['favorites'],
  notification: ['notifications'],
  alert: ['notifications'],
  bell: ['notifications'],
  upload: ['upload'],
  file: ['upload'],
  attachment: ['upload'],
  drop: ['upload'],
  comment: ['comments'],
  reply: ['comments'],
  discussion: ['comments'],
  review: ['comments'],
  gallery: ['gallery'],
  photo: ['gallery'],
  image: ['gallery'],
  media: ['gallery'],
  chat: ['conversation'],
  conversation: ['conversation'],
  form: ['form'],
  input: ['form'],
  error: ['error'],
  warning: ['error'],
  failed: ['error'],
}

export function classifyFromName(name: string): ComponentClassification {
  const normalized = name.toLowerCase().replace(/[-_]/g, ' ')

  for (const [keyword, classifications] of Object.entries(KEYWORD_MAP)) {
    if (normalized.includes(keyword)) {
      return classifications[0]
    }
  }

  return 'generic'
}

export function classifyFromDOM(domInfo: DOMInfo): ComponentClassification {
  if (domInfo.hasTable) return 'table'
  if (domInfo.hasSearchInput) return 'search'
  if (domInfo.hasChartElements) return 'chart'
  if (domInfo.hasMessagePattern) return 'conversation'
  if (domInfo.hasMediaGrid) return 'gallery'
  if (domInfo.hasCardPattern) return 'card-grid'
  if (domInfo.hasFormElements) return 'form'
  if (domInfo.hasListItems) return 'list'

  return 'generic'
}

export function classify(
  component: ScannedComponent,
  domInfo?: DOMInfo,
  override?: ComponentClassification
): ComponentClassification {
  if (override) return override

  const nameClassification = classifyFromName(component.name)
  if (nameClassification !== 'generic') return nameClassification

  if (domInfo) {
    return classifyFromDOM(domInfo)
  }

  return 'generic'
}

export function getClassificationLabel(classification: ComponentClassification): string {
  const labels: Record<ComponentClassification, string> = {
    inbox: 'Inbox / Messages',
    search: 'Search Results',
    list: 'List',
    table: 'Data Table',
    chart: 'Chart / Graph',
    'card-grid': 'Card Grid',
    feed: 'Activity Feed',
    cart: 'Shopping Cart',
    favorites: 'Favorites / Bookmarks',
    notifications: 'Notifications',
    upload: 'File Upload',
    comments: 'Comments / Discussion',
    gallery: 'Media Gallery',
    form: 'Form / Input',
    conversation: 'Conversation / Chat',
    error: 'Error State',
    generic: 'Generic Empty State',
  }
  return labels[classification]
}
