<template>
  <form>
    <div>
      <label for="car-make-input">Make</label>
      <input type="text" id="car-make-input" v-model.lazy.trim="carForm.make" v-focus.active="carForm.make">
    </div>
    <div>
      <label for="car-model-input">Model</label>
      <input type="text" id="car-model-input" v-model.lazy.trim="carForm.model" >
    </div>
    <div>
      <label for="car-year-input">Year</label>
      <input type="number" id="car-year-input" v-model.lazy.number="carForm.year" >
    </div>
    <div>
      <label for="car-color-input">Color</label>
      <input type="text" id="car-color-input" v-model.lazy.trim="carForm.color" >
    </div>
    <div>
      <label for="car-price-input">Price</label>
      <input type="number" id="car-price-input" v-model.lazy.number="carForm.price" >
    </div>
    <button type="button" @click="submitCar()">{{buttonText}}</button>
  </form>
</template>

<script>
  export default {
    name: 'car-form',
    props: {
      buttonText: {
        type: String,
        default: () => 'Submit Car',
      },
    },
    directives: {
      focus: {
        inserted(el, binding) {
          console.dir(binding);

          if (binding.modifiers.active) {
            el.focus();
          }
        },
      },
    },
    data() {
      return {
        carForm: {
          make: '',
          model: '',
          color: '',
          year: '',
          price: '',
        },
      };
    },
    updated() {
      console.log('updating car form');
    },
    methods: {
      submitCar() {
        this.$emit('submit-car', this.carForm);

        this.carForm.make = '';
        this.carForm.model = '';
        this.carForm.year = '';
        this.carForm.color = '';
        this.carForm.price = '';
      },
    },
  };
</script>

<style scoped>

</style>