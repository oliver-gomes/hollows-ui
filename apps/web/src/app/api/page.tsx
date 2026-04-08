import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function APIPage() {
  return (
    <PageLayout
      title="API Reference"
      description="Complete reference for all Hollows UI exports, CLI commands, and configuration options."
      breadcrumbs={[{ name: 'Meta' }, { name: 'API Reference' }]}
      prev={{ name: 'Try It', href: '/try-it' }}
      next={{ name: 'Changelog', href: '/changelog' }}
      tableOfContents={[
        { id: 'hollow-component', title: 'Hollow Component', level: 2 },
        { id: 'hollows-provider', title: 'HollowsProvider', level: 2 },
        { id: 'cli-commands', title: 'CLI Commands', level: 2 },
        { id: 'config-options', title: 'Config Options', level: 2 },
        { id: 'theme-api', title: 'Theme API', level: 2 },
        { id: 'copy-api', title: 'Copy API', level: 2 },
        { id: 'illustration-api', title: 'Illustration API', level: 2 },
        { id: 'utility-types', title: 'Utility Types', level: 2 },
      ]}
    >
      {/* Hollow Component */}
      <section id="hollow-component">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Hollow Component</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          The primary component for wrapping data-dependent UI sections. Available from
          each framework adapter.
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Hollow } from 'hollows-ui/react'
// import { Hollow } from 'hollows-ui/vue'
// import { Hollow } from 'hollows-ui/svelte'
// import { Hollow } from 'hollows-ui/angular'`}
        />

        <div className="rounded-xl border border-border bg-surface/30 p-4 mt-6 overflow-x-auto">
          <h4 className="text-sm font-semibold text-text-heading mb-3">Props</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Prop</th>
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Type</th>
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Default</th>
                <th className="text-left py-2 text-text-dim font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">name</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string</td>
                <td className="py-2.5 pr-4 font-mono text-xs text-text-dim">required</td>
                <td className="py-2.5 text-xs">Unique identifier that maps to the registry entry</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">empty</td>
                <td className="py-2.5 pr-4 font-mono text-xs">boolean</td>
                <td className="py-2.5 pr-4 font-mono text-xs">false</td>
                <td className="py-2.5 text-xs">Whether to show the empty state</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">loading</td>
                <td className="py-2.5 pr-4 font-mono text-xs">boolean</td>
                <td className="py-2.5 pr-4 font-mono text-xs">false</td>
                <td className="py-2.5 text-xs">Show a skeleton placeholder while loading</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">theme</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string | Theme</td>
                <td className="py-2.5 pr-4 font-mono text-xs">inherited</td>
                <td className="py-2.5 text-xs">Override the theme for this instance</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">illustration</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string</td>
                <td className="py-2.5 pr-4 font-mono text-xs">auto</td>
                <td className="py-2.5 text-xs">Override the illustration by name</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">heading</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string</td>
                <td className="py-2.5 pr-4 font-mono text-xs">auto</td>
                <td className="py-2.5 text-xs">Override the heading text</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">body</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string</td>
                <td className="py-2.5 pr-4 font-mono text-xs">auto</td>
                <td className="py-2.5 text-xs">Override the body text</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">ctaLabel</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string</td>
                <td className="py-2.5 pr-4 font-mono text-xs">auto</td>
                <td className="py-2.5 text-xs">Override the CTA button label</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">onCtaClick</td>
                <td className="py-2.5 pr-4 font-mono text-xs">() =&gt; void</td>
                <td className="py-2.5 pr-4 font-mono text-xs">--</td>
                <td className="py-2.5 text-xs">Callback when the CTA button is clicked</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">ctaHref</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string</td>
                <td className="py-2.5 pr-4 font-mono text-xs">--</td>
                <td className="py-2.5 text-xs">Render CTA as a link instead of a button</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">className</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string</td>
                <td className="py-2.5 pr-4 font-mono text-xs">--</td>
                <td className="py-2.5 text-xs">Additional CSS class for the container</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">children</td>
                <td className="py-2.5 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-2.5 pr-4 font-mono text-xs">--</td>
                <td className="py-2.5 text-xs">Content to render when not empty</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* HollowsProvider */}
      <section id="hollows-provider" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">HollowsProvider</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Optional context provider for setting global configuration at runtime.
        </p>

        <CodeBlock
          language="tsx"
          code={`import { HollowsProvider } from 'hollows-ui/react'

<HollowsProvider theme="playful" locale="en">
  <App />
</HollowsProvider>`}
        />

        <div className="rounded-xl border border-border bg-surface/30 p-4 mt-6 overflow-x-auto">
          <h4 className="text-sm font-semibold text-text-heading mb-3">Props</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Prop</th>
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Type</th>
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Default</th>
                <th className="text-left py-2 text-text-dim font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">theme</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string | Theme</td>
                <td className="py-2.5 pr-4 font-mono text-xs">&apos;minimal&apos;</td>
                <td className="py-2.5 text-xs">Global theme for all Hollow components</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">locale</td>
                <td className="py-2.5 pr-4 font-mono text-xs">string</td>
                <td className="py-2.5 pr-4 font-mono text-xs">&apos;en&apos;</td>
                <td className="py-2.5 text-xs">Active locale for copy resolution</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-mono text-xs text-accent">registry</td>
                <td className="py-2.5 pr-4 font-mono text-xs">Registry</td>
                <td className="py-2.5 pr-4 font-mono text-xs">auto</td>
                <td className="py-2.5 text-xs">Override the registry at runtime</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CLI Commands */}
      <section id="cli-commands" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">CLI Commands</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">
              <code className="font-mono text-accent">hollows-ui build</code>
            </h3>
            <p className="text-text-muted mb-3 text-sm">
              Scan your codebase, classify components, and generate empty states.
            </p>
            <div className="rounded-xl border border-border bg-surface/30 p-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 text-text-dim font-medium">Flag</th>
                    <th className="text-left py-2 pr-4 text-text-dim font-medium">Default</th>
                    <th className="text-left py-2 text-text-dim font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--watch</td>
                    <td className="py-2 pr-4 text-xs">false</td>
                    <td className="py-2 text-xs">Watch for file changes and rebuild</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--force</td>
                    <td className="py-2 pr-4 text-xs">false</td>
                    <td className="py-2 text-xs">Ignore cache and rebuild everything</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--config &lt;path&gt;</td>
                    <td className="py-2 pr-4 text-xs">auto</td>
                    <td className="py-2 text-xs">Path to config file</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--outDir &lt;dir&gt;</td>
                    <td className="py-2 pr-4 text-xs">src/hollows</td>
                    <td className="py-2 text-xs">Output directory for generated files</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--name &lt;name&gt;</td>
                    <td className="py-2 pr-4 text-xs">all</td>
                    <td className="py-2 text-xs">Generate for a specific component only</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--dry-run</td>
                    <td className="py-2 pr-4 text-xs">false</td>
                    <td className="py-2 text-xs">Preview what would be generated without writing files</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--verbose</td>
                    <td className="py-2 pr-4 text-xs">false</td>
                    <td className="py-2 text-xs">Show detailed output including file paths</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">
              <code className="font-mono text-accent">hollows-ui init</code>
            </h3>
            <p className="text-text-muted mb-3 text-sm">
              Initialize a new Hollows UI configuration file.
            </p>
            <div className="rounded-xl border border-border bg-surface/30 p-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 text-text-dim font-medium">Flag</th>
                    <th className="text-left py-2 text-text-dim font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--framework &lt;name&gt;</td>
                    <td className="py-2 text-xs">Set framework (react, vue, svelte, angular)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--theme &lt;name&gt;</td>
                    <td className="py-2 text-xs">Set initial theme (minimal, playful, corporate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">
              <code className="font-mono text-accent">hollows-ui analyze</code>
            </h3>
            <p className="text-text-muted text-sm">
              Analyze and report on the bundle size impact of generated empty states.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">
              <code className="font-mono text-accent">hollows-ui preview</code>
            </h3>
            <p className="text-text-muted text-sm">
              Launch a local preview server showing all generated empty states side by side.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">
              <code className="font-mono text-accent">hollows-ui list</code>
            </h3>
            <p className="text-text-muted text-sm">
              List all detected Hollow components with file locations and classifications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-heading mb-2">
              <code className="font-mono text-accent">hollows-ui export-illustrations</code>
            </h3>
            <p className="text-text-muted mb-3 text-sm">
              Export built-in SVG illustrations as standalone files.
            </p>
            <div className="rounded-xl border border-border bg-surface/30 p-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 text-text-dim font-medium">Flag</th>
                    <th className="text-left py-2 pr-4 text-text-dim font-medium">Default</th>
                    <th className="text-left py-2 text-text-dim font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs text-accent">--out &lt;dir&gt;</td>
                    <td className="py-2 pr-4 text-xs">./public/empty-states</td>
                    <td className="py-2 text-xs">Output directory for SVG files</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Config Options */}
      <section id="config-options" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Config Options</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          The <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">hollows.config.ts</code> file
          accepts the following top-level options via <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">defineConfig()</code>.
        </p>

        <CodeBlock
          language="ts"
          filename="hollows.config.ts"
          code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  // Framework detection (auto-detected if not set)
  framework: 'react', // 'react' | 'vue' | 'svelte' | 'angular'

  // Glob patterns to scan for Hollow usage
  include: ['src/**/*.{tsx,jsx,vue,svelte}'],
  exclude: ['**/*.test.*', '**/*.stories.*'],

  // Output directory for generated files
  outDir: 'src/hollows',

  // Theme configuration
  theme: 'minimal', // string | Theme object

  // Copy configuration
  copy: {
    tone: 'friendly',
    defaultLocale: 'en',
    locales: {},
    templates: {},
  },

  // Responsive configuration
  responsive: {
    strategy: 'viewport',
    breakpoints: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  },

  // Performance options
  performance: {
    lazyIllustrations: false,
  },

  // Custom illustrations
  illustrations: {
    custom: [],
  },
})`}
        />

        <div className="rounded-xl border border-border bg-surface/30 p-4 mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Field</th>
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Type</th>
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Default</th>
                <th className="text-left py-2 text-text-dim font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">framework</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4 text-xs">auto</td>
                <td className="py-2 text-xs">Target framework</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">include</td>
                <td className="py-2 pr-4 font-mono text-xs">string[]</td>
                <td className="py-2 pr-4 text-xs">auto</td>
                <td className="py-2 text-xs">Glob patterns to scan</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">exclude</td>
                <td className="py-2 pr-4 font-mono text-xs">string[]</td>
                <td className="py-2 pr-4 text-xs">[]</td>
                <td className="py-2 text-xs">Glob patterns to ignore</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">outDir</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4 text-xs">src/hollows</td>
                <td className="py-2 text-xs">Output directory</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">theme</td>
                <td className="py-2 pr-4 font-mono text-xs">string | Theme</td>
                <td className="py-2 pr-4 text-xs">minimal</td>
                <td className="py-2 text-xs">Default theme</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">copy</td>
                <td className="py-2 pr-4 font-mono text-xs">CopyConfig</td>
                <td className="py-2 pr-4 text-xs">{'{}'}</td>
                <td className="py-2 text-xs">Copy/language configuration</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">responsive</td>
                <td className="py-2 pr-4 font-mono text-xs">ResponsiveConfig</td>
                <td className="py-2 pr-4 text-xs">{'{}'}</td>
                <td className="py-2 text-xs">Responsive behavior config</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">performance</td>
                <td className="py-2 pr-4 font-mono text-xs">PerformanceConfig</td>
                <td className="py-2 pr-4 text-xs">{'{}'}</td>
                <td className="py-2 text-xs">Performance options</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs text-accent">illustrations</td>
                <td className="py-2 pr-4 font-mono text-xs">IllustrationConfig</td>
                <td className="py-2 pr-4 text-xs">{'{}'}</td>
                <td className="py-2 text-xs">Custom illustration config</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Theme API */}
      <section id="theme-api" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Theme API</h2>

        <h3 className="text-lg font-semibold text-text-heading mb-2">
          <code className="font-mono text-accent">createTheme(options)</code>
        </h3>
        <p className="text-text-muted mb-4 text-sm">
          Creates a custom theme object. All properties are optional and fall back to
          the minimal theme defaults.
        </p>

        <CodeBlock
          language="ts"
          code={`import { createTheme } from 'hollows-ui'

const theme = createTheme({
  name: string,
  colors: {
    background: string,
    foreground: string,
    muted: string,
    accent: string,
    border: string,
  },
  typography: {
    headingFont: string,
    bodyFont: string,
    headingWeight: number,
    headingSize: string,
    bodySize: string,
  },
  spacing: {
    containerPadding: string,
    illustrationGap: string,
    ctaGap: string,
  },
  borders: {
    radius: string,
    width: string,
    style: string,
  },
  illustrations: {
    maxWidth: number,
    style: 'outline' | 'filled' | 'duotone',
    strokeWidth: number,
  },
  cta: {
    borderRadius: string,
    padding: string,
    fontSize: string,
    fontWeight: number,
  },
})`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-2 mt-8">
          <code className="font-mono text-accent">extendTheme(base, overrides)</code>
        </h3>
        <p className="text-text-muted mb-4 text-sm">
          Extend a built-in theme with partial overrides.
        </p>

        <CodeBlock
          language="ts"
          code={`import { extendTheme } from 'hollows-ui'

const theme = extendTheme('playful', {
  colors: { accent: '#6366f1' },
  borders: { radius: '1rem' },
})`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-2 mt-8">
          <code className="font-mono text-accent">getTheme(name)</code>
        </h3>
        <p className="text-text-muted mb-4 text-sm">
          Retrieve a built-in or registered theme by name. Returns the minimal theme
          if the name is not found.
        </p>

        <CodeBlock
          language="ts"
          code={`import { getTheme } from 'hollows-ui'

const theme = getTheme('playful')
// Returns: { name: 'playful', colors: {...}, ... }`}
        />
      </section>

      {/* Copy API */}
      <section id="copy-api" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Copy API</h2>

        <h3 className="text-lg font-semibold text-text-heading mb-2">
          <code className="font-mono text-accent">defineCopyTemplate(category, template)</code>
        </h3>
        <p className="text-text-muted mb-4 text-sm">
          Define a reusable copy template for a component category.
        </p>

        <CodeBlock
          language="ts"
          code={`import { defineCopyTemplate } from 'hollows-ui'

defineCopyTemplate('inbox', {
  heading: 'No {{itemType}} yet',
  body: 'New {{itemType}} will appear here.',
  cta: 'Create {{itemType}}',
})`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-2 mt-8">
          <code className="font-mono text-accent">generateCopy(classification, tone?, hints?)</code>
        </h3>
        <p className="text-text-muted mb-4 text-sm">
          Generate copy programmatically for a given classification.
        </p>

        <CodeBlock
          language="ts"
          code={`import { generateCopy } from 'hollows-ui'

const copy = generateCopy('inbox', 'friendly', { itemType: 'messages' })
// Returns: { heading: '...', body: '...', cta: '...' }`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-2 mt-8">Template variables</h3>
        <div className="rounded-xl border border-border bg-surface/30 p-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Variable</th>
                <th className="text-left py-2 text-text-dim font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">{'{{name}}'}</td>
                <td className="py-2 text-xs">The component name (from the Hollow name prop)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">{'{{itemType}}'}</td>
                <td className="py-2 text-xs">Inferred item type (e.g., &quot;messages&quot;, &quot;users&quot;)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">{'{{category}}'}</td>
                <td className="py-2 text-xs">The classified category (inbox, table, search, etc.)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs text-accent">{'{{query}}'}</td>
                <td className="py-2 text-xs">Search query (only for search-type components)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Illustration API */}
      <section id="illustration-api" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Illustration API</h2>

        <h3 className="text-lg font-semibold text-text-heading mb-2">
          <code className="font-mono text-accent">registerIllustration(name, options)</code>
        </h3>
        <p className="text-text-muted mb-4 text-sm">
          Register a custom illustration for use in Hollow components.
        </p>

        <div className="rounded-xl border border-border bg-surface/30 p-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Option</th>
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Type</th>
                <th className="text-left py-2 text-text-dim font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">svg</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 text-xs">SVG markup string (required)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">variants</td>
                <td className="py-2 pr-4 font-mono text-xs">Record&lt;string, string&gt;</td>
                <td className="py-2 text-xs">Theme-specific SVG variants</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs text-accent">viewBox</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 text-xs">Override the SVG viewBox (default: &quot;0 0 64 64&quot;)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-text-heading mb-2 mt-8">
          <code className="font-mono text-accent">getIllustration(name)</code>
        </h3>
        <p className="text-text-muted mb-4 text-sm">
          Retrieve a registered illustration by name. Returns the SVG string.
        </p>

        <CodeBlock
          language="ts"
          code={`import { getIllustration } from 'hollows-ui'

const svg = getIllustration('empty-inbox')
// Returns: '<svg viewBox="0 0 64 64" ...>...</svg>'`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-2 mt-8">
          <code className="font-mono text-accent">getIllustrationForClassification(classification)</code>
        </h3>
        <p className="text-text-muted mb-4 text-sm">
          Get the illustration name that best matches a component classification.
        </p>

        <CodeBlock
          language="ts"
          code={`import { getIllustrationForClassification } from 'hollows-ui'

const name = getIllustrationForClassification('inbox')
// Returns: 'empty-inbox'`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-2 mt-8">Built-in illustration names</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            'empty-inbox', 'no-results', 'empty-cart', 'no-notifications',
            'empty-table', 'no-users', 'empty-folder', 'no-messages',
            'empty-favorites', 'no-activity', 'no-data', 'empty-calendar',
            'error-state',
          ].map((name) => (
            <code key={name} className="bg-surface border border-border px-2 py-1 rounded text-xs font-mono text-accent">
              {name}
            </code>
          ))}
        </div>
      </section>

      {/* Utility Types */}
      <section id="utility-types" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Utility Types</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          TypeScript types exported for use in your application.
        </p>

        <CodeBlock
          language="ts"
          code={`import type {
  HollowProps,
  HollowsConfig,
  Theme,
  ThemeColors,
  ThemeTypography,
  ThemeSpacing,
  ThemeBorders,
  CopyTemplate,
  CopyTone,
  IllustrationStyle,
  RegistryEntry,
  Registry,
  ResponsiveConfig,
  BreakpointConfig,
  HollowDescriptor,
  ComponentClassification,
  ScannedComponent,
  AnalyzedComponent,
  IllustrationMeta,
} from 'hollows-ui'`}
        />

        <div className="rounded-xl border border-border bg-surface/30 p-4 mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-text-dim font-medium">Type</th>
                <th className="text-left py-2 text-text-dim font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">HollowProps</td>
                <td className="py-2 text-xs">Props accepted by the Hollow component</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">HollowsConfig</td>
                <td className="py-2 text-xs">Shape of the hollows.config.ts default export</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">Theme</td>
                <td className="py-2 text-xs">Full theme object (return type of createTheme)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">CopyTone</td>
                <td className="py-2 text-xs">&apos;friendly&apos; | &apos;professional&apos; | &apos;playful&apos; | &apos;minimal&apos;</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">IllustrationStyle</td>
                <td className="py-2 text-xs">&apos;outline&apos; | &apos;filled&apos; | &apos;duotone&apos;</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">RegistryEntry</td>
                <td className="py-2 text-xs">A single entry in the generated registry</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">Registry</td>
                <td className="py-2 text-xs">Record&lt;string, RegistryEntry&gt;</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">HollowDescriptor</td>
                <td className="py-2 text-xs">Full descriptor including illustration, copy, and theme</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">ComponentClassification</td>
                <td className="py-2 text-xs">Classification result from the CLI scanner</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">ScannedComponent</td>
                <td className="py-2 text-xs">Raw component data from the scanner</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-xs text-accent">AnalyzedComponent</td>
                <td className="py-2 text-xs">Component with classification and generated output</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs text-accent">IllustrationMeta</td>
                <td className="py-2 text-xs">Metadata for a registered illustration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </PageLayout>
  )
}
