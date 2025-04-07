'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaLeaf, FaTags, FaStar, FaPeopleCarry } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-accent" />,
    title: "Sağlıklı Temizlik",
    description: "Koltuklarınız ve diğer tekstil ürünleriniz, evinizin en çok kullanılan ve en çok bakteri barındıran alanlarıdır. Anti-bakteriyel temizlik ürünlerimiz ile tüm döşeme ve koltuklarınızı derinlemesine temizliyoruz."
  },
  {
    icon: <FaClock className="text-3xl text-accent" />,
    title: "Hızlı Servis",
    description: "Ev, araç ve ofis koltuklarınızı, yatakları, sandalyeleri kurutma teknolojimiz sayesinde hızlıca temizleyip teslim ediyoruz. Özel kurutma sistemlerimiz sayesinde yıkanan koltuklar aynı gün kullanıma hazır."
  },
  {
    icon: <FaLeaf className="text-3xl text-accent" />,
    title: "Çevre Dostu Ürünler",
    description: "Kullandığımız tüm temizlik ürünleri çevre dostu ve insan sağlığına zararsızdır. Koltuk yıkama ve diğer hizmetlerimizde bebek ve evcil hayvanlar için güvenli olan ürünler kullanıyoruz."
  },
  {
    icon: <FaTags className="text-3xl text-accent" />,
    title: "Uygun Fiyatlar",
    description: "Ev, ofis, araç, otel ve diğer özel tekstil ürünleri temizliği için uygun fiyatlı, kaliteli hizmet sunuyoruz. Rekabetçi fiyatlarımız ile bütçenizi zorlamadan profesyonel çözümler alın."
  },
  {
    icon: <FaStar className="text-3xl text-accent" />,
    title: "Deneyimli Ekip",
    description: "Uzun yıllardır koltuk ve döşeme yıkama alanında hizmet veren tecrübeli ekibimiz, her türlü koltuk modelini ve kumaş tipini profesyonelce temizlemektedir."
  },
  {
    icon: <FaPeopleCarry className="text-3xl text-accent" />,
    title: "Yerinde Hizmet",
    description: "Evinizde, ofisinizde veya istediğiniz yerde koltuk ve döşeme yıkama hizmeti sunuyoruz. Kullandığımız taşınabilir ekipmanlarla her yerde profesyonel temizlik hizmeti veriyoruz."
  }
];

export default function Features() {
  return (
    <section id="neden-biz" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kocaeli ve çevresinde koltuk, döşeme ve tekstil yıkama hizmetlerinde lider olarak müşteri memnuniyetini 
            en üst seviyede tutuyoruz. İşte bizi tercih etmeniz için sebepler:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
} 