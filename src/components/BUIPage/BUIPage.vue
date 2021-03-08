<template>
  <section>
    <slot
      name="breadcrumbs"
      :items="breadcrumbs"
    >
      <b-breadcrumb
        v-if="breadcrumbs.length"
        :items="breadcrumbs"
      />
    </slot>

    <b-row
      align-v="center"
      class="mb-4"
    >
      <b-col
        lg="6"
        md="6"
      >
        <slot name="page-header-left">
          <h1
            v-if="title"
            class="bui-page-title"
            v-text="title"
          />
          <span
            v-if="subtitle"
            class="bui-page-subtitle"
            v-text="subtitle"
          />
        </slot>
      </b-col>
      <b-col
        lg="6"
        md="6"
        class="page-header-right mt-3 mt-md-0"
      >
        <div class="d-flex justify-content-end">
          <slot name="page-header-right" />
        </div>
      </b-col>
    </b-row>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'BuiPage',

  props: {
    title: {
      type: String,
      required: false,
      default: undefined
    },

    subtitle: {
      type: String,
      required: false,
      default: undefined
    },

    breadcrumbs: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
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
