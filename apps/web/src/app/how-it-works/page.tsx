'use client'

import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function HowItWorksPage() {
  return (
    <PageLayout
      title="How It Works"
      description="Hollows UI uses a 5-step build pipeline to scan your components, analyze their DOM structure, classify their purpose, generate contextual copy, and write production-ready empty state assets."
      breadcrumbs={[{ name: 'Getting Started' }, { name: 'How it works' }]}
      prev={{ name: 'Overview', href: '/overview' }}
      next={{ name: 'Install', href: '/install' }}
      tableOfContents={[
        { id: 'pipeline-overview', title: 'Pipeline overview', level: 2 },
        { id: 'step-1-scan', title: '1. Scan', level: 2 },
        { id: 'step-2-launch', title: '2. Launch', level: 2 },
        { id: 'step-3-analyze', title: '3. Analyze', level: 2 },
        { id: 'step-4-generate', title: '4. Generate', level: 2 },
        { id: 'step-5-write', title: '5. Write', level: 2 },
        { id: 'ast-scanner', title: 'AST scanner details', level: 2 },
        { id: 'classification', title: 'Classification model', level: 2 },
      ]}
    >
      {/* Pipeline overview */}
      <h2 id="pipeline-overview" className="font-serif text-2xl text-[#1c1917] mt-12 mb-4">
        Pipeline overview
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-6">
        When you run <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">npx hollows-ui build</code>,
        the CLI executes a deterministic pipeline that converts your source code into
        ready-to-use empty state definitions. No AI is used at runtime — everything is
        pre-computed at build time.
      </p>

      {/* Pipeline diagram */}
      <div className="flex flex-wrap items-center justify-center gap-3 my-10 px-4">
        {['Scan', 'Launch', 'Analyze', 'Generate', 'Write'].map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-[rgba(217,119,6,0.08)] border border-[rgba(217,119,6,0.2)] flex items-center justify-center">
                <span className="text-[#d97706] font-semibold text-lg">{i + 1}</span>
              </div>
              <span className="text-xs text-[#78716c] mt-2 font-medium">{step}</span>
            </div>
            {i < 4 && (
              <span className="text-[#a8a29e] text-xl">&#8594;</span>
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Scan */}
      <h2 id="step-1-scan" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Step 1 — Scan
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The AST scanner walks your source tree looking for files that import and use the{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code>{' '}
        component. It parses each file into an abstract syntax tree using SWC, then extracts:
      </p>
      <ul className="text-[#78716c] space-y-2 mb-6 list-disc list-inside">
        <li>The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">name</code> prop — the unique identifier for each hollow</li>
        <li>The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">empty</code> condition expression</li>
        <li>The file path and line number for source mapping</li>
        <li>Any sibling components that provide layout context</li>
      </ul>

      <CodeBlock
        language="tsx"
        filename="src/components/inbox.tsx"
        code={`import { Hollow } from 'hollows-ui/react'

export function Inbox({ messages }) {
  return (
    <div className="inbox-container">
      <Hollow name="user-inbox" empty={messages.length === 0}>
        <MessageList items={messages} />
      </Hollow>
    </div>
  )
}`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        The scanner outputs a manifest of all discovered hollows with their metadata:
      </p>

      <CodeBlock
        language="json"
        filename="Internal manifest (in-memory)"
        code={`{
  "hollows": [
    {
      "name": "user-inbox",
      "filePath": "src/components/inbox.tsx",
      "line": 6,
      "emptyExpr": "messages.length === 0",
      "siblings": ["MessageList"]
    }
  ]
}`}
      />

      {/* Step 2: Launch */}
      <h2 id="step-2-launch" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Step 2 — Launch
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Hollows spins up a headless Playwright browser and loads your application with each
        hollow in its populated state. This allows the tool to capture the real rendered DOM —
        including styles, dimensions, and layout — rather than guessing from source code alone.
      </p>

      <CodeBlock
        language="typescript"
        filename="Internal — browser launch"
        code={`// hollows-ui starts a dev server if one isn't running
const browser = await playwright.chromium.launch({ headless: true })
const page = await browser.newPage()

for (const hollow of manifest.hollows) {
  // Navigate to the route containing this hollow
  await page.goto(hollow.resolvedUrl)

  // Wait for the hollow's container to be visible
  await page.waitForSelector(\`[data-hollow="\${hollow.name}"]\`)

  // Capture DOM snapshot + computed styles
  const snapshot = await page.evaluate(captureHollowContext, hollow.name)
  hollow.domSnapshot = snapshot
}`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        The browser step is what makes hollows different from static analysis tools. By
        rendering the actual component, hollows can see the true layout dimensions, CSS
        styles, font sizes, neighboring elements, and overall page context.
      </p>

      {/* Step 3: Analyze */}
      <h2 id="step-3-analyze" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Step 3 — Analyze
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        With the DOM snapshot in hand, the analyzer classifies each hollow into one of the
        built-in component categories. It uses a combination of heuristics and structural
        pattern matching.
      </p>

      {/* Classification table */}
      <div className="border border-[#e7e5e4] rounded-xl overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e7e5e4] bg-[#f5f5f4]">
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Category</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Signals</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Example</th>
            </tr>
          </thead>
          <tbody className="text-[#78716c]">
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">list</td>
              <td className="px-4 py-3">Repeated child elements, scroll container, <code className="text-[#d97706] text-xs">ul/ol/table</code></td>
              <td className="px-4 py-3 text-[#78716c]">Inbox, task list, feed</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">search</td>
              <td className="px-4 py-3">Input with search icon, filter controls, query params</td>
              <td className="px-4 py-3 text-[#78716c]">Search results, filtered view</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">dashboard</td>
              <td className="px-4 py-3">Grid layout, card containers, metric widgets</td>
              <td className="px-4 py-3 text-[#78716c]">Analytics, overview panel</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">detail</td>
              <td className="px-4 py-3">Single entity view, back navigation, ID in route</td>
              <td className="px-4 py-3 text-[#78716c]">Profile, invoice detail</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">upload</td>
              <td className="px-4 py-3">Drop zone, file input, drag events</td>
              <td className="px-4 py-3 text-[#78716c]">File manager, gallery</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-[#78716c] leading-relaxed mb-4">
        The analyzer also extracts dimensional context: how much space is available, whether
        the hollow sits inside a sidebar or main content area, what the surrounding color
        palette looks like, and whether the container has padding or a card-style border.
      </p>

      <CodeBlock
        language="json"
        filename="Analysis output (per hollow)"
        code={`{
  "name": "user-inbox",
  "category": "list",
  "context": {
    "width": 640,
    "height": 480,
    "parentTag": "div",
    "hasHeader": true,
    "hasSidebar": false,
    "bgColor": "#0a0a0c",
    "fontFamily": "Inter, sans-serif"
  },
  "siblings": ["InboxHeader", "InboxFilters"]
}`}
      />

      {/* Step 4: Generate */}
      <h2 id="step-4-generate" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Step 4 — Generate
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Using the classification and layout context, hollows generates three things for each
        detected empty state:
      </p>
      <ol className="text-[#78716c] space-y-3 mb-6 list-decimal list-inside">
        <li>
          <strong className="text-[#1c1917]">Copy</strong> — A headline, description, and CTA
          label that match the component's purpose. A list component gets "No messages yet,"
          while a search component gets "No results found."
        </li>
        <li>
          <strong className="text-[#1c1917]">Illustration</strong> — An SVG illustration selected
          from the built-in library (or generated) that matches the category and theme.
        </li>
        <li>
          <strong className="text-[#1c1917]">Layout</strong> — CSS properties computed to fit the
          container: alignment, padding, max-width for text, illustration size.
        </li>
      </ol>

      <CodeBlock
        language="json"
        filename="Generated empty state"
        code={`{
  "name": "user-inbox",
  "category": "list",
  "copy": {
    "headline": "No messages yet",
    "description": "When you receive messages, they'll appear here.",
    "cta": "Compose a message"
  },
  "illustration": "inbox-empty",
  "layout": {
    "align": "center",
    "padding": "48px 24px",
    "maxWidth": "360px",
    "illustrationSize": 180
  }
}`}
      />

      {/* Step 5: Write */}
      <h2 id="step-5-write" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Step 5 — Write
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Finally, hollows writes the generated assets to your project. By default, output goes
        to <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">src/hollows/</code>:
      </p>

      <CodeBlock
        language="bash"
        filename="Output directory"
        code={`src/hollows/
  .hollows.json        # All empty state definitions
  registry.js          # Auto-import file for your app entry
  illustrations/
    inbox-empty.svg    # Generated SVG illustrations
    search-empty.svg
    dashboard-empty.svg`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">registry.js</code> file
        is a side-effect import that registers all generated empty states with the runtime.
        You import it once in your app entry point and every{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code>{' '}
        component auto-resolves its matching definition by name.
      </p>

      <CodeBlock
        language="tsx"
        filename="app/layout.tsx"
        code={`import './hollows/registry'

export default function RootLayout({ children }) {
  return <html><body>{children}</body></html>
}`}
      />

      {/* AST Scanner details */}
      <h2 id="ast-scanner" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        AST scanner details
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The scanner uses SWC to parse TypeScript and JSX. It walks the AST looking for JSX
        elements named <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">Hollow</code>{' '}
        (or whatever you configure) and extracts props from the opening element.
      </p>

      <CodeBlock
        language="typescript"
        filename="Internal — AST visitor"
        code={`import { parse } from '@swc/core'

async function scanFile(filePath: string) {
  const source = await fs.readFile(filePath, 'utf-8')
  const ast = await parse(source, {
    syntax: 'typescript',
    tsx: true,
  })

  const hollows: HollowEntry[] = []

  visit(ast, {
    JSXOpeningElement(node) {
      if (getElementName(node) === 'Hollow') {
        const name = getStringProp(node, 'name')
        const emptyExpr = getPropExpression(node, 'empty')
        if (name) {
          hollows.push({
            name,
            emptyExpr,
            filePath,
            line: node.span.start,
          })
        }
      }
    },
  })

  return hollows
}`}
      />

      {/* Classification model */}
      <h2 id="classification" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Classification model
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The classifier uses a weighted scoring model to determine the component category.
        Each signal contributes a score, and the category with the highest total wins.
      </p>

      <CodeBlock
        language="typescript"
        filename="Internal — classifier"
        code={`interface Signal {
  category: string
  weight: number
  test: (snapshot: DOMSnapshot) => boolean
}

const signals: Signal[] = [
  {
    category: 'list',
    weight: 3,
    test: (s) => s.repeatedChildren > 2,
  },
  {
    category: 'list',
    weight: 2,
    test: (s) => s.hasScrollContainer,
  },
  {
    category: 'search',
    weight: 4,
    test: (s) => s.hasSearchInput,
  },
  {
    category: 'search',
    weight: 2,
    test: (s) => s.hasFilterControls,
  },
  {
    category: 'dashboard',
    weight: 3,
    test: (s) => s.gridColumns > 1,
  },
  {
    category: 'upload',
    weight: 5,
    test: (s) => s.hasDropZone,
  },
]

function classify(snapshot: DOMSnapshot): string {
  const scores: Record<string, number> = {}
  for (const signal of signals) {
    if (signal.test(snapshot)) {
      scores[signal.category] = (scores[signal.category] || 0) + signal.weight
    }
  }
  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)[0]?.[0] ?? 'generic'
}`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        You can override the classification for any hollow using the{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">category</code>{' '}
        prop:
      </p>

      <CodeBlock
        language="tsx"
        filename="Manual category override"
        code={`<Hollow name="recent-files" category="upload" empty={files.length === 0}>
  <FileGrid files={files} />
</Hollow>`}
      />
    </PageLayout>
  )
}
