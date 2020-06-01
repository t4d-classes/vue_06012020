import Vue from 'vue';

new Vue({

  el: '#app',
  data: {
    msg: 'Hello, World Vue.js!',
  },
  delimiters: ['[[', ']]'],
  template: `
    <p>[[msg]]</p>
  `,
});