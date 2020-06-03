import Vue from 'vue';
import Vuex, { mapGetters, mapMutations } from 'vuex';

import { createStore } from './store';
import PageHeaderComponent from './components/PageHeaderComponent';
import ColorFormComponent from './components/ColorFormComponent';
import PageLayout from './components/PageLayoutComponent';

Vue.use(Vuex);

new Vue({

  el: '#app',
  store: createStore(),
  components: {
    'page-header': PageHeaderComponent,
    'color-form': ColorFormComponent,
    // 'page-layout': PageLayoutComponent,
    PageLayout,
  },
  computed: {
    ...mapGetters([ 'colors' ]),
  },
  methods: {
    ...mapMutations([ 'addColor' ]),
  },
  delimiters: ['[[', ']]'],
  template: `
    <page-layout>
      <template v-slot:header-block>
        <page-header>
          <h1>Color Tool</h1>
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