import Vue from 'vue';

import PageHeaderComponent from './components/PageHeaderComponent';

// global registation
// Vue.component('page-header', {

//   data() {
//     return {
//       headerText: 'Color Tool',
//     };
//   },
//   delimiters: ['[[', ']]'],
//   template: `
//     <header>
//       <h1>[[headerText]]</h1>
//     </header>
//   `,
// });

// local registration
// const pageHeaderComponent = {
//   data() {
//     return {
//       headerText: 'Color Tool',
//     };
//   },
//   delimiters: ['[[', ']]'],
//   template: `
//     <header>
//       <h1>[[headerText]]</h1>
//     </header>
//   `,
// };

new Vue({

  el: '#app',
  // local registration
  components: {
    'page-header': PageHeaderComponent,
  },
  data: {
    colors: [
      { id: 1, name: 'purple' },
      { id: 2, name: 'blue' },
      { id: 3, name: 'dark teal' },
      { id: 4, name: 'dodger blue' },
    ],
    colorForm: {
      name: '',
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
  delimiters: ['[[', ']]'],
  template: `
    <div>
      <page-header></page-header>
      <h2>Color List</h2>
      <ul>
        <li v-for="color in colors">
          [[color.name + '(id: ' + color.id + ')']]
        </li>
      </ul>
      <h2>Color Form</h2>
      <form>
        <div>
          <label for="color-name-input">Name</label>
          <input type="text" id="color-name-input" v-model="colorForm.name" >
        </div>
        <button type="button" v-on:click="addColor()">Add Color</button>
      </form>
    </div>
  `,
});