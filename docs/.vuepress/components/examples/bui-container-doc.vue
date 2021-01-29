<template>
  <div class="fake-container">
    <nav class="fake-navbar"></nav>
    <bui-container :sidebar-state="sidebarState">
      <b-button
        class="mx-1"
        v-for="option in options"
        @click="sidebarState = option"
        :disabled="sidebarState == option"
      >
        {{ option }}
      </b-button>
    </bui-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebarState: "expanded",
      options: ["disabled", "expanded", "mini"],
    };
  },
};
</script>