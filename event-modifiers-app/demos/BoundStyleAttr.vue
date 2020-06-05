<template>
  <div>

    Show Message <input type="checkbox" v-model="showMessage"><br>

    <span @click="toggleMeBold()">Click Me To Toggle Bold</span>

    <div v-if="showMessage">
      <span :style="boldStyle">Hello World!</span>
    </div>

    <br><br>
    <p>Am I bold? {{boldMe}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      boldMe: false,
      showMessage: true,
      boldStyle: { fontWeight: 'normal' },
    };
  },
  // computed: {
  //   boldStyle() {
  //     console.log('called computed bold style');
  //     return { fontWeight: this.boldMe ? 'bold' : 'normal' };
  //   }
  // },
  watch: {
    boldMe(newValue) {
      console.log('called watch bold style');
      this.boldStyle = { fontWeight: newValue ? 'bold' : 'normal' }
    },
  },
  methods: {
    toggleMeBold() {
      this.boldMe = !this.boldMe;
    }
  }
}
</script>

<style>
</style>
