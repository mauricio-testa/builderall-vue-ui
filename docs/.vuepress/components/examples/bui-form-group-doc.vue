<template>
  <bui-form-group label="Label do campo" help="Texto de ajuda" :required="true">
    <b-form-input type="text"></b-form-input>
    <template #actions>
      <button>
        <bui-icon name="copy" size="16" gray></bui-icon>
      </button>
    </template>
  </bui-form-group>
</template>
