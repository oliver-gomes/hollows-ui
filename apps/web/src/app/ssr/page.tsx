import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function SSRPage() {
  return (
    <PageLayout
      title="Server-Side Rendering"
      description="Hollows UI works seamlessly with SSR and SSG frameworks with zero hydration mismatches."
      breadcrumbs={[{ name: 'Advanced' }, { name: 'SSR' }]}
      prev={{ name: 'Performance', href: '/performance' }}
      next={{ name: 'Interactive Demo', href: '/demo' }}
      tableOfContents={[
        { id: 'overview', title: 'Overview', level: 2 },
        { id: 'why-no-mismatch', title: 'Why No Hydration Mismatch', level: 2 },
        { id: 'nextjs', title: 'Next.js', level: 2 },
        { id: 'nuxt', title: 'Nuxt', level: 2 },
        { id: 'sveltekit', title: 'SvelteKit', level: 2 },
        { id: 'streaming', title: 'Streaming SSR', level: 2 },
        { id: 'static-generation', title: 'Static Generation', level: 2 },
      ]}
    >
      {/* Overview */}
      <section id="overview">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Overview</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Hollows UI is designed for server-first architectures. The empty state output
          is deterministic -- the same props always produce the same HTML. This means
          SSR, SSG, and ISR all work out of the box without any special configuration.
        </p>

        <div className="rounded-xl border border-border bg-surface/30 p-4 mb-6">
          <h4 className="text-sm font-semibold text-text-heading mb-2">SSR compatibility matrix</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-text-dim font-medium">Framework</th>
                  <th className="text-left py-2 pr-4 text-text-dim font-medium">SSR</th>
                  <th className="text-left py-2 pr-4 text-text-dim font-medium">SSG</th>
                  <th className="text-left py-2 text-text-dim font-medium">Streaming</th>
                </tr>
              </thead>
              <tbody className="text-text-muted">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-xs">Next.js (App Router)</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 text-xs text-accent">&#x2713;</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-xs">Next.js (Pages Router)</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 text-xs text-text-dim">--</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-xs">Nuxt 3</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 text-xs text-accent">&#x2713;</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 text-xs">SvelteKit</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 text-xs text-accent">&#x2713;</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-xs">Astro</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 pr-4 text-xs text-accent">&#x2713;</td>
                  <td className="py-2 text-xs text-text-dim">--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why No Hydration Mismatch */}
      <section id="why-no-mismatch" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Why No Hydration Mismatch</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Hydration mismatches happen when the server renders different HTML than the
          client expects. Hollows avoids this because:
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 text-text-muted text-sm">
            <span className="text-accent font-semibold mt-0.5">1.</span>
            <span>
              <strong className="text-text-heading">Deterministic output.</strong>{' '}
              The empty state HTML is derived purely from props and the static registry.
              No randomness, no Date.now(), no browser-only APIs.
            </span>
          </li>
          <li className="flex items-start gap-3 text-text-muted text-sm">
            <span className="text-accent font-semibold mt-0.5">2.</span>
            <span>
              <strong className="text-text-heading">Inline SVGs, not images.</strong>{' '}
              Illustrations are rendered as inline SVG elements, not fetched from URLs.
              The same SVG string renders identically on server and client.
            </span>
          </li>
          <li className="flex items-start gap-3 text-text-muted text-sm">
            <span className="text-accent font-semibold mt-0.5">3.</span>
            <span>
              <strong className="text-text-heading">CSS-only responsive behavior.</strong>{' '}
              Layout changes are handled via CSS media/container queries, not JavaScript
              resize listeners that produce different initial values on server vs client.
            </span>
          </li>
          <li className="flex items-start gap-3 text-text-muted text-sm">
            <span className="text-accent font-semibold mt-0.5">4.</span>
            <span>
              <strong className="text-text-heading">No useEffect for rendering.</strong>{' '}
              The Hollow component renders synchronously. There is no client-side-only
              effect that changes the initial output.
            </span>
          </li>
        </ul>
      </section>

      {/* Next.js */}
      <section id="nextjs" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Next.js</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Hollows works with both the App Router and Pages Router. With the App Router,
          the Hollow component can be used in Server Components directly.
        </p>

        <h3 className="text-lg font-semibold text-text-heading mb-3">App Router (Server Component)</h3>
        <CodeBlock
          language="tsx"
          filename="app/inbox/page.tsx"
          code={`import { Hollow } from 'hollows-ui/react'
import { getMessages } from '@/lib/api'

// This is a Server Component — no 'use client' needed
export default async function InboxPage() {
  const messages = await getMessages()

  return (
    <Hollow name="user-inbox" empty={messages.length === 0}>
      <MessageList messages={messages} />
    </Hollow>
  )
}`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-3 mt-8">App Router (Client Component)</h3>
        <CodeBlock
          language="tsx"
          filename="components/inbox.tsx"
          code={`'use client'

import { Hollow } from 'hollows-ui/react'
import { useMessages } from '@/hooks/use-messages'

export function Inbox() {
  const { data, isLoading } = useMessages()

  return (
    <Hollow name="user-inbox" empty={!data || data.length === 0} loading={isLoading}>
      {data && <MessageList messages={data} />}
    </Hollow>
  )
}`}
        />

        <h3 className="text-lg font-semibold text-text-heading mb-3 mt-8">Pages Router</h3>
        <CodeBlock
          language="tsx"
          filename="pages/inbox.tsx"
          code={`import { Hollow } from 'hollows-ui/react'

export async function getServerSideProps() {
  const messages = await fetchMessages()
  return { props: { messages } }
}

export default function InboxPage({ messages }) {
  return (
    <Hollow name="user-inbox" empty={messages.length === 0}>
      <MessageList messages={messages} />
    </Hollow>
  )
}`}
        />
      </section>

      {/* Nuxt */}
      <section id="nuxt" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Nuxt</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Use the Vue adapter with Nuxt 3. The component renders identically on server
          and client.
        </p>

        <CodeBlock
          language="vue"
          filename="pages/inbox.vue"
          code={`<script setup>
import { Hollow } from 'hollows-ui/vue'

const { data: messages } = await useFetch('/api/messages')
</script>

<template>
  <Hollow name="user-inbox" :empty="!messages?.length">
    <MessageList :messages="messages" />
  </Hollow>
</template>`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          For Nuxt, register the Hollows plugin to load the registry automatically:
        </p>

        <CodeBlock
          language="ts"
          filename="plugins/hollows.ts"
          code={`import { defineNuxtPlugin } from '#app'
import { loadRegistry } from 'hollows-ui/vue'
import registry from '~/hollows/registry.json'

export default defineNuxtPlugin(() => {
  loadRegistry(registry)
})`}
        />
      </section>

      {/* SvelteKit */}
      <section id="sveltekit" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">SvelteKit</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          The Svelte adapter works with SvelteKit&apos;s load functions and SSR mode.
        </p>

        <CodeBlock
          language="svelte"
          filename="src/routes/inbox/+page.svelte"
          code={`<script>
  import { Hollow } from 'hollows-ui/svelte'

  export let data
</script>

<Hollow name="user-inbox" empty={!data.messages.length}>
  <MessageList messages={data.messages} />
</Hollow>`}
        />

        <CodeBlock
          language="ts"
          filename="src/routes/inbox/+page.server.ts"
          code={`import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const messages = await fetchMessages()
  return { messages }
}`}
        />
      </section>

      {/* Streaming SSR */}
      <section id="streaming" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Streaming SSR</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          Hollows works with React 18 streaming and Suspense. Wrap your data-fetching
          component in Suspense, and use the Hollow component inside.
        </p>

        <CodeBlock
          language="tsx"
          filename="app/inbox/page.tsx"
          code={`import { Suspense } from 'react'
import { Hollow } from 'hollows-ui/react'

export default function InboxPage() {
  return (
    <Suspense fallback={<InboxSkeleton />}>
      <InboxContent />
    </Suspense>
  )
}

async function InboxContent() {
  const messages = await getMessages()

  return (
    <Hollow name="user-inbox" empty={messages.length === 0}>
      <MessageList messages={messages} />
    </Hollow>
  )
}`}
        />

        <p className="text-text-muted mt-4 leading-relaxed">
          The empty state streams as part of the Suspense resolution. There is no
          flash of content -- the user sees either the skeleton or the final state
          (content or empty).
        </p>
      </section>

      {/* Static Generation */}
      <section id="static-generation" className="mt-12">
        <h2 className="font-serif text-2xl text-text-heading mb-4">Static Generation</h2>
        <p className="text-text-muted mb-4 leading-relaxed">
          For statically generated pages where the empty/non-empty state is known at
          build time, Hollows renders the correct output during static generation. The
          client-side JavaScript only needs to handle dynamic transitions.
        </p>

        <CodeBlock
          language="tsx"
          filename="app/blog/page.tsx"
          code={`import { Hollow } from 'hollows-ui/react'

// Static generation — empty state is baked into the HTML
export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <Hollow name="blog-posts" empty={posts.length === 0}>
      <PostGrid posts={posts} />
    </Hollow>
  )
}

// Revalidate every 60 seconds
export const revalidate = 60`}
        />
      </section>
    </PageLayout>
  )
}
