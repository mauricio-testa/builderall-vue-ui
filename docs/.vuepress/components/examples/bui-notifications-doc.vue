<template>
  <div>
    <bui-notifications-bell />
    <bui-notifications :notifications="notifications" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      notifications: [
        {
          read: false,
          _id: 1,
          message: 'Test',
          description: 'A simple fake notification description',
          createdAt: '2021-02-23T21:19:58.258Z'
        }
      ]
    }
  }
}
</script>
