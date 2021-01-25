<template>
	<bui-sidebar
		:menus="[{ title: 'Item', name: 'item1', icon: 'gear', href: '#'}]" 
		:menus-bottom="[{ title: 'Item', name: 'item2', icon: 'gear', href: '#'}]"
		active-menu="item1"
	></bui-sidebar>
</template>