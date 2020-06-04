<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>
          <button @click="sortCars('make')">
            <label v-if="isEditing" v-once :for="fieldId('make')">Make</label>
            <span v-else>Make</span>
          </button>
        </th>
        <th>
          <button @click="sortCars('model')">
            <label v-if="isEditing" v-once :for="fieldId('model')">Model</label>
            <span v-else>Model</span>
          </button>
        </th>
        <th>
          <button @click="sortCars('year')">
            <label v-if="editCarId > 0" v-once :for="fieldId('year')">Year</label>
            <span v-else>Year</span>
          </button>
        </th>
        <th>
          <button @click="sortCars('color')">
            <label v-if="isEditing" v-once :for="fieldId('color')">Color</label>
            <span v-else>Color</span>
          </button>
        </th>
        <th>
          <button @click="sortCars('price')">
            <label v-if="isEditing" v-once :for="fieldId('price')">Price</label>
            <span v-else>Price</span>
          </button>
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="car in cars">
        <car-edit-row v-if="car.id === editCarId" :car="car" :key="car.id" :table-id="tableId"
          @save-car="$emit('save-car', $event)" @cancel-car="$emit('cancel-car')" />
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
    isEditing() {
      return this.editCarId > 0;
    }
  },
  methods: {
    sortCars(fieldName) {
      console.log('sortCars, fieldName: ', fieldName);
      if (this.editCarId === -1) {
        this.$emit('sort-car', fieldName);
      }
    },
    fieldId(fieldName) {
      console.log('fieldId, fieldName: ', fieldName, ', tableId: ', this.tableId);
      return 'edit-' + fieldName + '-input-' + this.tableId;
    },
  }
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