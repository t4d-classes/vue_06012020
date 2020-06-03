import Vue from 'vue';

import PageHeaderComponent from './components/PageHeaderComponent';
import ColorFormComponent from './components/ColorFormComponent';
import PageLayoutComponent from './components/PageLayoutComponent';

new Vue({

  el: '#app',
  components: {
    'page-header': PageHeaderComponent,
    'color-form': ColorFormComponent,
    'page-layout': PageLayoutComponent,
  },
  data: {

    headerText: 'Color Tool',
    colors: [
      // { id: 1, name: 'purple' },
      // { id: 2, name: 'blue' },
      // { id: 3, name: 'dark teal' },
      // { id: 4, name: 'dodger blue' },
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
    <page-layout>
      <template v-slot:header-block>
        <page-header>
          <h1>[[headerText]]</h1>
          <small>We are the best Color Tool!</small>
        </page-header>
      </template>
      <template v-slot:list-block>
        <h2>Color List</h2>
        <div v-if="!colors.length">
          There are no colors.
        </div>
        <ul v-else>
          <template v-for="color in colors">
            <li>
              [[color.name + '(id: ' + color.id + ')']]
            </li>
            <li>
              [[color.name.toUpperCase()]]
            </li>
          </template>
        </ul>
      </template>
      <template v-slot:form-block>
        <color-form button-text="Add Color" @submit-color="addColor($event)" />
      </template>
    </page-layout>
  `,
});