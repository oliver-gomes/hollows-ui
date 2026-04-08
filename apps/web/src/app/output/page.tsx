'use client'

import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function OutputPage() {
  return (
    <PageLayout
      title="Output"
      description="Understand the files that hollows-ui generates: the .hollows.json manifest, the registry.js auto-loader, and the illustration assets."
      breadcrumbs={[{ name: 'Getting Started' }, { name: 'Output' }]}
      prev={{ name: 'Install', href: '/install' }}
      next={{ name: 'React', href: '/features' }}
      tableOfContents={[
        { id: 'directory-structure', title: 'Directory structure', level: 2 },
        { id: 'hollows-json', title: '.hollows.json', level: 2 },
        { id: 'field-reference', title: 'Field reference', level: 3 },
        { id: 'registry-js', title: 'registry.js', level: 2 },
        { id: 'illustrations', title: 'Illustrations', level: 2 },
        { id: 'versioning', title: 'Versioning', level: 2 },
      ]}
    >
      {/* Directory structure */}
      <h2 id="directory-structure" className="font-serif text-2xl text-[#1c1917] mt-12 mb-4">
        Directory structure
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        After running <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">npx hollows-ui build</code>,
        the following files are generated in your configured output directory (default:{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">src/hollows/</code>):
      </p>

      <CodeBlock
        language="bash"
        filename="Output directory"
        code={`src/hollows/
  .hollows.json           # All empty state definitions
  registry.js             # Runtime auto-loader (import once)
  registry.d.ts           # TypeScript declarations
  illustrations/
    inbox-empty.svg       # SVG illustration per hollow
    search-empty.svg
    upload-empty.svg
    dashboard-empty.svg`}
      />

      <p className="text-[#78716c] leading-relaxed mb-6">
        These files should be committed to version control. They are deterministic — running
        the build again with the same source produces identical output.
      </p>

      {/* .hollows.json */}
      <h2 id="hollows-json" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        .hollows.json
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The central manifest file containing every detected hollow and its generated empty
        state definition. This is the source of truth that the runtime adapter reads from.
      </p>

      <CodeBlock
        language="json"
        filename="src/hollows/.hollows.json"
        showLineNumbers
        code={`{
  "version": 1,
  "generatedAt": "2026-04-08T12:00:00.000Z",
  "theme": {
    "mode": "dark",
    "accentColor": "#f0a030",
    "borderRadius": 12,
    "fontFamily": "inherit"
  },
  "hollows": [
    {
      "name": "user-inbox",
      "category": "list",
      "source": {
        "filePath": "src/components/inbox.tsx",
        "line": 6,
        "emptyExpr": "messages.length === 0"
      },
      "copy": {
        "headline": "No messages yet",
        "description": "When you receive messages, they'll appear here.",
        "cta": {
          "label": "Compose a message",
          "action": "primary"
        }
      },
      "illustration": {
        "src": "./illustrations/inbox-empty.svg",
        "alt": "Empty inbox illustration",
        "width": 180,
        "height": 160
      },
      "layout": {
        "align": "center",
        "padding": "48px 24px",
        "maxWidth": "360px",
        "gap": "16px"
      },
      "confidence": 0.94,
      "hash": "a1b2c3d4"
    },
    {
      "name": "search-results",
      "category": "search",
      "source": {
        "filePath": "src/components/search.tsx",
        "line": 14,
        "emptyExpr": "results.length === 0"
      },
      "copy": {
        "headline": "No results found",
        "description": "Try adjusting your search terms or filters.",
        "cta": {
          "label": "Clear filters",
          "action": "secondary"
        }
      },
      "illustration": {
        "src": "./illustrations/search-empty.svg",
        "alt": "No search results illustration",
        "width": 160,
        "height": 140
      },
      "layout": {
        "align": "center",
        "padding": "40px 24px",
        "maxWidth": "340px",
        "gap": "12px"
      },
      "confidence": 0.89,
      "hash": "e5f6g7h8"
    }
  ]
}`}
      />

      {/* Field reference */}
      <h3 id="field-reference" className="font-serif text-xl text-[#1c1917] mt-12 mb-4">
        Field reference
      </h3>

      <div className="border border-[#e7e5e4] rounded-xl overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e7e5e4] bg-[#f5f5f4]">
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Field</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Type</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="text-[#78716c]">
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">version</td>
              <td className="px-4 py-3 font-mono text-xs">number</td>
              <td className="px-4 py-3">Schema version for forward compatibility</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">generatedAt</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3">ISO 8601 timestamp of the build</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">theme</td>
              <td className="px-4 py-3 font-mono text-xs">object</td>
              <td className="px-4 py-3">The theme settings used during generation</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">name</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3">Unique identifier matching the <code className="text-[#d97706]">name</code> prop on <code className="text-[#d97706]">&lt;Hollow&gt;</code></td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">category</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3">The auto-detected or manually set classification</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">source</td>
              <td className="px-4 py-3 font-mono text-xs">object</td>
              <td className="px-4 py-3">Source location of the <code className="text-[#d97706]">&lt;Hollow&gt;</code> component for traceability</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">copy</td>
              <td className="px-4 py-3 font-mono text-xs">object</td>
              <td className="px-4 py-3">Generated text content: headline, description, and CTA</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">illustration</td>
              <td className="px-4 py-3 font-mono text-xs">object</td>
              <td className="px-4 py-3">Path, alt text, and dimensions for the SVG illustration</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">layout</td>
              <td className="px-4 py-3 font-mono text-xs">object</td>
              <td className="px-4 py-3">Computed CSS layout properties for the empty state container</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">confidence</td>
              <td className="px-4 py-3 font-mono text-xs">number</td>
              <td className="px-4 py-3">Classification confidence score (0-1)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">hash</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3">Content hash for cache invalidation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* registry.js */}
      <h2 id="registry-js" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        registry.js
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The registry file is a side-effect module that loads the manifest and registers each
        hollow definition with the runtime store. You import it once in your app entry point.
      </p>

      <CodeBlock
        language="javascript"
        filename="src/hollows/registry.js (generated)"
        showLineNumbers
        code={`// Auto-generated by hollows-ui — do not edit
import { registerHollows } from 'hollows-ui/runtime'
import manifest from './.hollows.json'

// Import illustration assets so bundlers can process them
import inboxEmpty from './illustrations/inbox-empty.svg'
import searchEmpty from './illustrations/search-empty.svg'
import uploadEmpty from './illustrations/upload-empty.svg'
import dashboardEmpty from './illustrations/dashboard-empty.svg'

const illustrations = {
  'inbox-empty': inboxEmpty,
  'search-empty': searchEmpty,
  'upload-empty': uploadEmpty,
  'dashboard-empty': dashboardEmpty,
}

registerHollows(manifest, illustrations)`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">registerHollows</code> function
        stores the definitions in an in-memory map. When a{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code>{' '}
        component mounts, it looks up its definition by name and renders the empty state when
        the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">empty</code> condition
        is true.
      </p>

      <CodeBlock
        language="tsx"
        filename="app/layout.tsx"
        code={`// Import once at the app root
import './hollows/registry'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}
      />

      {/* Illustrations */}
      <h2 id="illustrations" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Illustrations
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Each hollow gets an SVG illustration matched to its category. The illustrations are
        generated with the accent color from your theme config baked in, so they blend
        naturally with your design system.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        {[
          { name: 'list', label: 'List / Inbox' },
          { name: 'search', label: 'Search' },
          { name: 'upload', label: 'Upload' },
          { name: 'dashboard', label: 'Dashboard' },
        ].map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-[#e7e5e4] bg-[#f5f5f4] p-6 flex flex-col items-center gap-3"
          >
            <div className="w-16 h-16 rounded-lg bg-[rgba(217,119,6,0.06)] border border-[rgba(217,119,6,0.15)] flex items-center justify-center">
              <span className="text-[#d97706] text-2xl font-serif">{item.name[0].toUpperCase()}</span>
            </div>
            <span className="text-xs text-[#78716c]">{item.label}</span>
          </div>
        ))}
      </div>

      <p className="text-[#78716c] leading-relaxed mb-4">
        You can replace any generated illustration with your own SVG. Just keep the same
        filename and dimensions. The registry will pick up your custom file on the next build.
      </p>

      {/* Versioning */}
      <h2 id="versioning" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Versioning
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hash</code> field
        on each hollow entry is computed from the source component's AST and the theme config.
        When you re-run the build, hollows only regenerates entries whose hash has changed.
        This makes incremental builds fast — typically under 500ms for unchanged projects.
      </p>

      <CodeBlock
        language="bash"
        filename="Incremental build output"
        code={`  hollows-ui v1.0.0

  Scanning...
    Found 4 hollows in 12 files

  Checking hashes...
    user-inbox       → unchanged (skipped)
    search-results   → unchanged (skipped)
    file-gallery     → changed (rebuilding)
    analytics-panel  → unchanged (skipped)

  Regenerating 1 hollow...
  Done in 0.4s`}
      />
    </PageLayout>
  )
}
