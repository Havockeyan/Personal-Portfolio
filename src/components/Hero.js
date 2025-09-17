import TechLogos from './TechLogos';
import ScrollingText from './ScrollingText';

export default function Hero() {
  return (
    <div className="hero-container">
      <TechLogos />
      <div className="hero-content">
        <div className="hero-intro">
          <h1 className="hero-greeting">
            Hey <span className="wave">👋</span>, I'm <span className="hero-name">Karthikeyan</span>
          </h1>
          <h2 className="hero-title">
            <span className="title-prefix">I'm a</span> <span className="highlight"><ScrollingText /></span>
          </h2>
          <p className="hero-description">
            You've stumbled upon my little heaven on the web; Welcome and feel at home!
          </p>
        </div>
      </div>
    </div>
  );
}
