<template>
  <b-alert :show="show" :dismissible="dismissible" fade class="bui-alert">
    <h5 v-text="title" v-if="title"></h5>
    <p v-text="content" v-if="content"></p>
    <div class="d-flex justify-content-end mt-n1 flex-md-row flex-column">
      <b-btn
        v-if="labelNoShowAgain !== false"
        class="m-0 mb-2 m-md-1"
        @click="hideForever"
        v-text="labelNoShowAgain"
      ></b-btn>
      <b-btn
        v-if="labelHide !== false"
        class="m-0 mb-2 m-md-1"
        @click="show = false"
        v-text="labelHide"
      ></b-btn>
    </div>
  </b-alert>
</template>

<script>
const prefix = "bui_store_alert";

export default {
  name: "bui-alert",

  props: {
    /*
     * Índice utilizado para identificar o alert
     * e informar se "não mostrar novamente" foi clicado
     */
    index: {
      required: true,
      type: String,
    },

    /*
     * Título do alerta
     */
    title: {
      required: false,
      type: String,
      default: null,
    },

    /*
     * Conteúdo do alerta
     */
    content: {
      required: false,
      type: String,
      default: null,
    },

    /*
     * Texto do botão que fecha o alerta
     */
    labelHide: {
      required: false,
      type: [String, Boolean],
      default: "Close",
    },

    /*
     * Texto do botão que fecha o alerta
     * e o impede de abrir novamente
     */
    labelNoShowAgain: {
      required: false,
      type: [String, Boolean],
      default: "No show again",
    },
  },

  data: () => {
    return {
      show: false,
    };
  },

  mounted() {
    this.show = !this.existsInLocalStorage();
  },

  methods: {
    existsInLocalStorage() {
      return localStorage.getItem(prefix + this.index) != null;
    },

    hideForever() {
      this.show = false;
      localStorage.setItem(prefix + this.index, 1);
    },
  },

  computed: {
    dismissible() {
      return this.labelHide !== false || this.labelNoShowAgain !== false;
    },
  },
};
</script>

<style lang="scss">
.bui-alert {
  background: url(../../assets/images/corner.png) left top no-repeat,
    url(../../assets/images/wave.png) right bottom/100% no-repeat,
    transparent linear-gradient(180deg, #5e81f4 0%, #1665d8 100%);
  border-radius: 16px;
  border: none;
  padding-top: 1.2rem;
  padding-left: 2rem;
  color: #fff;
  p {
    font-size: 0.85rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
  }
  .btn {
    background: #ffffff38;
    border: unset;
    font-weight: normal !important;
    text-transform: capitalize;
    border-radius: 8px;
  }
}
</style>
