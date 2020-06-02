<template>
  <form>
    <div>
      <label for="color-name-input">Name</label>
      <input type="text" id="color-name-input" v-model="colorForm.name" >
    </div>
    <button type="button" v-on:click="submitColor()">{{buttonText}}</button>
  </form>
</template>

<script>
export default {
  name: 'color-form',
  props: {
    buttonText: {
      type: String,
      default: 'Submit Color',
    },
  },
  data() {
    return {
      colorForm: {
        name: '',
      },
    };
  },
  methods: {
    submitColor() {

      this.$emit('submit-color', this.colorForm.name);

      this.colorForm.name = '';
    }
  }
}
</script>

<style scoped>

</style>