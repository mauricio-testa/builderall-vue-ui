<template>
	<div>
		<b-button variant="danger" @click="deleteItem()" class="mx-1">Delete</b-button>
		<b-button variant="success" @click="sendNotification()" class="mx-1">Send notification</b-button>

		<bui-modal-confirm ref="modal"></bui-modal-confirm>
	</div>
</template>

<script>
export default {
	methods: {
		deleteItem() {
			this.$refs.modal.show({
				iconName: 'trash',
				title: 'Deseja mesmo excluir?',
				message: 'Se eu fosse você não faria isso...',
				okVariant:"danger",
				okTitle: "Excluir",
				cancelVariant:"default",
				cancelTitle:"Cancelar",
				data: { id: 16 },
				onSuccess: (data) => alert('delete id ' + data.id),
				onCancel: (data) => alert('cancel deleting id ' + data.id),
			})
		},
		sendNotification() {
			this.$refs.modal.show({
				iconName: 'gear',
				title: 'Enviar notificação?',
				message: 'Uma notificação será enviada a todos os seus contatos',
				okVariant: "success",
				okTitle: "Enviar",
				onSuccess: () => alert('sending notifications...'),
				onCancel: () => alert('not send'),
			})
		}
	}
}
</script>