#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import ora from 'ora'
import * as fs from 'fs'
import * as path from 'path'
import type { HollowConfig } from '../core/types'
import { scanForHollows, formatScanResults } from './scan'
import { analyzeComponents, analyzeWithBrowser } from './analyze'
import { generateAll } from './generate'
import { watchMode } from './watch'

const VERSION = '0.1.0'

function loadConfig(rootDir: string): HollowConfig {
  const configPath = path.join(rootDir, 'hollows.config.json')

  const defaultConfig: HollowConfig = {
    devServer: 'http://localhost:3000',
    outDir: 'src/hollows',
    theme: 'minimal',
    illustrations: 'built-in',
    customIllustrationsDir: null,
    copy: { tone: 'friendly', language: 'en' },
    classifierOverrides: {},
    ignore: [],
    breakpoints: { mobile: 375, tablet: 768, desktop: 1280 },
  }

  if (fs.existsSync(configPath)) {
    try {
      const userConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
      return { ...defaultConfig, ...userConfig }
    } catch {
      console.warn(chalk.yellow('Warning: Could not parse hollows.config.json, using defaults'))
    }
  }

  return defaultConfig
}

const program = new Command()

program
  .name('hollows-ui')
  .description(chalk.bold('Hollows') + ' — Auto-generated empty states for your UI')
  .version(VERSION)

program
  .command('build')
  .description('Generate empty states for all <Hollow> components')
  .option('-n, --name <name>', 'Generate for a specific component')
  .option('--browser', 'Use Playwright for DOM analysis')
  .option('--verbose', 'Show detailed output')
  .action(async (options) => {
    const rootDir = process.cwd()
    const config = loadConfig(rootDir)

    console.log('')
    console.log(chalk.bold.hex('#f0a030')('  ◇ hollows'))
    console.log(chalk.dim('  Auto-generating empty states...\n'))

    const scanSpinner = ora('Scanning for <Hollow> components...').start()
    let components = await scanForHollows(rootDir, config.ignore)

    if (options.name) {
      components = components.filter(c => c.name === options.name)
      if (components.length === 0) {
        scanSpinner.fail(`Component "${options.name}" not found`)
        process.exit(1)
      }
    }

    scanSpinner.succeed(`Found ${components.length} component${components.length !== 1 ? 's' : ''}`)

    const analyzeSpinner = ora('Analyzing components...').start()
    const analyzed = options.browser
      ? await analyzeWithBrowser(components, config)
      : await analyzeComponents(components, config)
    analyzeSpinner.succeed('Components analyzed')

    const generateSpinner = ora('Generating empty states...').start()
    const result = generateAll(analyzed, config, rootDir)
    generateSpinner.succeed(
      `Generated ${result.generated} empty state${result.generated !== 1 ? 's' : ''}` +
      (result.skipped > 0 ? chalk.dim(` (${result.skipped} unchanged)`) : '')
    )

    if (options.verbose && result.files.length > 0) {
      console.log('')
      console.log(chalk.dim('  Files written:'))
      for (const file of result.files) {
        console.log(chalk.dim(`    ${path.relative(rootDir, file)}`))
      }
    }

    console.log('')
    console.log(chalk.green('  ✓') + ' Done! Import the registry in your app entry:')
    console.log(chalk.cyan(`    import './${config.outDir}/registry'`))
    console.log('')
  })

program
  .command('watch')
  .description('Watch for changes and regenerate empty states')
  .action(async () => {
    const rootDir = process.cwd()
    const config = loadConfig(rootDir)

    console.log('')
    console.log(chalk.bold.hex('#f0a030')('  ◇ hollows'))
    console.log(chalk.dim('  Watching for changes...\n'))

    const { close } = await watchMode(rootDir, config, (result) => {
      const timestamp = new Date().toLocaleTimeString()
      if (result.generated > 0) {
        console.log(
          chalk.dim(`  [${timestamp}]`) +
          chalk.green(` ✓ Generated ${result.generated} empty state${result.generated !== 1 ? 's' : ''}`)
        )
      }
    })

    process.on('SIGINT', () => {
      close()
      console.log(chalk.dim('\n  Stopped watching.'))
      process.exit(0)
    })
  })

program
  .command('list')
  .description('List all detected <Hollow> components')
  .action(async () => {
    const rootDir = process.cwd()
    const config = loadConfig(rootDir)

    const components = await scanForHollows(rootDir, config.ignore)

    console.log('')
    console.log(chalk.bold.hex('#f0a030')('  ◇ hollows'))
    console.log('')
    console.log(formatScanResults(components))
    console.log('')
  })

program
  .command('preview')
  .description('Preview all generated empty states in browser')
  .action(async () => {
    const rootDir = process.cwd()
    const config = loadConfig(rootDir)
    const outDir = path.resolve(rootDir, config.outDir)

    if (!fs.existsSync(outDir)) {
      console.log(chalk.red('No generated empty states found. Run `hollows-ui build` first.'))
      process.exit(1)
    }

    const files = fs.readdirSync(outDir).filter(f => f.endsWith('.hollows.json'))

    if (files.length === 0) {
      console.log(chalk.yellow('No empty states generated yet.'))
      process.exit(0)
    }

    const descriptors = files.map(f => {
      const content = fs.readFileSync(path.join(outDir, f), 'utf-8')
      return JSON.parse(content)
    })

    const html = generatePreviewHTML(descriptors)
    const previewPath = path.join(outDir, '_preview.html')
    fs.writeFileSync(previewPath, html, 'utf-8')

    console.log('')
    console.log(chalk.bold.hex('#f0a030')('  ◇ hollows preview'))
    console.log('')
    console.log(`  Preview generated at: ${chalk.cyan(previewPath)}`)
    console.log(`  Open in your browser to see all ${files.length} empty states.`)
    console.log('')

    try {
      const { exec } = await import('child_process')
      exec(`start "" "${previewPath}"`)
    } catch {
      // Silently fail if can't open browser
    }
  })

program
  .command('init')
  .description('Initialize hollows config file')
  .action(() => {
    const rootDir = process.cwd()
    const configPath = path.join(rootDir, 'hollows.config.json')

    if (fs.existsSync(configPath)) {
      console.log(chalk.yellow('hollows.config.json already exists.'))
      return
    }

    const defaultConfig = {
      devServer: 'http://localhost:3000',
      outDir: 'src/hollows',
      theme: 'minimal',
      illustrations: 'built-in',
      customIllustrationsDir: null,
      copy: { tone: 'friendly', language: 'en' },
      classifierOverrides: {},
      ignore: [],
      breakpoints: { mobile: 375, tablet: 768, desktop: 1280 },
    }

    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2), 'utf-8')

    console.log('')
    console.log(chalk.green('  ✓') + ' Created hollows.config.json')
    console.log('')
  })

program
  .command('export-illustrations')
  .description('Export built-in illustrations as standalone SVGs')
  .option('-o, --out <dir>', 'Output directory', './public/empty-states')
  .action((options) => {
    console.log('')
    console.log(chalk.bold.hex('#f0a030')('  ◇ hollows'))
    console.log(chalk.dim('  Exporting illustrations...\n'))

    const outDir = path.resolve(process.cwd(), options.out)
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true })
    }

    const { getAllIllustrations } = require('../core/illustrator')
    const illustrations = getAllIllustrations()

    for (const illust of illustrations) {
      if (illust.svg) {
        fs.writeFileSync(path.join(outDir, `${illust.id}.svg`), illust.svg, 'utf-8')
      }
    }

    console.log(chalk.green('  ✓') + ` Exported ${illustrations.length} illustrations to ${options.out}`)
    console.log('')
  })

function generatePreviewHTML(descriptors: any[]): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hollows Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0a0a0b;
      color: #e8e8ec;
      padding: 48px;
    }
    h1 {
      font-size: 28px;
      margin-bottom: 8px;
      color: #f0a030;
    }
    .subtitle { color: #888; margin-bottom: 48px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 24px;
    }
    .card {
      background: #141416;
      border: 1px solid #1e1e22;
      border-radius: 12px;
      padding: 32px;
      text-align: center;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 1px solid #1e1e22;
    }
    .card-name { font-weight: 600; font-size: 14px; }
    .card-type {
      font-size: 12px;
      color: #f0a030;
      background: rgba(240, 160, 48, 0.1);
      padding: 2px 8px;
      border-radius: 4px;
    }
    .card h3 { font-size: 18px; margin-bottom: 8px; }
    .card p { font-size: 14px; color: #888; margin-bottom: 20px; }
    .card button {
      font-size: 14px;
      padding: 8px 20px;
      border-radius: 8px;
      background: #f0a030;
      color: #0a0a0b;
      border: none;
      cursor: pointer;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <h1>◇ hollows preview</h1>
  <p class="subtitle">${descriptors.length} empty states generated</p>
  <div class="grid">
    ${descriptors.map(d => `
    <div class="card">
      <div class="card-header">
        <span class="card-name">${d.name}</span>
        <span class="card-type">${d.classification}</span>
      </div>
      <h3>${d.copy.headline}</h3>
      <p>${d.copy.description}</p>
      <button>${d.copy.cta}</button>
    </div>`).join('')}
  </div>
</body>
</html>`
}

program.parse()
