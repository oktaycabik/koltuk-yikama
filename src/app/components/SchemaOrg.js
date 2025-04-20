export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Ev & Ofis Koltuk Yıkama',
          image: '/hero-bg.png',
          description: 'Kocaeli ve İstanbul bölgesinde profesyonel koltuk yıkama hizmeti. Araç, ofis, nubuk koltuk, yatak ve yastık yıkama. Otel temizlik hizmetleri.',
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Kocaeli ve İstanbul',
            addressCountry: 'TR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.776676,
            longitude: 29.430457
          },
          url: 'https://evofiskoltukyikama.com',
          telephone: '+905533079024',
          priceRange: '₺₺',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            opens: '08:00',
            closes: '20:00'
          },
          sameAs: [
            'https://wa.me/905533079024'
          ],
          areaServed: [
            {
              '@type': 'City',
              name: 'Darıca'
            },
            {
              '@type': 'City',
              name: 'Gebze'
            },
            {
              '@type': 'City',
              name: 'Çayırova'
            },
            {
              '@type': 'City',
              name: 'Dilovası'
            },
            {
              '@type': 'City',
              name: 'Şekerpınar'
            },
            {
              '@type': 'City',
              name: 'Tavşanlı'
            },
            {
              '@type': 'City',
              name: 'Kışladüzü'
            },
            {
              '@type': 'City',
              name: 'Körfez'
            },
            {
              '@type': 'City',
              name: 'Derince'
            },
            {
              '@type': 'City',
              name: 'Tuzla'
            },
            {
              '@type': 'City',
              name: 'Şifa'
            },
            {
              '@type': 'City',
              name: 'Pendik'
            },
            {
              '@type': 'City',
              name: 'Kartal'
            },
            {
              '@type': 'City',
              name: 'Maltepe'
            },
            {
              '@type': 'City',
              name: 'Ataşehir'
            },
            {
              '@type': 'City',
              name: 'Ümraniye'
            },
            {
              '@type': 'City',
              name: 'Sancaktepe'
            },
            {
              '@type': 'City',
              name: 'Sultanbeyli'
            }
          ],
          makesOffer: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ev Koltuk Yıkama'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Araç Koltuk Yıkama'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ofis Koltuk Yıkama'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Yatak ve Yastık Yıkama'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Otel Temizlik Hizmetleri'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Özel Koltuk Temizliği'
              }
            }
          ]
        })
      }}
    />
  );
} 