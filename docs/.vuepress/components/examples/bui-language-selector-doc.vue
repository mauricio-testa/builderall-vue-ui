<template>
  <div>
    <bui-language-selector v-model="lang" />
    <span class="my-3 d-block"> Model: {{ lang }} </span>
    <bui-language-selector
      v-model="lang"
      only-flag
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      lang: 'pt_BR'
    }
  }
}
</script>
