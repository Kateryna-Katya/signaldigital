import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const createResponsiveSwiper = ({
  selector,
  nextBtn,
  prevBtn,
  desktopSlides = 4,
}) => {
  let swiper = null;

  const initSwiper = () => {
    const isMobile = window.innerWidth < 1440;

    // MOBILE
    if (isMobile && !swiper) {
      swiper = new Swiper(selector, {
        modules: [Autoplay],

        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        speed: 800,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    }

    // DESKTOP
    if (!isMobile) {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }

      // тільки для Reviews
      if (desktopSlides > 1 && !swiper) {
        swiper = new Swiper(selector, {
          modules: [Navigation],

          slidesPerView: desktopSlides,
          spaceBetween: 24,

          navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
          },
        });
      }
    }
  };

  initSwiper();

  window.addEventListener('resize', initSwiper);
};

// Characters
createResponsiveSwiper({
  selector: '.characters-swiper',
  desktopSlides: 1, // дестрой після 1440
});

// Gallery
createResponsiveSwiper({
  selector: '.gallery-swiper',
  desktopSlides: 1, // дестрой після 1440
});

// Reviews
createResponsiveSwiper({
  selector: '.reviews-swiper',
  nextBtn: '.reviews-next',
  prevBtn: '.reviews-prev',
  desktopSlides: 4,
});