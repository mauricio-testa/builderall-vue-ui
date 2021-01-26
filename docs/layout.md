## Layout

Existem várias formas de organizar um aplicativo desenvolvido com builderall-vue-ui. Mas todas elas devem possuir um [BUISidebar](/components/bui-sidebar.html), [BUINavbar](/components/bui-navbar.html) e [BUIContainer](/components/bui-container.html) no mesmo nível hierárquico e compartilhando da mesma variável `sidebar-state`. Dentro do [BUIContainer](/components/bui-container.html) é o lugar em que suas páginas devem ser exibidas.

## Exemplo base funcional

<SourceCode>
<<< @/docs/.vuepress/components/examples/getting-started-doc.vue
</SourceCode>

::: tip
A única propriedade necessária para o funcionamento do layout base é a `logo` do `bui-navbar`. Se você não definir a propriedade `sidebarState`, por padrão ela será `expanded`
::: 

::: tip
Para desabilitar o `sidebar`, defina a propriedade `sidebarState` como `disabled`
::: 

## Exemplo base com localStorage

Para que o estado do sidebar seja lembrado ao recarregar a página, ou sair e abrir a aplicação novamente podemos usar o localStorage

<SourceCode>
<<< @/docs/.vuepress/components/examples/layout-doc.vue
</SourceCode>

## Usando Vuex

Para uma melhor organização de código, você pode modificar o estado do sidebar através do [Vuex](https://vuex.vuejs.org/), mapeando o `sidebarState` como uma variável do state e transformando o `toggleSidebar` em uma action

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

## Usando um arquivo de Layout

Ás vezes você pode não utilizar [Vue Router](https://router.vuejs.org/) para gerenciar as rotas da sua aplicação e, portando, não possuir um componente `router-view` para injetar as páginas nela. Exemplos disso são utilizando o Vue dentro do Laravel ou com Laravel + Inertia. Nesses casos, uma boa opção é a criação de arquivos de layout. Neste caso, você apenas disponibiliza um `slot` no lugar do `router-view` e herda este componente em todas as páginas da aplicação.

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