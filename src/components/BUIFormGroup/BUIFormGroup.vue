<template>
  <b-form-group ref="group">
    <slot name="label">
      <label v-if="label">
        {{ label }}
        <span class="bui-form-required" v-if="required"> * </span>
        <bui-icon
          class="mx-2"
          v-if="help"
          name="info"
          :size="18"
          v-b-tooltip.hover
          :title="help"
        ></bui-icon>
      </label>
    </slot>
    <div class="bui-input" ref="input">
      <slot></slot>
      <div class="bui-input-actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="bui-form-char-counter" v-if="value && maxChars">
      {{ countStrLength(value) }}
    </div>
    <b-form-invalid-feedback :state="!error">
      {{ error }}
    </b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
export default {
  name: "bui-form-group",

  props: {
    /*
     * Label do campo
     */
    label: {
      type: String,
      required: false,
    },

    /*
     * Texto de ajuda que aparece no tooltip
     */
    help: {
      type: String,
      required: false,
    },

    /*
     * Se é required
     */
    required: {
      type: Boolean,
      required: false,
      default: false,
    },

    /*
     * Erros que o campo possui
     */
    error: {
      type: String,
      required: false,
      default: "",
    },

    /*
     * Número máximo de caracteres permitidos
     */
    maxChars: {
      type: Number,
      default: null,
      required: false,
    },

    /*
     * Valor do campo.
     * Necessário para limitar o maxChars
     */
    value: {
      type: [Number, Object, String],
      required: false,
    },
  },

  data() {
    return {
      element: null,
    };
  },

  async mounted() {
    await this.$refs.input.children.forEach((element) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(element.tagName)) {
        this.element = element;
      }
    });

    if (this.element) {
      this.setInputMaxLength();
      if (this.error) {
        this.setInputErrorClass();
      }
    }
  },

  methods: {
    setInputMaxLength() {
      if (this.maxChars && this.element) {
        this.element.maxLength = this.maxChars;
      }
    },

    setInputErrorClass() {
      if (this.element) {
        this.element.classList.add("is-invalid");
      }
    },

    removeInputErrorClass() {
      if (this.element) {
        this.element.classList.remove("is-invalid");
      }
    },

    countStrLength(str) {
      return (str != null ? str.length : 0) + "/" + this.maxChars;
    },
  },

  watch: {
    error(val) {
      if (this.error) {
        this.setInputErrorClass();
      } else {
        this.removeInputErrorClass();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bui-input {
  position: relative;
  .bui-input-actions {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>