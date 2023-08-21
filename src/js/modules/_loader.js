'use strict'

export function loader() {
	const setLoader = () => {
		const loader = document.querySelector('.loader')
		const main = document.querySelector('.main')
		loader.classList.add('_show')
		main.classList.add('_hidden')
		localStorage.setItem('loader', 'true')

		setTimeout(() => {
			loader.classList.remove('_show')
			main.classList.remove('_hidden')
		}, 8100)
	}

	let flag = localStorage.getItem('loader')

	document.addEventListener('DOMContentLoaded', () => {
		if (flag) {
			flag === 'true' ? console.log('Делаем красиво!') : setLoader()
		}

		if (!flag) {
			setLoader()
		}
	})
}