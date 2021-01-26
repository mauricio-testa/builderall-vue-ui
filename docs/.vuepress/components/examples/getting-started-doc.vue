<template>
	<div>
		<bui-sidebar
			:menus="menus"
			:menus-bottom="menus"
			:sidebar-state="sidebarState">
		</bui-sidebar>

		<bui-navbar
			@toggle-sidebar="toggleSidebar"
			:sidebar-state="sidebarState"
			logo="https://booking.builderall.com/images/images/meta/logo.png">
		</bui-navbar>

		<bui-container :sidebar-state="sidebarState">

			<!-- <router-view> -->

			<bui-page title="Dashboard" subtitle="Welcome to a Builderall application!">
				<bui-alert
					index="alert-01"
					title="Builderall VUE UI Library!"
					content="Lorem ipsum Lorem ipsum dolor">
				></bui-alert>

				Content here

			</bui-page>

			<!-- </router-view> -->

		</bui-container>
	</div>
</template>

<script>

export default {
	data () {
		return  {
			sidebarState: 'expanded',
			menus: [{ title: 'Item', name: 'item1', icon: 'gear', href: '#'}],
		}
	},
	methods: {
		toggleSidebar(value) {
			this.sidebarState = value
		},
	}
}
</script>