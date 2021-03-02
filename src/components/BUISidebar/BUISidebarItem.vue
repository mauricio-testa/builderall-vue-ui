<template>
  <div>
    <!-- inertia link -->
    <inertia-link
      v-if="menu.inertia"
      :id="`sidebar-menu-${_uid}`"
      as="b-nav-item"
      :href="menu.inertia"
      :active="menu._active"
    >
      <b-tooltip
        :disabled="!showTooltip"
        :target="`sidebar-menu-${_uid}`"
        placement="right"
      >
        {{ menu.title }}
      </b-tooltip>
      <slot />
    </inertia-link>

    <!-- router link -->
    <b-nav-item
      v-else-if="menu.to"
      :id="`sidebar-menu-${_uid}`"
      :to="menu.to"
      :exact="exact(menu)"
      :active="menu._active"
    >
      <b-tooltip
        :disabled="!showTooltip"
        :target="`sidebar-menu-${_uid}`"
        placement="right"
      >
        {{ menu.title }}
      </b-tooltip>
      <slot />
    </b-nav-item>

    <!-- href common -->
    <b-nav-item
      v-else
      :id="`sidebar-menu-${_uid}`"
      :href="menu.href"
      :active="menu._active"
      :target="menu.target"
    >
      <b-tooltip
        :disabled="!showTooltip"
        :target="`sidebar-menu-${_uid}`"
        placement="right"
      >
        {{ menu.title }}
      </b-tooltip>
      <slot />
    </b-nav-item>
  </div>
</template>

<script>
export default {
  name: 'BuiSidebarItem',

  props: {
    /*
     * O item de menu
     */
    menu: {
      type: Object,
      required: true,
      validator: (value) =>
        value.hasOwnProperty('title') &&
        value.hasOwnProperty('icon') &&
        (value.hasOwnProperty('inertia') ||
          value.hasOwnProperty('to') ||
          value.hasOwnProperty('href'))
    },

    /*
     * Se é pra exibir tooltip
     * ao passar mouse no ícone ou não
     */
    showTooltip: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    exact (menu) {
      if (!menu.hasOwnProperty('exact')) {
        return true
      }
      return menu.exact
    }
  }
}
</script>
