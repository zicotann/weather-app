<template>
    <div class="container mx-auto">
        <div class="flex flex-col space-y-4">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold">Weather</h1>
                <img src="@/assets/icons/profile.svg" alt="">
            </div>

            <RouterLink to="search">
                <button>Search</button>
            </RouterLink>

            <div class="card">
                <LocationCard />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { LocationCard } from "@/components";
import { RouterLink } from 'vue-router';

</script>

<style scoped>

</style>