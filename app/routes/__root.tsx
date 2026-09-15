import { createRootRoute, HeadContent, Link, Outlet, Scripts } from '@tanstack/react-router'
import appCss from '../styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#12181f' },
      { title: 'Deutsch: Erste 100 Wörter' },
      {
        name: 'description',
        content: 'Learn the first 100 German words with flashcards, a browsable list, and a typing quiz.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/icons/icon-192.png' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#12181f] text-ink min-h-screen antialiased">
        <nav className="mx-auto flex max-w-lg gap-2 overflow-x-auto px-4 pt-4 [scrollbar-width:none]">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="flex-none whitespace-nowrap rounded-lg border border-line px-3 py-1.5 text-xs text-ink-dim transition-colors [&.active]:border-gold-dim [&.active]:bg-panel2 [&.active]:font-semibold [&.active]:text-gold"
          >
            Practice
          </Link>
          <Link
            to="/a1-words"
            className="flex-none whitespace-nowrap rounded-lg border border-line px-3 py-1.5 text-xs text-ink-dim transition-colors [&.active]:border-gold-dim [&.active]:bg-panel2 [&.active]:font-semibold [&.active]:text-gold"
          >
            A1 Words
          </Link>
          <Link
            to="/study-guide"
            className="flex-none whitespace-nowrap rounded-lg border border-line px-3 py-1.5 text-xs text-ink-dim transition-colors [&.active]:border-gold-dim [&.active]:bg-panel2 [&.active]:font-semibold [&.active]:text-gold"
          >
            Study Guide
          </Link>
        </nav>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
