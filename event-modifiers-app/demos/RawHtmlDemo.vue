<template>
  <div>
    <p v-html="message"></p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // message: "<b>Hi Everyone! Almost time for lunch!</b><script> alert(0); " + "</" + "script>",
      message: "<b>Hi Everyone! Almost time for lunch!</b>" +
        "<img src='x' onerror='fetch(\"http://localhost:3070/cars\").then(res => res.json()).then(c => console.log(c));'>",
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
