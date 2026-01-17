import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Collections.css';

const Collections = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'all');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'bathrooms', label: 'Bathrooms' },
    { id: 'wardrobes', label: 'Wardrobes and Systems' },
    { id: 'complementary', label: 'Complementary items' },
  ];

  const products = [
    {
      id: 1,
      name: 'K2',
      category: 'kitchens',
      designer: 'Norbert Wangen',
      image: '/images/products/k2.jpg',
      link: '/product/k2',
    },
    {
      id: 2,
      name: 'Code',
      category: 'kitchens',
      designer: 'Piero Lissoni',
      image: '/images/products/code.jpg',
      link: '/product/code',
    },
    {
      id: 3,
      name: 'Xila',
      category: 'kitchens',
      designer: 'Luigi Massoni',
      image: '/images/products/xila.jpg',
      link: '/product/xila',
    },
    {
      id: 4,
      name: 'Sabbia',
      category: 'bathrooms',
      designer: 'Naoto Fukasawa',
      image: '/images/products/sabbia.jpg',
      link: '/product/sabbia',
    },
    {
      id: 5,
      name: 'Minimal',
      category: 'bathrooms',
      designer: 'Giulio Gianturco',
      image: '/images/products/minimal.jpg',
      link: '/product/minimal',
    },
    {
      id: 6,
      name: 'Antibes',
      category: 'wardrobes',
      designer: 'Piero Lissoni',
      image: '/images/products/antibes.jpg',
      link: '/product/antibes',
    },
    {
      id: 7,
      name: 'Storage',
      category: 'wardrobes',
      designer: 'Boffi Studio',
      image: '/images/products/storage.jpg',
      link: '/product/storage',
    },
    {
      id: 8,
      name: 'Pipe',
      category: 'complementary',
      designer: 'Marcel Wanders',
      image: '/images/products/pipe.jpg',
      link: '/product/pipe',
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  return (
    <div className="page page--collections">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="collections-hero">
          <h1>Collections</h1>
        </section>

        {/* Filter Tabs */}
        <section className="collections-filter">
          <div className="collections-filter__container">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="collections-grid-section">
          <div className="collections-grid">
            {filteredProducts.map(product => (
              <Link key={product.id} to={product.link} className="product-card">
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-card__info">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__designer">{product.designer}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
