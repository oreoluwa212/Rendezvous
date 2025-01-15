<template>
    <div class="px-6 py-12 bg-gray-50">
        <h2 class="text-2xl font-bold text-purple text-center mb-6">Discover a World of Events Tailored Just for You
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="type in eventTypes" :key="type.id" class="shadow-md rounded-lg overflow-hidden">
                <img :src="type.image" alt="Event Type" class="w-full h-40 object-cover">
                <div class="p-4 text-center">
                    <h3 class="text-lg font-bold">{{ type.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import concertStage from "@/assets/images/concert-stage.jpg";
import event1 from "@/assets/images/event_1.jpg";
import event2 from "@/assets/images/event_2.jpg";

export default {
    name: 'EventTypes',
    data() {
        return {
            eventTypes: [
                {
                    id: 1,
                    image: concertStage,
                    title: 'Online Events',
                },
                {
                    id: 2,
                    image: event1,
                    title: 'Physical Events',
                },
                {
                    id: 3,
                    image: event2,
                    title: 'Hybrid Events',
                },
            ],
        };
    },
};
</script>
