import 'server-only';

/**
 * Fetch and parse Medium RSS feed
 * @param {string} username - Medium username (without @)
 * @param {number} maxArticles - Maximum number of articles to return
 * @returns {Promise<Array>} Array of article objects
 */
export async function fetchMediumArticles(username, maxArticles = 10) {
  if (!username || username === 'your-medium-username') {
    return [];
  }

  try {
    // Use RSS2JSON API to convert RSS to JSON
    // Note: For production, consider getting a free API key from https://rss2json.com
    const rssUrl = `https://medium.com/feed/@${username}`;
    const apiKey = process.env.RSS2JSON_API_KEY || 'public';
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=${apiKey}`;
    
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0)'
      }
    });

    if (!response.ok) {
      console.error(`RSS2JSON API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    
    // Check if API returned an error
    if (data.status === 'error') {
      console.error('RSS2JSON API error:', data.message);
      return [];
    }
    
    if (!data.items || !Array.isArray(data.items)) {
      return [];
    }

    // Transform the RSS items to a cleaner format
    const articles = data.items.slice(0, maxArticles).map((item) => {
      // Extract image from content or use thumbnail
      const content = item.content || '';
      const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
      const image = imgMatch ? imgMatch[1] : item.thumbnail || null;

      // Extract description (first paragraph)
      const descMatch = content.match(/<p[^>]*>(.*?)<\/p>/);
      const description = descMatch 
        ? descMatch[1].replace(/<[^>]*>/g, '').substring(0, 200) + '...'
        : item.description?.substring(0, 200) + '...' || '';

      // Parse date
      const pubDate = item.pubDate ? new Date(item.pubDate) : new Date();

      return {
        title: item.title || 'Untitled',
        link: item.link || '#',
        description: description,
        image: image,
        pubDate: pubDate,
        author: item.author || username,
        categories: item.categories || []
      };
    });

    return articles;
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}
