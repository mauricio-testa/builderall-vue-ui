<template>
  <div class="bui-container">
    <main
      class="bui-main"
      :class="`bui-main-${sidebarState}`"
    >
      <b-container>
        <div class="px-sm-2 py-4 py-sm-5">
          <slot />
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import { sidebarStateProp } from '../../assets/js/props'

export default {
  name: 'BuiContainer',
  props: {
    /*
     * Estado do sidebar:
     * se tem margin ou não
     */
    sidebarState: sidebarStateProp
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

html[dir="rtl"] {
  .bui-container .bui-main {
    @media only screen and (min-width: 576px) {
      &.bui-main-mini {
        margin-right: $sidebar-width-mini;
        margin-left: 0;
      }
      &.bui-main-expanded {
        margin-right: $sidebar-width;
        margin-left: 0;
      }
    }
  }
}

.bui-container {
  margin-top: $header-height;
  .bui-main {
    transition: $sidebar-transition;
    @media only screen and (min-width: 576px) {
      &.bui-main-mini {
        margin-left: $sidebar-width-mini;
        margin-right: 0;
      }
      &.bui-main-expanded {
        margin-left: $sidebar-width;
        margin-right: 0;
      }
    }
  }
}
</style>
