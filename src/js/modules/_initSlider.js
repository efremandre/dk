'use strict'
import Swiper, { Autoplay, Pagination } from 'swiper'

export function initSlider() {
	const port = new Swiper('.key__swiper', {
		modules: [Pagination, Autoplay],
		loop: true,
		speed: 2000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 3000,
		},
		slidesPerView: 1
	})
}