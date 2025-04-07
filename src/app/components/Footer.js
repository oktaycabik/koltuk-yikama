'use client';

import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="iletisim" className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kocaeli ve İstanbul Koltuk Yıkama</h3>
            <p className="mb-4 text-gray-300">
              Kocaeli ve İstanbul&apos;un tüm bölgelerinde profesyonel koltuk ve döşeme temizliği hizmetleri. 
              Ev, ofis, araç ve otel koltuk temizliğinde uzman ekibimizle her zaman yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#ev-koltuk-yikama" className="text-gray-300 hover:text-white">Ev Koltuk Yıkama</Link>
              </li>
              <li>
                <Link href="#arac-koltuk-yikama" className="text-gray-300 hover:text-white">Araç Koltuk Yıkama</Link>
              </li>
              <li>
                <Link href="#ofis-koltuk-yikama" className="text-gray-300 hover:text-white">Ofis Koltuk Temizliği</Link>
              </li>
              <li>
                <Link href="#yatak-yastik-yikama" className="text-gray-300 hover:text-white">Yatak ve Yastık Yıkama</Link>
              </li>
              <li>
                <Link href="#otel-yikama" className="text-gray-300 hover:text-white">Otel Temizlik Hizmetleri</Link>
              </li>
              <li>
                <Link href="#diger-yikama" className="text-gray-300 hover:text-white">Özel Koltuk Temizliği</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-accent mr-3 mt-1" />
                <span>Kocaeli, Darıca Merkez, İstasyon Caddesi No: 123</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-accent mr-3" />
                <a href="tel:+905551234567" className="hover:text-accent">0555 123 45 67</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-accent mr-3" />
                <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  WhatsApp ile İletişim
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="text-accent mr-3" />
                <span>Hergün 08:00 - 20:00</span>
              </li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hizmet Bölgelerimiz</h3>
            <div className="grid grid-cols-2 gap-1">
              <div>
                <h4 className="font-bold text-accent mb-2">Kocaeli</h4>
                <ul className="space-y-1">
                  <li><Link href="#" className="text-gray-300 hover:text-white">Darıca</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Gebze</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Çayırova</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Dilovası</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Şekerpınar</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Tavşanlı</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Kışladüzü</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Körfez</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Derince</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2">İstanbul</h4>
                <ul className="space-y-1">
                  <li><Link href="#" className="text-gray-300 hover:text-white">Tuzla</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Şifa</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Pendik</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Kartal</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Maltepe</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Ataşehir</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Ümraniye</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Sancaktepe</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white">Sultanbeyli</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-primary-700">
          <p>&copy; {currentYear} Kocaeli ve İstanbul Koltuk Yıkama. Tüm hakları saklıdır.</p>
          <p className="mt-2 text-sm text-gray-400">
            koltukyikamadetay.com - Profesyonel koltuk yıkama ve temizlik hizmetleri
          </p>
        </div>
      </div>
    </footer>
  );
} 