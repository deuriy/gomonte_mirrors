import $ from "jquery";
import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
import Offcanvas from '../../node_modules/bootstrap/js/src/offcanvas';
import Dropdown from '../../node_modules/bootstrap/js/src/dropdown';
import Collapse from '../../node_modules/bootstrap/js/src/collapse';

function checkMobileHeaderPosition (header, mobileHeader) {
	let headerHeight = header.offsetHeight;

	if (window.pageYOffset > headerHeight) {
		mobileHeader.classList.add('MobileHeader-visible');
	} else {
		mobileHeader.classList.remove('MobileHeader-visible');
	}
}

function checkDependentRadio (form) {
	if (!form) return;

	let parentRadio = form.querySelectorAll('[data-parent-radio]');

	parentRadio.forEach(parentRadioItem => {
		let dependentFields = form.querySelectorAll(`[data-dependent-field="${parentRadioItem.dataset.parentRadio}"]`);

		dependentFields.forEach(dependentField => {
			dependentField.hidden = !parentRadioItem.checked;
		});
	});
}

document.addEventListener('DOMContentLoaded', function () {
	let windowWidth = document.documentElement.clientWidth;
	let menuHamburger = document.querySelector('.MenuHamburger');
	let header = document.querySelector('.Header');
	let mobileHeader = document.querySelector('.MobileHeader');
	// let mobileSidebar = document.querySelector('.MobileSidebar');
	let wrapper = document.querySelector('.Wrapper');
	let mobileFilterForm = document.querySelector('.MobileFilter_form');

	document.addEventListener('click', function (e) {
		let parentMobileMenuItem = e.target.closest('.MobileMenu_item-parent');

		if (!parentMobileMenuItem) return;

		parentMobileMenuItem.classList.toggle('MobileMenu_item-expanded');

		e.preventDefault();
	});

	checkDependentRadio(mobileFilterForm);

	mobileFilterForm.querySelectorAll('input[type="radio"]').forEach(mobileFilterFormRadio => {
		mobileFilterFormRadio.addEventListener('change', function (e) {
			checkDependentRadio(mobileFilterForm);
		});
	});

	// $(document).on('click.bs.dropdown.data-api', '.keep-open', function (e) {
	//   e.stopPropagation();
	// });

	// $(document).on('click', function (e) {
	// 	console.log('Click!');
	// });

	// document.addEventListener('click', function (e) {
	// 	let filterElementDropdown = e.target.closest('.FilterElementDropdown');

	// 	if (!filterElementDropdown) return;

	// 	// console.log(filterElementDropdown);
	// 	// filterElementDropdown.classList.add('show');
	// 	// alert('Added!');

	// 	e.stopPropagation();
	// });

	$('.FilterElementDropdown').on('click', function (event) {
    event.stopPropagation();
	});

	// jQuery(document).on('click.bs.dropdown.data-api', '.keep-open', function (e) {
	//   e.stopPropagation();
	// });

	// document.addEventListener('change', function (e) {
	// 	let bedroomsNumberSwitcher = e.target.closest('.Switch_input[name="bedrooms_number"]');

	// 	if (!bedroomsNumberSwitcher) return;

	// 	console.log(bedroomsNumberSwitcher);

	// 	if (bedroomsNumberSwitcher.value == 'all') {
	// 		let otherCheckedSwitchers = bedroomsNumberSwitcher.closest('.Switches').querySelectorAll('.Switch_input[name="bedrooms_number"]:checked');
	// 		console.log(otherCheckedSwitchers);
	// 	}
	// });

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
