<template>
  <bui-sidebar
    active-menu="sites.create"
    :menus="menus"
  />
</template>

<script>
export default {
  data () {
    return {
      menus: [
        // inactive
        {
          title: '/home',
          routes: ['home'],
          icon: 'dashboard',
          href: '#'
        },
        // example prefix
        {
          title: '/sites',
          prefix: 'sites.',
          icon: 'gear',
          href: '#'
        },
        {
          title: '/sites/create',
          prefix: 'sites.',
          icon: 'gear',
          href: '#'
        },
        // example routes
        {
          title: '/sites/create',
          routes: ['sites.create'],
          icon: 'gear',
          href: '#'
        },
        // example explicitly
        {
          title: '/does/not/matter',
          active: true,
          icon: 'gear',
          href: '#'
        }
      ]
    }
  }
}
</script>
