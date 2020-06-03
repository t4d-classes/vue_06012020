import Vuex from 'vuex';

export const createStore = () => {
  return new Vuex.Store({
    state: {
      cars: [
        { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
        { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 130000 },
      ],
    },
    getters: {
      cars: state => state.cars,
    },
    mutations: {
      addCar: (state, car) => {
        state.cars.push({
          id: Math.max(...state.cars.map(c => c.id), 0) + 1,
          ...car,
        });
      },
    },
  });
}