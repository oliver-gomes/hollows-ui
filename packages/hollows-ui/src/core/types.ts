export type ComponentClassification =
  | 'inbox'
  | 'search'
  | 'list'
  | 'table'
  | 'chart'
  | 'card-grid'
  | 'feed'
  | 'cart'
  | 'favorites'
  | 'notifications'
  | 'upload'
  | 'comments'
  | 'gallery'
  | 'form'
  | 'conversation'
  | 'error'
  | 'generic'

export type ThemeName = 'minimal' | 'playful' | 'corporate'

export type CopyTone = 'friendly' | 'professional' | 'playful' | 'minimal'

export interface HollowDescriptor {
  name: string
  version: string
  hash: string
  classification: ComponentClassification
  illustration: string
  copy: {
    headline: string
    description: string
    cta: string
  }
  style: {
    maxWidth: number
    illustrationSize: number
    colorScheme: string
    fontFamily: string
    borderRadius: string
  }
  responsive: Record<string, {
    illustrationSize?: number
    maxWidth?: number
  }>
}

export interface HollowConfig {
  devServer: string
  outDir: string
  theme: ThemeName | string
  illustrations: 'built-in' | 'custom'
  customIllustrationsDir: string | null
  copy: {
    tone: CopyTone
    language: string
  }
  classifierOverrides: Record<string, ComponentClassification>
  ignore: string[]
  breakpoints: {
    mobile: number
    tablet: number
    desktop: number
  }
}

export interface ScannedComponent {
  name: string
  filePath: string
  line: number
  props: Record<string, unknown>
}

export interface AnalyzedComponent extends ScannedComponent {
  classification: ComponentClassification
  context: {
    headings: string[]
    labels: string[]
    ariaAttributes: Record<string, string>
    testIds: string[]
    parentRoute: string
  }
  styles: {
    colorScheme: string
    fontFamily: string
    borderRadius: string
  }
}

export interface Theme {
  name: string
  container: {
    padding: string
    textAlign: string
    background: string
  }
  illustration: {
    opacity: number
    marginBottom: string
  }
  headline: {
    fontSize: string
    fontWeight: string
    color: string
    marginBottom: string
  }
  description: {
    fontSize: string
    color: string
    marginBottom: string
    maxWidth: string
  }
  cta: {
    fontSize: string
    fontWeight: string
    padding: string
    borderRadius: string
    background: string
    color: string
    border: string
  }
}

export interface IllustrationMeta {
  id: string
  name: string
  category: ComponentClassification
  svg: string
}
