import type { ScannedComponent, AnalyzedComponent, HollowConfig } from '../core/types'
import { classify } from '../core/classifier'

export async function analyzeComponents(
  components: ScannedComponent[],
  config: HollowConfig
): Promise<AnalyzedComponent[]> {
  const analyzed: AnalyzedComponent[] = []

  for (const component of components) {
    const classification = classify(
      component,
      undefined,
      config.classifierOverrides[component.name]
    )

    analyzed.push({
      ...component,
      classification,
      context: {
        headings: [],
        labels: [],
        ariaAttributes: {},
        testIds: [],
        parentRoute: '',
      },
      styles: {
        colorScheme: 'inherit',
        fontFamily: 'inherit',
        borderRadius: '12px',
      },
    })
  }

  return analyzed
}

export async function analyzeWithBrowser(
  components: ScannedComponent[],
  config: HollowConfig
): Promise<AnalyzedComponent[]> {
  let browser
  try {
    const { chromium } = await import('playwright')
    browser = await chromium.launch({ headless: true })
    const page = await browser.newPage()

    await page.goto(config.devServer, { waitUntil: 'networkidle', timeout: 30000 })

    const analyzed: AnalyzedComponent[] = []

    for (const component of components) {
      const domInfo = await page.evaluate((name: string) => {
        const el = document.querySelector(`[data-hollows-wrapper="${name}"]`)
        if (!el) return null

        const computedStyle = window.getComputedStyle(el)

        return {
          tagNames: Array.from(el.querySelectorAll('*')).map(e => e.tagName.toLowerCase()),
          hasTable: !!el.querySelector('table'),
          hasListItems: !!el.querySelector('li, [role="listitem"]'),
          hasSearchInput: !!el.querySelector('input[type="search"], [role="search"]'),
          hasChartElements: !!el.querySelector('canvas, svg.chart, [class*="chart"]'),
          hasCardPattern: !!el.querySelector('[class*="card"], [class*="Card"]'),
          hasFormElements: !!el.querySelector('form, input, select, textarea'),
          hasMessagePattern: !!el.querySelector('[class*="message"], [class*="chat"]'),
          hasMediaGrid: !!el.querySelector('img, video, [class*="gallery"]'),
          headings: Array.from(el.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(h => h.textContent?.trim() ?? ''),
          labels: Array.from(el.querySelectorAll('label')).map(l => l.textContent?.trim() ?? ''),
          fontFamily: computedStyle.fontFamily,
          borderRadius: computedStyle.borderRadius,
          colorScheme: computedStyle.colorScheme || 'light',
        }
      }, component.name)

      const classification = classify(
        component,
        domInfo ? {
          tagNames: domInfo.tagNames,
          classNames: [],
          textContent: '',
          attributes: {},
          childCount: domInfo.tagNames.length,
          hasTable: domInfo.hasTable,
          hasListItems: domInfo.hasListItems,
          hasSearchInput: domInfo.hasSearchInput,
          hasChartElements: domInfo.hasChartElements,
          hasCardPattern: domInfo.hasCardPattern,
          hasFormElements: domInfo.hasFormElements,
          hasMessagePattern: domInfo.hasMessagePattern,
          hasMediaGrid: domInfo.hasMediaGrid,
        } : undefined,
        config.classifierOverrides[component.name]
      )

      analyzed.push({
        ...component,
        classification,
        context: {
          headings: domInfo?.headings ?? [],
          labels: domInfo?.labels ?? [],
          ariaAttributes: {},
          testIds: [],
          parentRoute: '',
        },
        styles: {
          colorScheme: domInfo?.colorScheme ?? 'inherit',
          fontFamily: domInfo?.fontFamily ?? 'inherit',
          borderRadius: domInfo?.borderRadius ?? '12px',
        },
      })
    }

    return analyzed
  } catch (error) {
    console.warn('Browser analysis unavailable, falling back to static analysis')
    return analyzeComponents(components, config)
  } finally {
    if (browser) await browser.close()
  }
}
