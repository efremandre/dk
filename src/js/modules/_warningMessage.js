'use strict'
export function warningMessage() {

	const warningButton = document.querySelector('#warningButton')
	const warningMessageClose = document.querySelector('#warningMessageClose')
	const warningMessage = document.querySelector('.warning-message')

	const showWarningMessage = () => {
		warningMessage.classList.add('_active')
	}

	const hiddenWarningMessage = () => {
		warningMessage.classList.remove('_active')
	}

	warningButton.addEventListener('click', showWarningMessage)
	warningMessageClose.addEventListener('click', hiddenWarningMessage)
}