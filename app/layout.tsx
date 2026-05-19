import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import '../styles/theme.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bhakti Kunj - A Township Beyond Living',
  description: 'A thoughtfully planned community that brings together nature, modern infrastructure and world-class amenities for a wholesome lifestyle.',
  generator: 'v0.app',
  icons: {
    icon: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-sans antialiased" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
