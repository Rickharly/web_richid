import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://web-richid.vercel.app'),
  title: 'Rich Identity - Design Your Identity, Transform Your Life',
  description: 'Upgrade your Identity OS to match your ambitions. The Identity Code book + AI Coach + Assessment + 30-Day Challenge for high-performance entrepreneurs.',
  keywords: 'identity transformation, personal development, entrepreneur coaching, identity design, success mindset',
  authors: [{ name: 'Rich Identity' }],
  openGraph: {
    title: 'Rich Identity - Design Your Identity, Transform Your Life',
    description: 'Upgrade your Identity OS to match your ambitions. The Identity Code book + AI Coach + Assessment + 30-Day Challenge.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rich Identity - Design Your Identity, Transform Your Life',
    description: 'Upgrade your Identity OS to match your ambitions. The Identity Code book + AI Coach + Assessment + 30-Day Challenge.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

