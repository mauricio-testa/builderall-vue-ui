
<template>
  <div
    class="bui-icon"
    :class="`bui-icon-${name}`"
    v-html="icon"
    :style="style"
  ></div>
</template>

<script>
import icons from "../../assets/js/icons";

import { camelCase, startCase } from "lodash";

const makeIconName = (icon) =>
  `BUI${startCase(camelCase(icon)).replace(/ /g, "")}`;

export default {
  name: "bui-icon",

  props: {
    name: {
      required: true,
      type: String,
      validator: (value) => {
        return icons.hasOwnProperty(makeIconName(value));
      },
    },
    size: {
      type: Number,
      required: false,
      default: 22,
    },
    white: {
      type: Boolean,
      required: false,
      default: false,
    },
    rotate: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  computed: {
    icon: function () {
      return icons[makeIconName(this.name)];
    },

    style: function () {
      let styles = {
        width: this.size + "px",
        height: this.size + "px",
        transform: `rotate(${this.rotate}deg)`,
      };
      if (this.white) {
        styles["filter"] = "brightness(0) invert(1)";
      }
      return styles;
    },
  },
};
</script>

<style scoped>
.bui-icon {
  display: inline-flex;
}
</style>