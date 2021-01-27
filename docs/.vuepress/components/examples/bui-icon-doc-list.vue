<template>
	<div>
		<b-form-input type="search" v-model="search" class="my-3"></b-form-input>

		<div class="icons-grid">
			<div v-for="(icon, name) in icons" :key="name">
				<bui-icon :name="extractIconName(name)" :size="30"></bui-icon>
				{{ extractIconName(name) }}
			</div>
		</div>
		
		<!-- sizing test
		<div v-for="(icon, name) in icons" :key="name" class="d-flex align-items-end border-bottom">
			<bui-icon :name="extractIconName(name)" v-for="i in 10" :key="i" :size="i * 10"></bui-icon>
		</div>
		-->

	</div>
</template>

<script>

import icons from "../../../../src/assets/js/icons";
import {kebabCase} from 'lodash';

export default {
	data() {
		return {
			search: null,
		}
	},
	computed: {
		icons() {
			if (!this.search) {
				return icons
			}
			var filtered = {};
            for (var k in icons) {
                if (k.toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
                    filtered[k] = icons[k];
                }
            }
            return filtered;
		}
	},
	methods: {
		extractIconName(name) {
			return kebabCase(name.substr(3, name.length))
		},
	}
}
</script>

<style scoped>
.icons-grid {
	display: grid;
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
    gap: 1rem;
}
.icons-grid > div {
	display: flex;
    flex-direction: column;
    align-items: center;
	padding: 10px;
    background: #f9f9f9;
	text-align: center;
}
.icons-grid > div .bui-icon {
	margin: 10px;
}
</style>