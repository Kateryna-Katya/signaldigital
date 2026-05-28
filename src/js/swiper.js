import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// =========================
// Characters Swiper
// =========================

let charactersSwiper = null;

const initCharactersSwiper = () => {
  const isMobile = window.innerWidth < 1440;

  if (isMobile && !charactersSwiper) {
    charactersSwiper = new Swiper('.characters-swiper', {
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

  if (!isMobile && charactersSwiper) {
    charactersSwiper.destroy(true, true);
    charactersSwiper = null;
  }
};

// =========================
// Gallery Swiper
// =========================

let gallerySwiper = null;

const initGallerySwiper = () => {
  const isMobile = window.innerWidth < 1440;

  if (isMobile && !gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Autoplay],

      slidesPerView: 1.6,
      spaceBetween: 16,

      loop: true,
      speed: 800,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  if (!isMobile && gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
};

// =========================
// Reviews Swiper
// =========================

let reviewsSwiper = null;

const initReviewsSwiper = () => {
  const isMobile = window.innerWidth < 1440;

  // MOBILE
  if (isMobile) {
    if (reviewsSwiper) {
      reviewsSwiper.destroy(true, true);
      reviewsSwiper = null;
    }

    reviewsSwiper = new Swiper('.reviews-swiper', {
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
  else {
    if (reviewsSwiper) {
      reviewsSwiper.destroy(true, true);
      reviewsSwiper = null;
    }

    reviewsSwiper = new Swiper('.reviews-swiper', {
      modules: [Navigation],

      slidesPerView: 4,
      spaceBetween: 24,

      navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
      },
    });
  }
};

// =========================
// INIT
// =========================

initCharactersSwiper();
initGallerySwiper();
initReviewsSwiper();

window.addEventListener('resize', () => {
  initCharactersSwiper();
  initGallerySwiper();
  initReviewsSwiper();
});