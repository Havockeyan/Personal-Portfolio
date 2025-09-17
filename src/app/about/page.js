import '../../styles/sections/about.css';
import JourneyTimeline from '../../components/JourneyTimeline';
import Footer from '../../components/Footer';
import { getPersonalConfig, getSiteConfig, getTimelineConfig } from '../../utils/configLoader';

const personalConfig = getPersonalConfig();
const siteConfig = getSiteConfig();

export const metadata = {
  title: `About - ${personalConfig.name || 'Your Name'}`,
  description: siteConfig.seo?.description || `Learn more about ${personalConfig.name || 'Your Name'}`,
};

export default function AboutPage() {
  const timelineConfig = getTimelineConfig();
  const timelineData = timelineConfig.timeline || [];
  const timelineSettings = timelineConfig.timeline_settings || {};
  return (
    <main className="about-page">
      <div className="starfield-bg">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="grid-lines"></div>
      </div>
      
      <section className="about-hero">
        <div className="about-content">
          <h1 className="about-title">Get to Know Me Better</h1>
          <p className="about-description">
            {personalConfig.summary || "Explore my interests, my journey as a programmer, why I chose this field, and discover the passion that drives my code."}
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <JourneyTimeline timelineData={timelineData} settings={timelineSettings} />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}


