'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqItems = [
  {
    question: "Koltuk yıkama işlemi ne kadar sürer?",
    answer: "Koltuk yıkama işlemi, koltuğun boyutu, kirliliği ve kumaş tipine göre değişiklik gösterir. Ortalama bir ev koltuk takımı için 2-3 saat sürerken, kuruması için genellikle 4-6 saat beklemek gerekir. Özel hızlı kurutma tekniklerimiz sayesinde bu süreyi minimuma indiriyoruz."
  },
  {
    question: "Hangi tür koltukları temizliyorsunuz?",
    answer: "Kumaş, kadife, mikrofiber, deri, suni deri, nubuk, süet dahil olmak üzere tüm koltuk türlerini temizliyoruz. Ayrıca araç koltukları, ofis koltukları, sandalyeler, yataklar ve yastıklar gibi tekstil ürünleri de hizmet kapsamımızdadır."
  },
  {
    question: "Yıkama sonrası koltuklar ne kadar sürede kurur?",
    answer: "Profesyonel ekipmanlarımız ve özel kurutma tekniklerimiz sayesinde koltuklarınız genellikle 4-6 saat içinde kurur. Hava koşulları, nem ve kumaş tipine göre bu süre değişebilir. Özel hızlı kurutma hizmetimizle bu süreyi 2-3 saate kadar indirebiliyoruz."
  },
  {
    question: "Araca özel koltuk yıkama hizmetiniz var mı?",
    answer: "Evet, araç içi koltuk yıkama hizmetimiz mevcuttur. Özel ekipmanlarımızla aracınızın tüm iç döşemelerini, koltukları, tavanı, paspasları ve bagaj bölümünü temizliyoruz. Koku giderme ve antibakteriyel işlemlerimiz ile aracınız yeni gibi olacaktır."
  },
  {
    question: "Koltuk yıkama sırasında kimyasal maddeler kullanıyor musunuz?",
    answer: "Koltuk temizliğinde çevre dostu, anti-alerjik ve insan sağlığına zarar vermeyen özel temizlik ürünleri kullanıyoruz. Çocuk ve evcil hayvan sahibi ailelerin güvenle tercih edebileceği, sertifikalı temizlik ürünleri ile hizmet veriyoruz."
  },
  {
    question: "Koltuk lekelerini çıkarabilir misiniz?",
    answer: "Evet, çay, kahve, mürekkep, kan, yağ ve benzeri çoğu lekeyi özel leke çıkarma yöntemlerimizle temizleyebiliyoruz. Ancak uzun süre bekletilmiş veya özel işlem görmüş bazı lekeler tamamen çıkmayabilir. Ücretsiz keşif sırasında lekelerin durumunu değerlendirip size en doğru bilgiyi vereceğiz."
  },
  {
    question: "Koltuk yıkama ücretleriniz nasıl belirleniyor?",
    answer: "Fiyatlarımız koltuk takımının büyüklüğüne, kirliliğine, kumaş türüne ve uygulanacak özel işlemlere göre değişmektedir. Rekabetçi fiyatlarımızla Kocaeli bölgesinde en uygun ve kaliteli hizmeti sunmaya çalışıyoruz. Ücretsiz keşif sonrası net fiyat teklifimizi iletiyoruz."
  },
  {
    question: "Ev, ofis ve oteller için özel paketleriniz var mı?",
    answer: "Evet, ev, ofis ve oteller için özel hizmet paketlerimiz bulunmaktadır. Düzenli temizlik ihtiyacı olan işletmeler için sözleşmeli hizmet ve özel indirimli fiyatlar sunuyoruz. Otel odaları, toplantı salonları, lobi koltukları ve restoranlar için özel çözümlerimiz mevcuttur."
  },
  {
    question: "Koltuk yıkama için randevu nasıl alabilirim?",
    answer: "Telefon veya WhatsApp üzerinden bize ulaşarak randevu talep edebilirsiniz. Size uygun bir tarih ve saat belirleyerek, ücretsiz keşif sonrası aynı gün içinde yıkama işlemini gerçekleştirebiliriz. Acil durumlarda aynı gün hizmet seçeneğimiz de bulunmaktadır."
  },
  {
    question: "Yastık ve yatak temizliği nasıl yapılıyor?",
    answer: "Yastık ve yatak temizliği özel ekipmanlarımızla, derin temizleme yöntemiyle yapılmaktadır. Akarları ve bakterileri yok eden, anti-alerjik temizleyiciler kullanıyoruz. UV sterilizasyon teknolojimiz ile yatak ve yastıklarınızdaki mikroorganizmaları etkili bir şekilde yok ediyoruz."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="sss" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sık Sorulan Sorular</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Koltuk yıkama hizmetlerimiz hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left px-6 py-4 rounded-lg flex justify-between items-center transition-colors ${
                  activeIndex === index ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100 text-primary'
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <span>{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white border border-gray-200 rounded-b-lg">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 