<template>
  <div>
    <bui-sidebar
      sidebar-state="expanded"
      :menus="menus"
      :menus-bottom="menus_bottom"
    >
      <template #item="{ menu }">
        <template v-if="menu.name == 'config'">
          Hello config menu!
        </template>
        <template v-else>
          {{ menu.title }} <b-badge class="mr-1">
            {{ menu.icon }}
          </b-badge>
        </template>
      </template>
      <template #item-bottom="{ menu }">
        <bui-icon
          :name="menu.icon"
          class="mr-3"
        />
        {{ menu.title }}
        <b-badge> Buuh!</b-badge>
      </template>
      <template #item-mobile="{ menu }">
        {{ menu.title }} <b-badge> {{ menu.icon }}</b-badge>
      </template>
    </bui-sidebar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { title: 'Dashbard', icon: 'dashboard', href: '/' },
        { title: 'Contacts', icon: 'person', to: '/sites' },
        { title: 'Configs', icon: 'gear', href: '/' }
      ],
      menus_bottom: [
        {
          title: 'Office',
          icon: 'logo',
          href: '#',
          target: '_blank'
        }
      ]
    }
  }
}
</script>
