import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Testimonials from './components/Testimonials';
import SchemaOrg from './components/SchemaOrg';

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Header />
      <main>
        <Hero />
        
        {/* İlk SEO Metni - Hero'nun altında */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                  Gebze ve Darıca'da Profesyonel Koltuk Yıkama Hizmeti
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Gebze ve Darıca bölgesinde yaşayan müşterilerimize özel olarak sunduğumuz profesyonel koltuk yıkama hizmetimiz, uzun yıllara dayanan tecrübemiz ve modern ekipmanlarımızla fark yaratıyor. Sanayi bölgesinde bulunan evlerinizdeki koltukların daha sık temizlenmesi gerektiğinin bilincindeyiz. Bu nedenle, özel olarak geliştirdiğimiz temizlik yöntemlerimiz ve kullandığımız profesyonel ekipmanlarla koltuklarınızı derinlemesine temizliyoruz.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-primary mb-3">Yerinde Hizmet</h3>
                      <p className="text-gray-600">
                        Koltuklarınızı taşıma derdi yaşamadan, evinizde profesyonel temizlik hizmeti alabilirsiniz. Endüstriyel vakum makineleri ve özel şampuanlar ile koltuklarınız hem daha temiz olacak hem de daha hızlı kuruyacaktır.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-primary mb-3">Alerjik Bünyeler İçin Özel Çözüm</h3>
                      <p className="text-gray-600">
                        Alerjik bünyeli bireyler için özel olarak geliştirdiğimiz temizlik yöntemlerimizle, koltuklarınızdaki alerjenleri minimum seviyeye indiriyoruz.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Gebze ve Darıca'da koltuk yıkama hizmeti almak isteyen müşterilerimiz için, hafta içi ve hafta sonu randevu seçenekleri sunuyoruz. Ücretsiz keşif hizmetimizle, koltuklarınızın durumunu inceleyip size en uygun temizlik yöntemini öneriyoruz. Müşteri memnuniyetini ön planda tutan anlayışımızla, hizmet sonrası destek garantisi veriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Services />
        <Features />
        <Testimonials />

        {/* İkinci SEO Metni - Testimonials'ın altında */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                  Profesyonel Koltuk Yıkama ve Temizlik Hizmetlerimiz
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ev & Ofis Koltuk Yıkama olarak, tüm koltuk türleri için özel temizlik çözümleri sunuyoruz. Kumaş koltuklar, deri koltuklar, ofis koltukları ve araç koltukları için farklı temizlik yöntemleri kullanarak, her türlü koltuk için en uygun temizlik hizmetini sağlıyoruz.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-primary mb-3">Kumaş Koltuklar</h3>
                      <p className="text-gray-600">
                        Özel şampuanlar ve profesyonel ekipmanlarla kumaş koltuklarınızı derinlemesine temizliyoruz.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-primary mb-3">Deri Koltuklar</h3>
                      <p className="text-gray-600">
                        Deri koltuklarınız için özel bakım ve temizlik ürünleri kullanarak, uzun ömürlü kullanım sağlıyoruz.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-primary mb-3">Ofis Koltukları</h3>
                      <p className="text-gray-600">
                        İş yerlerinizdeki koltukları profesyonel ekipmanlarla temizleyerek, hijyenik bir çalışma ortamı oluşturuyoruz.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Temizlik hizmetlerimiz arasında leke çıkarma, koku giderme, derinlemesine temizlik ve dezenfeksiyon bulunmaktadır. Özellikle evcil hayvan tüyleri, sigara kokusu, yemek lekeleri gibi zorlu durumlar için özel çözümlerimiz mevcuttur.
                  </p>
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary mb-3">Hizmet Bölgemiz</h3>
                    <p className="text-gray-700">
                      Gebze, Darıca, Tuzla ve çevresinde, müşterilerimize en hızlı ve en kaliteli hizmeti sunmak için çalışıyoruz. Randevu sistemimiz sayesinde, size en uygun zamanda hizmet verebiliyoruz. Ücretsiz keşif ve fiyat teklifi için hemen bize ulaşabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  );
} 