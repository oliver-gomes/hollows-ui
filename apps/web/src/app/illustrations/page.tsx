'use client'

import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

const illustrations = [
  {
    name: 'empty-inbox',
    label: 'Empty Inbox',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="16" width="40" height="32" rx="3" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <path d="M12 24l20 12 20-12" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <line x1="12" y1="24" x2="24" y2="32" stroke="#d97706" strokeWidth="1.5" opacity="0.4" />
        <line x1="52" y1="24" x2="40" y2="32" stroke="#d97706" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'no-results',
    label: 'No Results',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="12" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <line x1="37" y1="37" x2="48" y2="48" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="28" x2="32" y2="28" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'empty-cart',
    label: 'Empty Cart',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16h4l6 24h18l6-18H24" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="48" r="3" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <circle cx="42" cy="48" r="3" stroke="#d97706" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'no-notifications',
    label: 'No Notifications',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 44h16M22 36c0-6 2-12 10-14v-2a2 2 0 014 0v2c8 2 10 8 10 14v4H22v-4z" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="14" x2="50" y2="50" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'empty-table',
    label: 'Empty Table',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="44" height="36" rx="3" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="24" x2="54" y2="24" stroke="#d97706" strokeWidth="1.5" />
        <line x1="10" y1="34" x2="54" y2="34" stroke="#d97706" strokeWidth="1.5" opacity="0.3" />
        <line x1="10" y1="44" x2="54" y2="44" stroke="#d97706" strokeWidth="1.5" opacity="0.3" />
        <line x1="28" y1="14" x2="28" y2="50" stroke="#d97706" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'no-users',
    label: 'No Users',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="24" r="8" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <path d="M18 48c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'empty-folder',
    label: 'Empty Folder',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20V46a3 3 0 003 3h38a3 3 0 003-3V26a3 3 0 00-3-3H30l-4-6H13a3 3 0 00-3 3z" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <path d="M10 26h44" stroke="#d97706" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'no-messages',
    label: 'No Messages',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18h32a4 4 0 014 4v16a4 4 0 01-4 4H24l-8 6v-6h-4a4 4 0 01-4-4V22a4 4 0 014-4z" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="28" x2="36" y2="28" stroke="#d97706" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="20" y1="34" x2="30" y2="34" stroke="#d97706" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'empty-favorites',
    label: 'Empty Favorites',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 50s-16-10-16-22a10 10 0 0116-8 10 10 0 0116 8c0 12-16 22-16 22z" stroke="#d97706" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'no-activity',
    label: 'No Activity',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="18" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <polyline points="32,20 32,32 42,32" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'no-data',
    label: 'No Data',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="38" width="8" height="14" rx="1" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <rect x="24" y="28" width="8" height="24" rx="1" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.5" />
        <rect x="36" y="18" width="8" height="34" rx="1" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.3" />
        <rect x="48" y="12" width="8" height="40" rx="1" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: 'empty-calendar',
    label: 'Empty Calendar',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="16" width="44" height="36" rx="3" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="26" x2="54" y2="26" stroke="#d97706" strokeWidth="1.5" />
        <line x1="22" y1="12" x2="22" y2="20" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="42" y1="12" x2="42" y2="20" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="38" r="3" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'error-state',
    label: 'Error State',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12L54 50H10L32 12z" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <line x1="32" y1="26" x2="32" y2="38" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="44" r="1.5" fill="#d97706" />
      </svg>
    ),
  },
]

export default function IllustrationsPage() {
  return (
    <PageLayout
      title="Illustrations"
      description="Browse all 13 built-in illustrations and learn how to add your own."
      breadcrumbs={[{ name: 'Customization' }, { name: 'Illustrations' }]}
      prev={{ name: 'Themes', href: '/themes' }}
      next={{ name: 'Copy & Language', href: '/copy' }}
      tableOfContents={[
        { id: 'gallery', title: 'Illustration Gallery', level: 2 },
        { id: 'using-illustrations', title: 'Using Illustrations', level: 2 },
        { id: 'custom-illustrations', title: 'Custom Illustrations', level: 2 },
        { id: 'illustration-styles', title: 'Illustration Styles', level: 2 },
      ]}
    >
      {/* Gallery */}
      <section id="gallery">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Illustration Gallery</h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          Hollows UI includes 13 built-in illustrations, each designed for a common empty-state
          scenario. The CLI automatically selects the best match based on your component classification.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {illustrations.map((illust) => (
            <div
              key={illust.name}
              className="rounded-xl border border-border bg-surface/30 p-6 flex flex-col items-center gap-3 hover:border-accent/30 transition-colors group"
            >
              <div className="w-16 h-16 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                {illust.svg}
              </div>
              <span className="text-xs font-mono text-text-dim text-center">{illust.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Using Illustrations */}
      <section id="using-illustrations" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Using Illustrations</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Illustrations are assigned automatically during{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">npx hollows-ui build</code>.
          The CLI classifies your component (inbox, cart, table, etc.) and selects the
          matching illustration. You can also specify one manually:
        </p>

        <CodeBlock
          language="tsx"
          filename="components/inbox.tsx"
          code={`<Hollow
  name="user-inbox"
  empty={data?.length === 0}
  illustration="empty-inbox"
>
  {data && <InboxList items={data} />}
</Hollow>`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          You can also override the illustration in the generated JSON registry:
        </p>

        <CodeBlock
          language="json"
          filename="src/hollows/registry.json"
          code={`{
  "user-inbox": {
    "illustration": "empty-inbox",
    "heading": "Your inbox is empty",
    "body": "New messages will appear here.",
    "cta": { "label": "Compose", "action": "navigate:/compose" }
  }
}`}
        />
      </section>

      {/* Custom Illustrations */}
      <section id="custom-illustrations" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Custom Illustrations</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Register your own SVG illustrations to use across your application.
          Custom illustrations integrate seamlessly with theming and responsive scaling.
        </p>

        <CodeBlock
          language="tsx"
          filename="hollows.config.ts"
          code={`import { defineConfig, registerIllustration } from 'hollows-ui'

registerIllustration('custom-rocket', {
  svg: \`
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8c-4 8-4 20 0 32 4-12 4-24 0-32z"
        stroke="currentColor" stroke-width="1.5" fill="none" />
      <circle cx="32" cy="28" r="4"
        stroke="currentColor" stroke-width="1.5" fill="none" />
      <path d="M24 36l-6 8h12M40 36l6 8H34"
        stroke="currentColor" stroke-width="1.5" fill="none" />
      <path d="M28 44h8v6h-8z"
        stroke="currentColor" stroke-width="1.5" fill="none" />
    </svg>
  \`,
  // Optional: provide variants for different themes
  variants: {
    playful: \`<svg><!-- playful version --></svg>\`,
    corporate: \`<svg><!-- corporate version --></svg>\`,
  },
})

export default defineConfig({
  illustrations: {
    custom: ['custom-rocket'],
  },
})`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          Then use your custom illustration by name:
        </p>

        <CodeBlock
          language="tsx"
          code={`<Hollow name="onboarding" empty={!started} illustration="custom-rocket">
  <OnboardingFlow />
</Hollow>`}
        />
      </section>

      {/* Illustration Styles */}
      <section id="illustration-styles" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Illustration Styles</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Built-in illustrations support three rendering styles. The style is controlled
          by your theme configuration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl border border-border bg-surface/30 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="24" r="8" stroke="#d97706" strokeWidth="1.5" fill="none" />
                <path d="M18 48c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#d97706" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-heading">Outline</p>
            <p className="text-xs text-text-dim mt-1">Stroke-only, clean lines</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/30 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="24" r="8" fill="#d97706" opacity="0.6" />
                <path d="M18 48c0-7.7 6.3-14 14-14s14 6.3 14 14" fill="#d97706" opacity="0.4" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-heading">Filled</p>
            <p className="text-xs text-text-dim mt-1">Solid fills, bold shapes</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/30 p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="24" r="8" stroke="#d97706" strokeWidth="1.5" fill="#d97706" fillOpacity="0.15" />
                <path d="M18 48c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#d97706" strokeWidth="1.5" fill="#d97706" fillOpacity="0.1" />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-heading">Duotone</p>
            <p className="text-xs text-text-dim mt-1">Stroke + translucent fill</p>
          </div>
        </div>

        <CodeBlock
          language="ts"
          filename="hollows.config.ts"
          code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  theme: {
    illustrations: {
      style: 'duotone', // 'outline' | 'filled' | 'duotone'
      strokeWidth: 1.5,
      maxWidth: 120,
    },
  },
})`}
        />
      </section>
    </PageLayout>
  )
}
