<template>
  <tr>
    <td>{{car.id}}</td> 
    <td>{{car.make}}</td> 
    <td>{{car.model}}</td> 
    <td>{{car.year}}</td> 
    <td>{{car.color}}</td> 
    <td>{{car.price}}</td>
    <td>
      <button type="button" v-on:click="$emit('edit-car', car.id)">Edit</button>
      <button type="button" v-on:click="$emit('delete-car', car.id)">Delete</button>
    </td>
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
}
</script>

<style scoped>

  td {
    border: 1px solid black;
    padding: 4px;
  }

</style>