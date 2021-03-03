import { langs } from './langs'
import { hasProperty } from '../../utils/index'

export const sidebarStateProp = {
  type: String,
  default: 'expanded',
  required: false,
  validator: value => ['disabled', 'mini', 'expanded'].includes(value)
}

export const languagesProp = {
  type: Array,
  required: false,
  default: () => langs,
  validator: value =>
    value.every(obj =>
      hasProperty(obj, 'key') &&
      hasProperty(obj, 'desc')
    )
}

export const menusProp = {
  type: Array,
  required: false,
  default: () => {
    return []
  }
}

export const userProp = {
  type: Object,
  required: false,
  validator: value =>
    hasProperty(value, 'name') &&
    hasProperty(value, 'email') &&
    hasProperty(value, 'gravatar'),
  default: () => {
    return {
      name: 'The user name',
      email: 'mail@builderall.com',
      gravatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      locale: 'pt_BR'
    }
  }
}
