'use client';

import { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`font-bold text-2xl md:text-3xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Kocaeli<span className="text-accent">Koltuk</span>Yıkama
          </h1>
        </div>
        
        {/* Desktop Contact Info */}
        <div className="hidden md:flex space-x-4 items-center">
          <a 
            href="tel:+905551234567" 
            className={`flex items-center space-x-2 ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}
          >
            <FaPhone />
            <span>0555 123 45 67</span>
          </a>
          <a 
            href="https://wa.me/905551234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 
            <FaTimes className={isScrolled ? 'text-primary' : 'text-white'} /> : 
            <FaBars className={isScrolled ? 'text-primary' : 'text-white'} />
          }
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <a 
                href="#hizmetlerimiz" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetlerimiz
              </a>
              <a 
                href="#ev-koltuk-yikama" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100 pl-4 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Ev Koltuk Yıkama
              </a>
              <a 
                href="#arac-koltuk-yikama" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100 pl-4 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Araç Koltuk Yıkama
              </a>
              <a 
                href="#ofis-koltuk-yikama" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100 pl-4 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Ofis Koltuk Yıkama
              </a>
              <a 
                href="#otel-yikama" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100 pl-4 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Otel Temizleme
              </a>
              <a 
                href="#diger-yikama" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100 pl-4 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Diğer Yıkama Hizmetleri
              </a>
              <a 
                href="#hizmet-bolgeleri" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmet Bölgelerimiz
              </a>
              <div className="grid grid-cols-2 gap-2 pl-4 py-2 border-b border-gray-100">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Kocaeli</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>Darıca</li>
                    <li>Gebze</li>
                    <li>Çayırova</li>
                    <li>Dilovası</li>
                    <li>Körfez</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">İstanbul</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>Tuzla</li>
                    <li>Pendik</li>
                    <li>Kartal</li>
                    <li>Maltepe</li>
                    <li>Ataşehir</li>
                  </ul>
                </div>
              </div>
              <a 
                href="#neden-biz" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Neden Biz?
              </a>
              <a 
                href="#iletisim" 
                className="text-primary hover:text-accent transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </a>
              <div className="flex flex-col space-y-3 py-2">
                <a 
                  href="tel:+905551234567" 
                  className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                >
                  <FaPhone />
                  <span>0555 123 45 67</span>
                </a>
                <a 
                  href="https://wa.me/905551234567" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors w-fit"
                >
                  <FaWhatsapp />
                  <span>WhatsApp ile İletişim</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 