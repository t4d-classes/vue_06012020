<template>
  <div>
    <input type="checkbox" v-model="boldMe"> Bold Me

    <p :class="{ 'important-text': boldMe }">Here is some text</p>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      boldMe: false,
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
