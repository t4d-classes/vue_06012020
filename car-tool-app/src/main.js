import Vue from 'vue';
import Vuex, { mapGetters, mapMutations } from 'vuex';

import { createStore } from './store';
import PageLayoutComponent from './components/PageLayoutComponent';
import PageHeaderComponent from './components/PageHeaderComponent';
import PageFooterComponent from './components/PageFooterComponent';
import SectionHeaderComponent from './components/SectionHeaderComponent';
import CarTableComponent from './components/CarTableComponent';
import CarFormComponent from './components/CarFormComponent';

Vue.use(Vuex);

new Vue({

  el: '#app',
  store: createStore(),
  components: {
    PageHeader: PageHeaderComponent,
    'page-footer': PageFooterComponent,
    'section-header': SectionHeaderComponent,
    'car-table': CarTableComponent,
    'car-form': CarFormComponent,
    'page-layout': PageLayoutComponent,
  },
  data: {
    editCarId: -1,
  },
  computed: {
    ...mapGetters([ 'cars' ]),
  },
  methods: {
    ...mapMutations([ 'addCar' ]),
    // addCar(car) {
    //   this.cars.push({
    //     id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    //     ...car,
    //   });
    //   this.editCarId = -1;
    // },
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
    <page-layout>
      <template v-slot:header-block>
        <page-header header-text="Car Tool" />
      </template>
      <template v-slot:table-block>
        <section-header header-text="Car Table" />
        <car-table :cars="cars" :editCarId="editCarId"
          @edit-car="editCar($event)" @delete-car="deleteCar($event)"
          @save-car="saveCar($event)" @cancel-car="cancelCar()" />
      </template>
      <template v-slot:form-block>
        <section-header header-text="Car Form" />
        <car-form button-text="Add Car" @submit-car="addCar($event)" />
      </template>
      <template v-slot:footer-block>
        <page-footer company-name="My Car Company, Inc." />
      </template>
    </page-layout>
  `,
});