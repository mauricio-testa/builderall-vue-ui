<template>
	<div>
		<bui-sidebar
			:sidebar-state="sidebarState"
			active-menu="sites"
			:rtl="false"
			:menus="menus"
			:menus-bottom="menus_bottom">
		</bui-sidebar>

		<b-button class="m-1" v-b-toggle.sidebar-mobile>mobile</b-button>
		<b-button class="m-1" @click="sidebarState = 'mini'">mini</b-button>
		<b-button class="m-1" @click="sidebarState = 'expanded'">expanded</b-button>

	</div>
</template>

<script>
export default {
	data() {
		return {
			sidebarState: 'expanded',
			menus: [
				{ title: 'Dashboard', name: 'home', icon: 'upload', href: '/'},
				{ title: 'Sites', name: 'sites', icon: 'gear', to: '/sites' },
			],
			menus_bottom: [
				{ title: 'Office', name: 'backoffice', icon: 'upload', href: '#', target: '_blank'}
			],
		}
	}
}
</script>