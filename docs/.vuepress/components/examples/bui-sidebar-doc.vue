<template>
	<bui-sidebar
		:menus="[{ title: 'Dashboard', name: 'item1', icon: 'dashboard', href: '#'}]" 
		:menus-bottom="[{ title: 'Office', name: 'item2', icon: 'logo', href: '#'}]"
		active-menu="item1"
	></bui-sidebar>
</template>