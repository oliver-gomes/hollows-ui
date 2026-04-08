'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = 'tsx', filename, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')

  return (
    <div className="group relative rounded-xl border border-border bg-code-bg overflow-hidden my-6 animate-[fade-in_0.4s_ease-out]">
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface/50">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] opacity-60" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] opacity-60" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] opacity-60" />
            </div>
            {filename && (
              <span className="text-xs text-text-muted font-mono">{filename}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {language && (
              <span className="text-xs text-text-dim font-mono uppercase">{language}</span>
            )}
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-surface transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Copy code"
            >
              {copied ? (
                <Check size={14} className="text-success" />
              ) : (
                <Copy size={14} className="text-text-muted" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed !m-0 !border-0 !rounded-none !bg-transparent">
          <code className="font-mono">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {showLineNumbers && (
                  <span className="inline-block w-8 text-right mr-4 text-text-dim select-none text-xs">
                    {i + 1}
                  </span>
                )}
                <span>{highlightSyntax(line, language)}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}

function highlightSyntax(line: string, language: string): React.ReactNode {
  // Simple syntax highlighting without external deps
  const parts: React.ReactNode[] = []
  let remaining = line

  const patterns: [RegExp, string][] = [
    // Comments
    [/^(\/\/.*)$/, 'text-text-dim italic'],
    // Strings
    [/(["'`])((?:(?!\1).)*)\1/, 'text-success'],
    // Keywords
    [/\b(import|export|from|const|let|var|function|return|if|else|async|await|type|interface|default|new|class|extends)\b/, 'text-[#7c3aed]'],
    // JSX tags
    [/<\/?([A-Z][a-zA-Z]*)/g, 'text-[#dc2626]'],
    // Numbers
    [/\b(\d+)\b/, 'text-[#b45309]'],
    // Brackets
    [/([{}()[\]])/g, 'text-text-muted'],
  ]

  // Simple approach: just return the line with basic highlighting
  if (line.trimStart().startsWith('//') || line.trimStart().startsWith('#')) {
    return <span className="text-text-dim italic">{line}</span>
  }

  // Match strings
  const stringified = line.replace(
    /(["'`])(?:(?!\1).)*\1/g,
    (match) => `\x00s${match}\x00`
  )

  // Match keywords
  const keyworded = stringified.replace(
    /\b(import|export|from|const|let|var|function|return|if|else|async|await|type|interface|default|new|class|extends|true|false|null|undefined)\b/g,
    '\x00k$1\x00'
  )

  // Parse tokens
  const tokens = keyworded.split('\x00').filter(Boolean)

  return tokens.map((token, i) => {
    if (token.startsWith('s')) {
      return <span key={i} className="text-[#b45309]">{token.slice(1)}</span>
    }
    if (token.startsWith('k')) {
      return <span key={i} className="text-[#7c3aed]">{token.slice(1)}</span>
    }
    return <span key={i}>{token}</span>
  })
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent">
      {children}
    </code>
  )
}

export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <div
      className="inline-flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-2.5 font-mono text-sm cursor-pointer hover:border-accent/30 transition-colors group"
      onClick={async () => {
        await navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
    >
      <span className="text-accent">$</span>
      <span className="text-text">{command}</span>
      {copied ? (
        <Check size={14} className="text-success" />
      ) : (
        <Copy size={14} className="text-text-dim group-hover:text-text-muted transition-colors" />
      )}
    </div>
  )
}
