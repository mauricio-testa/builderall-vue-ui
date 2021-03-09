<template>
  <b-form-group ref="group">
    <slot name="label">
      <label v-if="label">
        {{ label }}
        <span
          v-if="required"
          class="bui-form-required"
        > * </span>
        <bui-icon
          v-if="help"
          v-b-tooltip.hover
          class="mx-2"
          name="info"
          :size="18"
          :title="help"
        />
      </label>
    </slot>
    <div
      ref="input"
      class="bui-input"
    >
      <slot />
      <div class="bui-input-actions">
        <slot name="actions" />
      </div>
    </div>
    <div
      v-if="value && maxChars"
      class="bui-form-char-counter"
    >
      {{ countStrLength(value) }}
    </div>
    <b-form-invalid-feedback :state="!error">
      {{ error }}
    </b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
export default {
  name: 'BuiFormGroup',

  props: {
    /*
     * Label do campo
     */
    label: {
      type: String,
      required: false,
      default: null
    },

    /*
     * Texto de ajuda que aparece no tooltip
     */
    help: {
      type: String,
      required: false,
      default: null
    },

    /*
     * Se é required
     */
    required: {
      type: Boolean,
      required: false,
      default: false
    },

    /*
     * Erros que o campo possui
     */
    error: {
      type: String,
      required: false,
      default: ''
    },

    /*
     * Número máximo de caracteres permitidos
     */
    maxChars: {
      type: Number,
      default: null,
      required: false
    },

    /*
     * Valor do campo.
     * Necessário para limitar o maxChars
     */
    value: {
      type: [Number, Object, String],
      required: false,
      default: null
    }
  },

  data () {
    return {
      element: null
    }
  },

  watch: {
    error (val) {
      if (this.error) {
        this.setInputErrorClass()
      } else {
        this.removeInputErrorClass()
      }
    }
  },

  async mounted () {
    await this.$refs.input.children.forEach((element) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName)) {
        this.element = element
      }
    })

    if (this.element) {
      this.setInputMaxLength()
      if (this.error) {
        this.setInputErrorClass()
      }
    }
  },

  methods: {
    setInputMaxLength () {
      if (this.maxChars && this.element) {
        this.element.maxLength = this.maxChars
      }
    },

    setInputErrorClass () {
      if (this.element) {
        this.element.classList.add('is-invalid')
      }
    },

    removeInputErrorClass () {
      if (this.element) {
        this.element.classList.remove('is-invalid')
      }
    },

    countStrLength (str) {
      return (str != null ? str.length : 0) + '/' + this.maxChars
    }
  }
}
</script>

<style lang="scss">
html[dir=rtl] {
  .bui-input .bui-input-actions {
    left: 0;
    right: unset;
  }
}
.bui-input {
  position: relative;
  .bui-input-actions {
    margin: 0 12px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    button {
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
