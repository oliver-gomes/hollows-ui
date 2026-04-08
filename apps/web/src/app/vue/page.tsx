'use client'

import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function VuePage() {
  return (
    <PageLayout
      title="Vue"
      description="The Vue adapter provides the <Hollow> component for Vue 3 with full Composition API support, reactive empty state rendering, and slot-based customization."
      breadcrumbs={[{ name: 'Frameworks' }, { name: 'Vue' }]}
      prev={{ name: 'React', href: '/features' }}
      next={{ name: 'Svelte', href: '/svelte' }}
      tableOfContents={[
        { id: 'installation', title: 'Installation', level: 2 },
        { id: 'basic-usage', title: 'Basic usage', level: 2 },
        { id: 'props', title: 'Props', level: 2 },
        { id: 'composition-api', title: 'Composition API', level: 2 },
        { id: 'event-handling', title: 'Event handling', level: 2 },
        { id: 'slots', title: 'Slots', level: 2 },
        { id: 'custom-copy', title: 'Custom copy', level: 2 },
        { id: 'use-hollow', title: 'useHollow composable', level: 2 },
        { id: 'typescript', title: 'TypeScript', level: 2 },
      ]}
    >
      {/* Installation */}
      <h2 id="installation" className="font-serif text-2xl text-[#1c1917] mt-12 mb-4">
        Installation
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The Vue adapter is included in the main{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hollows-ui</code> package.
        Import from the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hollows-ui/vue</code> subpath.
      </p>

      <CodeBlock
        language="bash"
        filename="Terminal"
        code="npm install --save-dev hollows-ui"
      />

      <p className="text-[#78716c] leading-relaxed mt-6 mb-4">
        Register the generated hollows in your app entry:
      </p>

      <CodeBlock
        language="typescript"
        filename="src/main.ts"
        code={`import { createApp } from 'vue'
import App from './App.vue'

// Import the generated registry
import './hollows/registry'

createApp(App).mount('#app')`}
      />

      {/* Basic usage */}
      <h2 id="basic-usage" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Basic usage
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Import the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">Hollow</code> component
        and wrap any data-dependent section of your template.
      </p>

      <CodeBlock
        language="vue"
        filename="components/InboxView.vue"
        showLineNumbers
        code={`<script setup lang="ts">
import { Hollow } from 'hollows-ui/vue'
import { useMessages } from '@/composables/useMessages'

const { messages, isLoading } = useMessages()
</script>

<template>
  <div class="inbox-container">
    <h2>Inbox</h2>
    <Hollow
      name="user-inbox"
      :empty="!isLoading && messages.length === 0"
      :loading="isLoading"
      @action="$router.push('/compose')"
    >
      <MessageCard
        v-for="msg in messages"
        :key="msg.id"
        :message="msg"
      />
    </Hollow>
  </div>
</template>`}
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

      <p className="text-[#78716c] leading-relaxed mb-4">
        <strong className="text-[#1c1917]">Events:</strong>{' '}
        The component emits an <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">action</code> event
        when the CTA button is clicked.
      </p>

      {/* Composition API */}
      <h2 id="composition-api" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Composition API
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">Hollow</code> component
        integrates naturally with Vue's reactivity system. Computed properties and refs work
        seamlessly for the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">empty</code> prop.
      </p>

      <CodeBlock
        language="vue"
        filename="components/FilteredList.vue"
        showLineNumbers
        code={`<script setup lang="ts">
import { ref, computed } from 'vue'
import { Hollow } from 'hollows-ui/vue'

const items = ref<Item[]>([])
const filter = ref('')

const filteredItems = computed(() =>
  items.value.filter((item) =>
    item.name.toLowerCase().includes(filter.value.toLowerCase())
  )
)

const isEmpty = computed(() => filteredItems.value.length === 0)
const isSearchEmpty = computed(() =>
  filter.value.length > 0 && isEmpty.value
)
</script>

<template>
  <div>
    <input v-model="filter" placeholder="Search items..." />

    <Hollow
      name="filtered-items"
      :empty="isSearchEmpty"
      :copy="{ headline: \`No results for &quot;\${filter}&quot;\` }"
      @action="filter = ''"
    >
      <ItemCard
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
      />
    </Hollow>
  </div>
</template>`}
      />

      {/* Event handling */}
      <h2 id="event-handling" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Event handling
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Use the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">@action</code> event
        to handle CTA clicks. You can call router methods, emit events, or trigger any side effect.
      </p>

      <CodeBlock
        language="vue"
        filename="Event handling"
        code={`<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Hollow } from 'hollows-ui/vue'

const router = useRouter()

function handleCreate() {
  router.push('/projects/new')
}
</script>

<template>
  <Hollow
    name="project-list"
    :empty="projects.length === 0"
    @action="handleCreate"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </Hollow>
</template>`}
      />

      {/* Slots */}
      <h2 id="slots" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Slots
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Use named slots for full control over the empty state rendering. The{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">empty</code> slot
        receives the generated state as slot props.
      </p>

      <CodeBlock
        language="vue"
        filename="Custom empty state with slots"
        showLineNumbers
        code={`<template>
  <Hollow name="notifications" :empty="notifications.length === 0">
    <!-- Default slot: your normal content -->
    <NotificationItem
      v-for="n in notifications"
      :key="n.id"
      :notification="n"
    />

    <!-- Empty slot: custom empty state -->
    <template #empty="{ state }">
      <div class="flex flex-col items-center py-12">
        <BellOffIcon class="w-16 h-16 text-gray-400 mb-4" />
        <h3 class="text-lg font-semibold">{{ state.copy.headline }}</h3>
        <p class="text-gray-500 mt-2">{{ state.copy.description }}</p>
      </div>
    </template>

    <!-- Illustration slot: override just the illustration -->
    <template #illustration>
      <LottieAnimation name="empty-bell" :width="200" :height="180" />
    </template>
  </Hollow>
</template>`}
      />

      {/* Custom copy */}
      <h2 id="custom-copy" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Custom copy
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Override the generated copy with reactive values. Partial overrides are merged with defaults.
      </p>

      <CodeBlock
        language="vue"
        filename="Reactive custom copy"
        code={`<script setup lang="ts">
import { computed } from 'vue'
import { Hollow } from 'hollows-ui/vue'

const props = defineProps<{ searchQuery: string }>()

const customCopy = computed(() => ({
  headline: props.searchQuery
    ? \`No results for "\${props.searchQuery}"\`
    : 'Nothing here yet',
}))
</script>

<template>
  <Hollow
    name="search-results"
    :empty="results.length === 0"
    :copy="customCopy"
  >
    <ResultItem v-for="r in results" :key="r.id" :result="r" />
  </Hollow>
</template>`}
      />

      {/* useHollow composable */}
      <h2 id="use-hollow" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        useHollow composable
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        For advanced use cases, access the hollow state data directly with the{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">useHollow</code> composable.
        This is useful when you need the generated data outside the component template.
      </p>

      <CodeBlock
        language="vue"
        filename="useHollow composable"
        showLineNumbers
        code={`<script setup lang="ts">
import { useHollow } from 'hollows-ui/vue'

const { state, isEmpty } = useHollow('user-inbox')

// Access generated data reactively
console.log(state.value?.copy.headline) // "No messages yet"
console.log(state.value?.category)       // "list"
</script>

<template>
  <div v-if="isEmpty">
    <p>{{ state?.copy.description }}</p>
  </div>
</template>`}
      />

      {/* TypeScript */}
      <h2 id="typescript" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        TypeScript
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The Vue adapter includes full type definitions. Import types for use in your own components.
      </p>

      <CodeBlock
        language="typescript"
        filename="Type imports"
        code={`import type { HollowProps, HollowState, CopyOverride } from 'hollows-ui/vue'

// All props are typed, including the emit events
// <Hollow name="..." :empty="..." @action="..." />`}
      />
    </PageLayout>
  )
}
