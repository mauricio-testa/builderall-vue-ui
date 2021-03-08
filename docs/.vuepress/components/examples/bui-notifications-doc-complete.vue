<template>
  <div>
    <bui-navbar logo="https://booking.builderall.com/images/images/meta/logo.png">
      <template #items-right>
        <bui-icon name="bell" v-b-toggle.bui-notifications-complete/>
      </template>
    </bui-navbar>

    <bui-notifications
      id="bui-notifications-complete"
      :notifications="notifications"
      label-notifications="Notificações"
      label-empty="Tem nada aqui!"
      label-read-all="Ler tudo"
      label-view-all="Ver tudo"
      :loading="loading"
      @hidden="onHidden"
      @shown="onShown"
      @read="onRead"
      @readAll="onReadAll"
    >
      <template #notification-date="{ date }">
        {{ formatDateFn(date) }}
      </template>
    </bui-notifications>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notifications: [],
      loading: false
    }
  },

  methods: {

    onHidden () {
      alert('hide!')
    },

    onReadAll () {
      alert('mark all as read!')
    },

    onRead (notification) {
      alert('click notification! \n' + JSON.stringify(notification))
    },

    onShown () {
      this.loading = true
      this.getNotifications().then((notifications) => {
        this.notifications = notifications
      }).finally(() => {
        this.loading = false
      })
    },

    formatDateFn (date) {
      return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
    },

    getNotifications () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Array.from({ length: 40 }, () => (this.makeFakeNotification())))
        }, 1500)
      })
    },

    makeFakeNotification () {
      const random = Math.random().toString(36).slice(2)

      return {
        read: Math.random() < 0.5,
        _id: random,
        message: random,
        description: 'A simple fake notification description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere et ligula sed vestibulum. Donec interdum ornare urna, eget dapibus mi',
        action: 'https://booking.builderall.io/',
        category: 'booking',
        from: 'booking',
        createdAt: '2021-02-23T21:19:58.258Z'
      }
    }
  }
}
</script>
