<template>
  <header>
    <h1>{{headerText}}</h1>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  // props: [ 'headerText' ],
  props: {
    headerText: {
      type: String,
      default: () => 'The Tool',
    },
  }
  // data() {
  //   return {
  //     headerText: 'Color Tool',
  //   };
  // },
}
</script>

<style scoped>

</style>