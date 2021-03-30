
<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="bui-icon"
    :class="[`bui-icon-${name}`, {'rtl-mirror' : rtlMirror }, `bui-icon-${variant}`]"
    :style="style"
    v-html="icon"
  />
  <!-- eslint-enable -->
</template>

<script>
import { hasProperty } from '../../utils/index'
import icons from '../../assets/js/icons/index.js'

import { camelCase, startCase } from 'lodash'

const makeIconName = (icon) =>
  `BUI${startCase(camelCase(icon)).replace(/ /g, '')}`

const propIconSize = {
  type: [Number, String],
  required: false,
  validator: (size) => {
    return !isNaN(size)
  }
}

export default {
  name: 'BuiIcon',

  props: {
    name: {
      required: true,
      type: String,
      validator: (value) => {
        return hasProperty(icons, makeIconName(value))
      }
    },

    size: {
      type: [Number, String],
      required: false,
      default: 22,
      validator: (size) => {
        return !isNaN(size)
      }
    },

    height: propIconSize,

    width: propIconSize,

    variant: {
      type: String,
      required: false,
      default: ''
    },

    rotate: {
      type: Number,
      required: false,
      default: 0
    },

    rtlMirror: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    icon: function () {
      return icons[makeIconName(this.name)]
    },

    style: function () {
      const styles = {
        width: (this.width ?? this.size) + 'px',
        height: (this.height ?? this.size) + 'px'
      }

      if (this.rotate > 0) {
        styles.transform = `rotate(${this.rotate}deg)`
      }

      return styles
    }
  }
}
</script>

<style lang="scss">
.bui-icon {
  display: inline-flex;
  &.bui-icon-primary svg * {
    fill: var(--primary);
  }
  &.bui-icon-secondary svg * {
    fill: var(--secondary);
  }
  &.bui-icon-success svg * {
    fill: var(--success);
  }
  &.bui-icon-warning svg * {
    fill: var(--warning);
  }
  &.bui-icon-danger svg * {
    fill: var(--danger);
  }
  &.bui-icon-info svg * {
    fill: var(--info);
  }
  &.bui-icon-light svg * {
    fill: var(--light);
  }
  &.bui-icon-dark svg * {
    fill: var(--dark);
  }
  &.bui-icon-white svg * {
    fill: #fff;
  }
  &.bui-icon-gray svg * {
    fill: #a5b9d5;
  }
}
</style>
