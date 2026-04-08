export type {
  ComponentClassification,
  ThemeName,
  CopyTone,
  HollowDescriptor,
  HollowConfig,
  ScannedComponent,
  AnalyzedComponent,
  Theme,
  IllustrationMeta,
} from './core/types'

export { classify, classifyFromName, classifyFromDOM, getClassificationLabel } from './core/classifier'
export { generateCopy, getAllCopyTemplates } from './core/copywriter'
export { getIllustrationForClassification, getIllustrationSvg, getAllIllustrations } from './core/illustrator'
export { getCTAForClassification, getCTALabel } from './core/cta'
export { detectFramework, isDataDependentSection, extractContextualClues } from './core/detector'
export { getTheme, createTheme, minimal, playful, corporate } from './themes/index'
export { registerHollow, getHollow, getAllHollows } from './output/registry'
