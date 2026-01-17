import { useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const newsCategories = [
  { id: 'all', name: 'All' },
  { id: 'events', name: 'Events' },
  { id: 'products', name: 'Products' },
  { id: 'awards', name: 'Awards' },
  { id: 'press', name: 'Press' },
];

const newsItems = [
  {
    id: 1,
    title: 'Boffi at Salone del Mobile 2024',
    excerpt: 'Discover our latest innovations presented at the world\'s most important furniture fair.',
    category: 'events',
    date: 'April 16, 2024',
    image: '/images/news/salone-2024.jpg',
    slug: 'salone-del-mobile-2024',
  },
  {
    id: 2,
    title: 'New K14 Kitchen Collection',
    excerpt: 'Introducing the revolutionary K14 kitchen system designed by Norbert Wangen.',
    category: 'products',
    date: 'March 28, 2024',
    image: '/images/news/k14-launch.jpg',
    slug: 'k14-kitchen-collection',
  },
  {
    id: 3,
    title: 'Wallpaper Design Awards Winner',
    excerpt: 'Boffi has been awarded the prestigious Wallpaper Design Award for Best Kitchen Design.',
    category: 'awards',
    date: 'February 15, 2024',
    image: '/images/news/wallpaper-award.jpg',
    slug: 'wallpaper-design-awards',
  },
  {
    id: 4,
    title: 'Featured in Architectural Digest',
    excerpt: 'Our latest residential project in Miami has been featured in the April issue of AD.',
    category: 'press',
    date: 'January 20, 2024',
    image: '/images/news/ad-feature.jpg',
    slug: 'architectural-digest-feature',
  },
  {
    id: 5,
    title: 'New Flagship Store in Tokyo',
    excerpt: 'Boffi opens its newest showroom in the heart of Tokyo\'s design district.',
    category: 'events',
    date: 'December 5, 2023',
    image: '/images/news/tokyo-store.jpg',
    slug: 'tokyo-flagship-store',
  },
  {
    id: 6,
    title: 'Sustainable Materials Initiative',
    excerpt: 'Our commitment to sustainability with new eco-friendly material options.',
    category: 'products',
    date: 'November 12, 2023',
    image: '/images/news/sustainability.jpg',
    slug: 'sustainable-materials',
  },
  {
    id: 7,
    title: 'Collaboration with Patricia Urquiola',
    excerpt: 'Announcing a new collaboration with renowned designer Patricia Urquiola.',
    category: 'products',
    date: 'October 8, 2023',
    image: '/images/news/urquiola-collab.jpg',
    slug: 'patricia-urquiola-collaboration',
  },
  {
    id: 8,
    title: 'Red Dot Design Award',
    excerpt: 'The Boffi Code bathroom collection wins Red Dot Best of the Best.',
    category: 'awards',
    date: 'September 25, 2023',
    image: '/images/news/red-dot.jpg',
    slug: 'red-dot-design-award',
  },
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredNews = activeCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="page page--news">
      <main className="main">
        {/* Hero */}
        <section className="news-hero">
          <h1>News & Events</h1>
          <p>Stay updated with the latest from Signature</p>
        </section>

        {/* Category Filter */}
        <section className="news-filter">
          <div className="filter-tabs">
            {newsCategories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        {activeCategory === 'all' && (
          <section className="news-featured">
            <article className="featured-article">
              <div className="featured-image">
                <img src={newsItems[0].image} alt={newsItems[0].title} />
              </div>
              <div className="featured-content">
                <span className="news-category">{newsItems[0].category}</span>
                <h2 className="featured-title">{newsItems[0].title}</h2>
                <p className="featured-excerpt">{newsItems[0].excerpt}</p>
                <span className="news-date">{newsItems[0].date}</span>
                <Link to={`/news/${newsItems[0].slug}`} className="button button--primary">
                  Read More
                </Link>
              </div>
            </article>
          </section>
        )}

        {/* News Grid */}
        <section className="news-grid-section">
          <div className="news-grid">
            {filteredNews.slice(activeCategory === 'all' ? 1 : 0).map(item => (
              <article key={item.id} className="news-card">
                <Link to={`/news/${item.slug}`} className="news-card-link">
                  <div className="news-card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-card-content">
                    <span className="news-category">{item.category}</span>
                    <h3 className="news-card-title">{item.title}</h3>
                    <p className="news-card-excerpt">{item.excerpt}</p>
                    <span className="news-date">{item.date}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="news-newsletter">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Be the first to know about our latest news, events, and product launches.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="button button--primary">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;
