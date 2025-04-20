'use client';

import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ev & Ofis Koltuk Yıkama</h3>
            <p className="text-gray-300 mb-4">
              Kocaeli ve İstanbul bölgesinde profesyonel koltuk yıkama hizmeti sunuyoruz. 
              Ev, ofis, araç, yatak ve sandalye temizliği konusunda uzman ekibimizle hizmetinizdeyiz.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+905533079024"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaPhone />
              </a>
              <a
                href="https://wa.me/905533079024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Hizmet Bölgeleri */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hizmet Bölgelerimiz</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Kocaeli</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>Darıca</li>
                  <li>Gebze</li>
                  <li>Çayırova</li>
                  <li>Dilovası</li>
                  <li>Şekerpınar</li>
                  <li>Tavşanlı</li>
                  <li>Kışladüzü</li>
                  <li>Körfez</li>
                  <li>Derince</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">İstanbul</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>Tuzla</li>
                  <li>Şifa</li>
                  <li>Pendik</li>
                  <li>Kartal</li>
                  <li>Maltepe</li>
                  <li>Ataşehir</li>
                  <li>Ümraniye</li>
                  <li>Sancaktepe</li>
                  <li>Sultanbeyli</li>
                </ul>
              </div>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <FaPhone className="text-accent" />
                <a href="tel:+905533079024" className="hover:text-white transition-colors">
                  +90 553 307 90 24
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <FaWhatsapp className="text-accent" />
                <a
                  href="https://wa.me/905533079024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp ile İletişim
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <FaMapMarkerAlt className="text-accent" />
                <span>Kocaeli ve İstanbul</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <FaEnvelope className="text-accent" />
                <a href="mailto:info@evofiskoltukyikama.com" className="hover:text-white transition-colors">
                  info@evofiskoltukyikama.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ev & Ofis Koltuk Yıkama. Tüm hakları saklıdır.</p>
          <p className="mt-2">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            {' | '}
            <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
              Kullanım Koşulları
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 