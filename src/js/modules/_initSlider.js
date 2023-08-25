'use strict'
import Swiper, { Autoplay, Controller, EffectFade, Mousewheel, Navigation, Pagination } from 'swiper'

export function initSlider() {

	const key = new Swiper('.key__swiper', {
		modules: [Pagination, Autoplay],
		loop: true,
		slidesPerView: 1,
		speed: 2000,
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: '.key__pagination.swiper-pagination',
			clickable: true,
		}
	})

	const mainSlider = new Swiper('.main-slider__swiper', {
		modules: [Pagination, Mousewheel],
		direction: "vertical",
		slidesPerView: "auto",
		speed: 600,
		mousewheel: {
			sensitivity: 1,
		},
		pagination: {
			el: '.main-slider__pagination.swiper-pagination',
			clickable: true,
		}
	})

	const portfolioSlider = new Swiper('.slider-portfolio__swiper', {
		modules: [Controller, Navigation, Pagination, EffectFade],
		slidesPerView: 1,
		spaceBetween: 20,
		effect: 'fade',
		pagination: {
			el: '.slider-portfolio__pagination.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: ".slider-portfolio__next.swiper-button-next",
			prevEl: ".slider-portfolio__prev.swiper-button-prev",
		}
	})

	mainSlider.on("slideChange afterInit init", function () {
		const currentSlide = this.activeIndex + 1
		const currentWrapper = document.querySelector('.main-slider__counter-wrapper')
		const currentCounter = document.querySelector('.main-slider__counter')
		const pagination = document.querySelector('.main-slider__pagination')

		if (currentSlide >= 3) {
			currentWrapper.classList.remove('_hidden')
			pagination.classList.remove('_hidden')
		} else {
			currentWrapper.classList.add('_hidden')
			pagination.classList.add('_hidden')
		}

		if (currentSlide === this.slides.length) {
			currentWrapper.classList.add('_hidden')
			pagination.classList.add('_hidden')
		}

		currentCounter.innerHTML = `
		<span class="main-slider__counter-current">
		${currentSlide < 10 ? + currentSlide - 2 : currentSlide - 2}
		</span> 
		/ 
		<span class="main-slider__counter-total">
			${this.slides.length - 3}
		</span>`
	})

	portfolioSlider.on("slideChange afterInit init", function () {
		let currentSlide = this.activeIndex + 1

		document.querySelector('.slider-portfolio__counter').innerHTML = `
		<span class="slider-portfolio__counter-current">
		${currentSlide}
		</span> 
		/ 
		<span class="slider-portfolio__counter-total">
		${this.slides.length}
		</span>`
	})

}