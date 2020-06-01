import Vue from 'vue';

new Vue({

  el: '#app',
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
    addColor() {

      this.colors.push({
        id: Math.max(...this.colors.map(c => c.id), 0) + 1,
        name: this.colorForm.name,
      });

      this.colorForm.name = '';
    },
  },
  template: `
    <div>
      <header>
        <h1>{{headerText}}</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
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
          </tr>
        </tbody>
      </table>
    </div>
  `,
});