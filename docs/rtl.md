# RTL Support

O BootstrapVue não possui suporte a RTL, mas é possível adicionar o suporte RTL em sua aplicação BuilderallVueUi com 2 passos simples:

## 1 - Informe a direção ao documento

Você deve inserir na tag `html` do documento a direção dele para que os seletores CSS trabalhem corretamente

```html
<html dir="rtl">
<html dir="ltr">
```

## 2 - Informar a direção aos componentes

Você deve informar a propriedade `rtl` para todos os componentes que ela é necessária

- [BUILanguageSelector](/components/bui-language-selector.html)
- [BUINavbar](/components/bui-navbar.html)
- [BUISidebar](/components/bui-sidebar.html)

Para evitar redundância de código, é aconselhável criar um `prototype` vue e compartilhá-lo com esses componentes

```js
// is RTL?
Vue.prototype.$rtl = document.documentElement.dir == 'rtl'
```

```html
<bui-navbar :rtl="$rtl"/>
```
