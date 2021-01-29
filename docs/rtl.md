# RTL Support

O BootstrapVue não possui suporte a RTL, mas é possível adicionar o suporte RTL em sua aplicação BuilderallVueUi apenas inserindo a direção do documento na tag `html` e informando a direção ao usar a biblioteca.

`index.html`
```html
<html dir="rtl">
<html dir="ltr">
```

`app.js`
```js
Vue.use(BuilderallVueUi, {
	rtl: document.documentElement.dir == 'rtl'
})
```