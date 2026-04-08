'use client'

import { PageLayout } from '@/components/page-layout'
import { CodeBlock } from '@/components/code-block'

export default function AngularPage() {
  return (
    <PageLayout
      title="Angular"
      description="The Angular adapter provides the HollowComponent directive and HollowService for integrating auto-generated empty states into Angular applications with full dependency injection support."
      breadcrumbs={[{ name: 'Frameworks' }, { name: 'Angular' }]}
      prev={{ name: 'Svelte', href: '/svelte' }}
      next={{ name: 'Themes', href: '/themes' }}
      tableOfContents={[
        { id: 'installation', title: 'Installation', level: 2 },
        { id: 'module-setup', title: 'Module setup', level: 2 },
        { id: 'basic-usage', title: 'Basic usage', level: 2 },
        { id: 'inputs-outputs', title: 'Inputs & outputs', level: 2 },
        { id: 'template-customization', title: 'Template customization', level: 2 },
        { id: 'hollow-service', title: 'HollowService', level: 2 },
        { id: 'standalone', title: 'Standalone components', level: 2 },
        { id: 'signals', title: 'Signals', level: 2 },
        { id: 'reactive-forms', title: 'Reactive forms', level: 2 },
      ]}
    >
      {/* Installation */}
      <h2 id="installation" className="font-serif text-2xl text-[#1c1917] mt-12 mb-4">
        Installation
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Import from the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">hollows-ui/angular</code> subpath.
        The adapter supports Angular 16+ and works with both NgModules and standalone components.
      </p>

      <CodeBlock
        language="bash"
        filename="Terminal"
        code="npm install --save-dev hollows-ui"
      />

      <p className="text-[#78716c] leading-relaxed mt-6 mb-4">
        Import the generated registry in your main entry:
      </p>

      <CodeBlock
        language="typescript"
        filename="src/main.ts"
        code={`import './hollows/registry'
import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { appConfig } from './app/app.config'

bootstrapApplication(AppComponent, appConfig)`}
      />

      {/* Module setup */}
      <h2 id="module-setup" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Module setup
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        If you use NgModules, import <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">HollowsModule</code> in
        your app module or feature module:
      </p>

      <CodeBlock
        language="typescript"
        filename="app.module.ts"
        showLineNumbers
        code={`import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HollowsModule } from 'hollows-ui/angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HollowsModule,  // Provides <hollow> component globally
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}`}
      />

      {/* Basic usage */}
      <h2 id="basic-usage" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Basic usage
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Use the <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">&lt;hollow&gt;</code> component
        in your templates. It renders the auto-generated empty state when{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">[empty]</code> is true
        and projects your content when false.
      </p>

      <CodeBlock
        language="typescript"
        filename="inbox.component.ts"
        showLineNumbers
        code={`import { Component, Input, Output, EventEmitter } from '@angular/core'

interface Message {
  id: string
  subject: string
  preview: string
}

@Component({
  selector: 'app-inbox',
  template: \`
    <div class="inbox-container">
      <h2>Inbox</h2>
      <hollow
        name="user-inbox"
        [empty]="!loading && messages.length === 0"
        [loading]="loading"
        (action)="onCompose()"
      >
        <app-message-card
          *ngFor="let msg of messages; trackBy: trackById"
          [message]="msg"
        />
      </hollow>
    </div>
  \`,
})
export class InboxComponent {
  @Input() messages: Message[] = []
  @Input() loading = false

  onCompose() {
    this.router.navigate(['/compose'])
  }

  trackById(index: number, item: Message) {
    return item.id
  }
}`}
      />

      {/* Inputs & outputs */}
      <h2 id="inputs-outputs" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Inputs & outputs
      </h2>

      <div className="border border-[#e7e5e4] rounded-xl overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e7e5e4] bg-[#f5f5f4]">
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Input</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Type</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Default</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="text-[#78716c]">
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">name</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Unique identifier matching the generated definition</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">empty</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">false</td>
              <td className="px-4 py-3">Whether to show the empty state</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">loading</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">false</td>
              <td className="px-4 py-3">Show skeleton loading state</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">category</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3 text-[#78716c]">auto</td>
              <td className="px-4 py-3">Override the auto-detected category</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">copy</td>
              <td className="px-4 py-3 font-mono text-xs">CopyOverride</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Override generated copy</td>
            </tr>
            <tr className="border-b border-[#e7e5e4]">
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">animate</td>
              <td className="px-4 py-3 font-mono text-xs">boolean</td>
              <td className="px-4 py-3 text-[#78716c]">true</td>
              <td className="px-4 py-3">Enable transition animations</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">cssClass</td>
              <td className="px-4 py-3 font-mono text-xs">string</td>
              <td className="px-4 py-3 text-[#78716c]">-</td>
              <td className="px-4 py-3">Additional CSS class for the host element</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-[#78716c] leading-relaxed mb-4">
        <strong className="text-[#1c1917]">Outputs:</strong>
      </p>

      <div className="border border-[#e7e5e4] rounded-xl overflow-hidden my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e7e5e4] bg-[#f5f5f4]">
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Output</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Type</th>
              <th className="text-left px-4 py-3 text-[#78716c] font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="text-[#78716c]">
            <tr>
              <td className="px-4 py-3 text-[#d97706] font-mono text-xs">action</td>
              <td className="px-4 py-3 font-mono text-xs">EventEmitter&lt;void&gt;</td>
              <td className="px-4 py-3">Emitted when the CTA button is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Template customization */}
      <h2 id="template-customization" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Template customization
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Use Angular's content projection and template references to customize the empty state.
        The <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">#hollowEmpty</code> template
        receives the generated state as a context variable.
      </p>

      <CodeBlock
        language="typescript"
        filename="Custom empty state template"
        showLineNumbers
        code={`@Component({
  selector: 'app-notifications',
  template: \`
    <hollow
      name="notifications"
      [empty]="notifications.length === 0"
    >
      <!-- Normal content via content projection -->
      <app-notification-item
        *ngFor="let n of notifications"
        [notification]="n"
      />

      <!-- Custom empty state template -->
      <ng-template #hollowEmpty let-state>
        <div class="flex flex-col items-center py-12">
          <app-bell-off-icon class="w-16 h-16 text-gray-400 mb-4" />
          <h3 class="text-lg font-semibold">{{ state.copy.headline }}</h3>
          <p class="text-gray-500 mt-2">{{ state.copy.description }}</p>
          <button
            class="mt-6 px-4 py-2 bg-amber-500 text-black rounded-lg"
            (click)="enableNotifications()"
          >
            {{ state.copy.cta.label }}
          </button>
        </div>
      </ng-template>

      <!-- Custom illustration template -->
      <ng-template #hollowIllustration>
        <app-lottie-player
          src="/animations/empty-bell.json"
          [width]="200"
          [height]="180"
        />
      </ng-template>
    </hollow>
  \`,
})
export class NotificationsComponent {
  notifications: Notification[] = []

  enableNotifications() {
    // Handle enabling notifications
  }
}`}
      />

      {/* HollowService */}
      <h2 id="hollow-service" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        HollowService
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        For programmatic access to hollow data, inject the{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">HollowService</code>.
        This is useful when you need the generated data outside of templates.
      </p>

      <CodeBlock
        language="typescript"
        filename="Using HollowService"
        showLineNumbers
        code={`import { Component, inject } from '@angular/core'
import { HollowService } from 'hollows-ui/angular'

@Component({
  selector: 'app-dashboard',
  template: \`
    <div *ngIf="emptyState" class="custom-empty">
      <h3>{{ emptyState.copy.headline }}</h3>
      <p>{{ emptyState.copy.description }}</p>
    </div>
  \`,
})
export class DashboardComponent {
  private hollowService = inject(HollowService)

  emptyState = this.hollowService.getState('analytics-panel')

  // Get all registered hollows
  allHollows = this.hollowService.getAll()

  // Check if a hollow is registered
  hasHollow = this.hollowService.has('analytics-panel')
}`}
      />

      {/* Standalone components */}
      <h2 id="standalone" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Standalone components
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        With Angular standalone components, import{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">HollowComponent</code> directly
        in your component's imports array.
      </p>

      <CodeBlock
        language="typescript"
        filename="Standalone component"
        showLineNumbers
        code={`import { Component, input, output } from '@angular/core'
import { HollowComponent } from 'hollows-ui/angular'

@Component({
  standalone: true,
  imports: [HollowComponent],
  selector: 'app-file-gallery',
  template: \`
    <hollow
      name="file-gallery"
      [empty]="files().length === 0"
      [loading]="isLoading()"
      (action)="onUpload.emit()"
    >
      <div class="grid grid-cols-3 gap-4">
        @for (file of files(); track file.id) {
          <app-file-card [file]="file" />
        }
      </div>
    </hollow>
  \`,
})
export class FileGalleryComponent {
  files = input<File[]>([])
  isLoading = input(false)
  onUpload = output<void>()
}`}
      />

      {/* Signals */}
      <h2 id="signals" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Signals
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        The hollow component works seamlessly with Angular signals. Use{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">input()</code> and{' '}
        <code className="bg-[#f5f5f4] border border-[#e7e5e4] px-1.5 py-0.5 rounded text-[#d97706] text-sm font-mono">computed()</code> for
        reactive empty state conditions.
      </p>

      <CodeBlock
        language="typescript"
        filename="Signal-based empty state"
        showLineNumbers
        code={`import { Component, computed, signal } from '@angular/core'
import { HollowComponent } from 'hollows-ui/angular'

@Component({
  standalone: true,
  imports: [HollowComponent],
  selector: 'app-search',
  template: \`
    <input
      [value]="query()"
      (input)="query.set($event.target.value)"
      placeholder="Search..."
    />
    <hollow
      name="search-results"
      [empty]="isSearchEmpty()"
      [copy]="{ headline: 'No results for \\\"' + query() + '\\\"' }"
      (action)="query.set('')"
    >
      @for (result of filteredResults(); track result.id) {
        <app-result-card [result]="result" />
      }
    </hollow>
  \`,
})
export class SearchComponent {
  query = signal('')
  results = signal<Result[]>([])

  filteredResults = computed(() =>
    this.results().filter((r) =>
      r.title.toLowerCase().includes(this.query().toLowerCase())
    )
  )

  isSearchEmpty = computed(() =>
    this.query().length > 0 && this.filteredResults().length === 0
  )
}`}
      />

      {/* Reactive forms */}
      <h2 id="reactive-forms" className="font-serif text-2xl text-[#1c1917] mt-16 mb-4">
        Reactive forms
      </h2>
      <p className="text-[#78716c] leading-relaxed mb-4">
        Combine hollows with Angular reactive forms to show empty states based on form values,
        such as search inputs or filter controls.
      </p>

      <CodeBlock
        language="typescript"
        filename="Reactive forms integration"
        showLineNumbers
        code={`import { Component, inject } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { HollowComponent } from 'hollows-ui/angular'
import { debounceTime, switchMap, map } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'
import { SearchService } from './search.service'

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, HollowComponent],
  selector: 'app-search-page',
  template: \`
    <input [formControl]="searchControl" placeholder="Search..." />
    <hollow
      name="search-results"
      [empty]="results().length === 0 && searchControl.value.length > 0"
      [loading]="isLoading()"
      (action)="searchControl.reset()"
    >
      @for (item of results(); track item.id) {
        <app-search-result [item]="item" />
      }
    </hollow>
  \`,
})
export class SearchPageComponent {
  private searchService = inject(SearchService)

  searchControl = new FormControl('')

  private searchResults$ = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    switchMap((query) => this.searchService.search(query ?? '')),
  )

  results = toSignal(this.searchResults$.pipe(map(r => r.items)), {
    initialValue: [],
  })

  isLoading = toSignal(this.searchResults$.pipe(map(r => r.loading)), {
    initialValue: false,
  })
}`}
      />
    </PageLayout>
  )
}
