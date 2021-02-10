<template>
  <b-dropdown
    no-caret
    left
    lazy
    variant="link"
    :popper-opts="{ positionFixed: true, eventsEnabled: true }"
    toggle-class="text-decoration-none p-0"
  >
    <template v-slot:button-content>
      <bui-icon name="three-dots-vertical"></bui-icon>
    </template>
    <b-dropdown-item>
      <bui-icon name="gear" :size="20"></bui-icon>
      <span> Manage </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon name="server-settings" :size="20"></bui-icon>
      <span> Server settings </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon name="backup" :size="20"></bui-icon>
      <span> Backup</span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon name="database" :size="20"></bui-icon>
      <span> Database </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon name="globe-gear" :size="20"></bui-icon>
      <span> Domain </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon name="file-transfer" :size="20"></bui-icon>
      <span> FTP </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon name="pencil" :size="20"></bui-icon>
      <span> Rename </span>
    </b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>
      <bui-icon name="trash" :size="20"></bui-icon>
      <span> Delete </span>
    </b-dropdown-item>
  </b-dropdown>
</template>