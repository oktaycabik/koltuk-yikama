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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <a href="tel:+905551234567" className="hover:text-accent">0555 123 45 67</a>
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
                      href="https://wa.me/905551234567" 
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
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full text-center"
              >
                Hemen Arayın
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-full min-h-[400px] bg-white shadow-lg rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48291.02289672416!2d29.344441642089844!3d40.77360697932634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb1f2de69a5a7f%3A0xb4c41636edefcaff!2zRGFyxLFjYSwgS29jYWVsaQ!5e0!3m2!1str!2str!4v1712343535263!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kocaeli Koltuk Yıkama Konum"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 