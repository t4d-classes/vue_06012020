<template>
  <header>
    <h1>{{headerText}}</h1>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  props: {
    headerText: {
      type: String,
    },
  },
}
</script>

<style scoped>

</style>