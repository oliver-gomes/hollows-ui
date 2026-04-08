'use client'

import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function SveltePage() {
  return (
    <PageLayout
      title="Svelte"
      description="The Svelte adapter provides a <Hollow> component that integrates with Svelte's reactivity model, using stores, slots, and event dispatching for empty state rendering."
      breadcrumbs={[{ name: 'Frameworks' }, { name: 'Svelte' }]}
      prev={{ name: 'Vue', href: '/vue' }}
      next={{ name: 'Angular', href: '/angular' }}
      tableOfContents={[
        { id: 'installation', title: 'Installation', level: 2 },
        { id: 'basic-usage', title: 'Basic usage', level: 2 },
        { id: 'props', title: 'Props', level: 2 },
        { id: 'event-dispatching', title: 'Event dispatching', level: 2 },
        { id: 'slots', title: 'Slot customization', level: 2 },
        { id: 'stores', title: 'Store integration', level: 2 },
        { id: 'sveltekit', title: 'SvelteKit', level: 2 },
        { id: 'typescript', title: 'TypeScript', level: 2 },
      ]}
    >
      {/* Installation */}
      <h2 id="installation" className="font-serif text-2xl text-[#1c1917] mt-12 mb-4">
        Installation
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Import from the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hollows-ui/svelte</code> subpath.
        The adapter supports Svelte 4 and Svelte 5 (runes mode).
      </p>

      <CodeBlock
        language="bash"
        filename="Terminal"
        code="npm install --save-dev hollows-ui"
      />

      <p className="text-[#78716c] leading-relaxed mt-6 mb-4">
        Import the generated registry in your app entry point:
      </p>

      <CodeBlock
        language="typescript"
        filename="src/main.ts (Vite + Svelte)"
        code={`import './hollows/registry'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app`}
      />

      {/* Basic usage */}
      <h2 id="basic-usage" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Basic usage
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Wrap any data-dependent section with the{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code>{' '}
        component. When <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">empty</code> is
        true, it renders the auto-generated empty state with illustration, copy, and CTA.
      </p>

      <CodeBlock
        language="svelte"
        filename="src/components/TaskList.svelte"
        showLineNumbers
        code={`<script lang="ts">
  import { Hollow } from 'hollows-ui/svelte'
  import TaskCard from './TaskCard.svelte'

  export let tasks: Task[] = []
  export let isLoading = false

  $: isEmpty = !isLoading && tasks.length === 0
</script>

<div class="task-list">
  <h2>My Tasks</h2>
  <Hollow
    name="task-list"
    empty={isEmpty}
    loading={isLoading}
    on:action={() => goto('/tasks/new')}
  >
    {#each tasks as task (task.id)}
      <TaskCard {task} />
    {/each}
  </Hollow>
</div>`}
      />

      {/* Props */}
      <h2 id="props" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Props
      </h2>

      <div className="border border-[#e7e5e4] rounded-xl overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e7e5e4] bg-[#f5f5f4]">
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Prop</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Type</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Default</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="text-[#78716c]">
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">name</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Unique identifier matching the generated definition</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">empty</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">false</td>
              <td className="px-4 py-3">Whether to show the empty state</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">loading</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">false</td>
              <td className="px-4 py-3">Show skeleton loading state</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">category</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3 text-[#78716c]">auto</td>
              <td className="px-4 py-3">Override the auto-detected category</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">copy</td>
              <td className="px-4 py-3 font-mono text-xs">CopyOverride</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Override generated copy</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">animate</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">true</td>
              <td className="px-4 py-3">Enable transition animations</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">class</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Additional CSS class for the container</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Event dispatching */}
      <h2 id="event-dispatching" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Event dispatching
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The component dispatches an <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">action</code> event
        when the CTA button is clicked. Listen with Svelte's{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">on:</code> directive.
      </p>

      <CodeBlock
        language="svelte"
        filename="Event handling"
        code={`<script lang="ts">
  import { Hollow } from 'hollows-ui/svelte'
  import { goto } from '$app/navigation'

  export let projects: Project[] = []
</script>

<Hollow
  name="project-list"
  empty={projects.length === 0}
  on:action={() => goto('/projects/new')}
>
  {#each projects as project (project.id)}
    <ProjectCard {project} />
  {/each}
</Hollow>`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        You can also forward the event to a parent component:
      </p>

      <CodeBlock
        language="svelte"
        filename="Forwarding the action event"
        code={`<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Hollow } from 'hollows-ui/svelte'

  const dispatch = createEventDispatcher()
  export let items: Item[] = []
</script>

<Hollow
  name="item-list"
  empty={items.length === 0}
  on:action={() => dispatch('create')}
>
  {#each items as item (item.id)}
    <ItemRow {item} />
  {/each}
</Hollow>`}
      />

      {/* Slots */}
      <h2 id="slots" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Slot customization
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Use named slots to customize the empty state rendering. The{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">empty</code> slot
        receives the generated state as slot props.
      </p>

      <CodeBlock
        language="svelte"
        filename="Custom empty state via slots"
        showLineNumbers
        code={`<Hollow name="notifications" empty={notifications.length === 0}>
  <!-- Default slot: normal content -->
  {#each notifications as notification (notification.id)}
    <NotificationItem {notification} />
  {/each}

  <!-- Named slot: custom empty state -->
  <svelte:fragment slot="empty" let:state>
    <div class="flex flex-col items-center py-12 text-center">
      <BellOff class="w-16 h-16 text-gray-400 mb-4" />
      <h3 class="text-lg font-semibold">{state.copy.headline}</h3>
      <p class="text-gray-500 mt-2 max-w-xs">
        {state.copy.description}
      </p>
      <button
        class="mt-6 px-4 py-2 bg-amber-500 text-black rounded-lg"
        on:click={() => enableNotifications()}
      >
        {state.copy.cta.label}
      </button>
    </div>
  </svelte:fragment>

  <!-- Named slot: custom illustration -->
  <svelte:fragment slot="illustration">
    <LottiePlayer src="/animations/empty-bell.json" width={200} />
  </svelte:fragment>
</Hollow>`}
      />

      {/* Stores */}
      <h2 id="stores" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Store integration
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Svelte stores work naturally with the empty prop. Use derived stores for complex
        empty state logic.
      </p>

      <CodeBlock
        language="svelte"
        filename="Store-based empty state"
        showLineNumbers
        code={`<script lang="ts">
  import { derived } from 'svelte/store'
  import { Hollow } from 'hollows-ui/svelte'
  import { items, searchQuery } from '$lib/stores'

  const filteredItems = derived(
    [items, searchQuery],
    ([$items, $query]) =>
      $items.filter((item) =>
        item.name.toLowerCase().includes($query.toLowerCase())
      )
  )

  const isEmpty = derived(
    [filteredItems, searchQuery],
    ([$filtered, $query]) => $query.length > 0 && $filtered.length === 0
  )
</script>

<Hollow
  name="search-results"
  empty={$isEmpty}
  copy={{ headline: \`No results for "\${$searchQuery}"\` }}
  on:action={() => searchQuery.set('')}
>
  {#each $filteredItems as item (item.id)}
    <ItemCard {item} />
  {/each}
</Hollow>`}
      />

      {/* SvelteKit */}
      <h2 id="sveltekit" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        SvelteKit
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        With SvelteKit, import the registry in your root layout and use the hollow component
        in any page or component.
      </p>

      <CodeBlock
        language="svelte"
        filename="src/routes/+layout.svelte"
        code={`<script>
  // Import once at the root layout
  import '../hollows/registry'
</script>

<slot />`}
      />

      <CodeBlock
        language="svelte"
        filename="src/routes/inbox/+page.svelte"
        showLineNumbers
        code={`<script lang="ts">
  import { Hollow } from 'hollows-ui/svelte'
  import type { PageData } from './$types'

  export let data: PageData

  $: messages = data.messages
</script>

<div class="max-w-2xl mx-auto p-6">
  <h1 class="text-2xl font-bold mb-6">Inbox</h1>
  <Hollow
    name="user-inbox"
    empty={messages.length === 0}
    on:action={() => goto('/compose')}
  >
    {#each messages as message (message.id)}
      <MessageCard {message} />
    {/each}
  </Hollow>
</div>`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        For server-side rendered pages, the hollow component renders the empty state on the
        server when the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">empty</code> prop
        is true during SSR. The illustration is inlined as an SVG, so no additional network
        requests are needed.
      </p>

      {/* TypeScript */}
      <h2 id="typescript" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        TypeScript
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The Svelte adapter ships with full TypeScript definitions. Use{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">lang="ts"</code> in your
        script blocks for type checking.
      </p>

      <CodeBlock
        language="typescript"
        filename="Type imports"
        code={`import type { HollowProps, HollowState, CopyOverride } from 'hollows-ui/svelte'

// Types are available for use in your components
// All props and events are fully typed`}
      />
    </PageLayout>
  )
}
