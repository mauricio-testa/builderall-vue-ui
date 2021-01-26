# BUIContainer

BUIContainer deve ser utilizado em conjunto com [BUINavbar](/components/bui-navbar.html) e [BUISidebar](/components/bui-sidebar.html). 
Ele é necessário para estabelecer os espaçamentos necessários para estes componentes conforme o estado do sidebar, para fornecer responsividade e dar suporte ao RTL.
<br>
Por favor, visite a página [Layout](/layout.html) para ver como esses componentes trabalham em conjunto

## Basic usage
```html
<bui-container sidebar-state="expanded"></bui-container>
```
Se a sua aplicação usa o [Vue router](https://router.vuejs.org/), o slot `default` do `BUIContainer` é o lugar perfeito para injetar o `<router-view>`
```html
<bui-sidebar></bui-sidebar>
<bui-navbar logo="..."></bui-navbar>
<bui-container>
	<router-view></router-view>
</bui-container>
```

::: tip
Toda página renderizada no `router-view` deverá ter um [BUIPage](/components/bui-page.html) como elemento root.
:::

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
| `sidebar-state` | `String` | `'expanded'` | Estado do sidebar. Possíveis valores: `'expanded'`, `'mini'`, `'disabled'` |

### Slots
| Name | Description |
| -------- | ---- |
| `default` | Conteúdo para exibir dentro do container |