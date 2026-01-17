import { Link } from 'react-router-dom';
import { getCategories } from '../../data/collectionsData';
import './Collections.css';

const Collections = () => {
  const categories = getCategories();

  return (
    <div className="collections-page">
      {/* Hero Section */}
      <section className="collections-hero">
        <div className="collections-hero__content">
          <h1 className="collections-hero__title">Collections</h1>
          <p className="collections-hero__description">
            Discover our complete range of luxury kitchens, bathrooms, wardrobes, and complementary items.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="collections-categories">
        <div className="collections-categories__container">
          <div className="collections-categories__grid">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/collections/${category.slug}`}
                className="category-tile"
              >
                <div className="category-tile__image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-tile__overlay"></div>
                </div>
                <div className="category-tile__content">
                  <h2 className="category-tile__title">{category.name}</h2>
                  <p className="category-tile__description">{category.description}</p>
                  <span className="category-tile__link">
                    Explore Collection
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
