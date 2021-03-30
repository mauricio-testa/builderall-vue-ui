<template>
  <b-dropdown
    no-caret
    left
    lazy
    variant="link"
    :popper-opts="{ positionFixed: true, eventsEnabled: true }"
    toggle-class="text-decoration-none p-0"
  >
    <template #button-content>
      <bui-icon name="three-dots-vertical" />
    </template>
    <b-dropdown-item>
      <bui-icon
        variant="gray"
        name="gear"
        :size="20"
      />
      <span> Manage </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon
        variant="gray"
        name="server-settings"
        :size="20"
      />
      <span> Server settings </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon
        variant="gray"
        name="backup"
        :size="20"
      />
      <span> Backup</span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon
        variant="gray"
        name="database"
        :size="20"
      />
      <span> Database </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon
        variant="gray"
        name="globe-gear"
        :size="20"
      />
      <span> Domain </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon
        variant="gray"
        name="file-transfer"
        :size="20"
      />
      <span> FTP </span>
    </b-dropdown-item>
    <b-dropdown-item>
      <bui-icon
        variant="gray"
        name="pencil"
        :size="20"
      />
      <span> Rename </span>
    </b-dropdown-item>
    <b-dropdown-divider />
    <b-dropdown-item>
      <bui-icon
        variant="gray"
        name="trash"
        :size="20"
      />
      <span> Delete </span>
    </b-dropdown-item>
  </b-dropdown>
</template>
