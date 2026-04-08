import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function CopyPage() {
  return (
    <PageLayout
      title="Copy & Language"
      description="Control the tone, language, and text content of your generated empty states."
      breadcrumbs={[{ name: 'Customization' }, { name: 'Copy & Language' }]}
      prev={{ name: 'Illustrations', href: '/illustrations' }}
      next={{ name: 'Responsive', href: '/responsive' }}
      tableOfContents={[
        { id: 'tone-options', title: 'Tone Options', level: 2 },
        { id: 'tone-friendly', title: 'Friendly', level: 3 },
        { id: 'tone-professional', title: 'Professional', level: 3 },
        { id: 'tone-playful', title: 'Playful', level: 3 },
        { id: 'tone-minimal', title: 'Minimal', level: 3 },
        { id: 'global-tone', title: 'Setting a Global Tone', level: 2 },
        { id: 'per-component', title: 'Per-Component Overrides', level: 2 },
        { id: 'custom-copy', title: 'Custom Copy Templates', level: 2 },
        { id: 'i18n', title: 'Internationalization', level: 2 },
      ]}
    >
      {/* Tone Options */}
      <section id="tone-options">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Tone Options</h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          The CLI generates copy in one of four tones. Each tone adjusts the heading,
          body text, and CTA labels to match the personality of your application.
        </p>

        {/* Friendly */}
        <div id="tone-friendly" className="mb-8">
          <h3 className="text-xl font-semibold text-text-heading mb-3">Friendly</h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            Warm, approachable language that feels conversational. The default tone.
          </p>
          <div className="rounded-xl border border-border bg-surface/30 p-6 mb-4">
            <div className="space-y-4">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Inbox</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;Your inbox is empty&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;When you receive messages, they&apos;ll show up here.&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Send a message&quot;</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Search</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;No results found&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;Try adjusting your search or browse our categories.&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Clear search&quot;</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Cart</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;Your cart is empty&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;Looks like you haven&apos;t added anything yet.&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Browse products&quot;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional */}
        <div id="tone-professional" className="mb-8">
          <h3 className="text-xl font-semibold text-text-heading mb-3">Professional</h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            Clear, direct language suited for enterprise and B2B products.
          </p>
          <div className="rounded-xl border border-border bg-surface/30 p-6 mb-4">
            <div className="space-y-4">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Inbox</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;No messages&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;Incoming messages will be displayed in this section.&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Compose message&quot;</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Search</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;No matching results&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;Refine your query or adjust the applied filters.&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Reset filters&quot;</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Cart</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;Cart is empty&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;Items added to your cart will appear here.&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;View catalog&quot;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Playful */}
        <div id="tone-playful" className="mb-8">
          <h3 className="text-xl font-semibold text-text-heading mb-3">Playful</h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            Fun, lighthearted copy with personality. Great for consumer and social apps.
          </p>
          <div className="rounded-xl border border-border bg-surface/30 p-6 mb-4">
            <div className="space-y-4">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Inbox</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;Nothing here yet!&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;Your inbox is feeling lonely. Start a conversation!&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Say hello&quot;</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Search</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;Hmm, nothing matched&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;We looked everywhere but came up empty. Try different words?&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Try again&quot;</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Cart</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;Your cart is hungry!&quot;</p>
                <p className="text-xs text-text-dim">Body: &quot;Feed it some awesome items from our collection.&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Go shopping&quot;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal */}
        <div id="tone-minimal" className="mb-8">
          <h3 className="text-xl font-semibold text-text-heading mb-3">Minimal</h3>
          <p className="text-text-muted mb-4 text-sm leading-relaxed">
            Bare essentials. Short headings, no body text, terse CTAs. For interfaces where
            less is more.
          </p>
          <div className="rounded-xl border border-border bg-surface/30 p-6 mb-4">
            <div className="space-y-4">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Inbox</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;No messages&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Compose&quot;</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Search</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;No results&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Clear&quot;</p>
              </div>
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-sm font-medium text-text-heading">Cart</p>
                <p className="text-xs text-text-dim mt-0.5">Heading: &quot;Empty&quot;</p>
                <p className="text-xs text-accent mt-1">CTA: &quot;Browse&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Tone */}
      <section id="global-tone" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Setting a Global Tone</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Set the default tone for all generated empty states in your config file.
          The CLI will use this tone when generating copy during{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">npx hollows-ui build</code>.
        </p>

        <CodeBlock
          language="ts"
          filename="hollows.config.ts"
          code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  copy: {
    tone: 'professional', // 'friendly' | 'professional' | 'playful' | 'minimal'
  },
})`}
        />
      </section>

      {/* Per-Component Overrides */}
      <section id="per-component" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Per-Component Overrides</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Override the generated copy for any individual component. You can customize
          the heading, body, and CTA text directly in the registry or via props.
        </p>

        <h3 className="text-lg font-semibold text-text-heading mb-3 mt-6">Via the registry</h3>
        <CodeBlock
          language="json"
          filename="src/hollows/registry.json"
          code={`{
  "user-inbox": {
    "heading": "All caught up!",
    "body": "You've read every message. Take a break.",
    "cta": {
      "label": "Refresh",
      "action": "callback:onRefresh"
    }
  }
}`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-3 mt-8">Via component props</h3>
        <CodeBlock
          language="tsx"
          filename="components/inbox.tsx"
          code={`<Hollow
  name="user-inbox"
  empty={data?.length === 0}
  heading="All caught up!"
  body="You've read every message. Take a break."
  ctaLabel="Refresh"
  onCtaClick={handleRefresh}
>
  {data && <InboxList items={data} />}
</Hollow>`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          Props always take precedence over registry values, so you can use the
          registry as a baseline and override specific fields at the component level.
        </p>
      </section>

      {/* Custom Copy Templates */}
      <section id="custom-copy" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Custom Copy Templates</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Define reusable copy templates for component categories. When the CLI
          classifies a component, it will use your template instead of the built-in one.
        </p>

        <CodeBlock
          language="ts"
          filename="hollows.config.ts"
          code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  copy: {
    tone: 'friendly',
    templates: {
      inbox: {
        heading: 'Nothing in your {{name}} yet',
        body: 'New {{itemType}} will appear here as they arrive.',
        cta: 'Create {{itemType}}',
      },
      table: {
        heading: 'No {{name}} found',
        body: 'Try changing your filters or create a new entry.',
        cta: 'Add {{itemType}}',
      },
      search: {
        heading: 'No results for "{{query}}"',
        body: 'Check your spelling or try broader terms.',
        cta: 'Clear search',
      },
    },
  },
})`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          Template variables like{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">{'{{name}}'}</code>{' '}
          and{' '}
          <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">{'{{itemType}}'}</code>{' '}
          are resolved at build time using the component&apos;s classification metadata.
        </p>
      </section>

      {/* i18n */}
      <section id="i18n" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Internationalization</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Hollows supports generating copy in multiple languages. Provide locale-specific
          overrides and the runtime adapter will pick the right one based on the active locale.
        </p>

        <CodeBlock
          language="ts"
          filename="hollows.config.ts"
          code={`import { defineConfig } from 'hollows-ui'

export default defineConfig({
  copy: {
    tone: 'friendly',
    defaultLocale: 'en',
    locales: {
      en: {}, // uses defaults
      es: {
        templates: {
          inbox: {
            heading: 'Tu bandeja está vacía',
            body: 'Los nuevos mensajes aparecerán aquí.',
            cta: 'Redactar mensaje',
          },
        },
      },
      ja: {
        templates: {
          inbox: {
            heading: 'メッセージはありません',
            body: '新しいメッセージはここに表示されます。',
            cta: 'メッセージを作成',
          },
        },
      },
    },
  },
})`}
        />

        <CodeBlock
          language="tsx"
          filename="app/providers.tsx"
          code={`import { HollowsProvider } from 'hollows-ui/react'

export function Providers({ children, locale }) {
  return (
    <HollowsProvider locale={locale}>
      {children}
    </HollowsProvider>
  )
}`}
        />
      </section>
    </PageLayout>
  )
}
