<template>
	<div>
		<bui-sidebar
			:sidebar-state="sidebarState">
		</bui-sidebar>

		<bui-navbar
			@toggle-sidebar="toggleSidebar"
			:sidebar-state="sidebarState"
			logo="https://booking.builderall.com/images/images/meta/logo.png">
		</bui-navbar>

		<bui-container :sidebar-state="sidebarState">

			<!-- <router-view> </router-view> -->

			<bui-page title="Dashboard" subtitle="Working!">
				<bui-alert
					index="alert-01"
					title="Builderall VUE Library!"
					content="Lorem ipsum Lorem ipsum dolor">
				></bui-alert>

				Content here

			</bui-page>
		</bui-container>
	</div>
</template>

<script>

export default {
	data () {
		return  {
			/*
			 * This can be a vuex variable
			 * You can save this state in localStorage 
			 * and recover it on page reloads
			 */
			sidebarState: 'expanded',
		}
	},
	methods: {
		toggleSidebar(value) {
			this.sidebarState = value
		},
	}
}
</script>