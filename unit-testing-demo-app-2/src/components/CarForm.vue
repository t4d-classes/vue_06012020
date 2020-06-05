<template>
  <form>
    <div>
      <label for="car-make-input">Make</label>
      <input type="text" id="car-make-input" v-model="carForm.make" >
    </div>
    <div>
      <label for="car-model-input">Model</label>
      <input type="text" id="car-model-input" v-model="carForm.model" >
    </div>
    <div>
      <label for="car-year-input">Year</label>
      <input type="text" id="car-year-input" v-model="carForm.year" >
    </div>
    <div>
      <label for="car-color-input">Color</label>
      <input type="text" id="car-color-input" v-model="carForm.color" >
    </div>
    <div>
      <label for="car-price-input">Price</label>
      <input type="text" id="car-price-input" v-model="carForm.price" >
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
    methods: {
      submitCar() {
        this.$emit('submit-car', { ...this.carForm });

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