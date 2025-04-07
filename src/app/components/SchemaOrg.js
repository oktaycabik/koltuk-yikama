export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Kocaeli ve İstanbul Koltuk Yıkama",
          "image": "https://koltukyikamadetay.com/images/logo.png",
          "url": "https://koltukyikamadetay.com",
          "telephone": "+905551234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "İstasyon Caddesi No: 123",
            "addressLocality": "Darıca",
            "addressRegion": "Kocaeli",
            "postalCode": "41700",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7736,
            "longitude": 29.3922
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "20:00"
          },
          "sameAs": [
            "https://www.facebook.com/koltukyikamadetay",
            "https://www.instagram.com/koltukyikamadetay"
          ],
          "priceRange": "$$",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 40.7736,
              "longitude": 29.3922
            },
            "geoRadius": 50000
          },
          "areaServed": [
            "Darıca", "Gebze", "Çayırova", "Dilovası", "Şekerpınar", "Tavşanlı", 
            "Kışladüzü", "Körfez", "Derince", "Tuzla", "Şifa", "Pendik", 
            "Kartal", "Maltepe", "Ataşehir", "Ümraniye", "Sancaktepe", "Sultanbeyli"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Koltuk Yıkama Hizmetleri",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ev Koltuk Yıkama",
                  "description": "Evinizin konforunu sağlayan koltuklarınız için profesyonel temizlik hizmeti. Kumaş ve deri koltuklar için özel çözümler."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Araç Koltuk Yıkama",
                  "description": "Aracınızın iç temizliği için profesyonel çözümler. Koltuk, tavan, döşeme ve bagaj temizliği."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ofis Koltuk Yıkama",
                  "description": "Çalışma ortamınızın temizliği için profesyonel koltuk ve sandalye yıkama hizmeti."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Yatak ve Yastık Yıkama",
                  "description": "Sağlıklı bir uyku için temiz yatak ve yastıklar. Akar ve bakteri giderme."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Otel Temizlik Hizmetleri",
                  "description": "Otelcilik sektörüne özel temizlik çözümleri. Oda koltukları, yataklar, ortak alan mobilyaları."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Özel Koltuk Temizliği",
                  "description": "Nubuk, süet, kadife gibi özel kumaşlar ve deri koltuklarınız için profesyonel temizlik hizmetleri."
                }
              }
            ]
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Ahmet Yılmaz"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Gebze'deki evimizin koltuklarını yıkattık. Kocaeli Koltuk Yıkama ekibi harika bir iş çıkardı, koltuklarımız neredeyse yeni gibi oldu. Çok teşekkürler!"
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Ayşe Demir"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Tuzla'da aracımın koltuklarını temizlettirdim, sonuç mükemmel oldu. Hem hızlı hem de profesyonel bir hizmet. Kesinlikle tavsiye ederim."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Mehmet Kaya"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Pendik'teki ofisimizin tüm koltuklarını temizlettik. Profesyonel ve titiz çalışmaları için teşekkür ederiz. Tekrar tercih edeceğiz."
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "156"
          }
        }),
      }}
    />
  );
} 