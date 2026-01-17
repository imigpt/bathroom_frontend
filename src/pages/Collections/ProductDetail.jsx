import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategory, getItem, getItemDirect } from '../../data/collectionsData';
import './ProductDetail.css';

const ProductDetail = () => {
  const { category, subcategory, item } = useParams();
  const [activeAccordion, setActiveAccordion] = useState('materials');
  
  const categoryData = getCategory(category);
  
  if (!categoryData) {
    return <Navigate to="/collections" replace />;
  }

  // Get item data based on whether it's a direct item or subcategory item
  let itemData;
  let breadcrumbSubcategory = null;

  if (subcategory === 'items' || !categoryData.subcategories) {
    // Direct item (Wardrobes)
    itemData = getItemDirect(category, item);
  } else {
    // Subcategory item
    itemData = getItem(category, subcategory, item);
    breadcrumbSubcategory = categoryData.subcategories?.[subcategory];
  }

  if (!itemData) {
    return <Navigate to={`/collections/${category}`} replace />;
  }

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const getBackLink = () => {
    if (subcategory === 'items' || !categoryData.subcategories) {
      return `/collections/${category}/items`;
    }
    return `/collections/${category}/${subcategory}`;
  };

  return (
    <div className="product-detail">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="product-hero__image">
          <img src={itemData.heroImage} alt={itemData.name} />
        </div>
      </section>

      {/* Product Info Section */}
      <section className="product-info">
        <div className="product-info__container">
          <nav className="product-breadcrumb">
            <Link to="/collections">Collections</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to={`/collections/${category}`}>{categoryData.name}</Link>
            {breadcrumbSubcategory && (
              <>
                <span className="breadcrumb-separator">/</span>
                <Link to={`/collections/${category}/${subcategory}`}>
                  {breadcrumbSubcategory.name}
                </Link>
              </>
            )}
            <span className="breadcrumb-separator">/</span>
            <span>{itemData.name}</span>
          </nav>

          <div className="product-info__content">
            <div className="product-info__left">
              <h1 className="product-info__title">{itemData.name}</h1>
              {itemData.isNew && (
                <span className="product-info__badge">New</span>
              )}
            </div>
            <div className="product-info__right">
              <p className="product-info__description">{itemData.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {itemData.galleryImages && itemData.galleryImages.length > 0 && (
        <section className="product-gallery">
          <div className="product-gallery__container">
            <div className="product-gallery__grid">
              {itemData.galleryImages.map((image, index) => (
                <div key={index} className="product-gallery__item">
                  <img src={image} alt={`${itemData.name} - Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Details Accordion */}
      {itemData.technicalDetails && (
        <section className="product-technical">
          <div className="product-technical__container">
            <h2 className="product-technical__title">Technical Details</h2>
            
            <div className="product-accordion">
              {Object.entries(itemData.technicalDetails).map(([key, value]) => (
                <div 
                  key={key} 
                  className={`accordion-item ${activeAccordion === key ? 'accordion-item--active' : ''}`}
                >
                  <button 
                    className="accordion-header"
                    onClick={() => toggleAccordion(key)}
                  >
                    <span className="accordion-header__title">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="accordion-header__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d={activeAccordion === key ? "M5 12h14" : "M12 5v14M5 12h14"} />
                      </svg>
                    </span>
                  </button>
                  <div className="accordion-content">
                    <p>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects Section */}
      {itemData.relatedProjects && itemData.relatedProjects.length > 0 && (
        <section className="product-projects">
          <div className="product-projects__container">
            <h2 className="product-projects__title">Projects made with this product</h2>
            <div className="product-projects__grid">
              {itemData.relatedProjects.map((project, index) => (
                <Link 
                  key={index} 
                  to="/projects" 
                  className="project-card"
                >
                  <div className="project-card__image">
                    <img src={project.image} alt={project.name} />
                    <div className="project-card__overlay">
                      <span className="project-card__name">{project.name}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <section className="product-back">
        <div className="product-back__container">
          <Link to={getBackLink()} className="product-back__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to {breadcrumbSubcategory?.name || categoryData.name}</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
