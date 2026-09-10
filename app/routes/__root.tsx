import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
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
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
