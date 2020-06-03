import Vuex from 'vuex';

export const createStore = () => {
  return new Vuex.Store({
    state: {
      cars: [
        { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
        { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 130000 },
      ],
      editCarId: -1,
      sortField: 'id',
    },
    getters: {
      cars: state => state.cars,
      editCarId: state => state.editCarId,
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
      }
    },
  });
}