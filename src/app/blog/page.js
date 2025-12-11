import '../../styles/sections/hero.css';
import '../../styles/sections/blog.css';
import Footer from '../../components/Footer';
import { getPersonalConfig, getSiteConfig, getBlogConfig } from '../../utils/configLoader';
import { fetchMediumArticles } from '../../utils/mediumRSS';

const personalConfig = getPersonalConfig();
const siteConfig = getSiteConfig();
const blogConfig = getBlogConfig();

export const metadata = {
  title: `Blog - ${personalConfig.name || 'Your Name'}`,
  description: blogConfig.blog_settings?.description || `Read articles and insights by ${personalConfig.name || 'Your Name'}`,
};

export default async function BlogPage() {
  const mediumUsername = blogConfig.medium?.username || '';
  const maxArticles = blogConfig.medium?.max_articles || 10;
  const articles = await fetchMediumArticles(mediumUsername, maxArticles);

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
            {blogConfig.blog_settings?.title || 'Blog'}
          </h1>
          <p className="about-description">
            {blogConfig.blog_settings?.subtitle || 'Thoughts, tutorials, and insights'}
          </p>
        </div>
      </section>

      <section className="blog-grid container">
        {articles.length === 0 ? (
          <div className="blog-empty-state">
            <div className="empty-icon">📝</div>
            <h2>No articles found</h2>
            <p>
              {mediumUsername === '' || mediumUsername === 'your-medium-username'
                ? 'Please configure your Medium username in config/blog.yml'
                : 'Unable to fetch articles. Please check your Medium username or try again later.'}
            </p>
            {mediumUsername === '' || mediumUsername === 'your-medium-username' ? (
              <div className="empty-instructions">
                <p>To display your Medium articles:</p>
                <ol>
                  <li>Open <code>config/blog.yml</code></li>
                  <li>Set your Medium username in the <code>medium.username</code> field</li>
                  <li>Save and refresh this page</li>
                </ol>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="blog-list">
            {articles.map((article, index) => (
              <article key={`${article.link}-${index}`} className="blog-card">
                {article.image && (
                  <div className="blog-card-image">
                    <img src={article.image} alt={article.title} loading="lazy" />
                  </div>
                )}
                <div className="blog-card-body">
                  <div className="blog-card-header">
                    <time className="blog-date" dateTime={article.pubDate.toISOString()}>
                      {article.pubDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    {article.categories.length > 0 && (
                      <div className="blog-categories">
                        {article.categories.slice(0, 3).map((category, idx) => (
                          <span key={idx} className="blog-category-tag">
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <h3 className="blog-title">{article.title}</h3>
                  <p className="blog-description">{article.description}</p>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="blog-link"
                  >
                    Read on Medium →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
