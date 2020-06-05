import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = { template: '<div>Home</div>' };
const About = {
  methods: {
    goHome() {
      this.$router.push('/');
    }
  },
  template: `
    <div>
      <h2>About</h2>

      <ul>
        <li><router-link to="/about/mission">Mission</router-link></li>
        <li><router-link to="/about/history">History</router-link></li>
      </ul>

      <button type="button" @click="goHome()">Go Home</button>

      <router-view></router-view>
    </div>
  `,

};

const Colors = {

  data() {
    return {
      colors: [],
    };
  },
  computed: {
    ucColors() {
      return this.colors.map(c => ({
        ...c,
        name: c.name.toUpperCase(),
      }));
    },
  },
  async beforeRouteEnter(to, from, next) {
    const res = await fetch('http://localhost:3070/colors');
    const colors = await res.json();
    next(vm => vm.colors = colors);
  },
  methods: {
    colorUrl(colorId) {
      return '/colors/' + encodeURIComponent(colorId);
    },
  },
  // hint: do not use filter, use computed property
  filters: {
    uppercase: (value) => {
      if (!value) return '';
      return String(value).toUpperCase();
    },
  },
  template: `
    <div>
      <h2>Colors</h2>

      <ul>
        <li v-for="color in ucColors" :key="color.id">
          <router-link :to="colorUrl(color.id)">{{color.name}}</router-link>
        </li>
      </ul>
    </div>
  `,

};

const Color = {

  data() {
    return {
      color: {},
    };
  },
  async beforeRouteEnter(to, from, next) {
    const res = await fetch('http://localhost:3070/colors/' +
      encodeURIComponent(to.params.colorId));
    const color = await res.json();
    next(vm => vm.color = color);
  },
  template: `
    <div>
      <h2>Color</h2>

      <ul>
        <li>Id: {{color.id}}</li>
        <li>Name: {{color.name}}</li>
        <li>Hexcode: {{color.hexcode}}</li>
      </ul>
    </div>
  `,

};


const Mission = { template: '<div>Mission</div>' };
const History = { template: '<div>History</div>' };

const routes = [
  { path: '/', component: Home },
  {
    path: '/about',
    component: About,
    children: [
      { path: 'mission', component: Mission },
      { path: 'history', component: History },
    ]
  },
  { path: '/colors', component: Colors },
  { path: '/colors/:colorId', component: Color },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});


new Vue({
  el: '#app',
  router,
  template: `
    <div>
      <header>
        <h1>A Cool Company, Inc.</h1>
      </header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/colors">Colors</router-link></li>
        </ul>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
  `,
});
