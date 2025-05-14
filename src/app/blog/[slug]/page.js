'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = {
  'evde-koltuk-yikama-profesyonel-hizmet-farklari': {
    title: 'Evde Koltuk Yıkama Ne Kadar Etkili? Profesyonel Hizmetle Arasındaki Farklar',
    date: '',
    category: 'Koltuk Bakımı',
    image: '/images/evde-koltuk-yikama.png',
    content: `
      <div class="space-y-8">
        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-primary mb-4">Giriş: Koltuk Temizliği Neden Bu Kadar Önemli?</h2>
          <p class="text-gray-600 leading-relaxed">
            Evimizde en çok zaman geçirdiğimiz alanlardan biri salon ve oturma odalarıdır. Bu alanlarda en çok kullanılan eşya ise koltuklardır. Günlük kullanımda koltuklar; toz, yemek artıkları, ter, evcil hayvan tüyleri ve hatta görünmeyen bakterilerle kirlenir. Peki, bu koltukları evde kendi imkanlarımızla temizlemek yeterli mi? Yoksa profesyonel koltuk yıkama hizmetine mi ihtiyaç var?
          </p>
          <p class="text-gray-600 leading-relaxed mt-4">
            Bu yazıda, evde yapılan koltuk temizliği ile profesyonel hizmet arasındaki farkları detaylı şekilde inceleyeceğiz.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">1. Evde Koltuk Yıkama Yöntemleri</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Evde koltuk yıkamak isteyen çoğu kişi genellikle şu yöntemleri tercih eder:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-600">
            <li>Sirke ve karbonat karışımı ile silme</li>
            <li>Buharlı temizlik makineleri</li>
            <li>Deterjanlı su ve bez ile yüzey temizliği</li>
            <li>Leke çıkarıcı spreyler</li>
          </ul>
          <p class="text-gray-600 leading-relaxed mt-4">
            Bu yöntemler yüzeydeki kiri ve lekeleri bir miktar giderebilir. Ancak derinlemesine temizlik sağlamak genellikle mümkün olmaz. Ayrıca yanlış ürün kullanımı koltuk kumaşına zarar verebilir veya lekenin daha da yayılmasına neden olabilir.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">2. Yüzey Temizliği vs Derin Temizlik</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Evde yapılan temizlik genellikle &quot;görünür kiri&quot; ortadan kaldırır. Ancak koltukların içinde, kumaşın alt katmanlarında biriken toz akarları, bakteriler ve kötü kokular bu yöntemlerle yok edilemez.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Profesyonel koltuk yıkama hizmetleri ise güçlü vakum makineleri, özel koltuk şampuanları ve yüksek basınçlı buhar sistemleri ile koltuğun derinliklerine kadar inerek mikroskobik seviyede hijyen sağlar.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">3. Profesyonel Koltuk Yıkamanın Avantajları</h2>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Derinlemesine temizlik:</strong> Koltuğun iç yapısında biriken tüm kiri ve mikroorganizmaları ortadan kaldırır.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Koku giderme:</strong> Sigara, yemek veya evcil hayvan kaynaklı kötü kokular profesyonel ürünlerle yok edilir.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Leke çıkarma garantisi:</strong> Zor lekeler için özel leke çözücüler kullanılır.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Kumaş dostu temizlik:</strong> Koltuğun kumaş yapısına uygun ürünler seçilir ve yıpranma riski en aza indirilir.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Kuruma süresi daha kısa:</strong> Sanayi tipi vakumlar sayesinde nem minimumda kalır, koltuklar çok daha hızlı kurur.
              </span>
            </li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">4. Profesyonel Koltuk Yıkama Hizmeti Ne Zaman Alınmalı?</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-600 mb-4">
            <li>Alerjik reaksiyonlar yaşayan bireyler varsa</li>
            <li>Koltuklarınızda gözle görülür leke veya kötü koku oluştuysa</li>
            <li>Evcil hayvanınız varsa</li>
            <li>Bebek veya küçük çocuğunuz varsa</li>
            <li>Yılda en az 1–2 kez derin temizlik ihtiyacınız varsa</li>
          </ul>
          <p class="text-gray-600 leading-relaxed">
            Bu gibi durumlarda mutlaka uzman desteği alınmalıdır.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">5. Evde Temizlik mi, Profesyonel Hizmet mi? Hangisi Daha Ekonomik?</h2>
          <p class="text-gray-600 leading-relaxed">
            İlk bakışta evde temizlik yapmak daha ekonomik gibi görünse de, yanlış ürünlerle yapılan temizlik koltuğa zarar verip ömrünü kısaltabilir. Ayrıca lekeler yerleştikçe çıkması daha zor hale gelir. Uzun vadede profesyonel temizlik, hem sağlık hem de maliyet açısından daha avantajlıdır.
          </p>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-primary mb-4">Sonuç: Gerçek Hijyen İçin Uzmanından Destek Alın</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Koltuklar, farkında olmadan birçok mikrobu barındırır ve doğrudan cildimizle temas eder. Bu yüzden sadece görüntü değil, sağlık açısından da düzenli olarak temizlenmeleri gerekir. Evde yapılan yüzeysel temizlik geçici çözümler sunarken, profesyonel koltuk yıkama hizmeti gerçek hijyen sağlar.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Koltuklarınızın ömrünü uzatmak ve evinizde sağlıklı bir yaşam alanı oluşturmak için profesyonel destek almayı ihmal etmeyin.
          </p>
        </div>
      </div>
    `
  },
  'gebze-darica-koltuk-yikama-hizmeti': {
    title: 'Gebze ve Darıca&apos;da Koltuk Yıkama Hizmeti Alırken Nelere Dikkat Etmelisiniz?',
    date: '',
    category: 'Koltuk Bakımı',
    image: '/images/gebze-darica-koltuk-yikama.png',
    content: `
      <div class="space-y-8">
        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-primary mb-4">Giriş: Bölgesel Koltuk Temizliğinde Kalite Farkı</h2>
          <p class="text-gray-600 leading-relaxed">
            Koltuk temizliği artık sadece estetik değil, sağlık açısından da büyük bir ihtiyaç haline geldi. Özellikle büyük ve yoğun yerleşim alanları olan Gebze ve Darıca gibi bölgelerde, çevresel etkenler (toz, nem, hava kirliliği) koltuklarda daha hızlı kirlenmeye neden olabiliyor. Bu yüzden koltuk yıkama hizmeti alırken hem hizmet kalitesine hem de hizmetin bölgenize uygunluğuna dikkat etmeniz gerekiyor.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">1. Gebze ve Darıca&apos;da Koltuk Temizliği Neden Daha Sık Yapılmalı?</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Gebze ve Darıca, sanayi tesislerine ve iş merkezlerine yakınlıklarıyla bilinen bölgeler. Bu durum, havadaki toz ve kirlilik oranını artırır. Ayrıca bölgede yaşayan ailelerin büyük çoğunluğu apartman dairelerinde yaşadığı için koltuklar ev içinde yoğun kullanılır.
          </p>
          <p class="text-gray-600 leading-relaxed mb-4">
            Daha sık temizlik gerektiren başlıca durumlar:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-gray-600">
            <li>Sanayiye yakın yaşam alanları</li>
            <li>Çocuklu veya evcil hayvanlı evler</li>
            <li>Kalabalık haneler</li>
            <li>Alerjik bünyeli bireyler</li>
          </ul>
          <p class="text-gray-600 leading-relaxed mt-4">
            <strong>Uzman önerisi:</strong> Bu bölgelerde yılda en az 2 kez profesyonel koltuk temizliği yaptırmak hem sağlığınız hem de mobilyalarınız için önemlidir.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">2. Profesyonel Koltuk Yıkama Firması Seçerken Nelere Dikkat Etmelisiniz?</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Gebze ve Darıca&apos;da birçok temizlik firması hizmet veriyor. Ancak kaliteli ve güvenilir bir seçim yapmak için aşağıdaki kriterleri göz önünde bulundurmalısınız:
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Yerel referansları olan firmalar:</strong> Daha önce Gebze veya Darıca&apos;da hizmet vermiş, müşteri memnuniyeti yüksek olan firmaları tercih edin.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Kullanılan ekipman ve temizlik ürünleri:</strong> Endüstriyel makineler ve koltuk kumaşına zarar vermeyen şampuanlar kullanan firmalar öncelikli olmalı.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Kuruma süresi:</strong> Özellikle nemli mevsimlerde kısa sürede kuruyan temizlik sistemleri tercih edilmelidir.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Evde hizmet imkânı:</strong> Koltuklarınızın taşınmadan, evinizde yerinde temizlenmesi hem zaman kazandırır hem de eşyalarınızın zarar görmesini önler.
              </span>
            </li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">3. Gebze ve Darıca&apos;da Koltuk Yıkama Hizmeti Almanın Avantajları</h2>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Zaman kazancı:</strong> İşe gitmeden önce veya hafta sonu için randevu alabilir, temizlik sırasında evde bulunabilirsiniz.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Yerinde hizmet imkanı:</strong> Koltuklarınız taşınmaz, çizilme veya deforme riski ortadan kalkar.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Hijyen garantisi:</strong> Sanayi bölgesinde yaşadığınız için daha derinlemesine temizlik sağlanır.
              </span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✅</span>
              <span class="text-gray-600">
                <strong class="text-gray-900">Yerel firmalarla kolay iletişim:</strong> Hizmet sonrası destek almak daha kolaydır.
              </span>
            </li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold text-primary mb-4">4. Sıkça Sorulan Sorular</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">➡ Gebze'de en iyi koltuk yıkama firması hangisi?</h3>
              <p class="text-gray-600">Tavsiye edilen firmalar genellikle müşteri yorumlarıyla öne çıkar. Google yorumları ve sosyal medya sayfaları bu konuda fikir verir.</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">➡ Darıca'da yerinde koltuk yıkama yapılıyor mu?</h3>
              <p class="text-gray-600">Evet, Darıca'daki birçok firma yerinde hizmet sunmaktadır. Randevu sistemiyle çalışırlar.</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">➡ Kuruma süresi ne kadar sürüyor?</h3>
              <p class="text-gray-600">Hava koşullarına bağlı olarak 4 ila 8 saat arasında değişmektedir. Sanayi tipi vakum makineleri kullanıldığında bu süre kısalır.</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-primary mb-4">Sonuç: Sağlıklı Bir Ev İçin Doğru Hizmeti Seçin</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Gebze ve Darıca'da yaşayanlar için koltuk temizliği, sadece estetik değil aynı zamanda sağlık açısından da büyük önem taşır. Yaşadığınız çevrenin koşulları, evdeki bireylerin ihtiyaçları ve koltuklarınızın durumu göz önüne alındığında, yılda birkaç kez profesyonel destek almak en doğru seçim olacaktır.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Eğer siz de Gebze veya Darıca'da koltuk yıkama hizmeti arıyorsanız, hem fiyat-performans dengesine hem de müşteri memnuniyetine dikkat ederek karar vermelisiniz.
          </p>
        </div>
      </div>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Yazı Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız blog yazısı bulunamadı.</p>
          <Link
            href="/blog"
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Geri Dön Butonu */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            ← Blog'a Dön
          </Link>
        </div>

        {/* Başlık ve Meta Bilgiler */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-accent font-medium">{post.category}</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>
          
          </div>

          {/* Kapak Görseli */}
          <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* İçerik */}
          <article
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 prose-li:leading-relaxed prose-li:mb-2 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-primary prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Paylaşım Butonları */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bu Yazıyı Paylaş</h3>
            <div className="flex space-x-6">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://evofiskoltukyikama.com/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter'da Paylaş</span>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://evofiskoltukyikama.com/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook'ta Paylaş</span>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://evofiskoltukyikama.com/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp'ta Paylaş</span>
              </a>
            </div>
          </div>

          {/* İlgili Yazılar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">İlgili Yazılar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/koltuk-temizliginde-dikkat-edilmesi-gerekenler"
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <span className="text-sm text-accent font-medium">Koltuk Bakımı</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-accent transition-colors">
                    Koltuk Temizliğinde Dikkat Edilmesi Gerekenler
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Koltuklarınızın ömrünü uzatmak için dikkat edilmesi gereken önemli noktalar...
                  </p>
                </div>
              </Link>
              <Link
                href="/blog/deri-koltuk-bakimi-nasil-yapilir"
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <span className="text-sm text-accent font-medium">Deri Koltuk</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-accent transition-colors">
                    Deri Koltuk Bakımı Nasıl Yapılır?
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Deri koltuklarınızın uzun ömürlü olması için uygulamanız gereken bakım yöntemleri...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 