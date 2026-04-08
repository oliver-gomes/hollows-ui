'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageLayout } from '@/components/page-layout'

type ComponentType = 'inbox' | 'search' | 'table' | 'cart' | 'feed' | 'notifications' | 'favorites' | 'upload'

const illustrations: Record<ComponentType, JSX.Element> = {
  inbox: (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="40" y="60" width="120" height="90" rx="8"/><polyline points="40,68 100,115 160,68"/>
      <line x1="75" y1="42" x2="125" y2="42" strokeDasharray="4 4" opacity="0.4"/>
      <line x1="80" y1="30" x2="120" y2="30" strokeDasharray="4 4" opacity="0.25"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="90" cy="85" r="40"/><line x1="118" y1="113" x2="155" y2="150"/>
      <line x1="78" y1="73" x2="102" y2="97"/><line x1="102" y1="73" x2="78" y2="97"/>
    </svg>
  ),
  table: (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="30" y="40" width="140" height="120" rx="6"/><line x1="30" y1="70" x2="170" y2="70"/>
      <line x1="30" y1="100" x2="170" y2="100" strokeDasharray="4 4" opacity="0.4"/>
      <line x1="80" y1="40" x2="80" y2="160" strokeDasharray="4 4" opacity="0.3"/>
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60,50 L75,50 L90,130 L150,130 Q160,130 158,120 L152,80 Q150,70 140,70 L80,70"/>
      <circle cx="95" cy="150" r="8"/><circle cx="145" cy="150" r="8"/>
    </svg>
  ),
  feed: (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50,80 Q50,60 70,60 L130,60 Q150,60 150,80 L150,95 Q150,105 140,105 L85,105 L65,120 L70,105 L60,105 Q50,105 50,95Z" opacity="0.5"/>
      <path d="M70,120 Q70,110 80,110 L140,110 Q160,110 160,120 L160,135 Q160,145 150,145 L120,145 L135,160 L110,145 L80,145 Q70,145 70,135Z" opacity="0.3"/>
    </svg>
  ),
  notifications: (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M80,140 Q80,155 100,155 Q120,155 120,140"/>
      <path d="M65,140 L65,95 Q65,60 100,55 Q135,60 135,95 L135,140Z"/>
      <line x1="100" y1="45" x2="100" y2="55"/>
    </svg>
  ),
  favorites: (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M100,160 L55,115 Q30,88 55,62 Q80,36 100,65 Q120,36 145,62 Q170,88 145,115Z" strokeDasharray="6 4"/>
    </svg>
  ),
  upload: (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M55,120 Q30,120 30,95 Q30,70 55,65 Q60,40 85,35 Q115,30 130,50 Q155,45 170,65 Q185,85 165,105 Q165,120 145,120"/>
      <line x1="100" y1="95" x2="100" y2="155"/><polyline points="80,115 100,95 120,115"/>
    </svg>
  ),
}

const emptyStates: Record<ComponentType, { headline: string; description: string; cta: string }> = {
  inbox: { headline: 'No messages yet', description: "When you receive messages, they'll appear right here.", cta: 'Compose a message' },
  search: { headline: 'No results found', description: "Try adjusting your search or filters to find what you're looking for.", cta: 'Clear filters' },
  table: { headline: 'No data yet', description: 'When data is available, it will be displayed in this table.', cta: 'Add data' },
  cart: { headline: 'Your cart is empty', description: "Looks like you haven't added anything yet.", cta: 'Browse products' },
  feed: { headline: 'No activity yet', description: "When there's new activity, it will show up in your feed.", cta: 'Create a post' },
  notifications: { headline: 'No notifications', description: "You're all caught up! New notifications will appear here.", cta: 'Notification settings' },
  favorites: { headline: 'No favorites yet', description: 'Items you favorite will be saved here for easy access.', cta: 'Explore items' },
  upload: { headline: 'No files uploaded', description: 'Drag and drop files here, or click to browse your device.', cta: 'Upload files' },
}

export default function DemoPage() {
  const [activeType, setActiveType] = useState<ComponentType>('inbox')
  const [activeTheme, setActiveTheme] = useState<'minimal' | 'playful' | 'corporate'>('minimal')
  const [showCta, setShowCta] = useState(true)

  const state = emptyStates[activeType]

  const themeClasses = {
    minimal: {
      headline: 'text-lg font-semibold',
      desc: 'text-sm text-stone-400',
      cta: 'bg-[#1c1917] text-white px-5 py-2 rounded-lg text-sm font-medium',
    },
    playful: {
      headline: 'text-xl font-bold',
      desc: 'text-sm text-stone-400',
      cta: 'bg-indigo-500 text-white px-7 py-3 rounded-full text-sm font-semibold',
    },
    corporate: {
      headline: 'text-base font-semibold text-stone-400',
      desc: 'text-xs text-stone-500',
      cta: 'border border-blue-500 text-blue-400 px-4 py-2 rounded-md text-xs font-medium',
    },
  }

  const tc = themeClasses[activeTheme]

  return (
    <PageLayout
      title="Interactive Demo"
      description="Explore all component types and themes. See exactly what hollows generates for each one."
      breadcrumbs={[{ name: 'Playground' }, { name: 'Interactive Demo' }]}
      prev={{ name: 'SSR', href: '/ssr' }}
      next={{ name: 'Try It', href: '/try-it' }}
    >
      {/* Component type grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-8">
        {(Object.keys(emptyStates) as ComponentType[]).map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`
              px-3 py-2 rounded-lg text-sm transition-all capitalize
              ${activeType === type
                ? 'bg-[rgba(217,119,6,0.08)] text-[#d97706] font-medium'
                : 'text-[#78716c] hover:text-stone-900 hover:bg-[#f5f5f4] border border-[#e7e5e4]'
              }
            `}
          >
            {type.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Theme selector + CTA toggle */}
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#a8a29e]">Theme:</span>
          {(['minimal', 'playful', 'corporate'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTheme(t)}
              className={`
                px-3 py-1.5 rounded-lg text-sm capitalize transition-all
                ${activeTheme === t
                  ? 'bg-[#e7e5e4] text-[#1c1917]'
                  : 'text-[#a8a29e] hover:text-stone-500'
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#a8a29e]">CTA Button:</span>
          <button
            onClick={() => setShowCta(!showCta)}
            className={`
              relative inline-flex h-5 w-9 items-center rounded-full transition-colors
              ${showCta ? 'bg-[#d97706]' : 'bg-[#d6d3d1]'}
            `}
            role="switch"
            aria-checked={showCta}
          >
            <span
              className={`
                inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform shadow-sm
                ${showCta ? 'translate-x-[18px]' : 'translate-x-[3px]'}
              `}
            />
          </button>
        </div>
      </div>

      {/* Preview */}
      <div className="rounded-xl border border-[#e7e5e4] bg-[#f5f5f4] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e7e5e4] bg-[#f5f5f4]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-60" />
          </div>
          <span className="text-xs text-[#a8a29e] font-mono ml-2">
            &lt;Hollow name="{activeType}" /&gt;
          </span>
        </div>
        <div className="flex items-center justify-center min-h-[400px] p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeType}-${activeTheme}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center text-center max-w-[340px]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-6 text-[#d97706]"
              >
                {illustrations[activeType]}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-[#1c1917] mb-2 ${tc.headline}`}
              >
                {state.headline}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`mb-6 ${tc.desc}`}
              >
                {state.description}
              </motion.p>
              {showCta && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`transition-colors ${tc.cta}`}
                >
                  {state.cta}
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Generated JSON preview */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-[#1c1917] mb-4">Generated Output</h3>
        <div className="rounded-xl border border-[#e7e5e4] bg-[#f5f5f4] p-4 overflow-x-auto">
          <pre className="text-sm font-mono text-[#44403c] leading-relaxed">
            {JSON.stringify({
              name: activeType,
              version: '1.0.0',
              classification: activeType,
              illustration: `${activeType}-empty`,
              copy: state,
              style: {
                maxWidth: 400,
                illustrationSize: 180,
                colorScheme: 'inherit',
                fontFamily: 'inherit',
                borderRadius: '12px',
              },
            }, null, 2)}
          </pre>
        </div>
      </div>
    </PageLayout>
  )
}
