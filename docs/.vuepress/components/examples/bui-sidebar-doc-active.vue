<template>
	<bui-sidebar
		active-menu="sites"
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
					icon: 'upload',
					href: '/'
				},
				{
					title: 'Sites',
					name: 'sites',
					icon: 'gear',
					to: '/sites'
				},
			],
		}
	}
}
</script>