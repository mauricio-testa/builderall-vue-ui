<template>
  <div class="fake-container">
    <nav class="fake-navbar" />
    <bui-container :sidebar-state="sidebarState">
      <b-button
        v-for="option in options"
        :key="option"
        class="mx-1"
        :disabled="sidebarState == option"
        @click="sidebarState = option"
      >
        {{ option }}
      </b-button>
    </bui-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sidebarState: 'expanded',
      options: ['disabled', 'expanded', 'mini']
    }
  }
}
</script>
