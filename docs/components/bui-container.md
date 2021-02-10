# BUIContainer

This component must be used in conjunction with [BUINavbar](/components/bui-navbar.html) and [BUISidebar](/components/bui-sidebar.html). 
It is necessary to establish the necessary spacing for these components according to the state of the sidebar, to provide responsiveness and support RTL.
<br>
Please visit the [Layout page](/layout.html) to see how these components work together

## Basic usage
```html
<bui-container sidebar-state="expanded"></bui-container>
```

## Demo
<Demo componentName="examples-bui-container-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-container-doc.vue
</SourceCode>

## API Reference

### Props
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `sidebar-state` | `String` | `'expanded'` | Sidebar state (possible values: `'expanded'`, `'mini'`, `'disabled'`) |

### Slots
| Name | Description |
| -------- | ---- |
| `default` | Content to display inside the container. It is usually a [BUIPage](/components/bui-page.html) |