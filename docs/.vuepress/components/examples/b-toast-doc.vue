<template>
  <div>
    <b-button
      variant="danger"
      @click="toast('danger')"
    >
      Danger
    </b-button>
    <b-button
      variant="warning"
      @click="toast('warning')"
    >
      Warning
    </b-button>
    <b-button
      variant="success"
      @click="toast('success')"
    >
      Success
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    toast (variant) {
      this.$bvToast.toast('Hello! I am a toast!', {
        variant: variant
      })
    }
  }
}
</script>
