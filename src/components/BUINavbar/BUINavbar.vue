<template>
  <b-navbar
    toggleable="lg"
    type="light"
    fixed="top"
    class="bui-navbar"
    :class="{ 'bui-navbar-rtl': $buiOptions.isRtl }"
  >
    <div
      v-if="sidebarState != 'disabled'"
      v-b-toggle="sidebarMobileId"
      class="d-sm-none bui-toggle-icon"
    >
      <bui-icon
        name="menu-burger"
        :size="25"
      />
    </div>

    <div
      v-if="sidebarState != 'disabled'"
      class="bui-toggle-icon d-none d-sm-flex"
      @click="toggleSidebar"
    >
      <bui-icon
        :name="burgerIconName"
        :size="25"
      />
    </div>

    <b-navbar-brand :href="homeLink">
      <img
        :src="logo"
        class="mx-4 d-sm-inline-block"
        :class="{ 'd-none': logoSm }"
      >
      <img
        :src="logoSm"
        class="mx-3 mb-1 d-sm-none"
      >
    </b-navbar-brand>

    <span class="flex-fill" />

    <slot name="items-right" />

    <span
      v-if="hasItemsRightSlot"
      class="bui-navbar-vertical-divider mx-3"
    />

    <div class="d-flex align-items-center mr-ltr-3 ml-rtl-3">
      <b-navbar-nav>
        <b-nav-item-dropdown
          :right="!$buiOptions.isRtl"
          no-caret
          class="bui-dropdown-user"
        >
          <template #button-content>
            <b-avatar
              variant="default"
              :src="internalUser.gravatar"
            />
          </template>

          <b-dropdown-item href="#">
            <div class="d-flex profile-dropdown align-items-center">
              <b-avatar
                :src="internalUser.gravatar"
                variant="default"
                size="3rem"
              />
              <div class="flex-fill d-flex flex-column m-3">
                <span v-text="internalUser.name" />
                <span v-text="internalUser.email" />
              </div>
            </div>
          </b-dropdown-item>

          <b-dropdown-divider />

          <slot name="dropdown-item-before" />

          <b-dropdown-item
            tabindex="-1"
            link-class="py-2"
          >
            <bui-icon
              name="lang"
              class="mx-3"
            />
            {{ labelFavoriteLang }}
          </b-dropdown-item>

          <bui-language-selector
            v-model="internalUser.locale"
            class="mt-1 mx-3 mb-3"
            :rtl="$buiOptions.isRtl"
            :options="languages"
            @input="changeLanguage()"
          />

          <b-dropdown-divider />

          <slot name="dropdown-item-after" />

          <b-dropdown-item
            tabindex="-1"
            link-class="py-2"
            @click="logout()"
          >
            <bui-icon
              name="exit"
              class="mx-3"
            />
            {{ labelLogout }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>

import {
  userProp,
  sidebarStateProp,
  languagesProp,
  sidebarMobileIdProp
} from '../../assets/js/props'

export default {
  name: 'BuiNavbar',

  props: {
    /*
     * Objeto do usuário necessário para a popup.
     * Deve conter 4 propriedades: email, name, language e gravatar
     */
    user: userProp,

    /*
     * Estado do sidebar:
     * define o estado do burger icon
     */
    sidebarState: sidebarStateProp,

    /*
     * Logotipo principal do navbar
     */
    logo: {
      type: String,
      required: true
    },

    /*
     * Logotipo mobile
     */
    logoSm: {
      type: String,
      required: false,
      default: null
    },

    /*
     * Label para o campo idioma do menu
     */
    labelFavoriteLang: {
      type: String,
      required: false,
      default: 'Your favorite lang'
    },

    /*
     * Label para o item de logout
     */
    labelLogout: {
      type: String,
      required: false,
      default: 'Logout'
    },

    /*
     * Link para o Home da aplicação ao clicar no logo
     */
    homeLink: {
      type: String,
      required: false,
      default: '/'
    },

    sidebarMobileId: sidebarMobileIdProp,

    /*
     * Dataset com os idiomas suportados.
     * Cada item do array deve possuir key e desc
     */
    languages: languagesProp
  },

  data () {
    return {
      internalUser: this.user
    }
  },

  computed: {
    burgerIconName () {
      return this.sidebarState === 'mini' ? 'menu-burger' : 'menu-burger-open'
    },

    hasItemsRightSlot () {
      return this.$slots['items-right'] !== undefined
    }
  },

  methods: {
    toggleSidebar () {
      this.$emit(
        'toggle-sidebar',
        this.sidebarState === 'mini' ? 'expanded' : 'mini'
      )
    },

    changeLanguage () {
      this.$emit('change-language', this.internalUser.locale)
    },

    logout () {
      this.$emit('logout')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/variables";

.bui-navbar {
  box-shadow: 0 1px 2px rgba(38, 36, 36, 0.14);
  border: 1px solid #dedede;
  height: $header-height;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 0;
  background: #fff;

  .bui-dropdown-user {
    .dropdown-menu {
      box-shadow: 0px 0px 5px #26242459;
      border-radius: 10px;
      border: none;
      position: absolute;
      .dropdown-item {
        display: flex;
        align-items: center;
        .profile-dropdown {
          text-align: initial;
          .b-avatar,
          .b-avatar span {
            flex: unset;
            margin: unset;
            display: inherit;
          }
          div span {
            &:nth-child(1) {
              font-size: 18px;
            }
            &:nth-child(2) {
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  .bui-toggle-icon {
    width: calc(#{$sidebar-width-mini} - 1px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgba(244, 244, 244, 0.7);
    height: calc(#{$header-height} - 2px);
    border-right: 1px solid rgba(222, 222, 222, 0.7);
    .bui-icon {
      transition: $sidebar-transition;
    }
  }

  .navbar-brand img {
    max-height: 50px;
  }

  .bui-navbar-vertical-divider {
    display: block;
    height: 25px;
    border-left: 1px solid #bed1ea;
  }
}
</style>
