
<template>
	<div class="bui-icon" v-html="icon" :style="style"></div>
</template>

<script>

import icons from "../../assets/js/icons";
import { camelCase, startCase } from 'lodash';

const makeIconName = icon => `BUI${startCase(camelCase(icon)).replace(/ /g, '')}`

export default {

	name: 'bui-icon',

	props: {
		name: {
			required: true,
			type: String,
			validator: value => {
				return icons.hasOwnProperty(makeIconName(value))
			}
		},
		size: {
			type: Number,
			required: false,
			default: 22
		},
		white: {
			type: Boolean,
			required: false,
			default: false
		}
	},

	computed: {
		icon: function () {
			return icons[makeIconName(this.name)]
		},
		
		style: function () {
			let styles = {
				'width' : this.size + 'px',
				'height': this.size + 'px',
			};
			if (this.white) {
				styles['filter'] = 'brightness(0) invert(1)'
			}
			return styles
		},
	}
}
</script>

<style scoped>
.bui-icon {
	display: inline-block;
}
</style>