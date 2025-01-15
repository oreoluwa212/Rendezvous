<template>
    <div class="bg-white shadow-lg p-8 flex flex-col gap-8 justify-center items-center min-h-[500px]">
        <div class="text-[24px] font-semibold text-center">Great to have you onboard!</div>
        <div class="text-[16px] text-gray-600 text-center">
            We just mailed you a confirmation link to <span class="font-semibold">josh.bakery@gmail.com</span>.
            Complete registration by following the link.
        </div>

        <div class="flex justify-center mt-2">
            <button class="bg-purple text-white px-8 py-3 text-[18px] rounded-[3px] flex items-center gap-2 ">
                Dashboard
                <span class="material-icons">arrow_forward</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
    },
};
</script>

<style scoped>
div.bg-white {
    max-width: 600px;
    width: 100%;
    margin: auto;
}
</style>