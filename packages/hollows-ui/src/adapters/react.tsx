import React, { useEffect, useState } from 'react'
import type { HollowDescriptor, Theme } from '../core/types'
import { getTheme } from '../themes/index'

interface HollowProps {
  name: string
  loading?: boolean
  empty?: boolean
  onAction?: () => void
  showCta?: boolean
  theme?: 'minimal' | 'playful' | 'corporate' | string
  customIllustration?: React.ReactNode
  customCopy?: {
    headline?: string
    description?: string
    cta?: string
  }
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

function getDescriptor(name: string): HollowDescriptor | undefined {
  if (typeof globalThis !== 'undefined' && (globalThis as any).__HOLLOWS_REGISTRY__) {
    return (globalThis as any).__HOLLOWS_REGISTRY__[name]
  }
  return undefined
}

function LoadingSkeleton({ theme }: { theme: Theme }) {
  return (
    <div
      style={{
        ...containerStyle(theme),
        animation: 'hollows-pulse 1.5s ease-in-out infinite',
      }}
      role="status"
      aria-label="Loading"
    >
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'var(--hollows-skeleton, #e5e7eb)',
          marginBottom: theme.illustration.marginBottom,
          opacity: 0.5,
        }}
      />
      <div
        style={{
          width: 180,
          height: 20,
          borderRadius: 4,
          background: 'var(--hollows-skeleton, #e5e7eb)',
          marginBottom: '12px',
          opacity: 0.5,
        }}
      />
      <div
        style={{
          width: 240,
          height: 14,
          borderRadius: 4,
          background: 'var(--hollows-skeleton, #e5e7eb)',
          opacity: 0.3,
        }}
      />
    </div>
  )
}

function EmptyState({
  descriptor,
  theme,
  onAction,
  showCta = true,
  customIllustration,
  customCopy,
}: {
  descriptor: HollowDescriptor
  theme: Theme
  onAction?: () => void
  showCta?: boolean
  customIllustration?: React.ReactNode
  customCopy?: HollowProps['customCopy']
}) {
  const copy = {
    headline: customCopy?.headline ?? descriptor.copy.headline,
    description: customCopy?.description ?? descriptor.copy.description,
    cta: customCopy?.cta ?? descriptor.copy.cta,
  }

  return (
    <div
      style={containerStyle(theme)}
      role="status"
      aria-label={copy.headline}
      data-hollows={descriptor.name}
      data-hollows-classification={descriptor.classification}
    >
      <style>{`
        @keyframes hollows-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hollows-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        [data-hollows] .hollows-illustration {
          animation: hollows-fade-in 0.4s ease-out;
        }
        [data-hollows] .hollows-headline {
          animation: hollows-fade-in 0.4s ease-out 0.1s both;
        }
        [data-hollows] .hollows-description {
          animation: hollows-fade-in 0.4s ease-out 0.2s both;
        }
        [data-hollows] .hollows-cta {
          animation: hollows-fade-in 0.4s ease-out 0.3s both;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        [data-hollows] .hollows-cta:hover {
          opacity: 0.85;
        }
      `}</style>

      <div
        className="hollows-illustration"
        style={{
          opacity: theme.illustration.opacity,
          marginBottom: theme.illustration.marginBottom,
          width: descriptor.style.illustrationSize,
          height: descriptor.style.illustrationSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {customIllustration ?? (
          <IllustrationRenderer
            illustrationId={descriptor.illustration}
            size={descriptor.style.illustrationSize}
          />
        )}
      </div>

      <h3
        className="hollows-headline"
        style={{
          fontSize: theme.headline.fontSize,
          fontWeight: theme.headline.fontWeight,
          color: theme.headline.color,
          marginBottom: theme.headline.marginBottom,
          margin: `0 0 ${theme.headline.marginBottom} 0`,
          lineHeight: 1.3,
        }}
      >
        {copy.headline}
      </h3>

      <p
        className="hollows-description"
        style={{
          fontSize: theme.description.fontSize,
          color: theme.description.color,
          marginBottom: theme.description.marginBottom,
          maxWidth: theme.description.maxWidth,
          margin: `0 auto ${theme.description.marginBottom} auto`,
          lineHeight: 1.5,
        }}
      >
        {copy.description}
      </p>

      {showCta && copy.cta && (
        <button
          className="hollows-cta"
          onClick={onAction}
          style={{
            fontSize: theme.cta.fontSize,
            fontWeight: theme.cta.fontWeight,
            padding: theme.cta.padding,
            borderRadius: theme.cta.borderRadius,
            background: theme.cta.background,
            color: theme.cta.color,
            border: theme.cta.border,
            fontFamily: 'inherit',
          }}
          type="button"
        >
          {copy.cta}
        </button>
      )}
    </div>
  )
}

function IllustrationRenderer({ illustrationId, size }: { illustrationId: string; size: number }) {
  return (
    <div
      style={{ width: size, height: size, color: 'var(--hollows-accent, currentColor)' }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: getInlineSvg(illustrationId, size),
      }}
    />
  )
}

function getInlineSvg(id: string, size: number): string {
  const svgs: Record<string, string> = {
    'inbox-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="60" width="120" height="90" rx="8"/><polyline points="40,68 100,115 160,68"/><line x1="75" y1="42" x2="125" y2="42" stroke-dasharray="4 4" opacity="0.4"/><line x1="80" y1="30" x2="120" y2="30" stroke-dasharray="4 4" opacity="0.25"/><line x1="85" y1="18" x2="115" y2="18" stroke-dasharray="4 4" opacity="0.15"/></svg>`,
    'search-no-results': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="90" cy="85" r="40"/><line x1="118" y1="113" x2="155" y2="150"/><line x1="78" y1="73" x2="102" y2="97"/><line x1="102" y1="73" x2="78" y2="97"/></svg>`,
    'list-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="55" y1="65" x2="145" y2="65" opacity="0.8"/><line x1="55" y1="90" x2="140" y2="90" opacity="0.5"/><line x1="55" y1="115" x2="130" y2="115" opacity="0.3"/><line x1="55" y1="140" x2="115" y2="140" opacity="0.15"/><circle cx="40" cy="65" r="3" fill="currentColor" opacity="0.8"/><circle cx="40" cy="90" r="3" fill="currentColor" opacity="0.5"/><circle cx="40" cy="115" r="3" fill="currentColor" opacity="0.3"/><circle cx="40" cy="140" r="3" fill="currentColor" opacity="0.15"/></svg>`,
    'table-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="40" width="140" height="120" rx="6"/><line x1="30" y1="70" x2="170" y2="70"/><line x1="30" y1="100" x2="170" y2="100" stroke-dasharray="4 4" opacity="0.4"/><line x1="30" y1="130" x2="170" y2="130" stroke-dasharray="4 4" opacity="0.3"/><line x1="80" y1="40" x2="80" y2="160" stroke-dasharray="4 4" opacity="0.3"/><line x1="130" y1="40" x2="130" y2="160" stroke-dasharray="4 4" opacity="0.3"/></svg>`,
    'chart-no-data': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="40" y1="160" x2="170" y2="160"/><line x1="40" y1="40" x2="40" y2="160"/><rect x="60" y="150" width="20" height="10" rx="2" fill="currentColor" opacity="0.15"/><rect x="95" y="145" width="20" height="15" rx="2" fill="currentColor" opacity="0.2"/><rect x="130" y="148" width="20" height="12" rx="2" fill="currentColor" opacity="0.12"/><line x1="50" y1="80" x2="165" y2="80" stroke-dasharray="4 4" opacity="0.2"/><line x1="50" y1="120" x2="165" y2="120" stroke-dasharray="4 4" opacity="0.2"/></svg>`,
    'feed-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M50,80 Q50,60 70,60 L130,60 Q150,60 150,80 L150,95 Q150,105 140,105 L85,105 L65,120 L70,105 L60,105 Q50,105 50,95Z" opacity="0.5"/><path d="M70,120 Q70,110 80,110 L140,110 Q160,110 160,120 L160,135 Q160,145 150,145 L120,145 L135,160 L110,145 L80,145 Q70,145 70,135Z" opacity="0.3"/></svg>`,
    'cart-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M60,50 L75,50 L90,130 L150,130 Q160,130 158,120 L152,80 Q150,70 140,70 L80,70"/><circle cx="95" cy="150" r="8"/><circle cx="145" cy="150" r="8"/><line x1="100" y1="95" x2="140" y2="95" stroke-dasharray="4 4" opacity="0.3"/><line x1="105" y1="110" x2="145" y2="110" stroke-dasharray="4 4" opacity="0.2"/></svg>`,
    'favorites-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M100,160 L55,115 Q30,88 55,62 Q80,36 100,65 Q120,36 145,62 Q170,88 145,115Z" stroke-dasharray="6 4"/></svg>`,
    'notifications-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M80,140 Q80,155 100,155 Q120,155 120,140"/><path d="M65,140 L65,95 Q65,60 100,55 Q135,60 135,95 L135,140Z"/><line x1="100" y1="45" x2="100" y2="55"/><text x="150" y="65" font-size="18" fill="currentColor" font-family="sans-serif" opacity="0.4">z</text><text x="160" y="50" font-size="14" fill="currentColor" font-family="sans-serif" opacity="0.3">z</text><text x="167" y="38" font-size="10" fill="currentColor" font-family="sans-serif" opacity="0.2">z</text></svg>`,
    'upload-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M55,120 Q30,120 30,95 Q30,70 55,65 Q60,40 85,35 Q115,30 130,50 Q155,45 170,65 Q185,85 165,105 Q165,120 145,120"/><line x1="100" y1="95" x2="100" y2="155"/><polyline points="80,115 100,95 120,115"/></svg>`,
    'comments-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M40,70 Q40,50 60,50 L140,50 Q160,50 160,70 L160,115 Q160,135 140,135 L90,135 L65,158 L70,135 L60,135 Q40,135 40,115Z"/><circle cx="80" cy="92" r="4" fill="currentColor" opacity="0.4"/><circle cx="100" cy="92" r="4" fill="currentColor" opacity="0.4"/><circle cx="120" cy="92" r="4" fill="currentColor" opacity="0.4"/></svg>`,
    'error-state': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M100,35 L175,155 Q180,163 173,170 L27,170 Q20,163 25,155Z"/><line x1="100" y1="80" x2="100" y2="125"/><circle cx="100" cy="145" r="4" fill="currentColor"/></svg>`,
    'generic-empty': `<svg viewBox="0 0 200 200" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="40" width="120" height="120" rx="12" stroke-dasharray="8 4"/><circle cx="100" cy="100" r="6" fill="currentColor" opacity="0.3"/></svg>`,
  }

  return svgs[id] ?? svgs['generic-empty']
}

function containerStyle(theme: Theme): React.CSSProperties {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.container.padding,
    textAlign: theme.container.textAlign as 'center',
    background: theme.container.background,
    minHeight: 200,
  }
}

export function Hollow({
  name,
  loading = false,
  empty = false,
  onAction,
  showCta = true,
  theme: themeName,
  customIllustration,
  customCopy,
  className,
  style,
  children,
}: HollowProps) {
  const [descriptor, setDescriptor] = useState<HollowDescriptor | undefined>(
    () => getDescriptor(name)
  )

  const theme = getTheme(themeName ?? 'minimal')

  useEffect(() => {
    const desc = getDescriptor(name)
    if (desc) setDescriptor(desc)
  }, [name])

  if (loading) {
    return (
      <div className={className} style={style} data-hollows-loading={name}>
        <LoadingSkeleton theme={theme} />
      </div>
    )
  }

  if (empty && descriptor) {
    return (
      <div className={className} style={style}>
        <EmptyState
          descriptor={descriptor}
          theme={theme}
          onAction={onAction}
          showCta={showCta}
          customIllustration={customIllustration}
          customCopy={customCopy}
        />
      </div>
    )
  }

  if (empty && !descriptor) {
    return (
      <div className={className} style={style}>
        <div
          style={containerStyle(theme)}
          role="status"
          data-hollows={name}
        >
          <p style={{
            fontSize: theme.description.fontSize,
            color: theme.description.color,
          }}>
            {customCopy?.headline ?? 'Nothing here yet'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={className} style={style} data-hollows-wrapper={name}>
      {children}
    </div>
  )
}

export type { HollowProps }
export default Hollow
