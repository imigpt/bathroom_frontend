import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategory, getSubcategory } from '../../data/collectionsData';
import './ListingPage.css';

const ListingPage = () => {
  const { category, subcategory } = useParams();
  const categoryData = getCategory(category);

  if (!categoryData) {
    return <Navigate to="/collections" replace />;
  }

  // Handle categories without subcategories (like Wardrobes)
  // In this case, subcategory param will be "items"
  let items = [];
  let pageTitle = categoryData.name;
  let pageDescription = categoryData.description;
  let breadcrumbPath = null;

  if (subcategory === 'items' || !categoryData.subcategories) {
    // Direct items listing (Wardrobes and Systems)
    items = categoryData.items || [];
    breadcrumbPath = null;
  } else {
    // Regular subcategory listing
    const subcategoryData = getSubcategory(category, subcategory);
    if (!subcategoryData) {
      return <Navigate to={`/collections/${category}`} replace />;
    }
    items = subcategoryData.items || [];
    pageTitle = subcategoryData.name;
    pageDescription = subcategoryData.description;
    breadcrumbPath = subcategoryData;
  }

  const getItemLink = (item) => {
    if (subcategory === 'items' || !categoryData.subcategories) {
      return `/collections/${category}/items/${item.slug}`;
    }
    return `/collections/${category}/${subcategory}/${item.slug}`;
  };

  return (
    <div className="listing-page">
      {/* Header Section */}
      <section className="listing-header">
        <div className="listing-header__container">
          <nav className="listing-breadcrumb">
            <Link to="/collections">Collections</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to={`/collections/${category}`}>{categoryData.name}</Link>
            {breadcrumbPath && (
              <>
                <span className="breadcrumb-separator">/</span>
                <span>{breadcrumbPath.name}</span>
              </>
            )}
          </nav>
          <h1 className="listing-header__title">{pageTitle}</h1>
          <p className="listing-header__description">{pageDescription}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="listing-products">
        <div className="listing-products__container">
          <div className="listing-products__count">
            {items.length} {items.length === 1 ? 'Product' : 'Products'}
          </div>
          
          <div className="listing-products__grid">
            {items.map((item) => (
              <Link
                key={item.id}
                to={getItemLink(item)}
                className="product-card"
              >
                <div className="product-card__image">
                  <img src={item.thumbnail} alt={item.name} />
                  {item.isNew && (
                    <span className="product-card__badge">New</span>
                  )}
                </div>
                <div className="product-card__content">
                  <h3 className="product-card__title">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          {items.length === 0 && (
            <div className="listing-empty">
              <p>No products available in this category.</p>
              <Link to={`/collections/${category}`} className="listing-empty__back">
                Back to {categoryData.name}
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ListingPage;
