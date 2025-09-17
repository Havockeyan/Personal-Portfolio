import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="main-content">
      <Navbar />
      
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
