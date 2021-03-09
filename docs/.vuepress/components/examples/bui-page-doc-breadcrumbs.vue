<template>
  <bui-page
    title="Dashboard"
    subtitle="Welcome to a Builderall application!"
    :breadcrumbs="breadcrumbs"
  >
    <template #breadcrumb-end>
      <b-button variant="primary">
        Back
      </b-button>
    </template>
    Content
  </bui-page>
</template>

<script>
export default {
  data () {
    return {
      breadcrumbs: [
        { text: 'Admin', href: 'http://www.google.com' },
        { text: 'Manage', href: '#', active: true }
      ]
    }
  }
}
</script>
