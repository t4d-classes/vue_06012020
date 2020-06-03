<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>
          <button @click="$emit('sort-car', 'make')">
            <label v-bind:for=" 'edit-make-input-' + tableId ">Make</label>
          </button>
        </th>
        <th>
          <button @click="$emit('sort-car', 'model')">
            <label v-bind:for=" 'edit-model-input-' + tableId ">Model</label>
          </button>
        </th>
        <th>
          <button @click="$emit('sort-car', 'year')">
            <label v-bind:for=" 'edit-year-input-' + tableId ">Year</label>
          </button>
        </th>
        <th>
          <button @click="$emit('sort-car', 'color')">
            <label v-bind:for=" 'edit-color-input-' + tableId ">Color</label>
          </button>
        </th>
        <th>
          <button @click="$emit('sort-car', 'price')">
            <label v-bind:for=" 'edit-price-input-' + tableId ">Price</label>
          </button>
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="car in cars">
        <car-edit-row v-if="car.id === editCarId" :car="car" :key="car.id"
          @save-car="$emit('save-car', $event)" @cancel-car="$emit('cancel-car')" :table-id="tableId" />
        <car-view-row v-else :car="car" :key="car.id"
          @edit-car="$emit('edit-car', $event)" @delete-car="$emit('delete-car', $event)" />
      </template>
    </tbody>
  </table>
</template>

<script>

import { uniqueId } from 'lodash';
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
  computed: {
    tableId() {
      return uniqueId();
    },
  },
};
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

  button {
    background-color: white;
    border: 0;
    font-size: 1rem;
    /* outline: none; */
  }

</style>