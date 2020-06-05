<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: '<b>Hi Everyone! Almost time for lunch!</b>',
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
