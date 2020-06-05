<template>
  <div>
    <input type="checkbox" v-model="toggleState">

    <p v-if="toggleState" key="toggled">The box is checked.</p>
    <p v-else key="not-toggled">The box is not checked.</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      toggleState: false,
    };
  },
  methods: {
  }
}
</script>

<style>

  .important-text {
    font-weight: bold;
  }

</style>
