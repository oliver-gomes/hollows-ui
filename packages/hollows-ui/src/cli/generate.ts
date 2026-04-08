import * as path from 'path'
import type { AnalyzedComponent, HollowConfig, HollowDescriptor } from '../core/types'
import { generateCopy } from '../core/copywriter'
import { getIllustrationForClassification } from '../core/illustrator'
import { writeHollowDescriptor, computeHash, hasChanged } from '../output/writer'
import { generateRegistryJS } from '../output/registry'

export function generateDescriptor(
  component: AnalyzedComponent,
  config: HollowConfig
): HollowDescriptor {
  const copy = generateCopy(
    component.classification,
    config.copy.tone,
    {
      headings: component.context.headings,
      labels: component.context.labels,
      name: component.name,
    }
  )

  const illustration = getIllustrationForClassification(component.classification)

  const hash = computeHash(JSON.stringify({
    name: component.name,
    classification: component.classification,
    copy,
    illustration,
  }))

  return {
    name: component.name,
    version: '1.0.0',
    hash,
    classification: component.classification,
    illustration,
    copy,
    style: {
      maxWidth: 400,
      illustrationSize: 180,
      colorScheme: component.styles.colorScheme,
      fontFamily: component.styles.fontFamily,
      borderRadius: component.styles.borderRadius,
    },
    responsive: {
      [String(config.breakpoints.mobile)]: {
        illustrationSize: 120,
        maxWidth: 280,
      },
      [String(config.breakpoints.tablet)]: {
        illustrationSize: 160,
        maxWidth: 360,
      },
      [String(config.breakpoints.desktop)]: {
        illustrationSize: 180,
        maxWidth: 400,
      },
    },
  }
}

export interface GenerateResult {
  total: number
  generated: number
  skipped: number
  files: string[]
}

export function generateAll(
  components: AnalyzedComponent[],
  config: HollowConfig,
  rootDir: string
): GenerateResult {
  const outDir = path.resolve(rootDir, config.outDir)
  const result: GenerateResult = {
    total: components.length,
    generated: 0,
    skipped: 0,
    files: [],
  }

  for (const component of components) {
    const descriptor = generateDescriptor(component, config)

    if (hasChanged(descriptor.name, descriptor.hash, outDir)) {
      const filePath = writeHollowDescriptor(descriptor, outDir)
      result.generated++
      result.files.push(filePath)
    } else {
      result.skipped++
    }
  }

  if (result.generated > 0) {
    const registryPath = generateRegistryJS(outDir)
    result.files.push(registryPath)
  }

  return result
}
