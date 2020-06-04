import Vuex from 'vuex';

export const createStore = () => {
  return new Vuex.Store({
    state: {
      cars: [],
      editCarId: -1,
      sortField: 'id',
      isLoading: false,
    },
    getters: {
      sortedCars: state => {
        return state.cars.sort((carA, carB ) => {
          if (carA[state.sortField] < carB[state.sortField]) {
            return -1;
          } else if (carA[state.sortField] > carB[state.sortField]) {
            return 1;
          } else {
            return 0;
          }
        });
      },
    },
    mutations: {
      setCars: (state, cars) => {
        state.cars = cars;
      },
      addCar: (state, car) => {
        state.cars.push({
          id: Math.max(...state.cars.map(c => c.id), 0) + 1,
          ...car,
        });
        state.editCarId = -1;
      },
      deleteCar(state, carId) {
        const carIndex = state.cars.findIndex(c => c.id === carId);
        state.cars.splice(carIndex, 1);
        state.editCarId = -1;
      },
      saveCar(state, car) {
        const carIndex = state.cars.findIndex(c => c.id === car.id);
        state.cars.splice(carIndex, 1, car);
        state.editCarId = -1;
      },
      editCar(state, carId) {
        state.editCarId = carId;
      },
      cancelCar(state) {
        state.editCarId = -1;
      },
      sortCar(state, sortField) {
        state.sortField = sortField;
      },
      setIsLoading(state, isLoading) {
        state.isLoading = isLoading;
      },
    },
    actions: {
      refreshCars: async ({ commit }) => {

        commit('setIsLoading', true);

        const res = await fetch('http://localhost:3070/cars');
        const cars = await res.json();

        commit('setCars', cars);
        commit('setIsLoading', false);

      },
    },
  });
}