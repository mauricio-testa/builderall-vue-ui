<template>
  <div>
    <span
      v-if="onlyFlag"
      :class="`bui-flag bui-flag-${value}`"
    />
    <b-dropdown
      v-else
      :id="dropdownId"
      variant="light"
      block
      menu-class="w-100"
      no-caret
      toggle-class="d-flex justify-content-between px-3 trigger-language-selector"
      class="bui-dropdown-language-selector"
      @hidden="$emit('update:open', false)"
      @shown="$emit('update:open', true)"
    >
      <template #button-content>
        <span :class="`bui-flag bui-flag-${value}`" />
        {{ activeValueDescription }}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.781"
          height="6.294"
          viewBox="0 0 10.781 6.294"
        >
          <path
            class="a"
            fill="#adadad"
            d="M17.841,65.656h8.968a.905.905,0,0,1,.641,1.545l-4.484,4.484a.9.9,0,0,1-1.277,0L17.2,67.2A.905.905,0,0,1,17.841,65.656Z"
            transform="translate(-16.934 -65.656)"
          />
        </svg>
      </template>
      <b-dropdown-text class="mb-2">
        <label
          v-if="labelFavoriteLang"
          class="prefered-lang-label"
        >{{ labelFavoriteLang }}</label>
        <b-input
          v-model="search"
          type="search"
          placeholder="Search language"
          name="language"
        />
      </b-dropdown-text>
      <b-dropdown-item
        v-for="option in optionsComputed"
        :key="option.key"
        :class="{'active': option.key === value}"
        @click="$emit('input', option.key)"
      >
        <div class="d-flex align-items-center">
          <span
            :class="`bui-flag bui-flag-${option.key}`"
            class="mr-ltr-3 ml-rtl-3"
          />
          {{ option.desc }}
        </div>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { languagesProp } from '../../assets/js/props'

export default {
  name: 'BuiLanguageSelector',

  props: {
    value: {
      type: String,
      default: null
    },

    onlyFlag: {
      type: Boolean,
      default: false
    },

    dropdownId: {
      type: String,
      default: undefined
    },

    labelFavoriteLang: {
      type: String,
      required: false,
      default: undefined
    },

    /*
     * Dataset com os idiomas suportados.
     * Cada item do array deve possuir key e desc
     */
    options: languagesProp
  },

  data () {
    return {
      search: ''
    }
  },

  computed: {
    optionsComputed () {
      return this.options.filter(el => el.desc.toLowerCase().indexOf(this.search) > -1)
    },
    activeValueDescription () {
      return this.options.find(o => o.key === this.value)?.desc
    }
  }
}
</script>

<style lang="scss">
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
  width: 37px;
  height: 24px;
  display: inline-block;
  border-radius: 4px;
}

.bui-dropdown-language-selector {
  min-width: unset;
  .trigger-language-selector {
    font: normal normal normal 15px/18px Muli !important;
    color: #434343;
    text-transform: none;
  }
  .dropdown-menu {
    background: #FCF7F7 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 5px #00000029 !important;
    border-radius: 3px !important;
    max-height: 400px;
    overflow-y: auto;
    top: -40px;
    li {
      a.dropdown-item {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        padding: 0.65rem 10px 0.65rem 0rem;
        &:hover {
          background-color: #EDEDED;
        }
      }
      &.active {
        a.dropdown-item {
          border-left-color: var(--primary);
        }
      }
      .b-dropdown-text {
        padding: 3px 16px;
      }
    }
    .prefered-lang-label {
      font: normal normal normal 15px/18px Muli;
      color: #434343;
      display: block;
      margin: 5px 0 10px 0;
    }
  }
}

html[dir="rtl"] {
  .bui-dropdown-language-selector {
    .dropdown-menu {
      li.active a {
        border-right-color: var(--primary);
      }
    }
  }
}
</style>
