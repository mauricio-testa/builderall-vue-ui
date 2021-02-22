<template>
  <div>
    <b-button @click="toast('danger')" variant="danger">Danger</b-button>
    <b-button @click="toast('warning')" variant="warning">Warning</b-button>
    <b-button @click="toast('success')" variant="success">Success</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    toast(variant) {
      this.$bvToast.toast("Hello! I am a toast!", {
        variant: variant,
      });
    },
  },
};
</script>