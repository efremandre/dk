'use strict'
export function burger() {
	const burger = document?.querySelector('[data-burger]')
	const warningBtn = document.querySelector('#warningButton')
	const contactModal = document.querySelector('.contact')
	const body = document.body
	const pressUp = document?.querySelector('.button-up')

	burger.addEventListener('click', () => {
		body.classList.toggle('stop-scroll')
		burger.classList.toggle('_active')
		contactModal.classList.toggle('_active')
		warningBtn.classList.toggle('_hidden')
		if (pageYOffset > height) pressUp.classList.toggle('_active-button-up')
	})
}