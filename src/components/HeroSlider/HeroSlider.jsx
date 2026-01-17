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
        'Kitchens that create a visual experience via projects designed to become architectural statements.',
      buttonText: 'Discover More',
      buttonLink: '/collection/kitchens',
      backgroundImage: '/images/hero/kitchen-hero.jpg',
      backgroundVideo: null,
    },
    {
      id: 2,
      heading: 'BATHROOMS',
      description:
        'Rational bathroom design moves away from rigid aesthetic by focusing on comfort, space and well-balanced functionality.',
      buttonText: 'Discover More',
      buttonLink: '/collection/bathrooms',
      backgroundImage: '/images/hero/bathroom-hero.jpg',
      backgroundVideo: null,
    },
    {
      id: 3,
      heading: 'WARDROBE',
      description:
        'From bookshelves to wardrobes, Boffi systems are available in a range of compositions to create unique living solutions.',
      buttonText: 'Discover More',
      buttonLink: '/collection/wardrobes',
      backgroundImage: '/images/hero/wardrobe-hero.jpg',
      backgroundVideo: null,
    },
  ];

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
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
