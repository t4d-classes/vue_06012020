import Vue from 'vue';

new Vue({

  el: '#app',
  data: {
    headerText: 'Car Tool',
  },
  template: `
    <div>
      <header>
        <h1>{{headerText}}</h1>
      </header>
    </div>
  `,
});