# Tabs

[BootstrapVue Toast Reference](https://bootstrap-vue.org/docs/components/toast)

## Demo
<Demo componentName="examples-b-toast-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/b-toast-doc.vue
</SourceCode>

### Plugin config

```js
const BV_CONFIG = {
  BToast: {
    toaster: 'b-toaster-bottom-right',
    appendToast: true,
    noCloseButton: true,
    variant: 'success'
  }
}

Vue.use(BootstrapVue, BV_CONFIG);
```