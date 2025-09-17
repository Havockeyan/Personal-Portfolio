import Image from 'next/image';
import { getPersonalConfig, getSiteConfig } from '../utils/configLoader';

export default function Footer() {
  const personalConfig = getPersonalConfig();
  const siteConfig = getSiteConfig();
  return (
    <footer className="footer">
      <div className="footer-decor" aria-hidden="true"></div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">{personalConfig.name || "Your Name"}</h3>
            <p className="footer-desc">{siteConfig.footer?.description || personalConfig.tagline || "Your tagline here"}</p>
            <p className="footer-thanks">{siteConfig.footer?.thanks_message || "Thanks for stopping by!"}</p>
          </div>

          <nav className="footer-links" aria-label="Quick Links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul>
              <li><span className="icon">✉</span><a href={`mailto:${personalConfig.email || "your@email.com"}`}>{personalConfig.email || "your@email.com"}</a></li>
              <li><span className="icon">📍</span><span>{personalConfig.location || "Your Location"}</span></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-icons">
              {personalConfig.social?.github && (
                <a href={personalConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">GH</a>
              )}
              {personalConfig.social?.linkedin && (
                <a href={personalConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">in</a>
              )}
              {personalConfig.social?.twitter && (
                <a href={personalConfig.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon">X</a>
              )}
              {personalConfig.social?.instagram && (
                <a href={personalConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">IG</a>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <p className="copyright">{siteConfig.footer?.copyright || `© 2025 ${personalConfig.name || "Your Name"} | Portfolio. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}
