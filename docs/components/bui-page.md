# BUIPage

BUIPage must be the root component of all views in your application. Through it you will display the title and subtitle of the current page, search input and button to create a new item

## Demo
<Demo componentName="examples-bui-page-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-page-doc.vue
</SourceCode>

## Custom content

You can customize the content of the two columns. But it is preferable that you do not use the `#page-header-left` slot and insert the customized content in the `#page-header-right` slot

### Demo
<Demo componentName="examples-bui-page-doc-slots" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-page-doc-slots.vue
</SourceCode>

## Breadcrumbs
<Demo componentName="examples-bui-page-doc-breadcrumbs" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-page-doc-breadcrumbs.vue
</SourceCode>

## API Reference

### Props
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `title` | `String` | `null` | Page title |
| `subtitle` | `String` | `null` | Page subtitle |
| `breadcrumbs` | `Array` | `[]` | A array of [breadcrumb items](https://bootstrap-vue.org/docs/components/breadcrumb)


### Slots
| Name | Description |
| -------- | ---- |
| `default` | Content to display below the title |
| `page-header-right` | Content to be displayed on the reverse side of the title ("new" button goes here) |
| `page-header-left` | Content to be displayed instead of the title and subtitle |
| `breadcrumb-item` | Slot that customize breadcrumb items | 
| `breadcrumb-end` | Slot after breadcrumbs | 
