<template>
  <tr>
    <td>{{car.id}}</td> 
    <td><input type="text" v-bind:id=" 'edit-make-input-' + tableId " v-model="carForm.make"></td> 
    <td><input type="text" v-bind:id=" 'edit-model-input-' + tableId " v-model="carForm.model"></td> 
    <td><input type="text" v-bind:id=" 'edit-year-input-' + tableId " v-model="carForm.year"></td> 
    <td><input type="text" v-bind:id=" 'edit-color-input-' + tableId " v-model="carForm.color"></td> 
    <td><input type="text" v-bind:id=" 'edit-price-input-' + tableId " v-model="carForm.price"></td>
    <td>
      <button type="button" @click="saveCar()">Save</button>
      <button type="button" @click="$emit('cancel-car')">Cancel</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'car-edit-row',
  props: {
    tableId: {
      type: String,
    },
    car: {
      type: Object
    }
  },
  data() {
    return {
      carForm: {
        make: this.car.make,
        model: this.car.model,
        year: this.car.year,
        color: this.car.color,
        price: this.car.price,
      },
    };
  },
  methods: {
    saveCar() {
      this.$emit('save-car', {
        ...this.carForm,
        id: this.car.id,
      });
    },
  },
}
</script>

<style scoped>

  td {
    border: 1px solid black;
    padding: 4px;
  }

</style>