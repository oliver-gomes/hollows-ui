'use client'

import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function InstallPage() {
  return (
    <PageLayout
      title="Install"
      description="Get up and running with hollows-ui in under five minutes. Install the package, create a config file, and run your first build."
      breadcrumbs={[{ name: 'Getting Started' }, { name: 'Install' }]}
      prev={{ name: 'How it works', href: '/how-it-works' }}
      next={{ name: 'Output', href: '/output' }}
      tableOfContents={[
        { id: 'prerequisites', title: 'Prerequisites', level: 2 },
        { id: 'install-package', title: 'Install the package', level: 2 },
        { id: 'framework-adapter', title: 'Framework adapter', level: 2 },
        { id: 'config-file', title: 'Configuration file', level: 2 },
        { id: 'first-build', title: 'First build', level: 2 },
        { id: 'ci-integration', title: 'CI integration', level: 2 },
      ]}
    >
      {/* Prerequisites */}
      <h2 id="prerequisites" className="font-serif text-2xl text-[#1c1917] mt-12 mb-4">
        Prerequisites
      </h2>
      <ul className="text-[#78716c] space-y-2 mb-6 list-disc list-inside">
        <li>Node.js 18 or later</li>
        <li>A React, Vue, Svelte, or Angular project with components that render data</li>
        <li>A dev server that can be started via a CLI command (e.g. <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">npm run dev</code>)</li>
      </ul>

      {/* Install the package */}
      <h2 id="install-package" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Install the package
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Install <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hollows-ui</code> as
        a dev dependency. The CLI runs at build time only — nothing is added to your production bundle
        except the tiny runtime adapter (~2 KB gzipped).
      </p>

      <div className="space-y-2">
        <CodeBlock
          language="bash"
          filename="npm"
          code="npm install --save-dev hollows-ui"
        />
        <CodeBlock
          language="bash"
          filename="yarn"
          code="yarn add --dev hollows-ui"
        />
        <CodeBlock
          language="bash"
          filename="pnpm"
          code="pnpm add -D hollows-ui"
        />
      </div>

      <p className="text-[#78716c] leading-relaxed mt-6 mb-4">
        The package includes the CLI, the AST scanner, the Playwright-based analyzer, and
        all framework adapters. Playwright browsers are installed automatically on first run.
      </p>

      {/* Framework adapter */}
      <h2 id="framework-adapter" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Framework adapter
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Import the adapter for your framework. Each adapter provides a{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code>{' '}
        component that reads from the generated registry at runtime.
      </p>

      <CodeBlock
        language="tsx"
        filename="React"
        code={`import { Hollow } from 'hollows-ui/react'`}
      />
      <CodeBlock
        language="tsx"
        filename="Vue"
        code={`import { Hollow } from 'hollows-ui/vue'`}
      />
      <CodeBlock
        language="tsx"
        filename="Svelte"
        code={`import { Hollow } from 'hollows-ui/svelte'`}
      />
      <CodeBlock
        language="tsx"
        filename="Angular"
        code={`import { HollowComponent } from 'hollows-ui/angular'`}
      />

      {/* Config file */}
      <h2 id="config-file" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Configuration file
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Create a <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hollows.config.ts</code> file
        in your project root. This tells the CLI where your source files live and how to start
        your dev server.
      </p>

      <CodeBlock
        language="typescript"
        filename="hollows.config.ts"
        showLineNumbers
        code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  // Glob patterns to scan for <Hollow> components
  include: ['src/**/*.tsx', 'src/**/*.vue', 'src/**/*.svelte'],

  // Files to ignore
  exclude: ['src/**/*.test.*', 'src/**/*.stories.*'],

  // Dev server command and URL
  devServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    readyPattern: 'ready on',
  },

  // Output directory for generated assets
  outDir: 'src/hollows',

  // Theme configuration
  theme: {
    mode: 'dark',
    accentColor: '#f0a030',
    borderRadius: 12,
    fontFamily: 'inherit',
  },

  // Illustration style
  illustrations: {
    style: 'line',    // 'line' | 'flat' | 'outline' | 'custom'
    color: 'accent',  // Use accent color for illustrations
  },
})`}
      />

      <p className="text-[#78716c] leading-relaxed mt-6 mb-4">
        You can also use a <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hollows.config.js</code>{' '}
        or <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hollows.config.mjs</code>{' '}
        file. The CLI auto-detects the format. You can also use the{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">--config</code> flag to
        specify a custom path.
      </p>

      <p className="text-[#78716c] leading-relaxed mb-4">
        To generate the config file interactively, run:
      </p>

      <CodeBlock
        language="bash"
        filename="Terminal"
        code="npx hollows-ui init"
      />

      {/* First build */}
      <h2 id="first-build" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        First build
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        With your config in place and at least one{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code>{' '}
        component in your source code, run the build command:
      </p>

      <CodeBlock
        language="bash"
        filename="Terminal"
        code="npx hollows-ui build"
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        You should see output similar to:
      </p>

      <CodeBlock
        language="bash"
        filename="Terminal output"
        code={`  hollows-ui v1.0.0

  Scanning...
    Found 4 hollows in 12 files

  Launching browser...
    Dev server ready at http://localhost:3000

  Analyzing...
    user-inbox      → list       (confidence: 0.94)
    search-results  → search     (confidence: 0.89)
    file-gallery    → upload     (confidence: 0.91)
    analytics-panel → dashboard  (confidence: 0.87)

  Generating...
    4 empty states generated
    4 illustrations selected

  Writing...
    src/hollows/.hollows.json
    src/hollows/registry.js
    src/hollows/illustrations/inbox-empty.svg
    src/hollows/illustrations/search-empty.svg
    src/hollows/illustrations/upload-empty.svg
    src/hollows/illustrations/dashboard-empty.svg

  Done in 3.2s`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        Finally, import the registry in your app entry point so the{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code>{' '}
        components can resolve their definitions at runtime:
      </p>

      <CodeBlock
        language="tsx"
        filename="app/layout.tsx (Next.js) or main.tsx (Vite)"
        code={`// Import the generated registry — this registers all empty states
import './hollows/registry'`}
      />

      {/* CI integration */}
      <h2 id="ci-integration" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        CI integration
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        You can run the build step in CI to keep your empty states up to date with every
        deploy. Add it to your build script in{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">package.json</code>:
      </p>

      <CodeBlock
        language="json"
        filename="package.json"
        code={`{
  "scripts": {
    "build": "hollows-ui build && next build",
    "hollows": "hollows-ui build",
    "hollows:watch": "hollows-ui build --watch"
  }
}`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">--watch</code> flag
        re-runs the build whenever a file containing a{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code>{' '}
        component changes. This is useful during development.
      </p>

      <CodeBlock
        language="bash"
        filename="Terminal"
        code="npx hollows-ui build --watch"
      />
    </PageLayout>
  )
}
