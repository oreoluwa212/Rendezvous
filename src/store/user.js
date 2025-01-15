const userStore = {
    state: () => ({
      user: {},
      isLoggedIn: false
    }),
    mutations: {
      changeUser(state, data) {
          if(data) {
              state.user = data;
          }
      }
    },
    actions: {},
    getters: {},
  };
  
  export default userStore;