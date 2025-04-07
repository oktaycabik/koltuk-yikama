import './globals.css'
import { Inter } from 'next/font/google'
import SchemaOrg from './components/SchemaOrg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kocaeli ve İstanbul Koltuk Yıkama | Darıca, Gebze, Tuzla ve Çevresi',
  description: 'Kocaeli (Darıca, Gebze, Çayırova, Dilovası, Körfez) ve İstanbul (Tuzla, Pendik, Kartal) bölgelerinde profesyonel koltuk yıkama hizmeti. Ev, ofis, araç, yatak ve sandalye temizliği. Aynı gün teslimat.',
  keywords: 'koltuk yıkama, Darıca koltuk yıkama, Gebze koltuk yıkama, Çayırova koltuk yıkama, Dilovası koltuk yıkama, Şekerpınar koltuk yıkama, Tavşanlı koltuk yıkama, Kışladüzü koltuk yıkama, Körfez koltuk yıkama, Derince koltuk yıkama, Tuzla koltuk yıkama, Şifa koltuk yıkama, Pendik koltuk yıkama, Kartal koltuk yıkama, Maltepe koltuk yıkama, Ataşehir koltuk yıkama, Ümraniye koltuk yıkama, Sancaktepe koltuk yıkama, Sultanbeyli koltuk yıkama, araç koltuk yıkama, ofis koltuk yıkama, yatak temizleme, sandalye yıkama, otel temizliği, deri koltuk temizleme, yastık yıkama, yerinde temizlik, koltuk leke çıkarma',
  authors: [{ name: 'Kocaeli Koltuk Yıkama' }],
  creator: 'Kocaeli Koltuk Yıkama',
  publisher: 'Kocaeli Koltuk Yıkama',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://koltukyikamadetay.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kocaeli ve İstanbul Koltuk Yıkama | Profesyonel Temizlik Hizmeti',
    description: 'Kocaeli ve İstanbul\'un tüm ilçelerinde (Darıca, Gebze, Çayırova, Dilovası, Tuzla, Pendik) ev, ofis, araç ve otel koltuk temizleme hizmeti. Aynı gün teslimat ve ücretsiz keşif.',
    url: 'https://koltukyikamadetay.com',
    siteName: 'Kocaeli Koltuk Yıkama',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://koltukyikamadetay.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kocaeli ve İstanbul Koltuk Yıkama Hizmetleri',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <SchemaOrg />
        {children}
      </body>
    </html>
  )
}
