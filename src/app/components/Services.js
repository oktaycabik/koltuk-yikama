'use client';

import { FaCouch, FaCarSide, FaBed, FaChair, FaHotel, FaPills, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: "ev-koltuk-yikama",
    icon: <FaCouch className="text-4xl text-accent" />,
    title: "Ev Koltuk Yıkama",
    description: "Evinizin konforunu sağlayan koltuklarınız için profesyonel temizlik hizmeti. Kumaş ve deri koltuklar için özel çözümler. Yerinde yıkama ve leke çıkarma garantisi.",
    features: [
      "Yerinde yıkama hizmeti",
      "Özel leke çıkarma",
      "Antibakteriyel temizlik",
      "Alerjenleri yok etme",
      "Kumaş koruma uygulaması"
    ]
  },
  {
    id: "arac-koltuk-yikama",
    icon: <FaCarSide className="text-4xl text-accent" />,
    title: "Araç Koltuk Yıkama",
    description: "Aracınızın iç temizliği için profesyonel çözümler. Koltuk, tavan, döşeme ve bagaj temizliği. İstenmeyen koku giderme ve hijyenik sonuçlar.",
    features: [
      "Tüm koltuk ve döşeme temizliği",
      "Tavan ve zemin temizliği",
      "Bagaj temizliği",
      "Koku giderme",
      "Deri koltuk bakımı"
    ]
  },
  {
    id: "ofis-koltuk-yikama",
    icon: <FaChair className="text-4xl text-accent" />,
    title: "Ofis Koltuk ve Sandalye Temizliği",
    description: "Çalışma ortamınızın temizliği için profesyonel koltuk ve sandalye yıkama hizmeti. Çalışan sağlığını korumak, ofis görünümünü yenilemek için ideal çözüm.",
    features: [
      "Ofis koltukları temizliği",
      "Konferans sandalyeleri",
      "Bekleme salonu koltukları",
      "Bilgisayar sandalyeleri",
      "Toplantı odası mobilyaları"
    ]
  },
  {
    id: "yatak-yastik-yikama",
    icon: <FaBed className="text-4xl text-accent" />,
    title: "Yatak ve Yastık Yıkama",
    description: "Sağlıklı bir uyku için temiz yatak ve yastıklar. Profesyonel ekipmanlarla derinlemesine temizlik, akar ve bakteri giderme, alerjik reaksiyonları önleme.",
    features: [
      "Yatak şiltesi temizliği",
      "Yastık yıkama",
      "Yorgan temizleme",
      "Akar ve bakteri giderme",
      "Alerjik reaksiyon engelleme"
    ]
  },
  {
    id: "otel-yikama",
    icon: <FaHotel className="text-4xl text-accent" />,
    title: "Otel Temizlik Hizmetleri",
    description: "Otelcilik sektörüne özel temizlik çözümleri. Oda koltukları, yataklar, sandalyeler ve ortak alan mobilyaları için profesyonel temizlik hizmeti.",
    features: [
      "Oda koltuk temizliği",
      "Otel yatak temizliği",
      "Lobi mobilyaları",
      "Toplantı salonu sandalyeleri",
      "Restoran oturma grupları"
    ]
  },
  {
    id: "diger-yikama",
    icon: <FaPills className="text-4xl text-accent" />,
    title: "Özel Koltuk Temizliği",
    description: "Nubuk, süet, kadife gibi özel kumaşlar ve deri koltuklarınız için profesyonel temizlik hizmetleri. Malzeme tipine özel temizlik çözümleri.",
    features: [
      "Deri koltuk temizliği",
      "Nubuk koltuk temizliği",
      "Süet koltuk bakımı",
      "Kadife temizliği",
      "Özel bakım uygulamaları"
    ]
  },
];

const kocaeliRegions = ["Darıca", "Gebze", "Çayırova", "Dilovası", "Şekerpınar", "Tavşanlı", "Kışladüzü", "Körfez", "Derince"];
const istanbulRegions = ["Tuzla", "Şifa", "Pendik", "Kartal", "Maltepe", "Ataşehir", "Ümraniye", "Sancaktepe", "Sultanbeyli"];

export default function Services() {
  return (
    <section id="hizmetlerimiz" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Koltuk Yıkama Hizmetlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesyonel ekibimiz ve özel temizlik teknikleriyle, Kocaeli ve İstanbul bölgelerinde geniş kapsamlı koltuk, döşeme ve tekstil yıkama hizmetleri sunuyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Hizmet Bölgeleri */}
        <div id="hizmet-bolgeleri" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hizmet Bölgelerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kocaeli ve İstanbul'un birçok ilçesinde profesyonel koltuk yıkama hizmetimizle hizmetinizdeyiz.
              Aşağıdaki bölgelerde aynı gün servis imkanı sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceRegions 
              title="Kocaeli Bölgesi" 
              regions={kocaeliRegions} 
              description="Kocaeli'nin tüm ilçelerinde, özellikle Darıca, Gebze, Çayırova, Dilovası, Şekerpınar, Tavşanlı, Kışladüzü, Körfez ve Derince bölgelerinde profesyonel koltuk yıkama hizmetimizi sunuyoruz."
            />
            <ServiceRegions 
              title="İstanbul Anadolu Yakası" 
              regions={istanbulRegions}
              description="İstanbul Anadolu Yakası'nda Tuzla, Şifa, Pendik, Kartal, Maltepe, Ataşehir, Ümraniye, Sancaktepe ve Sultanbeyli bölgelerinde koltuk yıkama hizmetlerimizi sunuyoruz."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          {service.icon}
          <h3 className="text-xl font-bold text-primary ml-3">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ServiceRegions({ title, regions, description }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <FaMapMarkedAlt className="text-4xl text-accent" />
        <h3 className="text-xl font-bold text-primary ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {regions.map((region, index) => (
          <div 
            key={index}
            className="bg-gray-50 py-2 px-3 rounded-lg text-primary font-medium text-center border border-gray-100 hover:bg-accent hover:text-white transition-colors"
          >
            {region}
          </div>
        ))}
      </div>
    </motion.div>
  );
} 