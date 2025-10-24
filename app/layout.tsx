import type { Metadata } from 'next'
import { Overpass_Mono } from 'next/font/google'
import './globals.css'

const overpassMono = Overpass_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mindful computer - mindful intelligence',
  description: 'mindful intelligence - a minimalist approach to computing',
  openGraph: {
    title: 'mindful computer - mindful intelligence',
    description: 'mindful intelligence - a minimalist approach to computing',
    images: [
      {
        url: '/mindful-computer-opengraph.jpg',
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
    images: ['/mindful-computer-opengraph.jpg'],
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
      <body className={overpassMono.className}>
        {children}
      </body>
    </html>
  )
}
