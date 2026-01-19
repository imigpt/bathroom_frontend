import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './HeroSlider.css';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      heading: 'KITCHENS',
      description:
        'Our kitchens offer a visual experience through thoughtfully designed Bundles that stand as bold architectural statements.',
      buttonText: 'Discover More',
      buttonLink: '/collection/kitchens',
      backgroundImage: '/images/hero/Kitchen.jpg',
      backgroundVideo: null,
    },
    {
      id: 2,
      heading: 'BATHROOMS',
      description:
        'Our bathroom designs prioritise comfort and spatial ease, moving away from rigid aesthetics to achieve a thoughtful balance of form and function.',
      buttonText: 'Discover More',
      buttonLink: '/collection/bathrooms',
      backgroundImage: '/images/hero/Bathroom.jpg',
      backgroundVideo: null,
    },
    // {
    //   id: 3,
    //   heading: 'WARDROBE',
    //   description:
    //     'From bookshelves to wardrobes, Signature systems are available in a variety of configurations, allowing the creation of unique and personalised living solutions.',
    //   buttonText: 'Discover More',
    //   buttonLink: '/collection/wardrobes',
    //   backgroundImage: '/images/hero/Wardrobe.jpg',
    //   backgroundVideo: null,
    // },
  ];

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide__background">
              {slide.backgroundVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={slide.backgroundImage}
                >
                  <source src={slide.backgroundVideo} type="video/mp4" />
                </video>
              ) : (
                <img src={slide.backgroundImage} alt={slide.heading} />
              )}
            </div>
            <div className="slide__overlay"></div>
            <div className="slide__content">
              <h2 className="slide__heading">{slide.heading}</h2>
              <p className="slide__description">{slide.description}</p>
              <Link to={slide.buttonLink} className="slide-button slide__button">
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
