<template>
  <bui-sidebar
    :menus="menusTop"
    :menus-bottom="menusBottom"
    active-menu="item1"
  ></bui-sidebar>
</template>

<script>
export default {
  data() {
    return {
      menusTop: [
        { title: "Dashboard", name: "item1", icon: "dashboard", href: "#" },
      ],
      menusBottom: [
        { title: "Office", name: "item2", icon: "logo", href: "#" },
      ],
    };
  },
};
</script>