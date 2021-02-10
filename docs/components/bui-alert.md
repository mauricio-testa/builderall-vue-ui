# BUIAlert

Alert used to give a contextual introduction to the page.
By clicking on the first button, the alert is hidden and a key is recorded in localStorage indicating that it should not be shown again the next time the component is mounted.
By clicking on the second button the alert is only hidden.

::: warning
The `index` property must be a single string and will define whether the alert should be shown or not.
It will be concatenated with `bui_store_alert` before being written to localStorage
:::

## Demo
<Demo componentName="examples-bui-alert-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-alert-doc.vue
</SourceCode>

## Custom buttons and title
You can define a title for the alert and customize the text of the buttons through the properties `title`, `label-hide` e `label-no-show-again`

### Demo
<Demo componentName="examples-bui-alert-doc-complete"></Demo>

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-alert-doc-complete.vue
</SourceCode>

## Hiding the Buttons
You can hide the buttons that remove the alert from the screen by setting properties `label-hide` and `label-no-show-again` to `false`

### Demo
<Demo componentName="examples-bui-alert-doc-hide-buttons" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-alert-doc-hide-buttons.vue
</SourceCode>

## Custom content
If you want to display custom content, simply omit the `title` and` content` properties and mount the html in the `default` slot

### Demo
<template>
<bui-alert index="alert-01">
  <p class="text-uppercase">Lorem ipsum</p>
  <bui-icon white name="whatsapp"/>
</bui-alert>
</template>

### Code
```html
<bui-alert index="alert-01">
  <p class="font-italic">Lorem ipsum</p>
  <bui-icon white name="whatsapp"/>
</bui-alert>
```

## API Reference

### Props

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `index` | `String` | `null` | The alert will be displayed if the key contained in `index` is not found in localStorage |
| `title` | `String` | `null` | Alert title |
| `content` | `String` | `null` | Alert content |
| `label-hide` | `{String|Boolean}` | `'Close'` | Label for the Close button. Set to `false` to hide it |
| `label-no-show-again` | `{String|Boolean}` | `'No show again'` | Label for the button to not show again. Set to `false` to hide it

### Slots
| Name | Description |
| -------- | ---- |
| `default` | Default content. The content here will overwrite the props content |
