<template>
	<div>

		<!-- inertia link -->
		<inertia-link
			as="b-nav-item"
			v-if="menu.inertia"
			:href="menu.inertia"
			:active="menu.active"
			:id="`sidebar-menu-${_uid}`">
			<b-tooltip
				:disabled="!showTooltip"
				:target="`sidebar-menu-${_uid}`"
				placement="right"> {{menu.title}}
			</b-tooltip>
			<slot/>
		</inertia-link>

		<!-- router link -->
		<b-nav-item 
			v-else-if="menu.to"
			:to="menu.to"
			:active="menu.active"
			:id="`sidebar-menu-${_uid}`">
			<b-tooltip
				:disabled="!showTooltip"
				:target="`sidebar-menu-${_uid}`"
				placement="right"> {{menu.title}}
			</b-tooltip>
			<slot/>
		</b-nav-item >

		<!-- href common -->
		<b-nav-item
			v-else
			:href="menu.href"
			:active="menu.active"
			:target="menu.target"
			:id="`sidebar-menu-${_uid}`">
			<b-tooltip
				:disabled="!showTooltip"
				:target="`sidebar-menu-${_uid}`"
				placement="right"> {{menu.title}}
			</b-tooltip>
			<slot/>
		</b-nav-item>
	</div>
</template>

<script>
export default {

	name: 'bui-sidebar-item',

	props: {
		/* 
		 * O item de menu
		 */
		menu: {
			type: Object,
			required: true,
			validator: (value) => 
				value.hasOwnProperty("title") &&
				value.hasOwnProperty("icon") &&
				(
					value.hasOwnProperty("inertia") ||
					value.hasOwnProperty("to") ||
					value.hasOwnProperty("href")
				)
		},

		/* 
		 * Se é pra exibir tooltip 
		 * ao passar mouse no ícone ou não
		 */
		showTooltip: {
			type: Boolean,
			required: false,
			default: true
		},
	}
}
</script>