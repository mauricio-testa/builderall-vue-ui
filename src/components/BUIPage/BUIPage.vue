<template>
  <section>
    <b-row align-v="center" class="mb-4">
      <b-col lg="6" md="6">
        <slot name="page-header-left">
          <h1 class="bui-page-title" v-text="title" v-if="title"></h1>
          <span
            class="bui-page-subtitle"
            v-text="subtitle"
            v-if="subtitle"
          ></span>
        </slot>
      </b-col>
      <b-col lg="6" md="6" class="page-header-right mt-3 mt-md-0">
        <slot name="page-header-right" />
      </b-col>
    </b-row>
    <slot />
  </section>
</template>

<script>
export default {
  name: "bui-page",

  props: {
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.bui-page-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: $primary;
  margin-bottom: 6px;
}

.bui-page-subtitle {
  font-weight: 800;
  letter-spacing: 0.45px;
  color: $secondary;
  opacity: 0.7;
}

.page-header-right {
  text-align: right;
}

html[dir="rtl"] {
  .page-header-right {
    text-align: left;
  }
}
</style>