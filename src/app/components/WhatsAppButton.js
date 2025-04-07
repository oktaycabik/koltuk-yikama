'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <a
      href="https://wa.me/905551234567?text=Merhaba, koltuk yıkama hizmetleriniz hakkında bilgi almak istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      } hover:bg-green-600 hover:scale-110`}
      aria-label="WhatsApp ile İletişim"
    >
      <FaWhatsapp size={28} />
    </a>
  );
} 