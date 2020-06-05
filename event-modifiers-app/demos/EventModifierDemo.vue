<template>

  <div>
    <!-- <form  @click.capture.stop="log('form')"> -->
    <form @submit.prevent>
      <fieldset @keyup.enter="manualFormSubmit($event)">
        <div>
          <label for="first" @click.prevent.meta.exact="log('click first label with meta key pressed')">First</label>
          <input type="text" id="first" v-model="someText">
        </div>
        <div>
          <input type="text" id="second" v-model="someText2">
        </div>
        <!-- <button type="button" @click.once="log('button')">Click Me!</button> -->
        <button type="button" @click="manualFormSubmit($event)">Click Me!</button>
      </fieldset>
    </form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      someText: '',
      someText2: '',
    };
  },
  methods: {
    handleFormSubmit(e) {
      console.dir(e);
    },
    log(elementType) {
      console.log(elementType);
    },
    manualFormSubmit(e) {
      console.log('I submitted the form!');
      console.log(e);
    }
  }
}
</script>

<style>
</style>
