import type { ComponentClassification, CopyTone } from './types'

interface CopySet {
  headline: string
  description: string
  cta: string
}

const COPY_TEMPLATES: Record<ComponentClassification, Record<CopyTone, CopySet>> = {
  inbox: {
    friendly: {
      headline: 'No messages yet',
      description: 'When you receive messages, they\'ll appear right here.',
      cta: 'Compose a message',
    },
    professional: {
      headline: 'No messages',
      description: 'Your inbox is currently empty. New messages will appear here.',
      cta: 'New message',
    },
    playful: {
      headline: 'Your inbox is taking a nap',
      description: 'No messages to show — but that could change any second!',
      cta: 'Send your first message',
    },
    minimal: {
      headline: 'No messages',
      description: 'Messages will appear here.',
      cta: 'Compose',
    },
  },
  search: {
    friendly: {
      headline: 'No results found',
      description: 'Try adjusting your search or filters to find what you\'re looking for.',
      cta: 'Clear filters',
    },
    professional: {
      headline: 'No matching results',
      description: 'No items match your current search criteria. Please refine your query.',
      cta: 'Reset search',
    },
    playful: {
      headline: 'We looked everywhere!',
      description: 'Couldn\'t find what you\'re searching for. Maybe try different keywords?',
      cta: 'Try again',
    },
    minimal: {
      headline: 'No results',
      description: 'Adjust your search and try again.',
      cta: 'Clear',
    },
  },
  list: {
    friendly: {
      headline: 'Nothing here yet',
      description: 'This list is empty. Add your first item to get started.',
      cta: 'Add item',
    },
    professional: {
      headline: 'No items',
      description: 'There are currently no items to display.',
      cta: 'Create new',
    },
    playful: {
      headline: 'This list is feeling lonely',
      description: 'Be the first to add something here!',
      cta: 'Add something',
    },
    minimal: {
      headline: 'Empty list',
      description: 'No items to display.',
      cta: 'Add',
    },
  },
  table: {
    friendly: {
      headline: 'No data yet',
      description: 'When data is available, it will be displayed in this table.',
      cta: 'Add data',
    },
    professional: {
      headline: 'No records found',
      description: 'There are currently no records matching your criteria.',
      cta: 'Create record',
    },
    playful: {
      headline: 'The table is set, but where\'s the data?',
      description: 'Add some records and watch this table come alive!',
      cta: 'Add your first record',
    },
    minimal: {
      headline: 'No data',
      description: 'No records to display.',
      cta: 'Add',
    },
  },
  chart: {
    friendly: {
      headline: 'No data to visualize',
      description: 'Once data is available, your chart will appear here.',
      cta: 'Import data',
    },
    professional: {
      headline: 'Insufficient data',
      description: 'There is not enough data to generate this visualization.',
      cta: 'Add data source',
    },
    playful: {
      headline: 'Charts need data to shine!',
      description: 'Feed this chart some numbers and watch the magic happen.',
      cta: 'Add some data',
    },
    minimal: {
      headline: 'No data',
      description: 'Chart will appear when data is available.',
      cta: 'Import',
    },
  },
  'card-grid': {
    friendly: {
      headline: 'No items to show',
      description: 'Items will appear here as cards once they\'re added.',
      cta: 'Create first item',
    },
    professional: {
      headline: 'No items available',
      description: 'No items are currently available for display.',
      cta: 'Add item',
    },
    playful: {
      headline: 'The gallery is empty!',
      description: 'Start adding items and watch this space fill up with awesome cards.',
      cta: 'Add your first one',
    },
    minimal: {
      headline: 'No items',
      description: 'Nothing to display yet.',
      cta: 'Add',
    },
  },
  feed: {
    friendly: {
      headline: 'No activity yet',
      description: 'When there\'s new activity, it will show up in your feed.',
      cta: 'Create a post',
    },
    professional: {
      headline: 'No recent activity',
      description: 'There is no activity to display at this time.',
      cta: 'Post update',
    },
    playful: {
      headline: 'It\'s quiet in here...',
      description: 'Be the first to break the silence and post something!',
      cta: 'Start the conversation',
    },
    minimal: {
      headline: 'No activity',
      description: 'Feed is empty.',
      cta: 'Post',
    },
  },
  cart: {
    friendly: {
      headline: 'Your cart is empty',
      description: 'Looks like you haven\'t added anything yet. Start browsing to find something you love.',
      cta: 'Browse products',
    },
    professional: {
      headline: 'Cart is empty',
      description: 'You have no items in your shopping cart.',
      cta: 'Continue shopping',
    },
    playful: {
      headline: 'Your cart is feeling light!',
      description: 'Time to fill it up with some goodies!',
      cta: 'Let\'s go shopping',
    },
    minimal: {
      headline: 'Empty cart',
      description: 'No items in cart.',
      cta: 'Shop',
    },
  },
  favorites: {
    friendly: {
      headline: 'No favorites yet',
      description: 'Items you favorite will be saved here for easy access.',
      cta: 'Explore items',
    },
    professional: {
      headline: 'No saved items',
      description: 'You have not bookmarked any items yet.',
      cta: 'Browse catalog',
    },
    playful: {
      headline: 'Nothing caught your eye yet?',
      description: 'Hit the heart icon on anything you love and it\'ll show up here!',
      cta: 'Find something to love',
    },
    minimal: {
      headline: 'No favorites',
      description: 'Saved items will appear here.',
      cta: 'Browse',
    },
  },
  notifications: {
    friendly: {
      headline: 'No notifications',
      description: 'You\'re all caught up! New notifications will appear here.',
      cta: 'Notification settings',
    },
    professional: {
      headline: 'No new notifications',
      description: 'There are no notifications at this time.',
      cta: 'Manage preferences',
    },
    playful: {
      headline: 'All quiet on the notification front!',
      description: 'Nothing new right now — enjoy the peace!',
      cta: 'Check settings',
    },
    minimal: {
      headline: 'No notifications',
      description: 'You\'re up to date.',
      cta: 'Settings',
    },
  },
  upload: {
    friendly: {
      headline: 'No files uploaded',
      description: 'Drag and drop files here, or click to browse your device.',
      cta: 'Upload files',
    },
    professional: {
      headline: 'No files',
      description: 'No files have been uploaded. Select files to begin.',
      cta: 'Select files',
    },
    playful: {
      headline: 'Drop it like it\'s hot!',
      description: 'Drag your files here or click to pick them from your device.',
      cta: 'Choose files',
    },
    minimal: {
      headline: 'No files',
      description: 'Upload files to get started.',
      cta: 'Upload',
    },
  },
  comments: {
    friendly: {
      headline: 'No comments yet',
      description: 'Be the first to share your thoughts!',
      cta: 'Write a comment',
    },
    professional: {
      headline: 'No comments',
      description: 'There are no comments on this item yet.',
      cta: 'Add comment',
    },
    playful: {
      headline: 'The comment section is wide open!',
      description: 'Don\'t be shy — drop your thoughts below!',
      cta: 'Be the first to comment',
    },
    minimal: {
      headline: 'No comments',
      description: 'Comments will appear here.',
      cta: 'Comment',
    },
  },
  gallery: {
    friendly: {
      headline: 'No media yet',
      description: 'Photos and videos you add will appear in this gallery.',
      cta: 'Add media',
    },
    professional: {
      headline: 'No media files',
      description: 'No media content has been added to this gallery.',
      cta: 'Upload media',
    },
    playful: {
      headline: 'This gallery is a blank canvas!',
      description: 'Upload some photos or videos to make it shine.',
      cta: 'Add your first photo',
    },
    minimal: {
      headline: 'No media',
      description: 'Gallery is empty.',
      cta: 'Upload',
    },
  },
  form: {
    friendly: {
      headline: 'Nothing to fill out',
      description: 'There are no form fields available at the moment.',
      cta: 'Refresh',
    },
    professional: {
      headline: 'Form unavailable',
      description: 'The form could not be loaded. Please try again.',
      cta: 'Retry',
    },
    playful: {
      headline: 'Oops, where did the form go?',
      description: 'Something went wrong loading this form. Give it another try!',
      cta: 'Try again',
    },
    minimal: {
      headline: 'Unavailable',
      description: 'Form could not be loaded.',
      cta: 'Retry',
    },
  },
  conversation: {
    friendly: {
      headline: 'No messages yet',
      description: 'Start the conversation by sending a message below.',
      cta: 'Send a message',
    },
    professional: {
      headline: 'No messages',
      description: 'This conversation has no messages yet.',
      cta: 'Start conversation',
    },
    playful: {
      headline: 'Crickets... 🦗',
      description: 'Break the ice and send the first message!',
      cta: 'Say hello',
    },
    minimal: {
      headline: 'No messages',
      description: 'Start typing to begin.',
      cta: 'Message',
    },
  },
  error: {
    friendly: {
      headline: 'Something went wrong',
      description: 'We hit a snag loading this content. Please try again.',
      cta: 'Try again',
    },
    professional: {
      headline: 'Error occurred',
      description: 'An unexpected error prevented this content from loading.',
      cta: 'Retry',
    },
    playful: {
      headline: 'Whoops! That didn\'t work',
      description: 'Something broke, but don\'t worry — let\'s give it another shot!',
      cta: 'Retry',
    },
    minimal: {
      headline: 'Error',
      description: 'Failed to load content.',
      cta: 'Retry',
    },
  },
  generic: {
    friendly: {
      headline: 'Nothing here yet',
      description: 'This section is empty. Content will appear here once it\'s available.',
      cta: 'Get started',
    },
    professional: {
      headline: 'No content available',
      description: 'There is no content to display at this time.',
      cta: 'Create',
    },
    playful: {
      headline: 'It\'s empty in here!',
      description: 'This spot is waiting for something awesome.',
      cta: 'Let\'s go!',
    },
    minimal: {
      headline: 'Empty',
      description: 'No content to show.',
      cta: 'Start',
    },
  },
}

export function generateCopy(
  classification: ComponentClassification,
  tone: CopyTone = 'friendly',
  contextHints?: { headings?: string[]; labels?: string[]; name?: string }
): CopySet {
  const template = COPY_TEMPLATES[classification]?.[tone]
    ?? COPY_TEMPLATES.generic[tone]
    ?? COPY_TEMPLATES.generic.friendly

  return { ...template }
}

export function getAllCopyTemplates() {
  return COPY_TEMPLATES
}
