# RTL Support

Bootstrap Vue does not have RTL support, but it is possible to add RTL support to your Builderall Vue Ui application just by 
inserting the document direction in the `html` tag and informing if you want your application to behave in RTL when using the library (you can use the `dir` attribute itself for that)

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
_________

**Note:** This library offers RTL support only to its own components and to Bootstrap vue components with custom CSS. To customize other things, you can add necessary CSS within the selector `html[dir=rtl]`

## RTL Spacing Helper 

Bootstrap Vue provides us with some fantastic [spacing helper classes](https://bootstrap-vue.org/docs/reference/spacing-classes)! However, if we want a specific spacing only when the application is in RTL, for example, this is not possible.
<br>
Therefore, the Builderall Vue UI includes some classes of add-ons that determine the spacing to be used only in specific directions!
<br>
For example, `ml-rtl-3`, will add a margin to the left of 1rem for a given element, only when in RTL.

____

The complete syntax is:
`${property}${side}-${dir}-${size}`

::: details Expand to examples
<Demo componentName="examples-rtl-spacing-doc" />
If you change `ltr` to` rtl` in the above classes, everything will work the same way. But only when the document direction is `rtl`
:::