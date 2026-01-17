import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategory } from '../../data/collectionsData';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const categoryData = getCategory(category);

  // If category not found, redirect to collections
  if (!categoryData) {
    return <Navigate to="/collections" replace />;
  }

  // If category has no subcategories (like Wardrobes), redirect to listing
  if (!categoryData.subcategories && categoryData.items) {
    return <Navigate to={`/collections/${category}/items`} replace />;
  }

  const subcategories = categoryData.subcategories 
    ? Object.values(categoryData.subcategories) 
    : [];

  return (
    <div className="category-page">
      {/* Hero Section */}
      <section className="category-hero">
        <div className="category-hero__background">
          <img src={categoryData.image} alt={categoryData.name} />
          <div className="category-hero__overlay"></div>
        </div>
        <div className="category-hero__content">
          <nav className="category-breadcrumb">
            <Link to="/collections">Collections</Link>
            <span className="breadcrumb-separator">/</span>
            <span>{categoryData.name}</span>
          </nav>
          <h1 className="category-hero__title">{categoryData.name}</h1>
          <p className="category-hero__description">{categoryData.description}</p>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="category-subcategories">
        <div className="category-subcategories__container">
          <div className="category-subcategories__grid">
            {subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                to={`/collections/${category}/${subcategory.slug}`}
                className="subcategory-card"
              >
                <div className="subcategory-card__image">
                  <img src={subcategory.image} alt={subcategory.name} />
                  <div className="subcategory-card__overlay"></div>
                </div>
                <div className="subcategory-card__content">
                  <h3 className="subcategory-card__title">{subcategory.name}</h3>
                  <p className="subcategory-card__description">{subcategory.description}</p>
                  <span className="subcategory-card__link">
                    Explore
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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

export default CategoryPage;
