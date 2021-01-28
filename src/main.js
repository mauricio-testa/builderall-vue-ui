import './main.scss'

import './assets/css/fonts.css'

import * as components from './components'

export const BuilderallVueUi = {
    install(Vue, options = {}) {
        // components
        for (const componentName in components) {
            const component = components[componentName]
            Vue.component(component.name, component)
		}
		// prototypes
		Vue.prototype.$buiOptions = {
			isRtl: document.documentElement.dir == 'rtl'
		}
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(BuilderallVueUi)
}
