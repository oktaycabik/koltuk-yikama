import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import SchemaOrg from './components/SchemaOrg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ev & Ofis Koltuk Yıkama | Darıca, Gebze, Tuzla ve Çevresi',
  description: 'Kocaeli ve İstanbul bölgesinde profesyonel koltuk yıkama hizmeti. Araç, ofis, nubuk koltuk, yatak ve yastık yıkama. Otel temizlik hizmetleri. Ücretsiz keşif için hemen arayın!',
  keywords: 'koltuk yıkama, araç koltuk yıkama, ofis koltuk yıkama, yatak yıkama, yastık yıkama, nubuk koltuk temizleme, otel koltuk yıkama, otel yatak yıkama, darıca koltuk yıkama, gebze koltuk yıkama, çayırova koltuk yıkama, dilovası koltuk yıkama, şekerpınar koltuk yıkama, tavşanlı koltuk yıkama, kışladüzü koltuk yıkama, körfez koltuk yıkama, derince koltuk yıkama, tuzla koltuk yıkama, şifa koltuk yıkama, pendik koltuk yıkama, kartal koltuk yıkama, maltepe koltuk yıkama, ataşehir koltuk yıkama, ümraniye koltuk yıkama, sancaktepe koltuk yıkama, sultanbeyli koltuk yıkama',
  authors: [{ name: 'Kocaeli Koltuk Yıkama' }],
  creator: 'Kocaeli Koltuk Yıkama',
  publisher: 'Kocaeli Koltuk Yıkama',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://evofiskoltukyikama.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ev & Ofis Koltuk Yıkama | Darıca, Gebze, Tuzla ve Çevresi',
    description: 'Kocaeli ve İstanbul bölgesinde profesyonel koltuk yıkama hizmeti. Araç, ofis, nubuk koltuk, yatak ve yastık yıkama. Otel temizlik hizmetleri.',
    url: 'https://evofiskoltukyikama.com',
    siteName: 'Ev & Ofis Koltuk Yıkama',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Ev & Ofis Koltuk Yıkama Hizmetleri',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ev & Ofis Koltuk Yıkama | Darıca, Gebze, Tuzla ve Çevresi',
    description: 'Kocaeli ve İstanbul bölgesinde profesyonel koltuk yıkama hizmeti. Araç, ofis, nubuk koltuk, yatak ve yastık yıkama. Otel temizlik hizmetleri.',
    images: ['/hero-bg.png'],
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
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <SchemaOrg />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
