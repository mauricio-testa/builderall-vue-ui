<template>
  <div>
    <component :is="componentName" class="mt-2"/>
  </div>
</template>

<script>
  export default {
    props: {
      componentName: { type: String, required: true }
    }
  }
</script>