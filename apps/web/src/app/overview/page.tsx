'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { InstallCommand, CodeBlock } from '@/components/code-block'
import { InteractiveDemo } from '@/components/interactive-demo'
import { FeatureGrid } from '@/components/feature-grid'
import Link from 'next/link'

export default function OverviewPage() {
  return (
    <div className="px-6 lg:px-12 py-16 max-w-[900px]">
      {/* Hero */}
      <section className="mb-20">
        <motion.h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1c1917] leading-[1.1] mb-6"
        >
          {'Empty states.'.split('').map((char, i) => (
            <motion.span
              key={`a-${i}`}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          {' '}
          <br className="hidden md:block" />
          {'Automatically generated.'.split('').map((char, i) => (
            <motion.span
              key={`b-${i}`}
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.4, delay: 0.45 + i * 0.025 }}
              className="text-[#d97706]"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <InstallCommand command="npm install hollows-ui" />
          <a
            href="https://github.com/your-name/hollows-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e7e5e4] text-sm text-[#78716c] hover:text-stone-900 hover:border-[#d6d3d1] transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-[640px]"
        >
          <p className="text-lg text-[#44403c] leading-relaxed mb-4">
            hollows scans your real UI, detects data-dependent sections,
            and generates contextual empty states — with illustrations,
            copy, and CTAs — that stay in sync with your actual layout.
          </p>
          <p className="text-[#78716c] leading-relaxed">
            No manual placeholder design. No hand-written copy.
            Wrap your component in <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;Hollow&gt;</code> and ship polished empty states instantly.
          </p>
        </motion.div>
      </section>

      {/* Interactive Before/After Demo */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl text-[#1c1917] mb-2"
        >
          See it in action
        </motion.h2>
        <p className="text-[#78716c] mb-6">
          Toggle between component types and themes to see what hollows generates.
        </p>
        <InteractiveDemo />
      </section>

      {/* 3 Steps */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl text-[#1c1917] mb-10"
        >
          How you use it
        </motion.h2>

        <div className="space-y-12">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(217,119,6,0.08)] text-[#d97706] text-sm font-semibold">
                1
              </span>
              <h3 className="text-lg font-semibold text-[#1c1917]">Wrap your component</h3>
            </div>
            <CodeBlock
              language="tsx"
              filename="components/inbox.tsx"
              code={`import { Hollow } from 'hollows-ui/react'

// CTA button shown by default
<Hollow name="user-inbox" empty={data?.length === 0}>
  {data && <InboxList items={data} />}
</Hollow>

// Hide the CTA button
<Hollow name="user-inbox" empty={data?.length === 0} showCta={false}>
  {data && <InboxList items={data} />}
</Hollow>`}
            />
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(217,119,6,0.08)] text-[#d97706] text-sm font-semibold">
                2
              </span>
              <h3 className="text-lg font-semibold text-[#1c1917]">Run the CLI once</h3>
            </div>
            <CodeBlock
              language="bash"
              filename="Terminal"
              code="npx hollows-ui build"
            />
            <p className="text-sm text-[#78716c] mt-3">
              Auto-detects your components, classifies them, and generates contextual empty states.
              Writes JSON + illustrations to <code className="text-[#d97706] bg-[#f5f5f4] px-1 py-0.5 rounded text-xs font-mono">src/hollows/</code>.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(217,119,6,0.08)] text-[#d97706] text-sm font-semibold">
                3
              </span>
              <h3 className="text-lg font-semibold text-[#1c1917]">Import the registry once</h3>
            </div>
            <CodeBlock
              language="tsx"
              filename="app/layout.tsx"
              code="import './hollows/registry'"
            />
            <p className="text-sm text-[#78716c] mt-3">
              Add this to your app entry. Every <code className="text-[#d97706] bg-[#f5f5f4] px-1 py-0.5 rounded text-xs font-mono">&lt;Hollow&gt;</code> auto-resolves by name.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl text-[#1c1917] mb-2"
        >
          Features
        </motion.h2>
        <p className="text-[#78716c] mb-2">
          Everything you need for polished empty states, out of the box.
        </p>
        <FeatureGrid />
      </section>

      {/* CTA */}
      <section className="text-center py-16 border-t border-[#e7e5e4]">
        <h2 className="font-serif text-3xl text-[#1c1917] mb-4">Ready to get started?</h2>
        <p className="text-[#78716c] mb-8 max-w-md mx-auto">
          Install hollows-ui and ship polished empty states in minutes, not hours.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/install"
            className="px-6 py-3 rounded-lg bg-[#d97706] text-white font-semibold text-sm hover:bg-[#b45309] transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/demo"
            className="px-6 py-3 rounded-lg border border-[#e7e5e4] text-[#44403c] text-sm hover:border-[#d6d3d1] transition-colors"
          >
            View Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
