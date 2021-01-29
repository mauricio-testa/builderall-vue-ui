const defaultOptions = {
  rtl: false
};

import './main.scss'

import './assets/css/fonts.css'

import * as components from './components'

export const BuilderallVueUi = {
  install(Vue, options = {}) {

    // merge options
    let appOptions = Object.assign({}, defaultOptions, options);

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