# hollows-ui

**Auto-generated empty states for your UI.**

Hollows scans your real UI, detects data-dependent sections, and generates contextual empty states — with illustrations, copy, and CTAs — that stay in sync with your actual layout.

No manual placeholder design. No hand-written copy. Wrap your component in `<Hollow>` and ship polished empty states instantly.

## Quick Start

### 1. Install

```bash
npm install hollows-ui
```

### 2. Wrap your component

```tsx
import { Hollow } from 'hollows-ui/react'

<Hollow name="user-inbox" empty={data?.length === 0}>
  {data && <InboxList items={data} />}
</Hollow>
```

### 3. Run the CLI

```bash
npx hollows-ui build
```

### 4. Import the registry

```tsx
// app/layout.tsx or main entry
import './hollows/registry'
```

That's it. Every `<Hollow>` auto-resolves its empty state by name.

## Features

- **~5KB runtime** — The React component is tiny. Empty state data is static JSON.
- **12+ built-in illustrations** — Minimal line-art SVGs that adapt to your color scheme.
- **Contextual copy** — Headlines, descriptions, and CTAs generated from your component structure.
- **Theme-aware** — Inherits your app's colors, fonts, and border radii automatically.
- **Incremental builds** — Only regenerates changed components.
- **Framework agnostic** — React, Vue, Svelte, Angular adapters.
- **SSR compatible** — No hydration mismatch.
- **Zero config** — Works out of the box with sensible defaults.

## `<Hollow>` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | required | Unique identifier for this empty state |
| `loading` | `boolean` | `false` | Show loading skeleton |
| `empty` | `boolean` | `false` | Show generated empty state |
| `onAction` | `() => void` | — | Callback when CTA is clicked |
| `theme` | `string` | `'minimal'` | Theme name |
| `customCopy` | `object` | — | Override generated copy |
| `customIllustration` | `ReactNode` | — | Override generated illustration |

## CLI Commands

```bash
npx hollows-ui build              # Generate all empty states
npx hollows-ui build --name inbox # Generate for specific component
npx hollows-ui watch              # Watch mode
npx hollows-ui preview            # Preview in browser
npx hollows-ui list               # List all <Hollow> components
npx hollows-ui init               # Initialize config file
```

## Configuration

Create `hollows.config.json` in your project root:

```json
{
  "devServer": "http://localhost:3000",
  "outDir": "src/hollows",
  "theme": "minimal",
  "copy": {
    "tone": "friendly",
    "language": "en"
  },
  "ignore": ["debug-*"]
}
```

## Themes

Three built-in themes: `minimal`, `playful`, `corporate`.

Create custom themes:

```tsx
import { createTheme } from 'hollows-ui'

const myTheme = createTheme({
  name: 'my-theme',
  cta: {
    borderRadius: '24px',
    background: '#6366f1',
  },
})
```

## Frameworks

- **React**: `import { Hollow } from 'hollows-ui/react'`
- **Vue**: `import { HollowVue } from 'hollows-ui/vue'`
- **Svelte**: `import { createHollowStore } from 'hollows-ui/svelte'`
- **Angular**: `import { getHollowTemplate } from 'hollows-ui/angular'`

## License

MIT
