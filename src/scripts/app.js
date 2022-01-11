import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
import Offcanvas from '../../node_modules/bootstrap/js/src/offcanvas';

console.log(Offcanvas);


function checkMobileHeaderPosition (header, mobileHeader) {
	let headerHeight = header.offsetHeight;

	if (window.pageYOffset > headerHeight) {
		mobileHeader.classList.add('MobileHeader-visible');
	} else {
		mobileHeader.classList.remove('MobileHeader-visible');
	}
}

document.addEventListener('DOMContentLoaded', function () {
	let windowWidth = document.documentElement.clientWidth;
	let menuHamburger = document.querySelector('.MenuHamburger');
	let header = document.querySelector('.Header');
	let mobileHeader = document.querySelector('.MobileHeader');
	// let mobileSidebar = document.querySelector('.MobileSidebar');
	let wrapper = document.querySelector('.Wrapper');

	// document.addEventListener('click', function (e) {
	// 	let menuHamburger = e.target.closest('.MenuHamburger');

	// 	if (!menuHamburger) return;

	//   // menuHamburger.classList.toggle('MenuHamburger-active');
	//   mobileSidebar.classList.toggle('MobileSidebar-opened');
	//   wrapper.classList.toggle('Wrapper-openedMobileSidebar');

	//   // document.body.style.overflow = windowWidth < 768 ? 'hidden' : '';
	//   // document.body.style.overflow = 'hidden';
	//   if (document.body.style.overflow == 'hidden') {
	//   	document.body.style.overflow = '';
	//   } else {
	//   	document.body.style.overflow = 'hidden';
	//   }

	//   e.preventDefault();
	// });


	// document.addEventListener('click', function (e) {
	// 	let closeMobileSidebar = e.target.closest('.MobileSidebar_closeBtn');

	// 	if (!closeMobileSidebar) return;

	//   // menuHamburger.classList.remove('MenuHamburger-active');
	//   mobileSidebar.classList.remove('MobileSidebar-opened');
	//   wrapper.classList.remove('Wrapper-openedMobileSidebar');

	//   document.body.style.overflow = '';

	//   e.preventDefault();
	// });

	// document.addEventListener('click', function (e) {
	// 	let filterLink = e.target.closest('.FilterLink');

	// 	if (!filterLink) return;


	// });

	// document.addEventListener('click', function (e) {
		
	// });


	const objectMediaSwiper = new Swiper('.ObjectMediaSwiper', {
	  modules: [Navigation, Pagination, Lazy],

	  slidesPerView: 1,
	  loop: true,

		preloadImages: false,
		lazy: true,

	  navigation: {
	    prevEl: '.ObjectMediaSwiper_prev',
	    nextEl: '.ObjectMediaSwiper_next',
	  },
	});

	checkMobileHeaderPosition(header, mobileHeader);

	window.addEventListener('scroll', function(e) {
		checkMobileHeaderPosition(header, mobileHeader);
	});
});
