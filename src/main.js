import './main.scss'

import * as components from './components'

const defaultOptions = {
  rtl: false
}

export const BuilderallVueUi = {
  install (Vue, options = {}) {
    // merge options
    const appOptions = Object.assign({}, defaultOptions, options)

    // components
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component)
    }
    // prototypes
    Vue.prototype.$buiOptions = {
      isRtl: appOptions.rtl
    }
  }
}
