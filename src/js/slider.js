import Swiper from 'swiper/bundle';

new Swiper('.reviews-swiper', {
	keyboard: true,
	pagination: {
		el: '.reviews-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 16,
		},
		1440: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
	},
});

new Swiper('.products-swiper', {
	keyboard: true,
	pagination: {
		el: '.products-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 16,
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
	},
});
