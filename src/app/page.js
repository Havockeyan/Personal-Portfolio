import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import WarningBanner from '../components/WarningBanner';

export default function Home() {
  return (
    <div className="main-content">
      <WarningBanner />
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Hero />
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Footer */}
      <Footer />
    </div>
  );
}
