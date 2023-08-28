import barba from '@barba/core'
import { transition } from "./modules/_barba.js"
import { burger } from "./modules/_burger.js"
import { sendForm } from "./modules/_form.js"
import { hello } from "./modules/_hello.js"
import { initSlider } from "./modules/_initSlider.js"
import { loader } from "./modules/_loader.js"
import { warningMessage } from "./modules/_warningMessage.js"


hello()
loader()
sendForm()
burger()
initSlider()
warningMessage()
transition()

barba.hooks.enter(() => {
	initSlider()
})