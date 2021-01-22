# BUISidebar

Menu lateral e menu mobile

## Demo
<Demo componentName="examples-bui-sidebar-doc" />

## Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-sidebar-doc.vue
</SourceCode>

## All options

### Demo
<Demo componentName="examples-bui-sidebar-doc-complete" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-sidebar-doc-complete.vue
</SourceCode>

## Active menu
O menu será considerado ativo quando a sua propriedade `name` for igual á propriedade `active-menu`

### Demo
<Demo componentName="examples-bui-sidebar-doc-active" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-sidebar-doc-active.vue{3,22}
</SourceCode>

::: tip
Para não exibir nenhum menu no footer do sidebar, apenas passe `menus-bottom` como um array vazio `[]`
:::

## Links suportados
Href, `<inertia-link>` & `<router-link>` support

Using href:
```js {4,5}
let item = {
	title: 'Menu item',
	name: 'item', 
	href: 'http://builderall.com',
	target: '_blank', // optional
	icon: 'gear'
}
```
Using `<inertia-link>`:
```js {4}
let item = {
	title: 'Menu item',
	name: 'item', 
	inertia: this.$route('clouds'),
	icon: 'gear'
}
```
Using `<router-link>`:
```js {4}
let item = {
	title: 'Menu item',
	name: 'item', 
	to: '/',
	icon: 'gear'
}
```

## Custom items
É possível personalizar o conteúdo dos itens utilizando os [slots](#slots).
### Demo
<Demo componentName="examples-bui-sidebar-doc-slots" />

### Code
<SourceCode>
<<< @/docs/.vuepress/components/examples/bui-sidebar-doc-slots.vue
</SourceCode>

## API Reference

### Props
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `user` | `Object` | `{name: 'The user name',email: 'mail@builderall.com', gravatar: '...', locale: 'pt_BR'}` | Dados do usuário logado. Um objeto que deve obrigatoriamente possuir as chaves `name`, `email`, `gravatar`, `locale`  |
| `rtl` | `Boolean` | `false` | Se a aplicação está em RTL ou não |
| `sidebar-state` | `String` | `'expanded'` | Estado do sidebar. Utilizado para exibir o menu hamburguer aberto ou fechado. Possíveis valores: `'expanded'`, `'mini'`, `'disabled'` |
| `active-menu` | `String` | `null` | O menu que está ativo com base em `menu.name`|
| `menus` | `Array` | `[{title  : 'Menu item', name: 'item', href: '/', icon: 'gear'}]` | Menus sidebar e mobile |
| `menus-bottom` | `Array` | `[{title  : 'Menu item', name: 'item', href: '/', icon: 'gear'}]` | Menus adicionar para o footer do sidebar |


### Slots
| Name | Description |
| -------- | ----------- |
| `item` | Slot para personalizar item de menu no sidebar |
| `item-bottom` | Slot para personalizar item de menu no sidebar bottom |
| `item-mobile` | Slot para personalizar item de menu no sidebar mobile |

