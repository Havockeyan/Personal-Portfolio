import '../../styles/sections/hero.css';
import '../../styles/sections/projects.css';
import Footer from '../../components/Footer';
import { getPersonalConfig, getSiteConfig, getProjectsConfig } from '../../utils/configLoader';
import { DEFAULT_PROJECT_SETTINGS } from '../../constants/projects';

const personalConfig = getPersonalConfig();
const siteConfig = getSiteConfig();
const projectsConfig = getProjectsConfig();

export const metadata = {
  title: `Projects - ${personalConfig.name || 'Your Name'}`,
  description: siteConfig.seo?.description || `Explore selected projects built by ${personalConfig.name || 'Your Name'}`,
};


export default function ProjectsPage() {
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
          <h1 className="about-title">
            {projectsConfig.projects_settings?.title || DEFAULT_PROJECT_SETTINGS.title}
          </h1>
          <p className="about-description">
            {projectsConfig.projects_settings?.subtitle || DEFAULT_PROJECT_SETTINGS.subtitle}
          </p>
        </div>
      </section>

      <section className="projects-grid container">
        <div className="projects-list">
          {(projectsConfig.projects || []).map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-body">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <div className="tech-section">
                    <h4 className="tech-label">Frontend:</h4>
                    <div className="tech-tags">
                      {project.frontend.map((tech) => (
                        <span key={`${project.title}-frontend-${tech}`} className="tag-pill frontend">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="tech-section">
                    <h4 className="tech-label">Backend:</h4>
                    <div className="tech-tags">
                      {project.backend.map((tech) => (
                        <span key={`${project.title}-backend-${tech}`} className="tag-pill backend">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-links">
                  <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">
                    Repository →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}


