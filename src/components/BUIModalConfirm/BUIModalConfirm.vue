<template>
  <b-modal
    ref="modal"
    :title="options.title"
    :ok-variant="options.okVariant"
    :cancel-variant="options.cancelVariant"
    :cancel-title="options.cancelTitle"
    centered
    no-fade
    @ok="ok"
    @cancel="cancel"
    @hide="reset"
  >
    <template #modal-ok="{ ok }" @click="ok">
      <bui-icon
        v-if="options.iconName"
        :name="options.iconName"
        white
        :size="15"
      ></bui-icon>
      {{ options.okTitle }}
    </template>
    <p class="modal-body-text" v-if="options.message">
      {{ options.message }}
    </p>
    <slot />
  </b-modal>
</template>

<script>
const DEFAULT_OPTIONS = {
  title: "Title",
  message: null,
  okVariant: "primary",
  okTitle: "Ok",
  cancelVariant: "default",
  cancelTitle: "Cancel",
  iconName: null,
  data: {},
  onSuccess: () => ({}),
  onCancel: () => ({}),
};

export default {
  name: "bui-modal-confirm",

  data() {
    return {
      options: DEFAULT_OPTIONS,
    };
  },

  methods: {
    show(options) {
      this.options = Object.assign({}, this.options, options);
      this.$refs.modal.show();
      this.$nextTick(() => {
        setTimeout(() => {
          let el = this.$refs.modal.$refs["ok-button"];
          if (el) el.focus();
        }, 200);
      });
    },

    ok: function () {
      if (
        this.options.onSuccess &&
        typeof this.options.onSuccess == "function"
      ) {
        this.options.onSuccess(this.options.data);
      }
    },

    cancel: function () {
      if (this.options.onCancel && typeof this.options.onCancel == "function") {
        this.options.onCancel(this.options.data);
      }
    },

    reset: function () {
      this.options = Object.assign({}, DEFAULT_OPTIONS);
      console.log("reset", this.options, DEFAULT_OPTIONS);
    },
  },
};
</script>