import Vuex from 'vuex';

// named export
export const createStore = () => {
  
  return new Vuex.Store({
    state: {
      colors: [
        { id: 1, name: 'purple' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'dark teal' },
        { id: 4, name: 'dodger blue' },
      ],
    },
    getters: {
      colors: state => state.colors,
      ucColors: state => state.colors.toUpperCase(),
    },
    mutations: {
      addColor: (state, colorName) => {
        state.colors.push({
          id: Math.max(...state.colors.map(c => c.id), 0) + 1,
          name: colorName,
        });
      },
    },
  });

};

export const doIt = () => {}