import { langs } from "./langs";

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
      obj.hasOwnProperty("key") &&
      obj.hasOwnProperty("desc")
    )
}

export const menusProp = {
  type: Array,
  required: false,
  default: () => {
    return []
  },
}

export const userProp = {
  type: Object,
  required: false,
  validator: value =>
    value.hasOwnProperty("name") &&
    value.hasOwnProperty("email") &&
    value.hasOwnProperty("gravatar"),
  default: () => {
    return {
      name: 'The user name',
      email: 'mail@builderall.com',
      gravatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      locale: 'pt_BR'
    }
  }
}