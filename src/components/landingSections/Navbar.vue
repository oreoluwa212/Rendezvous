<template>
    <nav class="bg-white shadow py-4 px-[5%]">
        <div class="flex justify-between items-center">
            <p class="text-purple text-2xl font-bold">MyLogo</p>
            <div class="hidden md:flex space-x-6">
                <a href="#" class="text-purple">Home</a>
                <a href="#" class="text-purple">About</a>
                <a href="#" class="text-purple">Contact</a>
            </div>
            <div class="flex items-center space-x-4">
                <router-link to="/auth" class="cursor-pointer text-purple">Login</router-link>

                <router-link to="/auth">
                    <button class="bg-purple text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                        Sign Up
                    </button>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>