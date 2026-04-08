'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageLayout } from '@/components/page-layout'
import { Copy, Check, Sparkles } from 'lucide-react'

const presets: Record<string, string> = {
  inbox: `<div className="inbox">
  <h2>Messages</h2>
  <ul className="message-list">
    {messages.map(msg => (
      <li key={msg.id}>
        <span>{msg.from}</span>
        <p>{msg.subject}</p>
      </li>
    ))}
  </ul>
</div>`,
  'data-table': `<table className="data-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Created</th>
    </tr>
  </thead>
  <tbody>
    {rows.map(row => (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{row.status}</td>
        <td>{row.created}</td>
      </tr>
    ))}
  </tbody>
</table>`,
  'search-results': `<div className="search-results">
  <input type="search" placeholder="Search..." />
  <div className="results">
    {results.map(item => (
      <div key={item.id} className="result-card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</div>`,
  'shopping-cart': `<div className="cart">
  <h2>Your Cart</h2>
  {items.map(item => (
    <div key={item.id} className="cart-item">
      <img src={item.image} alt={item.name} />
      <span>{item.name}</span>
      <span>{item.price}</span>
    </div>
  ))}
  <div className="total">
    <span>Total: {total}</span>
  </div>
</div>`,
  'comment-section': `<div className="comments">
  <h3>Comments ({comments.length})</h3>
  {comments.map(comment => (
    <div key={comment.id} className="comment">
      <img src={comment.avatar} />
      <div>
        <strong>{comment.author}</strong>
        <p>{comment.text}</p>
      </div>
    </div>
  ))}
</div>`,
}

const classificationMap: Record<string, {
  classification: string
  illustration: string
  headline: string
  description: string
  cta: string
}> = {
  inbox: {
    classification: 'inbox',
    illustration: 'inbox-empty',
    headline: 'No messages yet',
    description: "When you receive messages, they'll appear right here.",
    cta: 'Compose a message',
  },
  'data-table': {
    classification: 'table',
    illustration: 'table-empty',
    headline: 'No data yet',
    description: 'When data is available, it will be displayed in this table.',
    cta: 'Add data',
  },
  'search-results': {
    classification: 'search',
    illustration: 'search-no-results',
    headline: 'No results found',
    description: "Try adjusting your search or filters to find what you're looking for.",
    cta: 'Clear filters',
  },
  'shopping-cart': {
    classification: 'cart',
    illustration: 'cart-empty',
    headline: 'Your cart is empty',
    description: "Looks like you haven't added anything yet.",
    cta: 'Browse products',
  },
  'comment-section': {
    classification: 'comments',
    illustration: 'comments-empty',
    headline: 'No comments yet',
    description: 'Be the first to share your thoughts!',
    cta: 'Write a comment',
  },
}

export default function TryItPage() {
  const [code, setCode] = useState(presets.inbox)
  const [activePreset, setActivePreset] = useState('inbox')
  const [generated, setGenerated] = useState<typeof classificationMap[string] | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [theme, setTheme] = useState<'minimal' | 'playful' | 'corporate'>('minimal')

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate classification
    setTimeout(() => {
      const result = classificationMap[activePreset] ?? {
        classification: 'generic',
        illustration: 'generic-empty',
        headline: 'Nothing here yet',
        description: "This section is empty. Content will appear here once it's available.",
        cta: 'Get started',
      }
      setGenerated(result)
      setIsGenerating(false)
    }, 800)
  }

  const handlePreset = (key: string) => {
    setActivePreset(key)
    setCode(presets[key])
    setGenerated(null)
  }

  const handleCopyJSON = async () => {
    if (!generated) return
    const json = JSON.stringify({
      name: activePreset,
      version: '1.0.0',
      hash: Math.random().toString(36).slice(2, 10),
      classification: generated.classification,
      illustration: generated.illustration,
      copy: {
        headline: generated.headline,
        description: generated.description,
        cta: generated.cta,
      },
      style: { maxWidth: 400, illustrationSize: 180, colorScheme: 'inherit', fontFamily: 'inherit', borderRadius: '12px' },
    }, null, 2)
    await navigator.clipboard.writeText(json)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <PageLayout
      title="Try It"
      description="Paste JSX or pick a preset. See what hollows generates — no installation required."
      breadcrumbs={[{ name: 'Playground' }, { name: 'Try It' }]}
      prev={{ name: 'Interactive Demo', href: '/demo' }}
      next={{ name: 'API Reference', href: '/api' }}
    >
      {/* Presets */}
      <div className="flex flex-wrap gap-2 my-6">
        {Object.keys(presets).map((key) => (
          <button
            key={key}
            onClick={() => handlePreset(key)}
            className={`
              px-3 py-1.5 rounded-lg text-sm capitalize transition-all
              ${activePreset === key
                ? 'bg-[rgba(217,119,6,0.08)] text-[#d97706] font-medium'
                : 'text-[#78716c] hover:text-stone-900 border border-[#e7e5e4] hover:bg-[#f5f5f4]'
              }
            `}
          >
            {key.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 my-8">
        {/* Input */}
        <div>
          <h3 className="text-sm font-semibold text-[#1c1917] mb-3">Your Component JSX</h3>
          <div className="rounded-xl border border-[#e7e5e4] bg-[#f5f5f4] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#e7e5e4]">
              <span className="text-xs text-[#a8a29e] font-mono">JSX</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[300px] bg-transparent text-sm font-mono text-[#44403c] p-4 resize-none focus:outline-none leading-relaxed"
              spellCheck={false}
            />
          </div>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#d97706] text-white font-semibold text-sm hover:bg-[#b45309] transition-colors disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                >
                  <Sparkles size={16} />
                </motion.div>
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={16} />
                Generate Empty State
              </>
            )}
          </button>
        </div>

        {/* Output */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-[#1c1917]">Generated Result</h3>
            {generated && (
              <div className="flex items-center gap-2">
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as typeof theme)}
                  className="bg-[#e7e5e4] text-xs text-[#78716c] px-2 py-1 rounded border border-[#e7e5e4]"
                >
                  <option value="minimal">Minimal</option>
                  <option value="playful">Playful</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>
            )}
          </div>

          <div className="rounded-xl border border-[#e7e5e4] bg-[#f5f5f4] min-h-[300px] flex items-center justify-center p-8">
            {!generated && !isGenerating && (
              <div className="text-center text-[#a8a29e]">
                <p className="text-sm">Click "Generate" to see the result</p>
              </div>
            )}

            {isGenerating && (
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-center text-[#a8a29e]"
              >
                <p className="text-sm">Analyzing component structure...</p>
              </motion.div>
            )}

            {generated && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center max-w-[300px]"
              >
                <div className="mb-4 text-xs bg-[rgba(217,119,6,0.08)] text-[#d97706] px-2 py-1 rounded-full">
                  {generated.classification}
                </div>
                <div className="mb-5 opacity-50 text-[#d97706]">
                  <svg viewBox="0 0 200 200" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="40" y="40" width="120" height="120" rx="12" strokeDasharray="8 4"/>
                    <circle cx="100" cy="100" r="6" fill="currentColor" opacity="0.3"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1c1917] mb-2">{generated.headline}</h3>
                <p className="text-sm text-[#78716c] mb-5">{generated.description}</p>
                <button className="bg-[#1c1917] text-white px-5 py-2 rounded-lg text-sm font-medium">
                  {generated.cta}
                </button>
              </motion.div>
            )}
          </div>

          {/* JSON output */}
          {generated && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#a8a29e] font-mono">{activePreset}.hollows.json</span>
                <button
                  onClick={handleCopyJSON}
                  className="flex items-center gap-1 text-xs text-[#a8a29e] hover:text-stone-500 transition-colors"
                >
                  {copied ? <Check size={12} className="text-[#d97706]" /> : <Copy size={12} />}
                  {copied ? 'Copied!' : 'Copy JSON'}
                </button>
              </div>
              <div className="rounded-lg border border-[#e7e5e4] bg-[#f5f5f4] p-3 overflow-x-auto">
                <pre className="text-xs font-mono text-[#78716c] leading-relaxed">
                  {JSON.stringify({
                    name: activePreset,
                    classification: generated.classification,
                    illustration: generated.illustration,
                    copy: { headline: generated.headline, description: generated.description, cta: generated.cta },
                  }, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}
