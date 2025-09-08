import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mindful computer - mindful intelligence',
  description: 'mindful intelligence - a minimalist approach to computing',
  openGraph: {
    title: 'mindful computer - mindful intelligence',
    description: 'mindful intelligence - a minimalist approach to computing',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'mindful computer - mindful intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mindful computer - mindful intelligence',
    description: 'mindful intelligence - a minimalist approach to computing',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="fixed bottom-4 right-4 flex space-x-4">
          <a 
            href="/privacy" 
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            Privacy
          </a>
          <a 
            href="/terms" 
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            Terms
          </a>
        </footer>
      </body>
    </html>
  )
}
