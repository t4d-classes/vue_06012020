import Vue from 'vue';

new Vue({

  el: '#app',
  data: {
    headerText: 'Color Tool',
    colors: [
      { id: 1, name: 'purple' },
      { id: 2, name: 'blue' },
      { id: 3, name: 'dark teal' },
      { id: 4, name: 'dodger blue' },
    ],
  },
  delimiters: ['[[', ']]'],
  template: `
    <div>
      <header>
        <h1>[[headerText]]</h1>
      </header>
      <ul>
        <li v-for="color in colors">
          [[color.name + '(id: ' + color.id + ')']]
        </li>
      </ul>
    </div>
  `,
});