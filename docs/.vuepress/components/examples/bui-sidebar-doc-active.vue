<template>
	<bui-sidebar
		active-menu="configs"
		:menus-bottom="[]"
		:menus="menus">
	</bui-sidebar>
</template>

<script>
export default {
	data() {
		return {
			menus: [
				{
					title: 'Dashboard',
					name: 'home',
					icon: 'dashboard',
					href: '/'
				},
				{
					title: 'Configs',
					name: 'configs',
					icon: 'gear',
					to: '/'
				},
			],
		}
	}
}
</script>