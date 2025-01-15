<template>
    <div class="relative bg-cover bg-center h-96" style="background-image: url('/src/assets/images/concert-stage.jpg')">
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        <div class="relative flex flex-col md:flex-row justify-between items-end h-full px-[5%] pb-5">
            <p class="text-white text-xl font-bold max-w-md">
                Welcome to our event platform!
            </p>
            <FilterOptions />
        </div>
    </div>
</template>


<script>
import FilterOptions from "./FilterOptions.vue";
export default {
    name: 'HeroSection',
    components: {
        FilterOptions,
    },
};
</script>