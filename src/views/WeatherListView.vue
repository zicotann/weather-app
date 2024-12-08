<template>
    <div class="container mx-auto">
        <div class="flex flex-col space-y-4">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold">Weather</h1>
                <p>Profile icon</p>
            </div>

            <div class="card">
                <LocationCard />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { LocationCard } from "@/components";

</script>

<style scoped>

</style>