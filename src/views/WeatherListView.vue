<template>
    <div class="container mx-auto">
        <div class="flex flex-col space-y-4">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold">Weather</h1>
                <RouterLink to="profile">
                    <img src="@/assets/icons/profile.svg" alt="">
                </RouterLink>
            </div>

            <RouterLink to="search">
                <SearchInput class="w-full"></SearchInput>
            </RouterLink>

            <RouterLink :to="{name: 'weather-detail'}">
                <LocationCard />
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LocationCard } from "@/components";
import { RouterLink } from 'vue-router';
import { useWeatherStore } from '@/stores/weather';
import { SearchInput } from '@/components';

const weatherStore = useWeatherStore();

weatherStore.getWeather();


</script>

<style scoped>

</style>