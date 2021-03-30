<template>
  <div>
    <div class="d-flex align-items-end mb-5">
      <bui-icon
        v-for="i in 8"
        :key="i"
        name="gear"
        class="mx-2"
        :size="i * 15"
        :variant="currentVariant"
      />
    </div>

    <b-button
      v-for="(variant, key) in variants"
      :key="key"
      class="m-1 border-0"
      :variant="variant"
      @click="currentVariant = variant"
    >
      {{ variant }}
    </b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      variants: ['natural', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'white', 'gray'],
      currentVariant: 'natural'
    }
  }
}
</script>