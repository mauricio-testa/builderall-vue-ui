<template>
  <div>
    <div class="d-flex">
      <b-form-input
        v-model="search"
        type="search"
        class="my-3"
      />
      <b-select
        v-model="variant"
        :options="variants"
        class="my-3 ml-2"
      />
    </div>
    <div class="icons-grid">
      <div
        v-for="(icon, name) in icons"
        :key="name"
        :style="{ backgroundColor : ['light', 'white', 'gray'].includes(variant) ? '#343a40' : '#f9f9f9'}"
      >
        <bui-icon
          :variant="variant"
          :name="extractIconName(name)"
          :size="30"
        />
        <span :style="{ color : ['light', 'white', 'gray'].includes(variant) ? '#fff' : '#333'}">
          {{ extractIconName(name) }}
        </span>
      </div>
    </div>

    <!-- sizing test
    <div
      v-for="(icon, name) in icons"
      :key="name"
      class="d-flex align-items-end border-bottom"
    >
      <bui-icon
        :name="extractIconName(name)"
        v-for="i in 10"
        :key="i"
        :size="i * 10"
      ></bui-icon>
    </div>
    -->
  </div>
</template>

<script>
import icons from '../../../../src/assets/js/icons/index'
import { kebabCase } from 'lodash'

export default {
  data () {
    return {
      search: null,
      variants: ['natural', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'white', 'gray'],
      variant: 'natural'
    }
  },
  computed: {
    icons () {
      if (!this.search) {
        return icons
      }
      const filtered = {}
      for (const k in icons) {
        if (k.toLowerCase().indexOf(this.search.toLowerCase()) > -1) {
          filtered[k] = icons[k]
        }
      }
      return filtered
    }
  },
  methods: {
    extractIconName (name) {
      return kebabCase(name.substr(3, name.length))
    }
  }
}
</script>

<style scoped>
.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
}
.icons-grid > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
}
.icons-grid > div .bui-icon {
  margin: 10px;
}
</style>
