const counterStore = {
    state: () => ({
      counter: 0,
    }),
    mutations: {
      changeCounter(state, data) {
        state.counter = data;
      },
    },
    actions: {},
    getters: {
      getCounter(state) {
        return state.counter;
      },
    },
  };
  
  export default counterStore;