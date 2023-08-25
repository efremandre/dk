'use strict'
import barba from '@barba/core'

export function transition() {
	gsap.set(".transition__title", { xPercent: -110 })

	const pageTransition = () => {
		const tl = gsap.timeline()

		tl.to('.transition__title', { duration: 1, xPercent: 0 })
		tl.to('.transition__title', { duration: 1, xPercent: 100 })
		tl.to('.transition__title', { duration: 0, xPercent: -110 })
	}

	function delay(n) {
		n = n || 2000
		return new Promise(done => {
			setTimeout(() => {
				done()
			}, n)
		})
	}

	barba.init({
		sync: true,
		transitions: [{
			async leave(data) {
				const done = this.async()

				pageTransition()
				await delay(1000)
				done()
			}
		}]
	})
}