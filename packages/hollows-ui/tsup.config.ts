import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: {
      'index': 'src/index.ts',
      'adapters/react': 'src/adapters/react.tsx',
      'adapters/vue': 'src/adapters/vue.ts',
      'adapters/svelte': 'src/adapters/svelte.ts',
      'cli/index': 'src/cli/index.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom', 'vue', 'svelte', 'playwright'],
  },
])
