'use strict'
export function warningMessage() {

	const warningButton = document.querySelector('#warningButton')
	const warningMessageClose = document.querySelector('#warningMessageClose')
	const warningMessage = document.querySelector('.warning-message')
	const header = document.querySelector('.header')

	const showWarningMessage = () => {
		warningMessage.classList.add('_active')
		header.classList.add('_hidden')
	}

	const hiddenWarningMessage = () => {
		warningMessage.classList.remove('_active')
		header.classList.remove('_hidden')
	}

	warningButton.addEventListener('click', showWarningMessage)
	warningMessageClose.addEventListener('click', hiddenWarningMessage)
}