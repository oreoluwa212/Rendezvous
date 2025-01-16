<template>
    <div class="px-6 py-12">
        <div class="flex justify-between items-center">
            <h2 class="text-2xl font-bold text-purple-700">Trending events</h2>
            <a href="#" class="text-purple-700 hover:text-purple-500">View all trending events &rarr;</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12 mt-6">
            <div v-if="loading" class="col-span-3 text-center">
                <p class="text-gray-500">Loading products...</p>
            </div>
            <div v-else-if="error" class="col-span-3 text-center">
                <p class="text-red-500">Failed to load events. Please try again later.</p>
            </div>
            <router-link v-else v-for="event in events" :key="event.id"
                :to="{ name: 'product-details', params: { id: event.id } }"
                class="shadow-md rounded-lg border overflow-hidden block hover:shadow-lg transition-shadow">
                <div class="w-full flex justify-center items-center py-5">
                    <img :src="event.image" alt="Event" class="w-48 h-48 object-cover" />
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-bold">{{ event.title }}</h3>
                    <p class="text-sm text-gray-500">{{ event.date }}</p>
                    <p class="text-sm mt-2">{{ event.description }}</p>
                    <router-link :to="{ name: 'product-details', params: { id: event.id } }"
                        class="text-purple hover:italic mt-3  gap-2 flex items-center">
                        View details <span class="material-icons text-base">arrow_forward</span>
                    </router-link>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script>
import ProductService from "@/services/ProductService";

export default {
    name: "TrendingEvents",
    data() {
        return {
            events: [],
            loading: true,
            error: null,
        };
    },
    async created() {
        const productService = new ProductService();
        try {
            const products = await productService.getProducts();
            this.events = products.map((product) => ({
                id: product.id,
                image: product.image,
                title: product.title,
                date: "Available Now",
                description:
                    product.description.length > 100
                        ? product.description.substring(0, 100) + "..."
                        : product.description,
            }));
        } catch (err) {
            console.error("Error fetching events:", err);
            this.error = "Failed to load events.";
        } finally {
            this.loading = false;
        }
    },
};
</script>