import Vue from 'vue';

import PageHeaderComponent from './components/PageHeaderComponent';
import PageFooterComponent from './components/PageFooterComponent';
import SectionHeaderComponent from './components/SectionHeaderComponent';
import CarTableComponent from './components/CarTableComponent';
import CarFormComponent from './components/CarFormComponent';

new Vue({

  el: '#app',
  components: {
    PageHeader: PageHeaderComponent,
    'page-footer': PageFooterComponent,
    'section-header': SectionHeaderComponent,
    'car-table': CarTableComponent,
    'car-form': CarFormComponent,
  },
  data: {
    cars: [
      { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
      { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 130000 },
    ],
    editCarId: -1,
  },
  methods: {
    addCar(car) {
      this.cars.push({
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
        ...car,
      });
      this.editCarId = -1;
    },
    deleteCar(carId) {
      const carIndex = this.cars.findIndex(c => c.id === carId);
      this.cars.splice(carIndex, 1);
      this.editCarId = -1;
    },
    saveCar(car) {
      const carIndex = this.cars.findIndex(c => c.id === car.id);
      this.cars.splice(carIndex, 1, car);
      this.editCarId = -1;
    },
    editCar(carId) {
      this.editCarId = carId;
    },
    cancelCar() {
      this.editCarId = -1;
    }
  },
  template: `
    <div>
      <page-header header-text="Car Tool" />
      <section-header header-text="Car Table" />
      <car-table :cars="cars" :editCarId="editCarId"
        @edit-car="editCar($event)" @delete-car="deleteCar($event)"
        @save-car="saveCar($event)" @cancel-car="cancelCar()" />
      <section-header header-text="Car Form" />
      <car-form button-text="Add Car" @submit-car="addCar($event)" />
      <page-footer company-name="My Car Company, Inc." />
    </div>
  `,
});