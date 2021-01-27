<template>
	<div>
		<bui-sidebar
			:sidebar-state="sidebarState"
			active-menu="sites"
			:rtl="false"
			:menus="menus"
			:menus-bottom="menus_bottom">
		</bui-sidebar>

		<b-button class="mx-1 my-3" v-b-toggle.sidebar-mobile>mobile</b-button>
		<b-button class="mx-1 my-3" @click="sidebarState = 'mini'">mini</b-button>
		<b-button class="mx-1 my-3" @click="sidebarState = 'expanded'">expanded</b-button>

	</div>
</template>

<script>
export default {
	data() {
		return {
			sidebarState: 'expanded',
			menus: [
				{ title: 'Dashboard', name: 'home', icon: 'dashboard', href: '/'},
				{ title: 'Configs', name: 'config', icon: 'gear', href: '/'},
			],
			menus_bottom: [
				{ title: 'Office', name: 'backoffice', icon: 'logo', href: '#', target: '_blank'}
			],
		}
	}
}
</script>