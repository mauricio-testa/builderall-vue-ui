# Layout

Existem várias formas de organizar um aplicativo desenvolvido com BuilderallVueUI. Mas todas elas devem possuir um [BUISidebar](/components/bui-sidebar.html), [BUINavbar](/components/bui-navbar.html) e [BUIContainer](/components/bui-container.html) no mesmo nível hierárquico e compartilhando da mesma variável `sidebar-state`. Dentro do [BUIContainer](/components/bui-container.html) é o lugar em que suas páginas devem ser contruídas.

## Basic example

<SourceCode>
<<< @/docs/.vuepress/components/examples/getting-started-doc.vue
</SourceCode>

::: tip
A única propriedade necessária para o funcionamento do layout base é a `logo` do `bui-navbar`. Se você não definir a propriedade `sidebarState`, por padrão ela será `expanded`
::: 

::: tip
Para desabilitar o `sidebar`, defina a propriedade `sidebarState` como `disabled`
::: 

## Basic example with localStorage

Para que o estado do sidebar seja lembrado ao recarregar a página, ou sair e abrir a aplicação novamente podemos usar o localStorage

<SourceCode>
<<< @/docs/.vuepress/components/examples/layout-doc.vue{23,34,40}
</SourceCode>

## Using Vuex

Para uma melhor organização de código, você pode querer armazenar o estado do sidebar em uma store do [Vuex](https://vuex.vuejs.org/), mapeando o `sidebarState` como uma variável do state e transformando o `toggleSidebar` em uma action

``` javascript
import { mapState } from 'vuex'

export default {
	
	computed: mapState({
		sidebarState
	}),

	methods: {
		toggleSidebar(state) {
			this.$store.dispatch('toggleSidebar', state)		
		}
	},
}
```

## Using a Layout file

Ás vezes você pode não utilizar [Vue Router](https://router.vuejs.org/) para gerenciar as rotas da sua aplicação e, portanto, não possuir um componente `router-view` para injetar as páginas nela. Exemplos disso são utilizando o Vue em conjunto com [Laravel](http://laravel.com/) ou [InertiaJs](https://inertiajs.com/). Nesses casos, uma boa opção é a criação de arquivos de layout: você apenas disponibiliza um `slot` ao invés do `router-view` e herda este componente em todas as páginas da aplicação.

MyLayout.vue
``` html
<template>
	<div>
		<bui-sidebar> </bui-sidebar>
		<bui-navbar logo="https://booking.builderall.com/images/images/meta/logo.png"></bui-navbar>
		<bui-container>
			<slot/>
		</bui-container>
	</div>
</template>
```

About.vue
```html
<template>
	<my-layout>
		<bui-page title="Dashboard" subtitle="Working!">
			About.vue
		</bui-page>
	</my-layout>
</template>
```