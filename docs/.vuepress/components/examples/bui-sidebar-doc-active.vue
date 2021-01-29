<template>
  <bui-sidebar active-menu="configs" :menus-bottom="[]" :menus="menus" />
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: "Dashboard",
          name: "home",
          icon: "dashboard",
          href: "/",
        },
        {
          title: "Configs",
          name: "configs",
          icon: "gear",
          to: "/",
        },
      ],
    };
  },
};
</script>