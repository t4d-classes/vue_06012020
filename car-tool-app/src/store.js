import Vuex from 'vuex';

import { getAllCars, appendCar, replaceCar, deleteCar } from './services/cars';

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
      setEditCarId: (state, editCarId) => {
        state.editCarId = editCarId;
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
        const cars = await getAllCars();
        commit('setCars', cars);
        commit('setEditCarId', -1);
        commit('setIsLoading', false);
      },
      // option 1 multiple async operations within an action
      addCar: async ({ commit }, car) => {
        commit('setIsLoading', true);
        await appendCar(car);
        const cars = await getAllCars();
        commit('setCars', cars);
        commit('setEditCarId', -1);
        commit('setIsLoading', false);
      },
      // option 2 chain in main
      saveCar: async ({ commit }, car) => {
        commit('setIsLoading', true);
        await replaceCar(car);
        commit('setIsLoading', false);
      },
      // option 3 dispatch
      deleteCar: async ({ commit, dispatch }, carId) => {
        commit('setIsLoading', true);
        await deleteCar(carId);
        commit('setIsLoading', false);
        dispatch('refreshCars');
      },
    },
  });
}