<template>
	<bui-navbar
		logo="https://booking.builderall.com/images/images/meta/logo.png"
		:user="user">
	</bui-navbar>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: "Mauricio Testa",
				email: "mauriciotesta@gmail.com",
				language: "pt_BR",
				gravatar:"https://secure.gravatar.com/avatar/2253502b4562dad48c2c74681c459dd1"
			}
		}
	}
}
</script>