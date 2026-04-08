'use client'

import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function FeaturesPage() {
  return (
    <PageLayout
      title="React"
      description="The React adapter provides the <Hollow> component — a drop-in wrapper that renders auto-generated empty states when your data is absent."
      breadcrumbs={[{ name: 'Frameworks' }, { name: 'React' }]}
      prev={{ name: 'Output', href: '/output' }}
      next={{ name: 'Vue', href: '/vue' }}
      tableOfContents={[
        { id: 'quick-start', title: 'Quick start', level: 2 },
        { id: 'props', title: 'Props', level: 2 },
        { id: 'basic-usage', title: 'Basic usage', level: 2 },
        { id: 'event-handling', title: 'Event handling', level: 2 },
        { id: 'custom-copy', title: 'Custom copy', level: 2 },
        { id: 'custom-illustrations', title: 'Custom illustrations', level: 2 },
        { id: 'render-prop', title: 'Render prop', level: 2 },
        { id: 'loading-states', title: 'Loading states', level: 2 },
        { id: 'typescript', title: 'TypeScript', level: 2 },
      ]}
    >
      {/* Quick start */}
      <h2 id="quick-start" className="font-serif text-2xl text-[#1c1917] mt-12 mb-4">
        Quick start
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Import the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">Hollow</code> component
        from the React adapter and wrap any data-dependent section of your UI.
      </p>

      <CodeBlock
        language="tsx"
        filename="components/inbox.tsx"
        code={`import { Hollow } from 'hollows-ui/react'

export function Inbox({ messages }) {
  return (
    <Hollow name="user-inbox" empty={messages.length === 0}>
      <MessageList items={messages} />
    </Hollow>
  )
}`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        When <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">empty</code> is{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">true</code>, the component
        renders the pre-generated empty state (illustration, headline, description, and CTA).
        When <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">false</code>, it renders
        the children as normal.
      </p>

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
              <td className="px-4 py-3">Unique identifier that maps to the generated definition</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">empty</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">false</td>
              <td className="px-4 py-3">Whether to show the empty state</td>
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
              <td className="px-4 py-3">Partially or fully override generated copy</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">illustration</td>
              <td className="px-4 py-3 font-mono text-xs">ReactNode</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Custom illustration component</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">onAction</td>
              <td className="px-4 py-3 font-mono text-xs">() =&gt; void</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Callback when the CTA button is clicked</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">loading</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">false</td>
              <td className="px-4 py-3">Show a skeleton loading state instead</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">render</td>
              <td className="px-4 py-3 font-mono text-xs">(state) =&gt; ReactNode</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Render prop for full control over the empty state UI</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Additional CSS class for the container</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">animate</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">true</td>
              <td className="px-4 py-3">Enable fade-in animation on the empty state</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basic usage */}
      <h2 id="basic-usage" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Basic usage
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The most common pattern: wrap a list component and pass a boolean condition.
      </p>

      <CodeBlock
        language="tsx"
        filename="components/task-list.tsx"
        showLineNumbers
        code={`import { Hollow } from 'hollows-ui/react'
import { useTasks } from '@/hooks/use-tasks'

export function TaskList() {
  const { tasks, isLoading } = useTasks()

  return (
    <div className="task-list-container">
      <h2>My Tasks</h2>
      <Hollow
        name="task-list"
        empty={!isLoading && tasks.length === 0}
        loading={isLoading}
        onAction={() => openNewTaskDialog()}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Hollow>
    </div>
  )
}`}
      />

      {/* Event handling */}
      <h2 id="event-handling" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Event handling
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">onAction</code> prop
        fires when the user clicks the generated CTA button. Use it to navigate, open a
        dialog, or trigger any action relevant to the empty state.
      </p>

      <CodeBlock
        language="tsx"
        filename="Event handling example"
        code={`import { Hollow } from 'hollows-ui/react'
import { useRouter } from 'next/navigation'

export function ProjectList({ projects }) {
  const router = useRouter()

  return (
    <Hollow
      name="project-list"
      empty={projects.length === 0}
      onAction={() => router.push('/projects/new')}
    >
      <ProjectGrid items={projects} />
    </Hollow>
  )
}`}
      />

      <p className="text-[#78716c] leading-relaxed mb-4">
        If you don't provide <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">onAction</code>,
        the CTA button is still rendered but behaves as a passive element. This is useful when
        the empty state is informational only.
      </p>

      {/* Custom copy */}
      <h2 id="custom-copy" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Custom copy
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Override any part of the generated copy while keeping the rest. Partial overrides are
        merged with the generated defaults.
      </p>

      <CodeBlock
        language="tsx"
        filename="Custom copy — partial override"
        code={`<Hollow
  name="user-inbox"
  empty={messages.length === 0}
  copy={{
    headline: "Your inbox is clear!",
    // description and cta stay auto-generated
  }}
>
  <MessageList items={messages} />
</Hollow>`}
      />

      <CodeBlock
        language="tsx"
        filename="Custom copy — full override"
        code={`<Hollow
  name="user-inbox"
  empty={messages.length === 0}
  copy={{
    headline: "All caught up",
    description: "You've read every message. Take a break!",
    cta: { label: "Refresh", action: "secondary" },
  }}
>
  <MessageList items={messages} />
</Hollow>`}
      />

      {/* Custom illustrations */}
      <h2 id="custom-illustrations" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Custom illustrations
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Replace the generated illustration with any React component — an SVG, a Lottie
        animation, or even a canvas element.
      </p>

      <CodeBlock
        language="tsx"
        filename="Custom illustration"
        code={`import { Hollow } from 'hollows-ui/react'
import { InboxIllustration } from '@/illustrations/inbox'

export function Inbox({ messages }) {
  return (
    <Hollow
      name="user-inbox"
      empty={messages.length === 0}
      illustration={<InboxIllustration className="w-48 h-40 text-amber-400" />}
    >
      <MessageList items={messages} />
    </Hollow>
  )
}`}
      />

      {/* Render prop */}
      <h2 id="render-prop" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Render prop
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        For full control over the empty state layout, use the{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">render</code> prop.
        It receives the generated state data and lets you build a completely custom UI.
      </p>

      <CodeBlock
        language="tsx"
        filename="Render prop pattern"
        showLineNumbers
        code={`<Hollow
  name="search-results"
  empty={results.length === 0}
  render={(state) => (
    <div className="flex flex-col items-center py-16">
      <img
        src={state.illustration.src}
        alt={state.illustration.alt}
        className="w-32 h-32 mb-6 opacity-60"
      />
      <h3 className="text-xl font-semibold mb-2">
        {state.copy.headline}
      </h3>
      <p className="text-gray-500 text-center max-w-xs mb-6">
        {state.copy.description}
      </p>
      <button
        onClick={clearFilters}
        className="px-4 py-2 bg-amber-500 text-black rounded-lg"
      >
        {state.copy.cta.label}
      </button>
    </div>
  )}
>
  <SearchResults items={results} />
</Hollow>`}
      />

      {/* Loading states */}
      <h2 id="loading-states" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Loading states
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Pass <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">loading=&#123;true&#125;</code>{' '}
        to show a skeleton placeholder instead of the empty state or children. The skeleton
        layout matches the dimensions of the empty state container.
      </p>

      <CodeBlock
        language="tsx"
        filename="Loading state"
        code={`export function Dashboard({ data, isLoading }) {
  return (
    <Hollow
      name="analytics-panel"
      empty={!isLoading && data.length === 0}
      loading={isLoading}
    >
      <AnalyticsGrid data={data} />
    </Hollow>
  )
}`}
      />

      {/* TypeScript */}
      <h2 id="typescript" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        TypeScript
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">Hollow</code> component
        is fully typed. You can also import the prop types for use in your own abstractions.
      </p>

      <CodeBlock
        language="tsx"
        filename="TypeScript types"
        code={`import type { HollowProps, HollowState, CopyOverride } from 'hollows-ui/react'

// Use in a wrapper component
interface CustomEmptyProps extends Pick<HollowProps, 'name' | 'empty' | 'onAction'> {
  children: React.ReactNode
}

export function CustomEmpty({ name, empty, onAction, children }: CustomEmptyProps) {
  return (
    <Hollow name={name} empty={empty} onAction={onAction} animate={false}>
      {children}
    </Hollow>
  )
}`}
      />
    </PageLayout>
  )
}
