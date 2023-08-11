'use strict'
export function sendForm() {
	document.addEventListener('DOMContentLoaded', () => {

		const form = document.querySelectorAll('.ajax-contact-form')
		const note = document.querySelectorAll('.form-callback')
		console.log('form')

		const formArr = Array.from(form)
		const noteArr = Array.from(note)

		formArr.forEach((el) => {
			el.addEventListener('submit', formSend)
			async function formSend(e) {
				e.preventDefault()
				let formData = new FormData(el)

				let response = await fetch('../../vendor/send.php', {
					method: 'POST',
					body: formData,
				})

				if (response.ok) {
					let result = await response.json()
					let mes = `<p>${result.message}</p>`
					el.reset()
					noteArr.forEach(el => {
						el.innerHTML = mes
						el.classList.add('_form-callback-active')
						setTimeout(() => {
							el.classList.remove('_form-callback-active')
						}, 2000)
					})
				} else {
					noteArr.forEach(el => {
						el.innerHTML = 'Что-то пошло не так и ничего не отправилось...'
						el.classList.add('_form-callback-active')
						setTimeout(() => {
							el.classList.remove('_form-callback-active')
						}, 2000)
					})
				}
			}
		})

		const inputReq = document.querySelectorAll('[data-input-req]')
		const buttonSend = document.querySelectorAll('[data-button-send]')

		inputReq.forEach(el => {
			el.addEventListener('blur', ev => {
				let inputTarget = ev.target

				if (inputTarget.value.length > 2) {
					buttonSend.forEach(el => {
						el.removeAttribute('disabled')
					})
				}
			})
		})
	})
}