<template>
  <bui-navbar
    :sidebar-state="sidebarState"
    logo="https://booking.builderall.com/images/images/meta/logo.png"
    logo-sm="https://booking.builderall.com/images/images/meta/logo-icon.png"
    label-favorite-lang="Idioma preferido"
    label-logout="Exit"
    home-link="/home"
    :user="user"
    :languages="languages"
    @logout="doSomething"
    @change-language="doSomething"
    @toggle-sidebar="doSomething"
  >
    <template #items-right>
      #items-right
    </template>
    <template #dropdown-item-before>
      <b-dropdown-item
        tabindex="-1"
        link-class="py-2"
      >
        <bui-icon
          name="plus"
          class="mx-3"
        />
        #dropdown-item-before
      </b-dropdown-item>
      <b-dropdown-divider />
    </template>
    <template #dropdown-item-after>
      <b-dropdown-item
        tabindex="-1"
        link-class="py-2"
      >
        <bui-icon
          name="gear"
          class="mx-3"
        />
        #dropdown-item-after
      </b-dropdown-item>
    </template>
  </bui-navbar>
</template>

<script>
export default {
  data () {
    return {
      sidebarState: 'expanded',
      user: {
        name: 'Mauricio Testa',
        email: 'mauriciotesta@gmail.com',
        locale: 'pt_BR',
        gravatar:
          'https://secure.gravatar.com/avatar/2253502b4562dad48c2c74681c459dd1'
      },
      languages: [
        { key: 'pt_BR', desc: 'Português (Brasil)' },
        { key: 'en_US', desc: 'English' },
        { key: 'fr_FR', desc: 'Français' },
        { key: 'de_DE', desc: 'Deutsch' }
      ]
    }
  },
  methods: {
    doSomething () {}
  }
}
</script>
