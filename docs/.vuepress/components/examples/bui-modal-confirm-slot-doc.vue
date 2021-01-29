<template>
  <div>
    <b-button variant="warning" @click="rename()">Renomear</b-button>

    <bui-modal-confirm ref="modal">
      <bui-form-group title="Digite o novo nome">
        <b-input v-model="name"></b-input>
      </bui-form-group>
    </bui-modal-confirm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Florinda",
    };
  },
  methods: {
    rename() {
      this.$refs.modal.show({
        iconName: "gear",
        title: "Renomear",
        okVariant: "success",
        okTitle: "Salvar",
        cancelVariant: "default",
        cancelTitle: "Cancelar",
        onSuccess: (data) => alert("rename to " + this.name),
        onCancel: (data) => alert("not rename"),
      });
    },
  },
};
</script>