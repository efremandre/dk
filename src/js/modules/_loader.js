'use strict'

export function loader() {
	const setLoader = () => {
		const loader = document.querySelector('.loader')
		const main = document.querySelector('.main')
		loader.classList.add('_show')
		// main.classList.add('_hidden')
		localStorage.setItem('loader', 'true')

		setTimeout(() => {
			loader.classList.remove('_show')
			// main.classList.remove('_hidden')
		}, 5600)
	}

	let flag = localStorage.getItem('loader')

	document.addEventListener('DOMContentLoaded', () => {
		if (flag) {
			flag === 'true' ? console.log('Делаем красиво жиесть! ☝️') : setLoader()
		}

		if (!flag) {
			setLoader()
		}
	})

	gsap.set(".loader__text_top span", { xPercent: -100 })
	gsap.set(".loader__text_bottom span", { xPercent: -100 })
	gsap.set(".loader-decore__rain", { yPercent: -100 })
	gsap.set(".loader-decore__title", { xPercent: -110 })

	const tl = gsap.timeline()
	tl
		.to('.loader-decore__rain', { duration: .8, yPercent: 0, stagger: .3 })
		.to(".loader__text span", { duration: .8, xPercent: 0, stagger: .2 }, '-=.6')
		.to(".loader__text span", { duration: .5, scale: .7 })
		.to('.loader-decore__title', { duration: .8, xPercent: 0 })
		.to(".loader__text span", { duration: .8, xPercent: 100, stagger: .2 }, '-=.5')
		.to('.loader-decore__title', { duration: .8, xPercent: 100 })
		.to('.loader-decore__title', { duration: 0, xPercent: -110 })
}