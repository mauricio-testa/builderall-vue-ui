<template>
	<div>
		<bui-language-selector v-model="lang"/>
		<span class="mt-3 d-block">
			<strong>Model:</strong> {{ lang }}
		</span>
	</div>
</template>
<script>
export default {
	data() {
		return {
			lang: 'pt_BR'
		}
	}
}
</script>