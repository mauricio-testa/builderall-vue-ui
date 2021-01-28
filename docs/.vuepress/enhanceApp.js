// Permite usar bootstrap vue nos componentes

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles.scss'

// Isso permite que o plugin esteja disponível no site

import { BuilderallVueUi } from './../../src/main.js'
import '../../src/main.scss'

export default ({ Vue, options, router, siteData }) => {
	Vue.use(BootstrapVue);
	Vue.use(BuilderallVueUi)
}