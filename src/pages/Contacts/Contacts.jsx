import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptPrivacy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="page page--contacts">
      <Header />
      
      <main className="main">
        {/* Hero */}
        <section className="contacts-hero">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </section>

        {/* Contact Form */}
        <section className="contacts-form-section">
          <div className="contacts-container">
            <div className="contacts-info">
              <h2>Get in Touch</h2>
              <p>
                For inquiries about our products, services, or to schedule a
                consultation, please fill out the form or contact us directly.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <h3>Headquarters</h3>
                  <p>
                    Boffi S.p.A.<br />
                    Via Oberdan, 70<br />
                    20823 Lentate sul Seveso (MB)<br />
                    Italy
                  </p>
                </div>
                
                <div className="contact-detail">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+390362573234">+39 0362 573234</a>
                  </p>
                </div>
                
                <div className="contact-detail">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@boffi.com">info@boffi.com</a>
                  </p>
                </div>
              </div>
            </div>

            <form className="contacts-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Subject *</option>
                  <option value="general">General Inquiry</option>
                  <option value="products">Product Information</option>
                  <option value="project">Project Consultation</option>
                  <option value="support">Customer Support</option>
                  <option value="press">Press Inquiry</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  id="accept-privacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="accept-privacy">
                  I accept the <a href="/privacy-policy">Privacy Policy</a> *
                </label>
              </div>
              
              <button type="submit" className="button">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
