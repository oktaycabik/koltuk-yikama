'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="iletisim" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">İletişim Bilgilerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kocaeli, Darıca ve Gebze bölgesinde koltuk yıkama ve diğer temizlik hizmetlerimiz ile ilgili
            bilgi almak için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Bize Ulaşın</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">Adres</h4>
                  <p className="text-gray-700">Kocaeli, Darıca Merkez, İstasyon Caddesi No: 123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <FaPhoneAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">Telefon</h4>
                  <p className="text-gray-700">
                    <a href="tel:+905533079024" className="hover:text-accent">0553 307 90 24</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <FaWhatsapp className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">WhatsApp</h4>
                  <p className="text-gray-700">
                    <a 
                      href="https://wa.me/905533079024" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      WhatsApp ile Mesaj Gönderin
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <FaClock className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">Çalışma Saatleri</h4>
                  <p className="text-gray-700">Hergün: 08:00 - 20:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="tel:+905551234567" 
                className="inline bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full text-center"
              >
                Hemen Arayın
              </a>
            </div>
          </div>
          
          {/* Map */}
        
        </div>
      </div>
    </section>
  );
} 