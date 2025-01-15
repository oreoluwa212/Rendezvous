const productStore = {
  state: () => ({
    products: [],
    productsByLocation: {
      lagos: [],
      china: [],
      usa: [],
      dubai: [],
    },
  }),
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProductsByLocation(state, { location, products }) {
      state.productsByLocation[location] = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        commit("setProducts", products);

        commit("setProductsByLocation", {
          location: "lagos",
          products: products.slice(0, 5),
        });
        commit("setProductsByLocation", {
          location: "dubai",
          products: products.slice(5, 10),
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },

  getters: {
    getProductsByLocation: (state) => (location) =>
      state.productsByLocation[location] || [],
  },
};

export default productStore;
