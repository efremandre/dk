'use strict'
export function burger() {
	const burger = document.querySelector('[data-burger]')
	const warningBtn = document.querySelector('#warningButton')
	const contactModal = document.querySelector('.contact')
	const body = document.body

	burger.addEventListener('click', () => {
		body.classList.toggle('stop-scroll')
		burger.classList.toggle('_active')
		contactModal.classList.toggle('_active')
		warningBtn.classList.toggle('_hidden')
	})
}