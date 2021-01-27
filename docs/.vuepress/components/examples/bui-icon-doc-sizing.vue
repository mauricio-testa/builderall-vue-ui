<template>
<div>
	<div class="d-flex align-items-end">
		<bui-icon
			name="gear"
			class="mx-2"
			:size="i * 15"
			v-for="i in 8"
			:class="colorClass"
		/>
	</div>

	<b-button
		class="m-2 border-0"
		v-for="(color, key) in colors"
		:key="key"
		:style="{background: color}"
		@click="colorClass = key">
		{{ color }}
	</b-button>
</div>
</template>

<script>
export default {
	data() {
		return {
			colors: {
				teal: '#20c997',
				indigo: '#6610f2',
				orange: '#fd7e14'
			},
			colorClass: null,
		}
	},
}
</script>

<style lang="scss">
.bui-icon.bui-icon-gear {
	&.teal svg * {
		fill: #20c997;
	}
	&.indigo svg * {
		fill: #6610f2
	}
	&.orange svg * {
		fill: #fd7e14
	}
}
</style>