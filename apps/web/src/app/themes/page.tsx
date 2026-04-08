import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function ThemesPage() {
  return (
    <PageLayout
      title="Themes"
      description="Customize the look and feel of your empty states with built-in themes or create your own."
      breadcrumbs={[{ name: 'Customization' }, { name: 'Themes' }]}
      prev={{ name: 'Angular', href: '/angular' }}
      next={{ name: 'Illustrations', href: '/illustrations' }}
      tableOfContents={[
        { id: 'built-in-themes', title: 'Built-in Themes', level: 2 },
        { id: 'theme-minimal', title: 'Minimal', level: 3 },
        { id: 'theme-playful', title: 'Playful', level: 3 },
        { id: 'theme-corporate', title: 'Corporate', level: 3 },
        { id: 'applying-themes', title: 'Applying Themes', level: 2 },
        { id: 'custom-themes', title: 'Custom Themes', level: 2 },
        { id: 'css-custom-properties', title: 'CSS Custom Properties', level: 2 },
        { id: 'theme-switching', title: 'Runtime Theme Switching', level: 2 },
      ]}
    >
      {/* Built-in Themes */}
      <section id="built-in-themes">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Built-in Themes</h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          Hollows UI ships with three carefully designed themes. Each one controls
          the colors, border radius, spacing, typography, and illustration style of
          your empty states.
        </p>

        {/* Minimal */}
        <div id="theme-minimal" className="mb-10">
          <h3 className="text-xl font-semibold text-text-heading mb-3">Minimal</h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            Clean lines, muted palette, small illustrations. Ideal for developer tools,
            dashboards, and data-heavy applications.
          </p>
          <div className="rounded-xl border border-border bg-surface/50 p-8 flex items-center justify-center mb-4">
            <div className="text-center max-w-xs">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-[#e7e5e4] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="8" width="24" height="3" rx="1.5" fill="#555" />
                  <rect x="4" y="14" width="18" height="3" rx="1.5" fill="#444" />
                  <rect x="4" y="20" width="21" height="3" rx="1.5" fill="#444" />
                </svg>
              </div>
              <p className="text-sm font-medium text-text-heading mb-1">No items yet</p>
              <p className="text-xs text-text-dim">Create your first item to get started.</p>
            </div>
          </div>
          <CodeBlock
            language="ts"
            filename="hollows.config.ts"
            code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  theme: 'minimal',
})`}
          />
        </div>

        {/* Playful */}
        <div id="theme-playful" className="mb-10">
          <h3 className="text-xl font-semibold text-text-heading mb-3">Playful</h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            Rounded corners, vibrant colors, larger illustrations with character.
            Great for consumer apps, social platforms, and creative tools.
          </p>
          <div className="rounded-xl border border-border bg-surface/50 p-8 flex items-center justify-center mb-4">
            <div className="text-center max-w-xs">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#d97706]/20 to-[#b45309]/20 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="16" r="8" fill="#d97706" opacity="0.6" />
                  <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" fill="#d97706" opacity="0.4" />
                </svg>
              </div>
              <p className="text-base font-semibold text-text-heading mb-1">No friends yet!</p>
              <p className="text-sm text-text-muted">Invite someone to connect with.</p>
              <button className="mt-3 px-4 py-1.5 rounded-full bg-[#d97706] text-white text-xs font-semibold">
                Invite a friend
              </button>
            </div>
          </div>
          <CodeBlock
            language="ts"
            filename="hollows.config.ts"
            code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  theme: 'playful',
})`}
          />
        </div>

        {/* Corporate */}
        <div id="theme-corporate" className="mb-10">
          <h3 className="text-xl font-semibold text-text-heading mb-3">Corporate</h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            Professional typography, subtle borders, muted illustration palette.
            Designed for enterprise apps, B2B SaaS, and internal tools.
          </p>
          <div className="rounded-xl border border-border bg-surface/50 p-8 flex items-center justify-center mb-4">
            <div className="text-center max-w-xs">
              <div className="w-16 h-16 mx-auto mb-4 rounded border border-border/60 bg-[#f5f5f4] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="6" width="20" height="20" rx="2" stroke="#555" strokeWidth="1.5" fill="none" />
                  <path d="M6 12h20" stroke="#555" strokeWidth="1.5" />
                  <rect x="10" y="16" width="5" height="3" rx="0.5" fill="#555" />
                  <rect x="17" y="16" width="5" height="3" rx="0.5" fill="#555" />
                </svg>
              </div>
              <p className="text-sm font-medium text-text-heading mb-1">No reports available</p>
              <p className="text-xs text-text-dim">Reports will appear here once data has been processed.</p>
            </div>
          </div>
          <CodeBlock
            language="ts"
            filename="hollows.config.ts"
            code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  theme: 'corporate',
})`}
          />
        </div>
      </section>

      {/* Applying Themes */}
      <section id="applying-themes" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Applying Themes</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Set a theme globally in your config, or override it per-component using the{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">theme</code>{' '}
          prop.
        </p>

        <CodeBlock
          language="tsx"
          filename="components/dashboard.tsx"
          code={`// Per-component override
<Hollow name="analytics" empty={!data} theme="corporate">
  <AnalyticsChart data={data} />
</Hollow>

// Uses the global theme from config
<Hollow name="notifications" empty={notifications.length === 0}>
  <NotificationList items={notifications} />
</Hollow>`}
        />
      </section>

      {/* Custom Themes */}
      <section id="custom-themes" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Custom Themes</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Use <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">createTheme()</code> to
          build a theme that matches your design system exactly.
        </p>

        <CodeBlock
          language="ts"
          filename="hollows.config.ts"
          code={`import { defineConfig, createTheme } from 'hollows-ui'

const brandTheme = createTheme({
  name: 'brand',

  colors: {
    background: '#fafafa',
    foreground: '#1a1a1a',
    muted: '#6b7280',
    accent: '#6366f1',
    border: '#e5e7eb',
  },

  typography: {
    headingFont: 'Inter, sans-serif',
    bodyFont: 'Inter, sans-serif',
    headingWeight: 600,
    headingSize: '1.125rem',
    bodySize: '0.875rem',
  },

  spacing: {
    containerPadding: '2rem',
    illustrationGap: '1.5rem',
    ctaGap: '1rem',
  },

  borders: {
    radius: '0.75rem',
    width: '1px',
    style: 'solid',
  },

  illustrations: {
    maxWidth: 120,
    style: 'outline', // 'outline' | 'filled' | 'duotone'
    strokeWidth: 1.5,
  },

  cta: {
    borderRadius: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
})

export default defineConfig({
  theme: brandTheme,
})`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          Every property is optional. Unset values fall back to the{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">minimal</code>{' '}
          theme defaults.
        </p>
      </section>

      {/* CSS Custom Properties */}
      <section id="css-custom-properties" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">CSS Custom Properties</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          All theme values are exposed as CSS custom properties on the{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">.hollows-root</code>{' '}
          container. You can override them in your own CSS for fine-grained control.
        </p>

        <CodeBlock
          language="css"
          filename="styles/overrides.css"
          code={`/* Override specific theme tokens */
.hollows-root {
  --hollows-bg: #ffffff;
  --hollows-fg: #111827;
  --hollows-muted: #6b7280;
  --hollows-accent: #3b82f6;
  --hollows-border: #e5e7eb;
  --hollows-radius: 12px;
  --hollows-heading-font: 'Inter', sans-serif;
  --hollows-heading-size: 1.125rem;
  --hollows-heading-weight: 600;
  --hollows-body-font: 'Inter', sans-serif;
  --hollows-body-size: 0.875rem;
  --hollows-illustration-max-width: 120px;
  --hollows-container-padding: 2rem;
  --hollows-cta-radius: 8px;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  .hollows-root {
    --hollows-bg: #0a0a0c;
    --hollows-fg: #e8e8ec;
    --hollows-muted: #888892;
    --hollows-border: #1e1e22;
  }
}`}
        />

        <div className="mt-6 rounded-xl border border-border bg-surface/30 p-4">
          <h4 className="text-sm font-semibold text-text-heading mb-2">Available CSS custom properties</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-text-dim font-medium">Property</th>
                  <th className="text-left py-2 pr-4 text-text-dim font-medium">Default (minimal)</th>
                  <th className="text-left py-2 text-text-dim font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-text-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs text-accent">--hollows-bg</td>
                  <td className="py-2 pr-4 font-mono text-xs">#0a0a0c</td>
                  <td className="py-2 text-xs">Container background</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs text-accent">--hollows-fg</td>
                  <td className="py-2 pr-4 font-mono text-xs">#e8e8ec</td>
                  <td className="py-2 text-xs">Heading text color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs text-accent">--hollows-muted</td>
                  <td className="py-2 pr-4 font-mono text-xs">#888892</td>
                  <td className="py-2 text-xs">Body/muted text color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs text-accent">--hollows-accent</td>
                  <td className="py-2 pr-4 font-mono text-xs">#f0a030</td>
                  <td className="py-2 text-xs">Accent/CTA color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs text-accent">--hollows-border</td>
                  <td className="py-2 pr-4 font-mono text-xs">#1e1e22</td>
                  <td className="py-2 text-xs">Border color</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs text-accent">--hollows-radius</td>
                  <td className="py-2 pr-4 font-mono text-xs">8px</td>
                  <td className="py-2 text-xs">Border radius</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Runtime Theme Switching */}
      <section id="theme-switching" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Runtime Theme Switching</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Switch themes at runtime by passing a different theme to the{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">HollowsProvider</code>.
        </p>

        <CodeBlock
          language="tsx"
          filename="app/providers.tsx"
          code={`import { HollowsProvider } from 'hollows-ui/react'
import { useState } from 'react'

export function Providers({ children }) {
  const [theme, setTheme] = useState<'minimal' | 'playful' | 'corporate'>('minimal')

  return (
    <HollowsProvider theme={theme}>
      <button onClick={() => setTheme('playful')}>
        Switch to Playful
      </button>
      {children}
    </HollowsProvider>
  )
}`}
        />
      </section>
    </PageLayout>
  )
}
