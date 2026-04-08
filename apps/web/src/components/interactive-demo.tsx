'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type DemoType = 'inbox' | 'search' | 'table' | 'cart'
type ThemeType = 'minimal' | 'playful' | 'corporate'

const demoData: Record<DemoType, {
  label: string
  realUI: React.ReactNode
  emptyState: {
    illustration: React.ReactNode
    headline: string
    description: string
    cta: string
  }
}> = {
  inbox: {
    label: 'Inbox',
    realUI: <InboxRealUI />,
    emptyState: {
      illustration: <InboxIllustration />,
      headline: 'No messages yet',
      description: 'When you receive messages, they\'ll appear right here.',
      cta: 'Compose a message',
    },
  },
  search: {
    label: 'Search',
    realUI: <SearchRealUI />,
    emptyState: {
      illustration: <SearchIllustration />,
      headline: 'No results found',
      description: 'Try adjusting your search or filters to find what you\'re looking for.',
      cta: 'Clear filters',
    },
  },
  table: {
    label: 'Data Table',
    realUI: <TableRealUI />,
    emptyState: {
      illustration: <TableIllustration />,
      headline: 'No data yet',
      description: 'When data is available, it will be displayed in this table.',
      cta: 'Add data',
    },
  },
  cart: {
    label: 'Cart',
    realUI: <CartRealUI />,
    emptyState: {
      illustration: <CartIllustration />,
      headline: 'Your cart is empty',
      description: 'Looks like you haven\'t added anything yet. Start browsing to find something you love.',
      cta: 'Browse products',
    },
  },
}

const themeStyles: Record<ThemeType, {
  headlineClass: string
  descClass: string
  ctaClass: string
}> = {
  minimal: {
    headlineClass: 'text-lg font-semibold text-[#1c1917]',
    descClass: 'text-sm text-[#78716c]',
    ctaClass: 'bg-[#1c1917] text-white text-sm px-5 py-2 rounded-lg font-medium hover:bg-[#292524]',
  },
  playful: {
    headlineClass: 'text-xl font-bold text-[#1c1917]',
    descClass: 'text-sm text-[#78716c]',
    ctaClass: 'bg-indigo-500 text-white text-sm px-7 py-3 rounded-full font-semibold hover:bg-indigo-400',
  },
  corporate: {
    headlineClass: 'text-base font-semibold text-[#44403c]',
    descClass: 'text-xs text-[#78716c]',
    ctaClass: 'border border-blue-500 text-blue-400 text-xs px-4 py-2 rounded-md font-medium hover:bg-blue-500/10',
  },
}

export function InteractiveDemo() {
  const [activeType, setActiveType] = useState<DemoType>('inbox')
  const [showEmpty, setShowEmpty] = useState(false)
  const [activeTheme, setActiveTheme] = useState<ThemeType>('minimal')
  const [showCta, setShowCta] = useState(true)

  const demo = demoData[activeType]
  const theme = themeStyles[activeTheme]

  return (
    <div className="mt-12 mb-16">
      {/* Type selector */}
      <div className="flex items-center gap-2 mb-4">
        {(Object.keys(demoData) as DemoType[]).map((type) => (
          <button
            key={type}
            onClick={() => { setActiveType(type); setShowEmpty(false) }}
            className={`
              px-3 py-1.5 rounded-lg text-sm transition-all
              ${activeType === type
                ? 'bg-[rgba(217, 119, 6, 0.08)] text-[#d97706] font-medium'
                : 'text-[#78716c] hover:text-[#44403c] hover:bg-[#fafaf9]'
              }
            `}
          >
            {demoData[type].label}
          </button>
        ))}
      </div>

      {/* Theme selector + CTA toggle */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a8a29e] mr-1">Theme:</span>
          {(['minimal', 'playful', 'corporate'] as ThemeType[]).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTheme(t)}
              className={`
                px-2 py-1 rounded text-xs transition-all capitalize
                ${activeTheme === t
                  ? 'bg-[#e7e5e4] text-[#44403c]'
                  : 'text-[#a8a29e] hover:text-[#78716c]'
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a8a29e]">CTA Button:</span>
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

      {/* Demo panels */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Real UI Panel */}
        <div className="rounded-xl border border-[#e7e5e4] overflow-hidden bg-[#fafaf9]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e7e5e4] bg-[#f5f5f4]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-60" />
            </div>
            <span className="text-xs text-[#a8a29e] font-mono ml-2">localhost:3000</span>
            <span className="text-xs text-[#d97706] ml-auto font-mono">Real UI</span>
          </div>
          <div className="p-6 min-h-[320px]">
            {demo.realUI}
          </div>
        </div>

        {/* Empty State Panel */}
        <div className="rounded-xl border border-[#e7e5e4] overflow-hidden bg-[#fafaf9]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e7e5e4] bg-[#f5f5f4]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-60" />
            </div>
            <span className="text-xs text-[#a8a29e] font-mono ml-2">localhost:3000</span>
            <span className="text-xs text-[#16a34a] ml-auto font-mono">Generated Empty State</span>
          </div>
          <div className="p-6 min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeType}-${activeTheme}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center max-w-[300px]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-6 opacity-60"
                >
                  {demo.emptyState.illustration}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={theme.headlineClass}
                >
                  {demo.emptyState.headline}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`mt-2 mb-6 ${theme.descClass}`}
                >
                  {demo.emptyState.description}
                </motion.p>
                {showCta && (
                  <motion.button
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`transition-colors ${theme.ctaClass}`}
                  >
                    {demo.emptyState.cta}
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Mock Real UI Components ---

function InboxRealUI() {
  const messages = [
    { from: 'Sarah Chen', subject: 'Q1 Design Review', time: '2m ago', unread: true },
    { from: 'Alex Rivera', subject: 'API Integration Update', time: '15m ago', unread: true },
    { from: 'Jordan Kim', subject: 'Sprint Retro Notes', time: '1h ago', unread: false },
    { from: 'Taylor Singh', subject: 'New feature proposal', time: '3h ago', unread: false },
  ]

  return (
    <div className="space-y-1">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-[#e7e5e4] cursor-pointer ${msg.unread ? 'bg-[#f5f5f4]' : ''}`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d97706] to-[#b45309] flex items-center justify-center text-xs font-semibold text-white shrink-0">
            {msg.from[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className={`text-sm ${msg.unread ? 'font-semibold text-gray-900' : 'text-[#44403c]'}`}>
                {msg.from}
              </span>
              <span className="text-xs text-[#a8a29e]">{msg.time}</span>
            </div>
            <p className="text-sm text-[#78716c] truncate">{msg.subject}</p>
          </div>
          {msg.unread && <div className="w-2 h-2 rounded-full bg-[#d97706] mt-2 shrink-0" />}
        </div>
      ))}
    </div>
  )
}

function SearchRealUI() {
  const results = [
    { title: 'Getting Started Guide', category: 'Docs', snippet: 'Learn how to set up your project...' },
    { title: 'API Reference', category: 'Docs', snippet: 'Complete API documentation for all...' },
    { title: 'React Component', category: 'Components', snippet: 'The main Hollow React component...' },
  ]

  return (
    <div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#e7e5e4] mb-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span className="text-sm text-[#78716c]">hollows configuration...</span>
      </div>
      <div className="space-y-3">
        {results.map((r, i) => (
          <div key={i} className="p-3 rounded-lg border border-[#e7e5e4] hover:border-[#d6d3d1] cursor-pointer transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-gray-900">{r.title}</span>
              <span className="text-xs bg-[#e7e5e4] text-[#78716c] px-2 py-0.5 rounded">{r.category}</span>
            </div>
            <p className="text-xs text-[#a8a29e]">{r.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TableRealUI() {
  const rows = [
    { name: 'auth-service', status: 'Active', requests: '12.4k', latency: '45ms' },
    { name: 'payment-api', status: 'Active', requests: '8.2k', latency: '120ms' },
    { name: 'user-service', status: 'Degraded', requests: '5.1k', latency: '890ms' },
  ]

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-[#e7e5e4]">
          <th className="text-left py-2 text-xs text-[#a8a29e] font-medium">Service</th>
          <th className="text-left py-2 text-xs text-[#a8a29e] font-medium">Status</th>
          <th className="text-right py-2 text-xs text-[#a8a29e] font-medium">Requests</th>
          <th className="text-right py-2 text-xs text-[#a8a29e] font-medium">Latency</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-[#f5f5f4]">
            <td className="py-2.5 text-gray-900 font-medium">{row.name}</td>
            <td className="py-2.5">
              <span className={`inline-flex items-center gap-1 text-xs ${row.status === 'Active' ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Active' ? 'bg-[#16a34a]' : 'bg-[#dc2626]'}`} />
                {row.status}
              </span>
            </td>
            <td className="py-2.5 text-right text-[#78716c]">{row.requests}</td>
            <td className="py-2.5 text-right text-[#78716c]">{row.latency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function CartRealUI() {
  const items = [
    { name: 'Wireless Headphones', price: '$79.99', qty: 1 },
    { name: 'USB-C Hub', price: '$34.99', qty: 2 },
    { name: 'Desk Lamp', price: '$49.99', qty: 1 },
  ]

  return (
    <div>
      <div className="space-y-3 mb-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#f5f5f4]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#e7e5e4] flex items-center justify-center text-lg">
                {['🎧', '🔌', '💡'][i]}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-[#a8a29e]">Qty: {item.qty}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-[#d97706]">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-[#e7e5e4]">
        <span className="text-sm text-[#78716c]">Total</span>
        <span className="text-lg font-semibold text-gray-900">$199.96</span>
      </div>
    </div>
  )
}

// --- Illustration Components ---

function InboxIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d97706]">
      <rect x="40" y="60" width="120" height="90" rx="8"/>
      <polyline points="40,68 100,115 160,68"/>
      <line x1="75" y1="42" x2="125" y2="42" strokeDasharray="4 4" opacity="0.4"/>
      <line x1="80" y1="30" x2="120" y2="30" strokeDasharray="4 4" opacity="0.25"/>
      <line x1="85" y1="18" x2="115" y2="18" strokeDasharray="4 4" opacity="0.15"/>
    </svg>
  )
}

function SearchIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d97706]">
      <circle cx="90" cy="85" r="40"/>
      <line x1="118" y1="113" x2="155" y2="150"/>
      <line x1="78" y1="73" x2="102" y2="97"/>
      <line x1="102" y1="73" x2="78" y2="97"/>
    </svg>
  )
}

function TableIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d97706]">
      <rect x="30" y="40" width="140" height="120" rx="6"/>
      <line x1="30" y1="70" x2="170" y2="70"/>
      <line x1="30" y1="100" x2="170" y2="100" strokeDasharray="4 4" opacity="0.4"/>
      <line x1="30" y1="130" x2="170" y2="130" strokeDasharray="4 4" opacity="0.3"/>
      <line x1="80" y1="40" x2="80" y2="160" strokeDasharray="4 4" opacity="0.3"/>
      <line x1="130" y1="40" x2="130" y2="160" strokeDasharray="4 4" opacity="0.3"/>
    </svg>
  )
}

function CartIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d97706]">
      <path d="M60,50 L75,50 L90,130 L150,130 Q160,130 158,120 L152,80 Q150,70 140,70 L80,70"/>
      <circle cx="95" cy="150" r="8"/>
      <circle cx="145" cy="150" r="8"/>
      <line x1="100" y1="95" x2="140" y2="95" strokeDasharray="4 4" opacity="0.3"/>
      <line x1="105" y1="110" x2="145" y2="110" strokeDasharray="4 4" opacity="0.2"/>
    </svg>
  )
}
