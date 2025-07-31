import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/nav-bar'
import { WhatsappButton } from '@/components/WhatsappButton'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Verónica Córdoba - Cosmetología y Estética',
  description: 'Especialista en cosmetología y tratamientos estéticos faciales y corporales. Belleza y bienestar profesional.',
  keywords: ['cosmetología', 'estética', 'tratamientos faciales', 'tratamientos corporales', 'belleza', 'spa', 'relajación', 'Verónica Córdoba'],
  authors: [{ name: 'Verónica Córdoba' }],
  creator: 'Verónica Córdoba',
  publisher: 'Verónica Córdoba Spa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vero-cordoba-spa.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Verónica Córdoba - Cosmetología y Estética',
    description: 'Especialista en cosmetología y tratamientos estéticos faciales y corporales. Belleza y bienestar profesional.',
    url: 'https://vero-cordoba-spa.vercel.app',
    siteName: 'Verónica Córdoba Spa',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Verónica Córdoba Spa - Tratamientos de belleza y relajación',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verónica Córdoba - Cosmetología y Estética',
    description: 'Especialista en cosmetología y tratamientos estéticos faciales y corporales. Belleza y bienestar profesional.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
  },
  category: 'health',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  applicationName: 'Verónica Córdoba Spa',
  generator: 'Next.js',
  abstract: 'Tratamientos de cosmetología y estética profesional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="msapplication-TileColor" content="#8B4513" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vero Spa" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Firefox-specific background color fix */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @-moz-document url-prefix() {
              body, html {
                background-color: #fbf1dc !important;
              }
              .bg-brand-cream {
                background-color: #fbf1dc !important;
              }
              /* Firefox status indicator fixes */
              .bg-green-100 {
                background-color: #dcfce7 !important;
              }
              .text-green-700 {
                color: #15803d !important;
              }
              .bg-green-500 {
                background-color: #22c55e !important;
              }
              .bg-red-100 {
                background-color: #fee2e2 !important;
              }
              .text-red-700 {
                color: #b91c1c !important;
              }
              .bg-red-500 {
                background-color: #ef4444 !important;
              }
              .text-red-600 {
                color: #dc2626 !important;
              }
              /* Firefox form fixes */
              input, textarea, select {
                background-color: white !important;
                color: #4c355e !important;
                border-color: rgba(76, 53, 94, 0.2) !important;
              }
              /* Firefox accordion fixes */
              [data-radix-accordion-item] {
                background-color: white !important;
              }
              [data-radix-accordion-trigger] {
                background-color: rgba(251, 241, 220, 0.9) !important;
                color: #4c355e !important;
              }
              [data-radix-accordion-content] {
                background-color: white !important;
                color: #4c355e !important;
              }
              /* Firefox dark section overrides */
              .bg-slate-900, .bg-gray-900, .bg-black {
                background-color: white !important;
                color: #4c355e !important;
              }
            }
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-brand-cream flex flex-col">
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsappButton />
          <StructuredData />
        </div>
      </body>
    </html>
  )
}
