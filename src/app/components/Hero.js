'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Kocaeli ve İstanbul&apos;un<br/>
            <span className="text-accent">En İyi Koltuk Yıkama</span> Servisi
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Kocaeli&apos;nin (Darıca, Gebze, Çayırova, Dilovası, Körfez) ve İstanbul&apos;un (Tuzla, Pendik, Kartal) tüm bölgelerinde profesyonel koltuk ve döşeme yıkama hizmeti sunuyoruz. 
            Ev, ofis, araç, otel koltuklarının yanı sıra yatak, sandalye ve yastık temizliğinde uzman ekibimizle 
            hizmetinizdeyiz. Antibakteriyel temizlik, leke çıkarma ve aynı gün teslim avantajlarıyla.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="tel:+905551234567" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block text-center"
            >
              Hemen Ara
            </a>
            <a 
              href="https://wa.me/905551234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 