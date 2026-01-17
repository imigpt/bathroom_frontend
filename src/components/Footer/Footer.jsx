import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    acceptPrivacy: false,
  });

  const menuItems = [
    { label: 'Kitchens', path: '/collection/kitchens' },
    { label: 'Bathrooms', path: '/collection/bathrooms' },
    { label: 'Wardrobes and Systems', path: '/collection/wardrobes' },
    { label: 'Complementary items', path: '/collection/complementary' },
    { label: 'About', path: '/about' },
    { label: 'Designers', path: '/designers' },
    { label: 'Projects', path: '/projects' },
    { label: 'News', path: '/news' },
    { label: 'Catalogues', path: '/catalogues' },
    { label: 'Contact', path: '/contacts' },
    { label: 'Store', path: '/store' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/BoffiOfficial/', 
      icon: '/images/icons/facebook.svg' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/boffi_official/', 
      icon: '/images/icons/instagram.svg' 
    },
    { 
      name: 'Pinterest', 
      url: 'https://www.pinterest.it/boffidepadova/', 
      icon: '/images/icons/pinterest.svg' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/boffi/', 
      icon: '/images/icons/linkedin.svg' 
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@boffi', 
      icon: '/images/icons/youtube.svg' 
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', formData);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Newsletter Section */}
          <div className="footer__newsletter">
            <h3 className="newsletter__title">Newsletter</h3>
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <div className="form__row">
                <input
                  type="email"
                  name="email"
                  className="form__input"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="firstName"
                  className="form__input"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  className="form__input"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form__checkbox">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  id="privacy-policy"
                  checked={formData.acceptPrivacy}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="privacy-policy">
                  I accept the{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </label>
              </div>
              <button type="submit" className="button newsletter__submit">
                Subscribe
              </button>
            </form>
          </div>

          {/* Menu Links */}
          <nav className="footer__menu">
            {menuItems.map((item) => (
              <div key={item.label} className="footer__menu-item">
                <Link to={item.path}>{item.label}</Link>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          {/* Social Links */}
          <div className="footer__social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>

          {/* Wrongdoings Links */}
          <div className="footer__wrongdoings">
            <a
              href="https://boffi.whistlelink.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report Wrongdoings Boffi Spa
            </a>
            <a
              href="https://boffitrade.whistlelink.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report Wrongdoings Boffi Trade
            </a>
          </div>

          {/* Legal Links */}
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <button type="button">Cookie Preferences</button>
            <Link to="/terms-conditions">Terms and Conditions</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p>© {new Date().getFullYear()} Boffi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
