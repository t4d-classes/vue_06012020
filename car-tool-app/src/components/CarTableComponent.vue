<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="car in cars">
        <car-edit-row v-if="car.id === editCarId" :car="car" :key="car.id"
          @save-car="$emit('save-car', $event)" @cancel-car="$emit('cancel-car')" />
        <car-view-row v-if="car.id !== editCarId" :car="car" :key="car.id"
          @edit-car="$emit('edit-car', $event)" @delete-car="$emit('delete-car', $event)" />
      </template>
    </tbody>
  </table>
</template>

<script>

import CarViewRowComponent from './CarViewRowComponent';
import CarEditRowComponent from './CarEditRowComponent';

export default {
  name: 'car-table-component',
  components: {
    'car-view-row': CarViewRowComponent,
    'car-edit-row': CarEditRowComponent,
  },
  props: {
    cars: {
      type: Array,
      defailt: () => [],
    },
    editCarId: {
      type: Number,
      default : -1,
    },
  },
}
</script>

<style scoped>

  table {
    margin: 20px;
  }

  th {
    border: 1px solid black;
    padding: 4px;
    font-weight: bold;
    text-align:center;
  }

</style>