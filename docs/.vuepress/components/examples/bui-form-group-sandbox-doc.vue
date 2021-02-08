<template>
  <div>
    <div class="mb-3 bui-form-group-sandbox">
      <b-form-input v-model="input.label" placeholder="Label"></b-form-input>
      <b-form-input v-model="input.help" placeholder="Help text"></b-form-input>
      <b-form-input
        v-model="input.error"
        placeholder="Digite um erro!"
      ></b-form-input>
      <b-form-checkbox
        v-model="input.required"
        :value="true"
        :unchecked-value="false"
      ></b-form-checkbox>
    </div>

    <bui-form-group
      :label="input.label"
      :help="input.help"
      :required="input.required"
      :error="input.error"
      :value="input.value"
      :max-chars="20"
    >
      <b-form-textarea
        placeholder="Description"
        rows="6"
        v-model="input.value"
      ></b-form-textarea>
    </bui-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        label: "My label",
        help: "Help do tooltip",
        required: true,
        error: "",
        value: "builderall",
        maxChars: 20,
      },
    };
  },
};
</script>