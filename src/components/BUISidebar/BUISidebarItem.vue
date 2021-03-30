<template>
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
</template>

<script>

import { hasProperty } from '../../utils/index'

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
        hasProperty(value, 'title') &&
        hasProperty(value, 'icon') &&
        (hasProperty(value, 'inertia') ||
          hasProperty(value, 'to') ||
          hasProperty(value, 'href'))
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
      if (!hasProperty(menu, 'exact')) {
        return true
      }
      return menu.exact
    }
  }
}
</script>
