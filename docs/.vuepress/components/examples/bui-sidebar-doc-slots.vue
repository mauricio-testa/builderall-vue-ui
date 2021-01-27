<template>
	<div>
		<bui-sidebar
			sidebar-state="expanded"
			active-menu="sites"
			:rtl="false"
			:menus="menus"
			:menus-bottom="menus_bottom">
			<template #item="{ menu }">
				<template v-if="menu.name == 'config'">
					Este é o menu config
				</template>
				<template v-else>
					{{ menu.title }} <b-badge class="mr-1"> {{ menu.icon }}</b-badge>
				</template>
			</template>
			<template #item-bottom="{ menu }">
				{{ menu.title }} <b-badge> {{ menu.icon }}</b-badge>
			</template>
			<template #item-mobile="{ menu }">
				{{ menu.title }} <b-badge> {{ menu.icon }}</b-badge>
			</template>
		</bui-sidebar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menus: [
				{ title: 'Dashbard', name: 'home', icon: 'dashboard', href: '/'},
				{ title: 'Contacts', name: 'contact', icon: 'person', to: '/sites' },
				{ title: 'Configs', name: 'config', icon: 'gear', href: '/'},
			],
			menus_bottom: [
				{ title: 'Office', name: 'backoffice', icon: 'logo', href: '#', target: '_blank'}
			],
		}
	}
}
</script>