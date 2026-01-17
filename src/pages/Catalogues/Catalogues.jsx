import { useState } from 'react';
import './Catalogues.css';

const catalogueCategories = [
  { id: 'all', name: 'All' },
  { id: 'kitchens', name: 'Kitchens' },
  { id: 'bathrooms', name: 'Bathrooms' },
  { id: 'wardrobes', name: 'Wardrobes' },
  { id: 'living', name: 'Living' },
  { id: 'outdoor', name: 'Outdoor' },
];

const catalogues = [
  {
    id: 1,
    title: 'Boffi Catalogue 2024',
    category: 'all',
    image: '/images/catalogues/catalogue-main.jpg',
    year: '2024',
    pages: 320,
  },
  {
    id: 2,
    title: 'Kitchens Collection',
    category: 'kitchens',
    image: '/images/catalogues/catalogue-kitchens.jpg',
    year: '2024',
    pages: 180,
  },
  {
    id: 3,
    title: 'Bathroom Systems',
    category: 'bathrooms',
    image: '/images/catalogues/catalogue-bathrooms.jpg',
    year: '2024',
    pages: 150,
  },
  {
    id: 4,
    title: 'Wardrobe Solutions',
    category: 'wardrobes',
    image: '/images/catalogues/catalogue-wardrobes.jpg',
    year: '2024',
    pages: 120,
  },
  {
    id: 5,
    title: 'Living Systems',
    category: 'living',
    image: '/images/catalogues/catalogue-living.jpg',
    year: '2023',
    pages: 90,
  },
  {
    id: 6,
    title: 'Outdoor Collection',
    category: 'outdoor',
    image: '/images/catalogues/catalogue-outdoor.jpg',
    year: '2023',
    pages: 80,
  },
  {
    id: 7,
    title: 'K14 Kitchen System',
    category: 'kitchens',
    image: '/images/catalogues/catalogue-k14.jpg',
    year: '2023',
    pages: 60,
  },
  {
    id: 8,
    title: 'Bagno Boffi',
    category: 'bathrooms',
    image: '/images/catalogues/catalogue-bagno.jpg',
    year: '2023',
    pages: 100,
  },
];

const Catalogues = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCatalogues = activeCategory === 'all'
    ? catalogues
    : catalogues.filter(cat => cat.category === activeCategory);

  return (
    <div className="page page--catalogues">
      <main className="main">
        {/* Hero */}
        <section className="catalogues-hero">
          <h1>Catalogues</h1>
          <p>Download our digital catalogues and discover our complete collections</p>
        </section>

        {/* Category Filter */}
        <section className="catalogues-filter">
          <div className="filter-tabs">
            {catalogueCategories.map(category => (
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

        {/* Catalogues Grid */}
        <section className="catalogues-grid-section">
          <div className="catalogues-grid">
            {filteredCatalogues.map(catalogue => (
              <article key={catalogue.id} className="catalogue-card">
                <div className="catalogue-image">
                  <img src={catalogue.image} alt={catalogue.title} />
                  <div className="catalogue-overlay">
                    <button className="btn-download">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
                <div className="catalogue-info">
                  <h3 className="catalogue-title">{catalogue.title}</h3>
                  <div className="catalogue-meta">
                    <span className="catalogue-year">{catalogue.year}</span>
                    <span className="catalogue-pages">{catalogue.pages} pages</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Request Physical Catalogue */}
        <section className="request-catalogue">
          <div className="request-content">
            <h2>Request a Physical Catalogue</h2>
            <p>
              Would you prefer to receive our catalogues in print? Fill out the form
              and we'll send them directly to your address.
            </p>
            <a href="/contacts" className="button button--primary">
              Request Catalogue
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Catalogues;
