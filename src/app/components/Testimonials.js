'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    occupation: "Ev Sahibi",
    image: "/images/testimonial1.jpg", 
    rating: 5,
    text: "Üç kişilik koltuk takımımız 8 yıllık ve oldukça kirlenmişti. Ev & Ofis Koltuk Yıkama'dan aldığımız hizmet sonrası koltuklarımız adeta yeni gibi oldu. Özellikle çocuklarımın döktüğü meyve suyu lekeleri tamamen çıkarıldı. Profesyonel ekip ve uygun fiyat için teşekkürler!"
  },
  {
    id: 2,
    name: "Ayşe Demir",
    occupation: "İşletme Sahibi",
    image: "/images/testimonial2.jpg",
    rating: 5,
    text: "Kafe işletmecisi olarak oturma gruplarımızın temizliği müşterilerimiz için çok önemli. Düzenli olarak Ev & Ofis Koltuk Yıkama hizmetinden yararlanıyoruz. Her temizlik sonrası mekanımız daha ferah ve hijyenik oluyor. İşletme sahiplerine kesinlikle tavsiye ederim."
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    occupation: "Araç Sahibi",
    image: "/images/testimonial3.jpg",
    rating: 5,
    text: "İkinci el araç aldığımda koltukları oldukça kötü durumdaydı. Araç koltuklarını temizletmek için birçok yer araştırdım ve Ev & Ofis Koltuk Yıkama'yı tercih ettim. Sonuç inanılmazdı! Koltuklar, tavan döşemesi ve bagaj yepyeni gibi oldu. Kesinlikle tavsiye ediyorum."
  },
  {
    id: 4,
    name: "Zeynep Şahin",
    occupation: "Otel Müdürü",
    image: "/images/testimonial4.jpg",
    rating: 5,
    text: "Otelimizin lobi koltuklarını ve oda yataklarını düzenli olarak Ev & Ofis Koltuk Yıkama firmasına temizletiyoruz. Sundukları toplu hizmet paketi sayesinde maliyetlerimizi düşürürken, hijyen standartlarımızı yükselttik. Müşterilerimizden çok olumlu geri dönüşler alıyoruz."
  },
  {
    id: 5,
    name: "Ali Yıldız",
    occupation: "Ofis Yöneticisi",
    image: "/images/testimonial5.jpg",
    rating: 4,
    text: "Şirketimizin tüm ofis koltuklarını ve toplantı salonu sandalyelerini Ev & Ofis Koltuk Yıkama'ya temizlettik. Hızlı ve profesyonel hizmetleri sayesinde iş akışımız aksamadı. Çalışanlarımız temiz ve ferah bir ortamda çalışmaktan çok memnun."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="yorumlar" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kocaeli, Darıca ve Gebze bölgesinde koltuk yıkama hizmetlerimizden memnun kalan müşterilerimizin görüşleri.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
            <FaQuoteLeft className="text-accent text-4xl mb-6 opacity-30" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={testimonials[currentIndex].image || "https://via.placeholder.com/150"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1">
                <blockquote className="text-gray-700 text-lg mb-4">
                  {testimonials[currentIndex].text}
                </blockquote>
                
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                <cite className="not-italic">
                  <span className="block text-xl font-bold text-primary">{testimonials[currentIndex].name}</span>
                  <span className="text-gray-500">{testimonials[currentIndex].occupation}</span>
                </cite>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
              aria-label="Önceki yorum"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
              aria-label="Sonraki yorum"
            >
              <FaArrowRight />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Yorum ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 