<template>
  <bui-form-group
    label="Label do campo"
    help="Texto de ajuda"
    :required="true"
  >
    <b-form-input type="text" />
    <template #actions>
      <button>
        <bui-icon
          name="copy"
          size="16"
          gray
        />
      </button>
    </template>
  </bui-form-group>
</template>
