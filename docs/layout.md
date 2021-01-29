# Layout

Existem várias formas de organizar um aplicativo desenvolvido com BuilderallVueUI. Mas todas elas devem possuir um [BUISidebar](/components/bui-sidebar.html), [BUINavbar](/components/bui-navbar.html) e [BUIContainer](/components/bui-container.html) no mesmo nível hierárquico e compartilhando da mesma variável `sidebar-state`. Dentro do [BUIContainer](/components/bui-container.html) é o lugar em que suas páginas devem ser contruídas.

```
├── BUISidebar
├── BUINavbar
├── BUIContainer
│   ├── BUIPage
```
________________
Se a sua aplicação usa o [Vue router](https://router.vuejs.org/), o slot `default` do `BUIContainer` é o lugar perfeito para inserir o `<router-view>`

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
<<< @/docs/.vuepress/components/examples/layout-doc.vue{22,33,39}
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

## File structure

Não há problema nenhum em manter todos os componentes de layout em um arquivo único (`bui-sidebar`, `bui-navbar` e `bui-container`).
No entanto, é uma boa prática manter cada componente em um arquivo separado, visto que cada um tem suas propriedades e eventos que necessitam implementação de métodos particulares, além de permitir a escalabilidade do sistema.
Portanto, uma boa abordagem para isso, seria usando uma estrutura de arquivos como esta:

```vue
├── App.vue
├── layout
│   ├── TheNavbar.vue
│   ├── TheSidebar.vue
|	views
│   ├── Home.vue
│   ├── About.vue
```

Assim:
* Cada view deve ter uma `bui-page` como elemento root
* O arquivo `TheNavbar` deve possuir unicamente o componente `<bui-navbar>` com todas as props e definição dos métodos de logout, alteração de idioma e alteração do estado do sidebar
* O arquivo `TheSidebar` deve possuir unicamente o componente `<bui-sidebar>`, com a definição dos menus, dados de usuário e todas as customizações de slots do componente.
* O arquivo `App.vue` deve agrupar todos esses componentes e disponibilizar um `<router-view>` slot para as views

`App.vue`
```html
<template>
	<the-sidebar/>
	<the-navbar/>
	<bui-container>
		<router-view/>
	</bui-container>
</template>
```

## Using a Layout file

Ás vezes você pode não utilizar [Vue Router](https://router.vuejs.org/) para gerenciar as rotas da sua aplicação e, portanto, não possuir um componente `router-view` para injetar as páginas nela. Exemplos disso são utilizando o Vue em conjunto com [Laravel](http://laravel.com/) ou [InertiaJs](https://inertiajs.com/). Nesses casos, uma boa opção é a criação de arquivos de layout: você apenas disponibiliza um `slot` ao invés do `router-view` e herda este componente em todas as páginas da aplicação.

`MyLayout.vue`
``` html{5}
<template>
	<the-sidebar/>
	<the-navbar/>
	<bui-container>
		<slot/>
	</bui-container>
</template>
```

`Home.vue`
```html{2,6}
<template>
	<my-layout>
		<bui-page title="Dashboard" subtitle="Working!">
			Home.vue
		</bui-page>
	</my-layout>
</template>
```