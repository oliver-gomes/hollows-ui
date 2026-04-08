import { PageLayout } from '@/components/page-layout'

export default function ChangelogPage() {
  return (
    <PageLayout
      title="Changelog"
      description="All notable changes to Hollows UI."
      breadcrumbs={[{ name: 'Meta' }, { name: 'Changelog' }]}
      prev={{ name: 'API Reference', href: '/api' }}
      tableOfContents={[
        { id: 'v0-1-0', title: 'v0.1.0', level: 2 },
      ]}
    >
      <section id="v0-1-0">
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="font-serif text-2xl text-text-heading">v0.1.0</h2>
          <span className="text-sm text-text-dim">Initial Release</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
            Latest
          </span>
        </div>

        <p className="text-text-muted mb-6 leading-relaxed">
          The first public release of Hollows UI. Everything you need to generate, customize,
          and render polished empty states in any framework.
        </p>

        <div className="space-y-8">
          {/* Core Features */}
          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Core
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>CLI scanner that detects <code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">&lt;Hollow&gt;</code> components in React, Vue, Svelte, and Angular projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Automatic component classification (inbox, table, search, cart, calendar, and 8 more categories)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Contextual copy generation with four tone options: friendly, professional, playful, and minimal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>JSON registry output at <code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">src/hollows/registry.json</code> for full editability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Incremental builds with caching for fast re-generation</span>
              </li>
            </ul>
          </div>

          {/* Illustrations */}
          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#98c379]" />
              Illustrations
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>13 built-in SVG illustrations covering common empty state scenarios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Three illustration styles: outline, filled, and duotone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Custom illustration registration via <code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">registerIllustration()</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Lazy illustration loading for bundle size optimization</span>
              </li>
            </ul>
          </div>

          {/* Themes */}
          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c678dd]" />
              Themes
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Three built-in themes: minimal, playful, and corporate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Custom theme creation with <code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">createTheme()</code> and <code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">extendTheme()</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>CSS custom properties for fine-grained control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Runtime theme switching via <code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">HollowsProvider</code></span>
              </li>
            </ul>
          </div>

          {/* Framework Adapters */}
          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#61dafb]" />
              Framework Adapters
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>React adapter with full Server Component and Suspense support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Vue 3 adapter with Composition API support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Svelte adapter with SvelteKit SSR compatibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Angular adapter with standalone component support</span>
              </li>
            </ul>
          </div>

          {/* Responsive & Performance */}
          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d19a66]" />
              Responsive & Performance
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Responsive empty states with configurable breakpoints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Container query support for widget-based layouts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Full tree-shaking support -- unused illustrations and themes are excluded</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>~2.1 kB core runtime (gzipped), ~0.8 kB per framework adapter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Zero hydration mismatches with SSR/SSG frameworks</span>
              </li>
            </ul>
          </div>

          {/* CLI */}
          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e06c75]" />
              CLI
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span><code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">hollows-ui build</code> -- scan and generate empty states</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span><code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">hollows-ui init</code> -- scaffold configuration file</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span><code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">hollows-ui preview</code> -- local preview server</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span><code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">hollows-ui analyze</code> -- bundle size analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span><code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">hollows-ui list</code> -- list detected components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span><code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">hollows-ui export-illustrations</code> -- export SVGs as standalone files</span>
              </li>
            </ul>
          </div>

          {/* i18n */}
          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#56b6c2]" />
              Internationalization
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Multi-locale copy generation with per-locale templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">+</span>
                <span>Runtime locale switching via <code className="bg-surface border border-border px-1 py-0.5 rounded text-xs font-mono text-accent">HollowsProvider</code></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-sm text-text-dim">
            This is the initial release. Future versions will include more illustration sets,
            additional component classifications, visual editor integration, and framework-specific
            dev tools plugins.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
