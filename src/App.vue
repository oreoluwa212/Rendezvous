<script>
import { RouterView } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
export default {
   components: {
      AuthLayout, RouterView
   },
   data() {
      return {
         selectedLayout: 'AuthLayout'
      }
   },
   computed: {
      currentLayout() {
         return this.$route.path.includes('auth') ? 'AuthLayout' : 'AppLayout'
      }
   },
}

</script>

<template>
   <component :is="currentLayout">
      <RouterView />
   </component>
</template>

<style scoped></style>
