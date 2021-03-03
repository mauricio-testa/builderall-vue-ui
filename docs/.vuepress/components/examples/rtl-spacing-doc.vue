<template>
  <div>
    <ul
      v-for="property in properties"
      :key="property.name"
      style="list-style-type: none"
    >
      <li
        v-for="side in ['l', 'r']"
        :key="side"
      >
        <ul
          v-for="variant in property.variants"
          :key="variant"
          style="list-style-type: none; background: blue; padding: 0"
        >
          <li
            v-for="i in 5"
            :key="i"
            :class="`${property.name}${side}-${variant}-${i}`"
          >
            <div style="background: lightgray">
              {{ `${property.name}${side}-${variant}-${i}` }}
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      properties: [
        {
          name: 'm',
          variants: ['ltr', 'ltrn']
        },
        {
          name: 'p',
          variants: ['ltr']
        }
      ]
    }
  }
}
</script>
