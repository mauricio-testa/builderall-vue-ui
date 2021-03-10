// Permite usar bootstrap vue nos componentes

import { BootstrapVue } from 'bootstrap-vue'
import vSelect from 'vue-select'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles.scss'

// Isso permite que o plugin esteja disponível no site

import { BuilderallVueUi } from './../../src/main.js'
import '../../src/main.scss'

export default ({ Vue, options, router, siteData }) => {
  const BUI_CONFIG = {
    rtl: false
  }

  const BV_CONFIG = {
    BToast: {
      toaster: 'b-toaster-bottom-right',
      appendToast: true,
      noCloseButton: true
    },
    BModal: {
      centered: true,
      noFade: true
    }
  }
  Vue.component('v-select', vSelect)
  Vue.use(BootstrapVue, BV_CONFIG)
  Vue.use(BuilderallVueUi, BUI_CONFIG)
}
