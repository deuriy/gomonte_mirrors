import Swiper, { Navigation, Pagination, Lazy } from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
  const advantagesSwiper = new Swiper('.AdvantagesSwiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    // // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.addEventListener('click', function (e) {
    let showFormBtn = e.target.closest('.ApplicationForm_showFormBtn');

    if (!showFormBtn) return;

    let fieldsWrapper = showFormBtn.closest('.ApplicationForm').querySelector('.ApplicationForm_fieldsWrapper');

    if (!fieldsWrapper) return;

    fieldsWrapper.classList.add('ApplicationForm_fieldsWrapper-visible');
    document.body.style.overflow = 'hidden';
  });

  document.addEventListener('click', function (e) {
    let closeFormBtn = e.target.closest('.ApplicationForm_closeBtn');

    if (!closeFormBtn) return;

    let fieldsWrapper = closeFormBtn.closest('.ApplicationForm').querySelector('.ApplicationForm_fieldsWrapper');

    if (!fieldsWrapper) return;

    fieldsWrapper.classList.remove('ApplicationForm_fieldsWrapper-visible');
    document.body.style.overflow = '';
  });
});