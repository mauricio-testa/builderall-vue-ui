<template>
  <div>
    <bui-sidebar
      :menus="menus"
      :menus-bottom="menus"
      :sidebar-state="sidebarState"
    />

    <bui-navbar
      @toggle-sidebar="toggleSidebar"
      :sidebar-state="sidebarState"
      logo="https://booking.builderall.com/images/images/meta/logo.png"
    />

    <bui-container :sidebar-state="sidebarState">
      <router-view />
    </bui-container>
  </div>
</template>

<script>
const sidebarStateKey = "bui_store_sidebar_state";

export default {
  data: () => {
    return {
      sidebarState: "expanded",
      menus: [{ title: "Item", icon: "gear", href: "#" }],
    };
  },

  mounted() {
    this.sidebarState = localStorage.getItem(sidebarStateKey) || "expanded";
  },

  methods: {
    toggleSidebar(state) {
      this.sidebarState = state;
      localStorage.setItem(sidebarStateKey, state);
    },
  },
};
</script>
