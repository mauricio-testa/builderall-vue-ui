<template>
	<bui-sidebar
		:menus="[{ title: 'Item1', name: 'item1', icon: 'gear', href: '#'}]" 
		:menus-bottom="[{ title: 'Item2', name: 'item2', icon: 'plus', href: '#'}]"
		active-menu="item1"
	></bui-sidebar>
</template>