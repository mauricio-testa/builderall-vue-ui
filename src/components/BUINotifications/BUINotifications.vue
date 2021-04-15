<template>
  <b-sidebar
    :id="id"
    shadow
    backdrop
    no-header
    :right="!$buiOptions.isRtl"
    class="bui-notifications"
    @hidden="$emit('hidden')"
    @shown="$emit('shown')"
  >
    <div class="notifications-header">
      <span>{{ labelNotifications }}</span>
      <b-button-close v-b-toggle="id" />
    </div>

    <div
      v-if="loading"
      class="my-5 d-flex justify-content-center"
    >
      <b-spinner />
    </div>

    <div v-else-if="notifications.length === 0">
      <slot name="empty">
        <span class="d-block text-secondary text-center my-5">
          {{ labelEmpty }}
        </span>
      </slot>
    </div>

    <div
      v-else
      class="notifications-container"
    >
      <div class="notifications-pre">
        <a @click="readAll">{{ labelReadAll }}</a>
      </div>
      <ul class="notifications-list">
        <li
          v-for="notification in notifications"
          :key="notification._id"
          :class="['notification', {read: notification.read}]"
          @click="read(notification)"
        >
          <h3 class="notification-title">
            {{ notification.message }}
          </h3>
          <!-- eslint-disable vue/no-v-html -->
          <p
            class="notification-content"
            v-html="notification.description"
          />
          <!-- eslint-enable -->
          <span
            class="notification-time"
          >
            <slot
              name="notification-date"
              :date="notification.createdAt"
            >
              {{ formatDate(notification.createdAt) }}
            </slot>
          </span>
        </li>
      </ul>
      <div class="notifications-more">
        <a
          href="https://office.builderall.com/br/office/notifications"
          target="_blank"
        >{{ labelViewAll }}</a>
      </div>
    </div>
  </b-sidebar>
</template>
<script>

import { hasProperty } from '../../utils/index'

export default {
  name: 'BuiNotifications',

  props: {
    notifications: {
      type: Array,
      default: () => [],
      required: false,
      validator: notifications =>
        notifications.every(n =>
          hasProperty(n, '_id') &&
          hasProperty(n, 'message') &&
          hasProperty(n, 'description') &&
          hasProperty(n, 'createdAt') &&
          hasProperty(n, 'read')
        )
    },

    labelNotifications: {
      required: false,
      type: String,
      default: 'Notifications'
    },

    labelEmpty: {
      required: false,
      type: String,
      default: 'Empty'
    },

    labelReadAll: {
      required: false,
      type: String,
      default: 'Mark all as read'
    },

    labelViewAll: {
      required: false,
      type: String,
      default: 'View All'
    },

    loading: {
      required: false,
      type: Boolean,
      default: false
    },

    id: {
      type: String,
      default: 'bui-notifications',
      required: false
    }
  },

  methods: {
    readAll () {
      this.$emit('readAll')
      this.notifications.forEach(function (n) { n.read = true })
    },

    read (notification) {
      this.$emit('read', notification)
      notification.read = true
    },

    formatDate (date) {
      return (new Intl.DateTimeFormat('en-US').format(new Date(date)))
    }

  }
}
</script>

<style lang="scss">
.bui-notifications {
  background: #fff;

  .notifications-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F4F5F7;
    border-bottom: 1px solid #E3E8EB;
    padding: 25px;
    span {
      color: #3A3A3A;
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .notifications-container {
    background: #fff;

    .notifications-pre, .notifications-more {
      padding: 25px;
      text-align: center;
      a {
        font-weight: bold;
        color: #323C47;
        cursor: pointer;
      }
    }
    .notifications-list {
      list-style: none;

      .notification {
        font-family: Lato;
        padding: 18px 20px 8px 45px;
        position: relative;

        &:not(:last-child) {
          border-bottom: 1px solid #E3E8EB;
        }
        &.read * {
          color: #CFD8DC !important;
        }
        &:not(.read):before {
          content: close-quote;
          position: absolute;
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background: var(--primary);
          top: calc(50% - 8px);
          left: 20px;
        }
        &:hover {
          background: #FCFCFC;
          cursor: pointer;
        }
        .notification-title {
          font-weight: bold;
          color: #A5ACBA;
          font-size: 14px;
        }
        .notification-content {
          line-height: 18px;
          color: #323C47;
          font-size: 14px;
          word-break: break-word;
        }
        .notification-time {
          display: block;
          text-align: right;
          color: #A5ACBA;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
