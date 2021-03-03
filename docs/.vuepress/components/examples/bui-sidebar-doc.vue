<template>
  <bui-sidebar
    :menus="menusTop"
    :menus-bottom="menusBottom"
  />
</template>

<script>
export default {
  data () {
    return {
      menusTop: [{ title: 'Dashboard', icon: 'dashboard', href: '#' }],
      menusBottom: [{ title: 'Office', icon: 'logo', href: '#' }]
    }
  }
}
</script>
