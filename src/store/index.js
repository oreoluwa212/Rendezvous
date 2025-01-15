import { createStore } from "vuex";
import productStore from "./products";
import counterStore from "./counter";
import userStore from "./user";

export default createStore({
  modules: {
    products: productStore,
    counter: counterStore,
    user: userStore,
  },
});
