import Vue from 'vue';

import PageHeaderComponent from './components/PageHeaderComponent';
import ColorFormComponent from './components/ColorFormComponent';

new Vue({

  el: '#app',
  components: {
    'page-header': PageHeaderComponent,
    'color-form': ColorFormComponent,
  },
  data: {

    headerText: 'Color Tool',
    colors: [
      { id: 1, name: 'purple' },
      { id: 2, name: 'blue' },
      { id: 3, name: 'dark teal' },
      { id: 4, name: 'dodger blue' },
    ],
  },
  methods: {
    addColor(colorName) {

      this.colors.push({
        id: Math.max(...this.colors.map(c => c.id), 0) + 1,
        name: colorName,
      });
    },
  },
  delimiters: ['[[', ']]'],
  template: `
    <div>
      <page-header :header-text="headerText"></page-header>
      <h2>Color List</h2>
      <ul>
        <li v-for="color in colors">
          [[color.name + '(id: ' + color.id + ')']]
        </li>
      </ul>
      <h2>Color Form</h2>
      <color-form button-text="Add Color" @submit-color="addColor($event)" />
    </div>
  `,
});