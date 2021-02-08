# BUIModalConfirm

Simple confirmation modal with callbacks support, that can be mounted through function or slot. It has two buttons: Clicking cancel it executes the `onCancel()` function and clicking ok it executes `onSuccess()`.

## Demo
<Demo componentName="examples-bui-modal-confirm-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-modal-confirm-doc.vue
</SourceCode>

## How to use
You must add a `<bui-modal-confirm ref="modal"></bui-modal-confirm>` to your application and define a ref for it.
After, just open it using `this.$refs.modal.show({})` sending the desired options as a parameter.

### Available options:
| Key | Default | Description |
| -------- | ---- | ------- | 
| `title` | `'Title'` | Modal title |
| `message` | `null` | Modal message |
| `okVariant` | `'primary'` | Button ok variant |
| `okTitle` | `'Ok'` | Button ok text |
| `cancelVariant` | `'default'` | Button cancel variant |
| `cancelTitle` | `'Cancel'` | Button cancel text |
| `iconName` | `null` | icon that appears with the confirm button |
| `data` | `{}` | Data needed to perform callbacks. This same variable will be sent by parameter in the `onSuccess` and `onCancel` |
| `onSuccess` | `(data) => ({})` | Callback executed when confirming  |
| `onCancel` | `(data) => ({})` | Callback executed when canceling |

## Slot

If you want custom content for the modal instead of the description box, you can use the default slot.

### Demo
<Demo componentName="examples-bui-modal-confirm-slot-doc" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-modal-confirm-slot-doc.vue
</SourceCode>

::: tip
Not needing a slot will give you the possibility to use a single ref for multiple confirmation operations
:::

## API Reference

### Slots
| Name | Description |
| -------- | ---- |
| `default` | Default content slot. If informed. `options.description` will have no effect |