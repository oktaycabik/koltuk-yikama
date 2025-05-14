'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Gebze ve Darıca\'da Koltuk Yıkama Hizmeti Alırken Nelere Dikkat Etmelisiniz?',
    excerpt: 'Gebze ve Darıca\'da koltuk yıkama hizmeti alırken dikkat edilmesi gereken önemli noktalar ve bölgesel özellikler hakkında detaylı bilgiler.',
    image: '/images/gebze-darica-koltuk-yikama.png',
    date: '',
    category: 'Koltuk Bakımı',
    slug: 'gebze-darica-koltuk-yikama-hizmeti'
  },
  {
    id: 2,
    title: 'Evde Koltuk Yıkama Ne Kadar Etkili? Profesyonel Hizmetle Arasındaki Farklar',
    excerpt: 'Evde yapılan koltuk temizliği ile profesyonel hizmet arasındaki farkları detaylı şekilde inceliyoruz. Hangi yöntem daha etkili?',
    image: '/images/evde-koltuk-yikama.png',
    date: '',
    category: 'Koltuk Bakımı',
    slug: 'evde-koltuk-yikama-profesyonel-hizmet-farklari'
  }
];

const categories = [
  'Tümü',
  'Koltuk Bakımı',
  'Deri Koltuk',
  'Kumaş Koltuk',
  'Araç Koltukları'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Başlık ve Arama */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog</h1>
          <p className="text-gray-600 mb-8">
            Koltuk yıkama ve temizlik hakkında faydalı bilgiler ve öneriler
          </p>
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Blog yazılarında ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Kategoriler */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Yazıları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-accent font-medium">{post.category}</span>
                 
               </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent font-medium hover:text-accent/80 transition-colors"
                >
                  Devamını Oku →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Sonuç Bulunamadı */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Aramanızla eşleşen blog yazısı bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
} 