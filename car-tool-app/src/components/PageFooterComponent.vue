<template>
  <footer>
    <small>&copy; {{currentYear}}, {{companyName}}</small>
  </footer>
</template>

<script>
export default {
  name: 'page-footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      companyName: 'My Car Company, Inc.',
    };
  },
}
</script>

<style scoped>

</style>