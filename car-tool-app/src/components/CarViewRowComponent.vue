<template>
  <tr>
    <td>{{car.id}}</td> 
    <td>{{car.make}}</td> 
    <td>{{car.model}}</td> 
    <td>{{car.year}}</td> 
    <td>{{car.color}}</td> 
    <td>{{car.price}}</td>
    <td><button type="button" v-on:click="deleteCar(car.id)">Delete</button></td>
  </tr>
</template>

<script>
export default {
  name: 'car-view-row',
  props: {
    car: {
      type: Object
    }
  },
  methods: {
    deleteCar(carId) {
      this.$emit('delete-car', carId);
    }
  },
}
</script>

<style scoped>

  td {
    border: 1px solid black;
    padding: 4px;
  }

</style>