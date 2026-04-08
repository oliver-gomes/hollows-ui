import type { ScannedComponent } from './types'

interface DetectorOptions {
  framework: 'react' | 'vue' | 'svelte' | 'angular' | 'unknown'
  rootDir: string
}

export function detectFramework(fileContent: string, filePath: string): DetectorOptions['framework'] {
  if (filePath.endsWith('.vue')) return 'vue'
  if (filePath.endsWith('.svelte')) return 'svelte'
  if (filePath.endsWith('.component.ts') || filePath.endsWith('.component.html')) return 'angular'

  if (fileContent.includes('from \'react\'') || fileContent.includes('from "react"')) return 'react'
  if (fileContent.includes('from \'vue\'') || fileContent.includes('from "vue"')) return 'vue'
  if (fileContent.includes('from \'svelte\'') || fileContent.includes('from "svelte"')) return 'svelte'
  if (fileContent.includes('@Component') || fileContent.includes('@NgModule')) return 'angular'

  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) return 'react'

  return 'unknown'
}

export function isDataDependentSection(domStructure: {
  hasConditionalRendering: boolean
  hasDynamicContent: boolean
  hasLoadingState: boolean
  hasEmptyCheck: boolean
}): boolean {
  return (
    domStructure.hasConditionalRendering ||
    domStructure.hasDynamicContent ||
    domStructure.hasLoadingState ||
    domStructure.hasEmptyCheck
  )
}

export function extractContextualClues(element: {
  innerHTML: string
  textContent: string
  attributes: Record<string, string>
  parentElement?: { tagName: string; className: string }
}): {
  headings: string[]
  labels: string[]
  ariaAttributes: Record<string, string>
  testIds: string[]
} {
  const headings: string[] = []
  const labels: string[] = []
  const ariaAttributes: Record<string, string> = {}
  const testIds: string[] = []

  const headingMatch = element.innerHTML.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi)
  if (headingMatch) {
    headings.push(...headingMatch.map(h => h.replace(/<[^>]+>/g, '').trim()))
  }

  const labelMatch = element.innerHTML.match(/<label[^>]*>(.*?)<\/label>/gi)
  if (labelMatch) {
    labels.push(...labelMatch.map(l => l.replace(/<[^>]+>/g, '').trim()))
  }

  for (const [key, value] of Object.entries(element.attributes)) {
    if (key.startsWith('aria-')) {
      ariaAttributes[key] = value
    }
    if (key === 'data-testid' || key === 'data-test-id') {
      testIds.push(value)
    }
  }

  return { headings, labels, ariaAttributes, testIds }
}
