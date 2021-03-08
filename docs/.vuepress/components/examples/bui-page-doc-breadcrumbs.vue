<template>
  <bui-page
    title="Dashboard"
    subtitle="Welcome to a Builderall application!"
    :breadcrumbs="breadcrumbs"
  >
    Content
  </bui-page>
</template>

<script>
export default {
  data () {
    return {
      breadcrumbs: [
        { text: 'Admin', href: '#' },
        { text: 'Manage', href: '#' }
      ]
    }
  }
}
</script>
