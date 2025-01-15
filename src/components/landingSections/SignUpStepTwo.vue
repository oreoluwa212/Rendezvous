<template>
    <div class="bg-white shadow-lg p-8 flex flex-col gap-8 min-w-[580px]">
        <div v-for="(field, index) in fields" :key="index" class="flex flex-col gap-1">
            <label class="text-sm font-medium">{{ field.label }}</label>
            <div class="border-b border-[#E6E7EB] flex items-center">
                <input :type="field.type" :placeholder="field.placeholder" :name="field.name"
                    class="w-full appearance-none bg-transparent border-none focus:outline-none text-[16px] leading-[24px]" />
                <img v-if="field.icon" :src="icons[field.icon]" alt="icon" class="h-5 w-5 ml-2" />
            </div>
        </div>

        <div class="flex justify-end items-center">
            <button class="bg-purple text-white px-8 py-1.5 text-[18px] leading-[22px] rounded-[3px]"
                @click="$emit('next-step')">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fields: {
            type: Array,
            required: true,
        },
        buttonText: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            icons: this.loadIcons(),
        };
    },
    methods: {
        loadIcons() {
            const icons = import.meta.glob('@/components/icons/*.svg', { eager: true });
            const mappedIcons = {};

            for (const path in icons) {
                const name = path.split('/').pop().replace('.svg', '');
                mappedIcons[name] = icons[path].default;
            }

            return mappedIcons;
        },
    },
};
</script>