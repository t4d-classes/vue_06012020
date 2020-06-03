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
  computed: {
    ...mapGetters([ 'sortedCars', 'editCarId' ]),
  },
  methods: {
    ...mapMutations([
      'addCar', 'saveCar', 'deleteCar',
      'editCar', 'cancelCar', 'sortCar',
    ]),
  },
  template: `
    <page-layout>
      <template v-slot:header-block>
        <page-header header-text="Car Tool" />
      </template>
      <template v-slot:table-block>
        <section-header header-text="Car Table" />
        <car-table :cars="sortedCars" :editCarId="editCarId"
          @edit-car="editCar($event)" @delete-car="deleteCar($event)"
          @save-car="saveCar($event)" @cancel-car="cancelCar()"
          @sort-car="sortCar($event)"
           />
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