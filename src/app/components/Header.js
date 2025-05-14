'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
          <Image src="/images/logo-yikama.png" alt="Logo" width={170} height={100} />
           
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#hizmetler" className="text-gray-700 hover:text-accent transition-colors">
              Hizmetler
            </Link>
            <Link href="/#ozellikler" className="text-gray-700 hover:text-accent transition-colors">
              Özellikler
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/#sss" className="text-gray-700 hover:text-accent transition-colors">
              S.S.S
            </Link>
            <Link href="/#yorumlar" className="text-gray-700 hover:text-accent transition-colors">
              Yorumlar
            </Link>
            <Link href="/#iletisim" className="text-gray-700 hover:text-accent transition-colors">
              İletişim
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+905533079024"
              className="flex items-center space-x-2 text-gray-700 hover:text-accent transition-colors"
            >
              <FaPhone />
              <span>+90 553 307 90 24</span>
            </a>
            <a
              href="https://wa.me/905533079024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/#hizmetler" className="text-gray-700 hover:text-accent transition-colors">
                Hizmetler
              </Link>
              <Link href="/#ozellikler" className="text-gray-700 hover:text-accent transition-colors">
                Özellikler
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-accent transition-colors">
                Blog
              </Link>
              <Link href="/#sss" className="text-gray-700 hover:text-accent transition-colors">
                S.S.S
              </Link>
              <Link href="/#yorumlar" className="text-gray-700 hover:text-accent transition-colors">
                Yorumlar
              </Link>
              <Link href="/#iletisim" className="text-gray-700 hover:text-accent transition-colors">
                İletişim
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="tel:+905533079024"
                  className="flex items-center space-x-2 text-gray-700 hover:text-accent transition-colors"
                >
                  <FaPhone />
                  <span>+90 553 307 90 24</span>
                </a>
                <a
                  href="https://wa.me/905533079024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 