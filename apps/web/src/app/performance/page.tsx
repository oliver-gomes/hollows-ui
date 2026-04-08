import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function PerformancePage() {
  return (
    <PageLayout
      title="Performance"
      description="Hollows UI is designed to add minimal overhead to your application."
      breadcrumbs={[{ name: 'Advanced' }, { name: 'Performance' }]}
      prev={{ name: 'Responsive', href: '/responsive' }}
      next={{ name: 'SSR', href: '/ssr' }}
      tableOfContents={[
        { id: 'bundle-size', title: 'Bundle Size', level: 2 },
        { id: 'tree-shaking', title: 'Tree-shaking', level: 2 },
        { id: 'lazy-illustrations', title: 'Lazy Illustration Loading', level: 2 },
        { id: 'incremental-builds', title: 'Incremental Builds', level: 2 },
        { id: 'runtime-performance', title: 'Runtime Performance', level: 2 },
        { id: 'measuring', title: 'Measuring Impact', level: 2 },
      ]}
    >
      {/* Bundle Size */}
      <section id="bundle-size">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Bundle Size</h2>
        <p className="text-text-muted mb-6 leading-relaxed">
          The Hollows UI runtime is lightweight. The core library and framework adapters
          are designed to minimize your bundle footprint.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl border border-border bg-surface/30 p-5 text-center">
            <p className="text-3xl font-serif text-accent mb-1">~2.1 kB</p>
            <p className="text-xs text-text-dim">Core runtime (gzipped)</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/30 p-5 text-center">
            <p className="text-3xl font-serif text-accent mb-1">~0.8 kB</p>
            <p className="text-xs text-text-dim">React adapter (gzipped)</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/30 p-5 text-center">
            <p className="text-3xl font-serif text-accent mb-1">~0.3 kB</p>
            <p className="text-xs text-text-dim">Per illustration (avg)</p>
          </div>
        </div>

        <p className="text-text-muted leading-relaxed">
          The generated registry JSON is typically under 1 kB for 10 components. Illustrations
          are the largest part of the payload, but can be lazy-loaded to avoid impacting
          initial page load.
        </p>
      </section>

      {/* Tree-shaking */}
      <section id="tree-shaking" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Tree-shaking</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Hollows UI is fully tree-shakeable. Only the components and illustrations you
          actually use end up in your production bundle.
        </p>

        <CodeBlock
          language="tsx"
          code={`// Only the Hollow component and the 'empty-inbox' illustration
// are included in the bundle
import { Hollow } from 'hollows-ui/react'

<Hollow name="user-inbox" empty={!data}>
  <InboxList items={data} />
</Hollow>`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          The CLI generates a registry that only references the illustrations your app
          actually needs. Unused illustrations from the built-in set are never bundled.
        </p>

        <div className="rounded-xl border border-border bg-surface/30 p-4 mt-6">
          <h4 className="text-sm font-semibold text-text-heading mb-2">What gets tree-shaken</h4>
          <ul className="text-sm text-text-muted space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#x2713;</span>
              <span>Unused illustrations (SVG code never enters the bundle)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#x2713;</span>
              <span>Unused framework adapters (only your framework is included)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#x2713;</span>
              <span>Unused themes (only the active theme ships)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#x2713;</span>
              <span>Unused locale data (only configured locales are bundled)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Lazy Illustrations */}
      <section id="lazy-illustrations" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Lazy Illustration Loading</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          By default, illustrations are inlined as SVG strings in the registry. For
          applications with many empty states, enable lazy loading to defer illustration
          fetching until the empty state is actually displayed.
        </p>

        <CodeBlock
          language="ts"
          filename="hollows.config.ts"
          code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  performance: {
    lazyIllustrations: true,
  },
})`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          When enabled, the build step outputs illustrations as separate files in{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">src/hollows/illustrations/</code>{' '}
          and the registry references them by path. The runtime loads them on demand
          using dynamic imports.
        </p>

        <CodeBlock
          language="tsx"
          code={`// With lazy loading enabled, illustrations are code-split
// The SVG is only fetched when the empty state renders
<Hollow name="user-inbox" empty={!data}>
  <InboxList items={data} />
</Hollow>
// ^ If data exists, the illustration is never loaded`}
        />

        <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 mt-6">
          <p className="text-sm text-text-muted">
            <span className="font-semibold text-accent">Tip:</span>{' '}
            Lazy loading adds a brief flash when the empty state first appears.
            Set <code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">preload: true</code>{' '}
            on critical empty states to prefetch their illustration during idle time.
          </p>
        </div>
      </section>

      {/* Incremental Builds */}
      <section id="incremental-builds" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Incremental Builds</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          The CLI tracks which components have changed since the last build. On subsequent
          runs, only modified or new components are re-processed.
        </p>

        <CodeBlock
          language="bash"
          filename="Terminal"
          code={`# First build — processes all components
npx hollows-ui build
# Built 12 empty states in 340ms

# After editing one component
npx hollows-ui build
# Built 1 empty state in 45ms (11 cached)`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          The cache is stored in{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">node_modules/.hollows-cache/</code>.
          To force a full rebuild, use the{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">--force</code>{' '}
          flag.
        </p>

        <CodeBlock
          language="bash"
          code={`# Force full rebuild
npx hollows-ui build --force

# Watch mode — rebuilds on file changes
npx hollows-ui build --watch`}
        />
      </section>

      {/* Runtime Performance */}
      <section id="runtime-performance" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Runtime Performance</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          At runtime, the Hollow component is essentially a conditional renderer. When
          data is present, it renders your children with zero overhead. When empty, it
          renders a static SVG and text -- no animation libraries, no heavy DOM operations.
        </p>

        <div className="rounded-xl border border-border bg-surface/30 p-4">
          <h4 className="text-sm font-semibold text-text-heading mb-3">Performance characteristics</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-text-dim font-medium">Metric</th>
                  <th className="text-left py-2 text-text-dim font-medium">Value</th>
                </tr>
              </thead>
              <tbody className="text-text-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-xs">Initial render (empty state)</td>
                  <td className="py-2 font-mono text-xs text-accent">&lt; 1ms</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-xs">Re-render on data change</td>
                  <td className="py-2 font-mono text-xs text-accent">&lt; 0.5ms</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-xs">DOM nodes (empty state)</td>
                  <td className="py-2 font-mono text-xs text-accent">8-15 nodes</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-xs">Memory overhead per instance</td>
                  <td className="py-2 font-mono text-xs text-accent">&lt; 2 KB</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-xs">CSS-only responsive behavior</td>
                  <td className="py-2 font-mono text-xs text-accent">No JS resize listeners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Measuring Impact */}
      <section id="measuring" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Measuring Impact</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Use the built-in analyze command to see a breakdown of what Hollows adds to
          your bundle.
        </p>

        <CodeBlock
          language="bash"
          filename="Terminal"
          code={`npx hollows-ui analyze

# Output:
# Bundle Analysis
# ─────────────────────────────────
# Core runtime:        2.1 kB (gzip)
# React adapter:       0.8 kB (gzip)
# Registry (12 items): 0.9 kB (gzip)
# Illustrations (8):   2.4 kB (gzip)
# Theme (minimal):     0.3 kB (gzip)
# ─────────────────────────────────
# Total:               6.5 kB (gzip)`}
        />
      </section>
    </PageLayout>
  )
}
