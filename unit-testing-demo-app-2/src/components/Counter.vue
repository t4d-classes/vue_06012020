<template>
  <div>
    <p>{{counter}}</p>
    <button type="button" @click="increment()">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
}
</script>