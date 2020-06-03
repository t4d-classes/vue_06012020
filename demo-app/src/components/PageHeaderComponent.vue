<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'page-header',
  // props: {
  //   headerText: {
  //     type: String,
  //     default: () => 'The Tool',
  //   },
  // }
}
</script>

<style scoped>


  header {
    color: white;
  }

</style>