<template>
  <bui-page>
    <template #page-header-left>
      <h1 class="bui-page-title">Dashboard</h1>
      <b-badge>Title of my page with custom styles</b-badge>
    </template>
    <template #page-header-right>
      <b-input
        type="search"
        placeholder="Search"
        class="mx-2"
        style="max-width: 200px"
      />
      <b-button variant="primary">
        <bui-icon name="plus" white :size="18"></bui-icon>
        New
      </b-button>
    </template>
    Content
  </bui-page>
</template>
