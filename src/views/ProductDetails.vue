<template>
  <Navbar />
  <div class="px-6 py-[5%]">
    <div v-if="loading" class="text-center">
      <p class="text-gray-500">Loading product...</p>
    </div>
    <div v-else-if="error" class="text-center">
      <p class="text-red-500">Failed to load product. Please try again later.</p>
    </div>
    <div v-else class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="w-[300px] h-[300px]">

          <img :src="product.image" alt="Product Image" class="w-full h-full object-contain rounded-lg">
        </div>
        <div>
          <h1 class="text-3xl font-bold text-purple-700">{{ product.title }}</h1>
          <p class="text-lg text-gray-500 mt-2">{{ product.category }}</p>
          <p class="text-xl font-bold text-gray-900 mt-4">NGN {{ product.price }}</p>
          <p class="mt-6">{{ product.description }}</p>
          <button class="bg-purple-700 text-white px-6 py-3 mt-4 rounded-lg hover:bg-purple-600">
            Buy now
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/landingSections/Footer.vue';
import Navbar from '@/components/landingSections/Navbar.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: null,
      loading: true,
      error: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product details.");
      }
      this.product = await response.json();
    } catch (err) {
      console.error(err);
      this.error = "Failed to load product details.";
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>