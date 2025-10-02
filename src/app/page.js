import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import WarningBanner from '../components/WarningBanner';
import { getSiteConfig } from '../utils/configLoader';

export default function Home() {
  const siteConfig = getSiteConfig();
  const bannerConfig = siteConfig.banner || {};
  
  return (
    <div className="main-content">
      <WarningBanner 
        showBanner={bannerConfig.show_work_in_progress}
        message={bannerConfig.message}
      />
      
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
