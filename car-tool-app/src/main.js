import Vue from 'vue';

import PageHeaderComponent from './components/PageHeaderComponent';
import PageFooterComponent from './components/PageFooterComponent';
import CarTableSectionHeaderComponent from './components/CarTableSectionHeaderComponent';
import CarFormSectionHeaderComponent from './components/CarFormSectionHeaderComponent';

new Vue({

  el: '#app',
  components: {
    PageHeader: PageHeaderComponent,
    'page-footer': PageFooterComponent,
    'car-table-section-header': CarTableSectionHeaderComponent,
    'car-form-section-header': CarFormSectionHeaderComponent,
  },
  data: {
    headerText: 'Car Tool',
    cars: [
      { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
      { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 130000 },
    ],
    carForm: {
      make: '',
      model: '',
      color: '',
      year: '',
      price: '',
    },
  },
  methods: {
    addCar() {

      this.cars.push({
        ...this.carForm,
        // make: this.carForm.make,
        // model: this.carForm.model,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      });

      this.carForm.make = '';
      this.carForm.model = '';
      this.carForm.year = '';
      this.carForm.color = '';
      this.carForm.price = '';
    },
    deleteCar(carId) {
      const carIndex = this.cars.findIndex(c => c.id === carId);
      this.cars.splice(carIndex, 1);
    }
  },
  template: `
    <div>
      <page-header></page-header>
      <car-table-section-header></car-table-section-header>
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
          <tr v-for="car in cars">
            <td>{{car.id}}</td> 
            <td>{{car.make}}</td> 
            <td>{{car.model}}</td> 
            <td>{{car.year}}</td> 
            <td>{{car.color}}</td> 
            <td>{{car.price}}</td>
            <td><button type="button" v-on:click="deleteCar(car.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
      <car-form-section-header></car-form-section-header>
      <form>
        <div>
          <label for="car-make-input">Make</label>
          <input type="text" id="car-make-input" v-model="carForm.make" >
        </div>
        <div>
          <label for="car-model-input">Model</label>
          <input type="text" id="car-model-input" v-model="carForm.model" >
        </div>
        <div>
          <label for="car-year-input">Year</label>
          <input type="text" id="car-year-input" v-model="carForm.year" >
        </div>
        <div>
          <label for="car-color-input">Color</label>
          <input type="text" id="car-color-input" v-model="carForm.color" >
        </div>
        <div>
          <label for="car-price-input">Price</label>
          <input type="text" id="car-price-input" v-model="carForm.price" >
        </div>
        <button type="button" v-on:click="addCar()">Add Car</button>
      </form>
      <page-footer></page-footer>
    </div>
  `,
});