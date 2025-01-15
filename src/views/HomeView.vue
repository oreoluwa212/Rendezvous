<template>
  <div class="w-full">
    <Navbar />
    <HeroSection />
    <div class="px-[5%] py-14">
      <TrendingEvents />
      <EventTypes />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeroSection from '@/components/landingSections/HeroSection.vue';
import Navbar from '@/components/landingSections/Navbar.vue';
import TrendingEvents from '@/components/landingSections/TrendingEvents.vue';
import EventTypes from '@/components/landingSections/EventTypes.vue';
import Footer from '@/components/landingSections/Footer.vue';

export default {
  components: {
    Navbar,
    HeroSection,
    TrendingEvents,
    EventTypes,
    Footer,
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
</style>
