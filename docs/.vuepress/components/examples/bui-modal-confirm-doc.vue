<template>
  <div>
    <b-button
      variant="danger"
      class="mx-1"
      @click="deleteItem()"
    >
      <bui-icon
        name="trash"
        variant="white"
      />
      Delete
    </b-button>
    <b-button
      variant="success"
      class="mx-1"
      @click="sendNotification()"
    >
      <bui-icon
        name="submit-mail"
        variant="white"
      />
      Send notification
    </b-button>

    <bui-modal-confirm ref="modal" />
  </div>
</template>

<script>
export default {
  methods: {
    deleteItem () {
      this.$refs.modal.show({
        iconName: 'trash',
        title: 'Do you really want to delete?',
        message: "If I were you I wouldn't do that ...",
        okVariant: 'danger',
        okTitle: 'Delete',
        cancelVariant: 'default',
        cancelTitle: 'Cancel',
        data: { id: 16 },
        onSuccess: (data) => alert('delete id ' + data.id),
        onCancel: (data) => alert('cancel deleting id ' + data.id)
      })
    },
    sendNotification () {
      this.$refs.modal.show({
        iconName: 'submit-mail',
        title: 'Send notification?',
        message: 'A notification will be sent to all your contacts',
        okVariant: 'success',
        okTitle: 'Send',
        onSuccess: () => alert('sending notifications...'),
        onCancel: () => alert('not send')
      })
    }
  }
}
</script>
