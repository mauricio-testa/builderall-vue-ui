<template>
	<div>
		<bui-sidebar
			:sidebar-state="sidebarState"
			active-menu="sites"
			:rtl="false"
			:menus="menus"
			:menus-bottom="menus_bottom">
		</bui-sidebar>
		<b-button
			class="mx-1 mt-2"
			v-for="option in options"
			@click="sidebarState = option"
			:disabled="sidebarState == option">
			{{ option }}
		</b-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sidebarState: 'expanded',
			options: ['expanded', 'mini'],
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