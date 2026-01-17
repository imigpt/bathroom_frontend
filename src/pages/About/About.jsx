import Header from '../../components/Header';
import './About.css';

const About = () => {
  return (
    <div className="page page--about">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero__background">
            <img src="/images/about/about-hero.jpg" alt="About Boffi" />
          </div>
          <div className="about-hero__overlay"></div>
          <div className="about-hero__content">
            <h1>About Boffi</h1>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="about-section">
          <div className="about-section__container">
            <h2 className="about-section__title">Philosophy</h2>
            <div className="about-section__content">
              <p className="about-section__text">
                Boffi is dedicated to finding new approaches to interior living and 
                functionalities to improve daily life in the home. Our designs combine 
                aesthetic excellence with functional innovation, creating spaces that 
                inspire and endure.
              </p>
              <p className="about-section__text">
                For over 90 years, Boffi has been at the forefront of Italian design, 
                collaborating with world-renowned architects and designers to create 
                kitchens, bathrooms, and living spaces that represent the pinnacle of 
                craftsmanship and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="about-section about-section--history">
          <div className="about-section__container">
            <h2 className="about-section__title">History</h2>
            <div className="timeline">
              <div className="timeline__item">
                <div className="timeline__year">1934</div>
                <div className="timeline__content">
                  <h3>The Beginning</h3>
                  <p>Piero Boffi founds the company in Lentate sul Seveso, Italy, starting with furniture craftsmanship.</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">1950s</div>
                <div className="timeline__content">
                  <h3>Kitchen Innovation</h3>
                  <p>Introduction of the first modular kitchen systems, revolutionizing the industry.</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">1970s</div>
                <div className="timeline__content">
                  <h3>Designer Collaborations</h3>
                  <p>Beginning of collaborations with internationally renowned designers.</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">1990s</div>
                <div className="timeline__content">
                  <h3>Bathroom Excellence</h3>
                  <p>Expansion into the bathroom sector with innovative designs.</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">2000s</div>
                <div className="timeline__content">
                  <h3>Global Expansion</h3>
                  <p>Opening of showrooms worldwide, establishing Signature as a leading luxury brand.</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__year">Today</div>
                <div className="timeline__content">
                  <h3>Boffi|DePadova</h3>
                  <p>The merger with De Padova and ADL creates a comprehensive design ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section about-section--values">
          <div className="about-section__container">
            <h2 className="about-section__title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Craftsmanship</h3>
                <p>Every piece is crafted with meticulous attention to detail, honoring Italian artisanal traditions.</p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Continuous research and development drive our commitment to design innovation.</p>
              </div>
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>Environmental responsibility guides our material choices and production processes.</p>
              </div>
              <div className="value-card">
                <h3>Excellence</h3>
                <p>We pursue excellence in every aspect, from design conception to final installation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
