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
        <Services />
        <Features />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
} 