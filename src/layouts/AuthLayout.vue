<template>
   <div class="flex w-screen h-screen">
      <div class="w-2/5 relative">
         <img :key="selectedImage" :src="`/images/${selectedImage}`" alt="banner"
            class="h-full w-full object-cover absolute inset-0 z-0" />
         <div class="z-20 absolute inset-0">
            <div class="w-full h-full flex flex-col justify-end items-center pb-14 text-white">
               <div class="text-xl font-semibold">No Hassles</div>
               <div class="w-2/3 text-center my-4 text-xl font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
               </div>
               <div class="flex items-center space-x-3">
                  <div v-for="image in images" :key="image"
                     class="size-5 flex items-center justify-center border rounded-full"
                     :class="selectedImage === image ? 'border-gray-700' : 'border-transparent'">
                     <button class="size-2.5 rounded-full" :class="selectedImage === image ? 'bg-green' : 'bg-gray-200'"
                        @click="selectedImage = image"></button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="w-3/5 flex flex-col h-full p-6">
         <div class="flex-1 flex justify-center items-center">
            <slot />
         </div>
         <div class="flex items-center justify-between text-gray-700 text-sm font-light">
            <div>
               By signing up, you agree to our
               <a class="text-green font-semibold">Terms</a> and
               <a class="text-green font-semibold">Privacy Policy</a>
            </div>
            <div>© 2019 TinyLabs. All rights reserved.</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         selectedImage: "Banner.png",
         images: ["Banner.png", "Banner2.png"],
      };
   },
};
</script>
