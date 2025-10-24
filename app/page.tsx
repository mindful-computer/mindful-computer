"use client"

import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8" style={{ backgroundColor: '#FEF9F2' }}>
      {/* Top-left text block */}
      <div className="absolute top-8 left-8 max-w-md">
        <p className="text-sm leading-[160%]" style={{ color: '#7B7583' }}>
          MINDFUL INTELLIGENCE RESPECTS HUMAN AGENCY, UPHOLDS UNHINDERED
          INQUIRY, AND CREATES A WORLD WHERE THE MIND FLOURISHES.
        </p>
      </div>

      {/* Central logo */}
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/mindful-computer-logo.svg"
          alt="mindful computer - bonsai tree logo"
          width={400}
          height={400}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
          priority
        />
      </div>

      {/* Bottom navigation links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <a
          href="https://github.com/mindful-computer/feed-protocol-whitepaper/blob/main/whitepaper.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-normal transition-colors duration-200 hover:underline"
          style={{ color: '#7B7583' }}
          onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#322644'}
          onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#7B7583'}
        >
          WHITEPAPER
        </a>
        <a
          href="https://github.com/mindful-computer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-normal transition-colors duration-200 hover:underline"
          style={{ color: '#7B7583' }}
          onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#322644'}
          onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#7B7583'}
        >
          GITHUB
        </a>
        <a
          href="mailto:hello@mindful.computer"
          className="text-sm font-normal transition-colors duration-200 hover:underline"
          style={{ color: '#7B7583' }}
          onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#322644'}
          onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#7B7583'}
        >
          CONTACT
        </a>
      </div>
    </main>
  )
}
