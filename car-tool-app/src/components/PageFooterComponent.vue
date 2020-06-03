<template>
  <footer>
    <small>&copy; {{currentYear}}, {{companyName}}</small>
  </footer>
</template>

<script>
export default {
  name: 'page-footer',
  props: {
    companyName: {
      type: String,
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
}
</script>

<style scoped>

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  small {
    font-size: 0.8rem;
  }

</style>