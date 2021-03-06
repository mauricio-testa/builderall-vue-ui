<template>
  <div v-if="sidebarState != 'disabled'">
    <div
      class="bui-sidebar d-none d-sm-flex flex-column justify-content-between"
      :class="{ 'bui-mini': sidebarIsMini }"
    >
      <b-nav vertical>
        <bui-sidebar-item
          v-for="(menu, k) in menusComputed"
          :key="k"
          :menu="menu"
          :show-tooltip="sidebarIsMini"
        >
          <slot
            name="item"
            :menu="menu"
          >
            <bui-icon
              :name="menu.icon"
              :size="20"
            />
            <span v-text="menu.title" />
          </slot>
        </bui-sidebar-item>
      </b-nav>

      <b-nav
        v-if="menusBottomComputed.length"
        vertical
        class="pb-4 pt-3 mt-3 bui-sidebar-bottom"
      >
        <bui-sidebar-item
          v-for="(menu, k) in menusBottomComputed"
          :key="k"
          :menu="menu"
          :show-tooltip="sidebarIsMini"
        >
          <slot
            name="item-bottom"
            :menu="menu"
          >
            <bui-icon
              :name="menu.icon"
              :size="20"
            />
            <span v-text="menu.title" />
          </slot>
        </bui-sidebar-item>
      </b-nav>
    </div>

    <b-sidebar
      :id="sidebarMobileId"
      class="bui-sidebar-mobile"
      shadow
      backdrop
      no-header
      :right="$buiOptions.isRtl"
    >
      <div class="bui-sidebar-mobile-header">
        <div class="d-flex justify-content-end">
          <b-button-close
            v-b-toggle="sidebarMobileId"
            text-variant="white"
          />
        </div>
        <b-avatar
          variant="default"
          size="4rem"
          :src="user.gravatar"
        />
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div>
            <span
              class="name"
              v-text="user.name"
            /> <br>
            <small v-text="user.email" />
          </div>
          <a
            v-if="settingsHref"
            :href="settingsHref"
          >
            <bui-icon
              name="gear"
              variant="white"
            />
          </a>
        </div>
      </div>

      <div class="pt-2">
        <b-nav
          vertical
          sticky
        >
          <bui-sidebar-item
            v-for="(menu, k) in menusMobileComputed"
            :key="k"
            :menu="menu"
            :show-tooltip="false"
          >
            <slot
              name="item-mobile"
              :menu="menu"
            >
              <bui-icon
                :name="menu.icon"
                :size="menu.icon == 'logo' ? 25 : 20"
              />
              <span v-text="menu.title" />
            </slot>
          </bui-sidebar-item>
        </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import BuiSidebarItem from './BUISidebarItem'
import { userProp, sidebarStateProp, menusProp, sidebarMobileIdProp } from '../../assets/js/props'
import { hasProperty } from '../../utils/index'

export default {
  name: 'BuiSidebar',

  components: {
    BuiSidebarItem
  },

  props: {
    /*
     * Estado do sidebar
     */
    sidebarState: sidebarStateProp,

    /*
     * Objeto do usuário necessário para sidebar mobile.
     */
    user: userProp,

    /*
     * O menu que está atualmente ativo
     */
    activeMenu: {
      required: false,
      type: [String, Number],
      default: undefined
    },

    /*
     * Menus do topo do sidebar
     */
    menus: menusProp,

    /*
     * Menus da parte de baixo
     */
    menusBottom: menusProp,

    /*
     * Menus mobile
     */
    menusMobile: menusProp,

    /*
     * ID do sidebar mobile
     * para o caso de ter vários sidebar
     */
    sidebarMobileId: sidebarMobileIdProp,

    /*
     * Link atribuído ao ícone de configurações do sidebar mobile
     */
    settingsHref: {
      type: String,
      default: undefined
    }
  },

  computed: {
    sidebarIsMini () {
      return this.sidebarState === 'mini'
    },

    menusComputed () {
      return (this.menus || []).map((menu) => ({
        ...menu,
        _active: this.isActive(menu)
      }))
    },

    menusBottomComputed () {
      return (this.menusBottom || []).map((menu) => ({
        ...menu,
        _active: this.isActive(menu)
      }))
    },

    menusMobileComputed () {
      if (Array.isArray(this.menusMobile) && this.menusMobile.length) {
        return (this.menusMobile || []).map((menu) => ({
          ...menu,
          _active: this.isActive(menu)
        }))
      } else {
        return this.menusComputed.concat(this.menusBottomComputed)
      }
    }
  },

  methods: {
    isActive (menu) {
      if (hasProperty(menu, 'active')) {
        return menu.active
      }
      if (hasProperty(menu, 'routes')) {
        return Array.isArray(menu.routes)
          ? menu.routes.includes(this.activeMenu)
          : false
      }
      if (hasProperty(menu, 'prefix')) {
        return typeof menu.prefix === 'string' &&
          typeof this.activeMenu === 'string'
          ? this.activeMenu.startsWith(menu.prefix)
          : false
      }
      return false
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/variables";

html[dir="rtl"] {
  .bui-sidebar .nav .nav-item .nav-link span,
  .bui-sidebar-mobile .nav .nav-item .nav-link span {
    margin-left: 0;
    margin-right: 20px;
  }
}

.bui-sidebar {
  position: fixed;
  width: $sidebar-width;
  min-height: calc(100vh - #{$header-height});
  border-right: 1px solid #dedede;
  box-shadow: 0 0 3px rgba(38, 36, 36, 0.14);
  background: #fff 0 0 no-repeat padding-box;
  transition: $sidebar-transition;
  ul.nav {
    padding-inline-start: 0;
  }
  &.bui-mini {
    width: $sidebar-width-mini;
    .nav-item .nav-link {
      justify-content: center;
      span:not(.sidebar-badge) {
        display: none;
      }
    }
  }
  .bui-sidebar-bottom {
    border-top: 1px solid #bed1ea;
    overflow: hidden;
  }
}

.bui-sidebar,
.bui-sidebar-mobile {
  .nav .nav-item .nav-link {
    padding: 18px 23px 18px 20px;
    color: #68768c;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    font-size: 15px;
    min-height: 51px;
    font-weight: 600;
    font-size: 14px;
    border-left: 3px solid transparent;
    transition: 0.4s;
    position: relative;
    .bui-icon {
      filter: opacity(0.7) grayscale(0.6);
      transition: inherit;
    }
    span {
      margin-left: 20px;
      margin-right: 0;
    }
    &:hover,
    &.active,
    &.router-link-active,
    &.router-link-exact-active {
      background-color: #f4f7fc;
      color: var(--primary);
      .bui-icon {
        filter: unset;
      }
    }
    &.active,
    &.router-link-active,
    &.router-link-exact-active {
      border-left: 3px solid #1d5ef5;
    }
    .sidebar-badge {
      background: #ffb244;
      position: absolute;
      width: 14px;
      height: 14px;
      border-radius: 100%;
      border: 3px solid #fff;
      left: -7px;
      top: 14px;
    }
  }
}

.bui-sidebar-mobile {
  .bui-sidebar-mobile-header {
    background: url(../../assets/images/corner.png) left top no-repeat,
      url(../../assets/images/wave.png) right bottom/100% no-repeat,
      transparent linear-gradient(180deg, #5e81f4 0%, #1665d8 100%);
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: #fff;
    span.name {
      font-size: 19px;
      margin-top: 1rem;
    }
  }
  .nav {
    .nav-item {
      .nav-link {
        color: #585858;
        .bui-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
