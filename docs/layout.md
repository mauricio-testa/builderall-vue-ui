# Layout

There are several ways to organize an application developed with Builderall Vue UI. But they must all have a [BUISidebar](/components/bui-sidebar.html), [BUINavbar](/components/bui-navbar.html) and [BUIContainer](/components/bui-container.html) at the same hierarchical level and sharing the same variable `sidebar-state`. Inside the [BUIContainer](/components/bui-container.html) is the place where your pages should be built.

<SourceCode>
<<< @/docs/.vuepress/components/examples/getting-started-doc.vue
</SourceCode>

If your application uses the [Vue router](https://router.vuejs.org/), the `default` slot of `BUIContainer` is the perfect place to insert `<router-view>`

```vue{6}
<template>
  <div>
    <bui-sidebar ... />
    <bui-navbar ... />
    <bui-container ... >
      <router-view />
    </bui-container>
  </div>
</template>

```

## Basic example with localStorage

For the status of the sidebar to be remembered when reloading the page, or to exit and open the application again, we can use localStorage:

<SourceCode>
<<< @/docs/.vuepress/components/examples/layout-doc.vue{22,33,39}
</SourceCode>

## Using Vuex

For better code organization, you may want to store the sidebar state in a [Vuex store](https://vuex.vuejs.org/), mapping `sidebar-state` as a state variable and transforming `toggleSidebar` in an action.

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
There is no problem in keeping all layout components in a single file (`bui-sidebar`, `bui-navbar` e `bui-container`).
However, it is a good practice to keep each component in a separate file, since each has its properties and events that require implementation of particular methods, in addition to allowing the scalability of the system.
So a good approach for this would be to use a file structure like this:

```vue
├── App.vue
├── layout
│   ├── TheNavbar.vue
│   ├── TheSidebar.vue
|	views
│   ├── Home.vue
│   ├── About.vue
```

Thus:
* Each view must have a `bui-page` as root element
* The `TheNavbar` file must have only the component `<bui-navbar>` with all the props and definition of the logout methods, language change and change of the state of the sidebar
* The `TheSidebar` file must have only the component `<bui-sidebar>`, with the definition of the menus, user data and all the customizations of the component slots.
* The `App.vue` file must group all these components and provide a `<router-view>` slot for the views

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

Sometimes you may not use [Vue Router](https://router.vuejs.org/) to manage your application's routes and therefore you don't have a `router-view` component to inject pages into it. Examples of this are using Vue in conjunction with [Laravel](http://laravel.com/) or [InertiaJs](https://inertiajs.com/). In such cases, a good option is the creation of layout files: you only provide a `slot` instead of the `router-view` and inherit this component in all pages of the application

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