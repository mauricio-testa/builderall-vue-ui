<template>
  <span
    v-if="onlyFlag"
    :class="`bui-flag bui-flag-${value}`"
  />
  <v-select
    v-else
    v-model="country"
    :dir="$buiOptions.isRtl ? 'rtl' : 'ltr'"
    style="background-color: #f2f2f2"
    :clearable="false"
    :options="options"
    label="desc"
    :reduce="(value) => value.key"
    @input="changeLanguage()"
  >
    <template #selected-option="{ key, desc }">
      <div class="d-flex align-items-center">
        <span :class="`bui-flag bui-flag-${key}`" />
        {{ desc }}
      </div>
    </template>
    <template #option="{ key, desc }">
      <div class="d-flex align-items-center">
        <span :class="`bui-flag bui-flag-${key}`" />
        {{ desc }}
      </div>
    </template>
  </v-select>
</template>

<script>
import vSelect from 'vue-select'
import { languagesProp } from '../../assets/js/props'

export default {
  name: 'BuiLanguageSelector',

  components: {
    vSelect
  },

  props: {
    value: {
      type: String,
      default: null
    },

    onlyFlag: {
      type: Boolean,
      default: false
    },

    /*
     * Dataset com os idiomas suportados.
     * Cada item do array deve possuir key e desc
     */
    options: languagesProp
  },

  data () {
    return {
      country: this.value
    }
  },

  methods: {
    changeLanguage: function () {
      this.$emit('input', this.country)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flagfly($name) {
  background: url(../../assets/images/flags/#{$name}.svg) center/contain
    no-repeat;
}

$flags: ar_AR, bm_ML, bn_BN, cz_CZ, da_DA, de_DE, el_EL, en_US, es_ES, fa_FA,
  fr_FR, he_IL, hi_HI, hu_HU, it_IT, ja_JP, ko_KO, nl_NL, pa_PA, pl_PL, pt_BR,
  pt_PT, ro_RO, ru_RU, si_SI, sk_SK, th_TH, tr_TR, vi_VI, zh_CN, undefined;

@each $flag in $flags {
  .bui-flag-#{$flag} {
    @include flagfly($flag);
  }
}

.bui-flag {
  width: 35px;
  height: 24px;
  display: inline-block;
  margin: 0px 12px 0px 2px;
}

html[dir="rtl"] {
  .bui-flag {
    margin: 0px 2px 0px 12px;
  }
}
</style>
