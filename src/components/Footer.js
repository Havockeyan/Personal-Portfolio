import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-decor" aria-hidden="true"></div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Karthikeyan K</h3>
            <p className="footer-desc">Crafting delightful web experiences with code, design, and curiosity.</p>
            <p className="footer-thanks">Thanks for stopping by!</p>
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
              <li><span className="icon">✉</span><a href="mailto:karthikeyan@example.com">karthikeyan@example.com</a></li>
              <li><span className="icon">📍</span><span>Chennai, India</span></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">GH</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">in</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon">X</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <p className="copyright">© 2025 Karthikeyan K | Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
