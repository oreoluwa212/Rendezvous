export default class ProductService {
  constructor() {
    this.baseUrl = "https://fakestoreapi.com/products";
  }

  async getProducts() {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
}
