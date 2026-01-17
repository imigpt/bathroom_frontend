import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './About.css';

const About = () => {
  const [activeTimelineRange, setActiveTimelineRange] = useState(0);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const sliderRef = useRef(null);

  // Designer images for slider
  const designerSlides = [
    { id: 1, image: '/images/about/designer-1.jpg', name: 'Antonio Citterio' },
    { id: 2, image: '/images/about/designer-2.jpg', name: 'Piero Lissoni' },
    { id: 3, image: '/images/about/designer-3.jpg', name: 'Naoto Fukasawa' },
    { id: 4, image: '/images/about/designer-4.jpg', name: 'Patricia Urquiola' },
    { id: 5, image: '/images/about/designer-5.jpg', name: 'Vincent Van Duysen' },
    { id: 6, image: '/images/about/designer-6.jpg', name: 'Zaha Hadid' },
    { id: 7, image: '/images/about/designer-7.jpg', name: 'Marcel Wanders' },
  ];

  // Timeline ranges
  const timelineRanges = [
    '1934-1958',
    '1963-1980',
    '1989-1995',
    '1997-2001',
    '2002-2010',
    '2011-2016',
    '2017-2021',
    '2021-2025',
  ];

  // Timeline data organized by ranges
  const timelineData = [
    // 1934-1958
    [
      {
        year: 1934,
        image: '/images/about/timeline/1934.jpg',
        description: `A small, improvised studio and a great desire to experiment. Every evening, after finishing work at Caproni S.p.A., Piero Boffi retreats to the workshop next to his home to explore early-stage design projects in his own way. This is how the history of Signature begins.`,
      },
      {
        year: 1947,
        image: '/images/about/timeline/1947.jpg',
        description: `The industrial company takes shape. In Cesano Maderno, in the province of Monza Brianza, the first factory is founded, where Piero's sons – Pier Ugo, Dino and Paolo – work together in different roles.`,
      },
      {
        year: 1954,
        image: '/images/about/timeline/1954.jpg',
        description: `The group becomes a pioneer as the first company to promote a functional plan for modern homes and to work strategically on the international expansion of the brand.`,
      },
      {
        year: 1958,
        image: '/images/about/timeline/1958.jpg',
        description: `With his expressive graphic style, Giulio Confalonieri shapes the brand image in the company's first emerging advertising campaigns.`,
      },
    ],
    // 1963-1980
    [
      {
        year: 1963,
        image: '/images/about/timeline/1963.jpg',
        description: `The visionary spirit converges with that of Joe Colombo: The Minikitchen becomes an avant-garde symbol of kitchen-system design – a compact cube integrating all functions for preparation, storage and cleaning.`,
      },
      {
        year: 1966,
        image: '/images/about/timeline/1966.jpg',
        description: `With the opening of the first warehouse at Via Oberdan 70, Lentate sul Seveso becomes the new home.`,
      },
      {
        year: 1967,
        image: '/images/about/timeline/1967.jpg',
        description: `Pier Ugo and Gian Casé design a model that becomes a cornerstone of modern fitted kitchens: T12. In the same year, Luigi Massoni joins as Creative Director.`,
      },
      {
        year: 1980,
        image: '/images/about/timeline/1980.jpg',
        description: `Antonio Citterio and Paolo Nava design the Factory model, a high-tech version that blends the classical modernity of kitchens with the concept of the open-plan kitchen.`,
      },
    ],
    // 1989-1995
    [
      {
        year: 1989,
        image: '/images/about/timeline/1989.jpg',
        description: `At the end of the decade, Roberto Gavazzi – then a young entrepreneur – becomes CEO, bringing the necessary change and openness toward the company's internationalization.`,
      },
      {
        year: 1990,
        image: '/images/about/timeline/1990.jpg',
        description: `Art direction is entrusted to Piero Lissoni, whose contribution defines a series of strategies to create bespoke products and introduces a subtle glamour that permeates the product lines and the communication strategy.`,
      },
      {
        year: 1992,
        image: '/images/about/timeline/1992.jpg',
        description: `This is the year of Latina and Food Center, inaugurated with an installation by Lissoni directly inside the factory. Two models that highlight the core functions of the kitchen.`,
      },
      {
        year: 1995,
        image: '/images/about/timeline/1995.jpg',
        description: `The design legacy and the development strategies lead to the brand receiving the Compasso d'Oro alla Carriera. The company embarks on the long-planned path of internationalization.`,
      },
    ],
    // 1997-2001
    [
      {
        year: 1997,
        image: '/images/about/timeline/1997.jpg',
        description: `A bold statement for independent market strategy with a pivotal decision: Withdrawing from the Salone del Mobile to present the WK6 system in the deconsecrated San Paolo Converso church in Milan.`,
      },
      {
        year: 1998,
        image: '/images/about/timeline/1998.jpg',
        description: `The first monobrand store, Bagno-Boffi Solferino, opens on Via Solferino in Milan. This marks the beginning of a long series of monobrand stores worldwide.`,
      },
      {
        year: 2000,
        image: '/images/about/timeline/2000.jpg',
        description: `The company's international growth reaches the United States: Boffi Soho opens as the first in a series of showrooms across the country.`,
      },
      {
        year: 2001,
        image: '/images/about/timeline/2001.jpg',
        description: `Joins the Fondazione Altagamma, an association that brings together leading Italian high-end brands to promote Italian culture and "Made in Italy" around the world.`,
      },
    ],
    // 2002-2010
    [
      {
        year: 2002,
        image: '/images/about/timeline/2002.jpg',
        description: `Piero Lissoni's Case 5.0 embodies the essence of the architectural kitchen and becomes a performance piece defined by extraordinary proportions, materials and avant-garde functions.`,
      },
      {
        year: 2003,
        image: '/images/about/timeline/2003.jpg',
        description: `The German high-end kitchen brand Norbert Wangen is officially integrated into the universe, introducing an innovative style with its K-Series.`,
      },
      {
        year: 2004,
        image: '/images/about/timeline/2004.jpg',
        description: `Cut, the faucet designed by Mario Tessarollo and Tiberio Cerato, is nominated for the Compasso d'Oro and receives the 2004 Red Dot Award for Best Product Design.`,
      },
      {
        year: 2010,
        image: '/images/about/timeline/2010.jpg',
        description: `The brand expands its range with wardrobe systems through the "Solferino" project. At the same time, a collaboration begins with Fantini to create a collection of modern, refined faucets.`,
      },
    ],
    // 2011-2016
    [
      {
        year: 2011,
        image: '/images/about/timeline/2011.jpg',
        description: `Internationally, the company reaches 21 directly managed monobrand stores and 48 indirectly operated stores. Meanwhile, the Aboutwater project is launched in collaboration with Fantini.`,
      },
      {
        year: 2012,
        image: '/images/about/timeline/2012.jpg',
        description: `Expansion also extends to the production site and corporate offices: A new Training Center opens at the headquarters, featuring a large area dedicated to customer service and the presentation of the bathroom, kitchen, and system collections.`,
      },
      {
        year: 2015,
        image: '/images/about/timeline/2015.jpg',
        description: `This year marks the beginning of a major corporate strategy: Merger with De Padova, a historic company in modern furniture design.`,
      },
      {
        year: 2016,
        image: '/images/about/timeline/2016.jpg',
        description: `Signature Code: A new collection of fully custom-made furniture with personalized materials, finishes and storage options.`,
      },
    ],
    // 2017-2021
    [
      {
        year: 2017,
        image: '/images/about/timeline/2017.jpg',
        description: `De Padova enters a partnership with MA/U Studio, a Danish start-up specializing in high-quality shelving systems for living and workspaces.`,
      },
      {
        year: 2018,
        image: '/images/about/timeline/2018.jpg',
        description: `Receives the 2018 ADI Compasso d'Oro for the Eclipse project, developed in collaboration with Studiocharlie.`,
      },
      {
        year: 2019,
        image: '/images/about/timeline/2019.jpg',
        description: `With an initial 50% acquisition, ADL is integrated into the portfolio. The company, specialized in developing door systems, contributes to the continued growth of the industrial project.`,
      },
      {
        year: 2021,
        image: '/images/about/timeline/2021.jpg',
        description: `The strategy increasingly emphasizes the goal of offering 360-degree living solutions: Chelsea showroom moves into a new 900 m² space where all brand collections coexist harmoniously.`,
      },
    ],
    // 2021-2025
    [
      {
        year: 2022,
        image: '/images/about/timeline/2022.jpg',
        description: `During Milan Design Week, CASE 5.0 – BECOMING is unveiled, a reinterpretation released twenty years after Piero Lissoni's original introduction.`,
      },
      {
        year: 2025,
        image: '/images/about/timeline/2025.jpg',
        description: `Today, Signature operates 24 directly managed showrooms and 50 Studios worldwide, reflecting a philosophy of living in which diverse influences blend seamlessly into a single holistic concept.`,
      },
    ],
  ];

  // Auto-scroll slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const scrollWidth = sliderRef.current.scrollWidth;
        const clientWidth = sliderRef.current.clientWidth;
        const currentScroll = sliderRef.current.scrollLeft;
        
        if (currentScroll + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current.scrollLeft += 1;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleTimelineRangeClick = (index) => {
    setActiveTimelineRange(index);
    setActiveTimelineItem(0);
  };

  const handleTimelineItemClick = (index) => {
    setActiveTimelineItem(index);
  };

  const currentTimelineItems = timelineData[activeTimelineRange] || [];
  const currentItem = currentTimelineItems[activeTimelineItem] || {};

  return (
    <div className="page page--about">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero__content">
            <h1 className="about-hero__title">ABOUT</h1>
          </div>
        </section>

        {/* Designer Slider Section */}
        <section className="about-designers">
          <div className="designers-slider" ref={sliderRef}>
            <div className="designers-slider__track">
              {[...designerSlides, ...designerSlides].map((slide, index) => (
                <div key={`${slide.id}-${index}`} className="designer-slide">
                  <img src={slide.image} alt={slide.name} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Introduction Section */}
        <section className="about-story">
          <div className="about-story__container">
            <div className="about-story__image">
              <img 
                src="/images/about/story-main.jpg" 
                alt="Signature Design Heritage" 
              />
            </div>
            <div className="about-story__content">
              <p className="about-story__text">
                The history of Italian design is, in part, also the history of the Signature family, 
                who was able to establish connections with what would later become iconic names in the 
                international landscape of interior systems. But one must proceed in order; there's a 
                narrative thread leading back to a small artisan workshop in the province of Monza Brianza.
              </p>
              <p className="about-story__text">
                It's here that, in 1934, every night after working as a craftsman at the Caproni factory, 
                Piero Boffi switched on the light to experiment, dabble and create new ideas, which in the 
                years to come would revolutionise the concepts of cooking and living.
              </p>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="about-fullwidth-image">
          <img 
            src="/images/about/kitchen-lifestyle.jpg" 
            alt="Signature Kitchen Design" 
          />
        </section>

        {/* Timeline Section */}
        <section className="about-timeline">
          <div className="about-timeline__container">
            <h2 className="about-timeline__title">OUR STORY</h2>
            
            {/* Timeline Range Navigation */}
            <div className="timeline-ranges">
              {timelineRanges.map((range, index) => (
                <button
                  key={range}
                  className={`timeline-range ${activeTimelineRange === index ? 'active' : ''}`}
                  onClick={() => handleTimelineRangeClick(index)}
                >
                  {range}
                </button>
              ))}
            </div>

            {/* Timeline Year Navigation */}
            <div className="timeline-years">
              {currentTimelineItems.map((item, index) => (
                <button
                  key={item.year}
                  className={`timeline-year ${activeTimelineItem === index ? 'active' : ''}`}
                  onClick={() => handleTimelineItemClick(index)}
                >
                  {item.year}
                </button>
              ))}
            </div>

            {/* Timeline Content */}
            <div className="timeline-content">
              <div className="timeline-content__year">{currentItem.year}</div>
              <div className="timeline-content__body">
                <div className="timeline-content__image">
                  <img src={currentItem.image} alt={`Year ${currentItem.year}`} />
                </div>
                <div className="timeline-content__text">
                  <p>{currentItem.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="about-company">
          <div className="about-company__container">
            <div className="about-company__info">
              <h3>SIGNATURE (BATH & KITCHENS LTD)</h3>
              <p>Headquarter:</p>
              <p>123 Design Street</p>
              <p>London, UK</p>
              <p className="about-company__vat">Company Reg. No. 12345678</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
