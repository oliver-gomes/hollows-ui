"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Github, Package } from "lucide-react";

const navigation = [
  {
    title: "GETTING STARTED",
    items: [
      { name: "Overview", href: "/overview" },
      { name: "How it works", href: "/how-it-works" },
      { name: "Install", href: "/install" },
      { name: "Output", href: "/output" },
    ],
  },
  {
    title: "FRAMEWORKS",
    items: [
      { name: "React", href: "/features" },
      { name: "Vue", href: "/vue" },
      { name: "Svelte", href: "/svelte" },
      { name: "Angular", href: "/angular" },
    ],
  },
  {
    title: "CUSTOMIZATION",
    items: [
      { name: "Themes", href: "/themes" },
      { name: "Illustrations", href: "/illustrations" },
      { name: "Copy & Language", href: "/copy" },
    ],
  },
  {
    title: "ADVANCED",
    items: [
      { name: "Responsive", href: "/responsive" },
      { name: "Performance", href: "/performance" },
      { name: "SSR", href: "/ssr" },
    ],
  },
  {
    title: "PLAYGROUND",
    items: [
      { name: "Interactive Demo", href: "/demo" },
      { name: "Try It", href: "/try-it" },
    ],
  },
  {
    title: "META",
    items: [
      { name: "API Reference", href: "/api" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-surface border border-border"
        aria-label="Toggle navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-[280px] bg-background border-r border-border
          overflow-y-auto flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <Link
            href="/overview"
            className="flex items-center gap-1 group"
            onClick={() => setOpen(false)}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <rect
                width="100"
                height="100"
                rx="16"
                className="fill-[#d97706]"
              />
              <rect
                x="26"
                y="22"
                width="20"
                height="56"
                rx="3"
                fill="none"
                stroke="#0a0a0b"
                strokeWidth="2.5"
              />
              <rect
                x="26"
                y="22"
                width="20"
                height="56"
                rx="3"
                fill="#0a0a0b"
                opacity="0.1"
              />
              <rect
                x="54"
                y="22"
                width="20"
                height="56"
                rx="3"
                fill="none"
                stroke="#0a0a0b"
                strokeWidth="2.5"
              />
              <rect
                x="54"
                y="22"
                width="20"
                height="56"
                rx="3"
                fill="#0a0a0b"
                opacity="0.1"
              />
            </svg>
            <span className="font-serif text-5xl text-text-heading tracking-tight">
              hollows
            </span>
          </Link>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs bg-accent-dim text-accent px-2 py-0.5 rounded-full font-mono">
              v0.1.0
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] font-semibold tracking-[0.1em] text-text-dim mb-2 px-3">
                {section.title}
              </h4>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`
                          block px-3 py-1.5 rounded-lg text-sm transition-all duration-200
                          ${
                            isActive
                              ? "bg-accent-dim text-accent font-medium"
                              : "text-text-muted hover:text-text hover:bg-surface-hover"
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/your-name/hollows-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://npmjs.com/package/hollows-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
            >
              <Package size={16} />
              npm
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
