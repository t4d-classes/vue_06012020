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
      <car-view-row v-for="car in cars" :key="car.id" :car="car" />
    </tbody>
  </table>
</template>

<script>

import CarViewRowComponent from './CarViewRowComponent';

export default {
  name: 'car-table-component',
  components: {
    'car-view-row': CarViewRowComponent,
  },
  props: {
    cars: {
      type: Array,
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