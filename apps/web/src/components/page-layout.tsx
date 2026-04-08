'use client'

import Link from 'next/link'
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react'

interface PageLayoutProps {
  title: string
  description?: string
  breadcrumbs?: { name: string; href?: string }[]
  prev?: { name: string; href: string }
  next?: { name: string; href: string }
  editPath?: string
  tableOfContents?: { id: string; title: string; level: number }[]
  children: React.ReactNode
}

export function PageLayout({
  title,
  description,
  breadcrumbs,
  prev,
  next,
  editPath,
  tableOfContents,
  children,
}: PageLayoutProps) {
  return (
    <div className="flex max-w-[1200px] mx-auto">
      {/* Main content */}
      <div className="flex-1 min-w-0 px-6 lg:px-12 py-12">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-sm text-text-muted mb-6">
            <Link href="/overview" className="hover:text-text transition-colors">
              Docs
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-text-dim" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-text transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-text">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Page title */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl text-text-heading mb-3">{title}</h1>
          {description && (
            <p className="text-lg text-text-muted leading-relaxed">{description}</p>
          )}
          <div className="mt-4 h-px bg-gradient-to-r from-accent/50 to-transparent max-w-[120px]" />
        </div>

        {/* Content */}
        <div className="prose">
          {children}
        </div>

        {/* Prev/Next navigation */}
        {(prev || next) && (
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
            {prev ? (
              <Link
                href={prev.href}
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group"
              >
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-text-dim">Previous</div>
                  <div className="font-medium">{prev.name}</div>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={next.href}
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors group text-right"
              >
                <div>
                  <div className="text-xs text-text-dim">Next</div>
                  <div className="font-medium">{next.name}</div>
                </div>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        )}

        {/* Edit link */}
        {editPath && (
          <div className="mt-8">
            <a
              href={`https://github.com/your-name/hollows-ui/edit/main/${editPath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-text-muted transition-colors"
            >
              Edit this page on GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>

      {/* Table of contents */}
      {tableOfContents && tableOfContents.length > 0 && (
        <div className="hidden xl:block w-[200px] shrink-0">
          <div className="sticky top-12 py-12 pr-4">
            <h4 className="text-xs font-semibold tracking-[0.1em] text-text-dim mb-3 uppercase">
              On this page
            </h4>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    block text-sm transition-colors py-0.5
                    ${item.level > 2 ? 'pl-3' : ''}
                    text-text-dim hover:text-text-muted
                  `}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
