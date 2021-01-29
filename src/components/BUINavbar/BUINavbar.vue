<template>
  <b-navbar
    toggleable="lg"
    type="light"
    fixed="top"
    class="bui-navbar"
    :class="{ 'bui-navbar-rtl': $buiOptions.isRtl }"
  >
    <div
      v-b-toggle.sidebar-mobile
      class="d-sm-none bui-toggle-icon"
      v-if="sidebarState != 'disabled'"
    >
      <bui-icon name="menu-burger" :size="25"></bui-icon>
    </div>

    <div
      class="bui-toggle-icon d-none d-sm-flex"
      @click="toggleSidebar"
      v-if="sidebarState != 'disabled'"
    >
      <bui-icon :name="burgerIconName" :size="25"></bui-icon>
    </div>

    <b-navbar-brand :href="homeLink">
      <img
        :src="logo"
        class="mx-4 mb-1 d-sm-inline-block"
        :class="{ 'd-none': logoSm }"
      />
      <img :src="logoSm" class="mx-3 mb-1 d-sm-none" />
    </b-navbar-brand>

    <span class="flex-fill"></span>

    <slot name="items-right" />

    <div class="mx-3 mx-sm-4 d-flex align-items-center">
      <b-navbar-nav>
        <b-nav-item-dropdown
          :right="!$buiOptions.isRtl"
          no-caret
          class="bui-dropdown-user"
        >
          <template v-slot:button-content>
            <b-avatar variant="default" :src="user.gravatar"></b-avatar>
          </template>

          <b-dropdown-item href="#">
            <div class="d-flex profile-dropdown align-items-center">
              <b-avatar
                :src="user.gravatar"
                variant="default"
                size="3rem"
              ></b-avatar>
              <div class="flex-fill d-flex flex-column m-3">
                <span v-text="user.name"></span>
                <span v-text="user.email"></span>
              </div>
            </div>
          </b-dropdown-item>

          <b-dropdown-divider></b-dropdown-divider>

          <slot name="dropdown-item-before"></slot>

          <b-dropdown-item tabindex="-1" link-class="py-2">
            <bui-icon name="lang" class="mx-3" />
            {{ labelFavoriteLang }}
          </b-dropdown-item>

          <bui-language-selector
            class="mt-1 mx-3 mb-3"
            :rtl="$buiOptions.isRtl"
            :options="languages"
            @input="changeLanguage()"
            v-model="user.locale"
          ></bui-language-selector>

          <b-dropdown-divider></b-dropdown-divider>

          <slot name="dropdown-item-after"></slot>

          <b-dropdown-item tabindex="-1" @click="logout()" link-class="py-2">
            <bui-icon name="exit" class="mx-3" />
            {{ labelLogout }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
import BUIIcon from "../BUIIcon/BUIIcon";
import {
  userProp,
  sidebarStateProp,
  languagesProp,
} from "../../assets/js/props";

export default {
  name: "bui-navbar",

  components: {
    BUIIcon,
  },

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
      required: true,
    },

    /*
     * Logotipo mobile
     */
    logoSm: {
      type: String,
      required: false,
    },

    /*
     * Label para o campo idioma do menu
     */
    labelFavoriteLang: {
      type: String,
      required: false,
      default: "Your favorite lang",
    },

    /*
     * Label para o item de logout
     */
    labelLogout: {
      type: String,
      required: false,
      default: "Logout",
    },

    /*
     * Link para o Home da aplicação ao clicar no logo
     */
    homeLink: {
      type: String,
      required: false,
      default: "/",
    },

    /*
     * Dataset com os idiomas suportados.
     * Cada item do array deve possuir key e desc
     */
    languages: languagesProp,
  },

  methods: {
    toggleSidebar() {
      this.$emit(
        "toggle-sidebar",
        this.sidebarState == "mini" ? "expanded" : "mini"
      );
    },
    changeLanguage() {
      this.$emit("change-language", this.user.locale);
    },
    logout() {
      this.$emit("logout");
    },
  },

  computed: {
    burgerIconName() {
      return this.sidebarState == "mini" ? "menu-burger" : "menu-burger-open";
    },
  },
};
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
      .dropdown-item {
        display: flex;
        align-items: center;
        .profile-dropdown {
          text-align: initial;
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
}
</style>