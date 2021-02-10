# BUIIFormGroup

This is the easiest way to build a form field:
The component provides properties for label, help text, required field indicator, error message and character counter.

## Demo
<Demo componentName="examples-bui-form-group-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-form-group-doc.vue
</SourceCode>

## Sandbox

<Demo componentName="examples-bui-form-group-sandbox-doc" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-form-group-sandbox-doc.vue
</SourceCode>

## API Reference

### Props

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `label` | `String` | `undefined` | Field label |
| `help` | `String` | `undefined` | Help text that appears in the tooltip |
| `required` | `Boolean` | `false` | If required, an * will be displayed |
| `error` | `String` | `''` | Field-related error. If informed, the field gets error context (red borders) and the error shown below |
| `max-chars` | `Number` | `null` | If informed, a character counter will be displayed as the user fills in the field |
| `value` | `{Number, Object, String}` | `undefined` | Reference value to compare with maximum number of characters |

### Slots
| Name | Description |
| -------- | ---- |
| `default` | Slot for the input |
