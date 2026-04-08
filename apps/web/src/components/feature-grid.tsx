'use client'

import { motion } from 'framer-motion'
import { Zap, Image, Type, Palette, RefreshCw, Layers } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '~5KB runtime',
    description: 'The React component is tiny. Empty state data is static JSON.',
  },
  {
    icon: Image,
    title: '12+ built-in illustrations',
    description: 'Minimal line-art SVGs that adapt to your color scheme.',
  },
  {
    icon: Type,
    title: 'Contextual copy',
    description: 'Headlines, descriptions, and CTAs generated from your component structure.',
  },
  {
    icon: Palette,
    title: 'Theme-aware',
    description: 'Inherits your app\'s colors, fonts, and border radii automatically.',
  },
  {
    icon: RefreshCw,
    title: 'Incremental builds',
    description: 'Only regenerates changed components. Fast builds every time.',
  },
  {
    icon: Layers,
    title: 'Framework agnostic',
    description: 'React, Vue, Svelte, Angular adapters. Use it anywhere.',
  },
]

export function FeatureGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-16">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="p-5 rounded-xl border border-[#e7e5e4] bg-[#ffffff] hover:border-[#d6d3d1] transition-colors group"
        >
          <feature.icon
            size={20}
            className="text-[#d97706] mb-3 group-hover:scale-110 transition-transform"
          />
          <h3 className="text-sm font-semibold text-[#1c1917] mb-1.5">{feature.title}</h3>
          <p className="text-sm text-[#78716c] leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
