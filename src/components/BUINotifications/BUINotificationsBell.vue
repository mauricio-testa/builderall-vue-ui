<template>
  <b-button
    v-b-toggle="buiNotificationsId"
    variant="default"
    class="p-2"
  >
    <bui-icon
      class="m-0 bui-notifications-bell"
      name="bell"
      size="19"
      :class="{'new' : hasNotifications}"
    />
  </b-button>
</template>

<script>
export default {
  name: 'BuiNotificationsBell',

  props: {
    hasNotifications: {
      type: Boolean,
      default: false
    },
    buiNotificationsId: {
      type: String,
      default: 'bui-notifications'
    }
  }
}
</script>

<style scoped>
.bui-notifications-bell {
  position: relative;
}
.bui-notifications-bell.new::after {
  width: 10px;
  height: 10px;
  content: close-quote;
  background: #ff3636;
  display: block;
  border-radius: 50%;
  border: 2px solid #fff;
  position: absolute;
  right: 1px;
  top: 1px;
}
</style>
