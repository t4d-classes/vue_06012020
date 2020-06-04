import Vue from 'vue';
import Vuex, { mapGetters, mapMutations, mapState, mapActions } from 'vuex';

import { createStore } from './store';
import PageLayout from './components/PageLayoutComponent';
import PageHeader from './components/PageHeaderComponent';
import PageFooter from './components/PageFooterComponent';
import SectionHeader from './components/SectionHeaderComponent';
import CarTable from './components/CarTableComponent';
import CarForm from './components/CarFormComponent';

Vue.use(Vuex);

new Vue({

  el: '#app',
  store: createStore(),
  components: {
    PageHeader,
    PageFooter,
    SectionHeader,
    CarTable,
    CarForm,
    PageLayout,
  },
  computed: {
    ...mapState([ 'editCarId', 'isLoading' ]),
    ...mapGetters([ 'sortedCars' ]),
  },
  methods: {
    ...mapMutations([
      'editCar', 'cancelCar', 'sortCar',
    ]),
    ...mapActions([
      'refreshCars', 'addCar',
      'saveCar', 'deleteCar',
    ]),
    async saveAndRefreshCars(car) {
      await this.saveCar(car);
      await this.refreshCars();
    },
  },
  mounted() {
    this.refreshCars();
  },
  template: `
    <div>
      <page-layout>
        <template v-slot:header-block>
          <page-header header-text="Car Tool" />
        </template>
        <template v-slot:table-block>
          <section-header header-text="Car Table" />
          <car-table :cars="sortedCars" :editCarId="editCarId"
            @edit-car="editCar($event)" @delete-car="deleteCar($event)"
            @save-car="saveAndRefreshCars($event)" @cancel-car="cancelCar()"
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
      <div id="loading-blocker" v-if="isLoading">
        <p>Loading...</p>
      </div>
    </div>
  `,
});