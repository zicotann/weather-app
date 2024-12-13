<template>
    <!-- TODO: Style blue background -->
    <div class="mb-8">
        <div class="flex justify-between">
            <RouterLink to="/">
                <img src="@/assets/icons/back-black.svg" alt="">
            </RouterLink>
            <p>Location Name</p>
            <!-- TODO: Add plus icon -->
            <div></div>
        </div>
        <div class="flex flex-col">
            TODO: Add weather details
            <p>Monday, 20 December 2021</p>
        </div>
    </div>
    <div class="flex flex-col justify-center">
        <p class="text-xl font-bold mb-4">Hourly Forecast</p>
        <div class="overflow-x-scroll flex mb-6">
            <div v-for="index in 10" :key="index">
                <!-- TODO Style this card -->
                <!-- TODO Style this card -->
                <HourlyForecastCard class="mr-2" />
            </div>
        </div>

        <p class="text-xl font-bold mb-4">Weekly Forecast</p>
        <div v-for="index in 5" :key="index">
            <!-- TODO Style this card -->
            <WeeklyForecastCard class="mb-2" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { WeeklyForecastCard, HourlyForecastCard } from '@/components';

</script>

<style scoped>

</style>