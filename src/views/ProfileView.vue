<template>
    <div class="flex flex-wrap justify-between items-center">
        <RouterLink :to="{ name: 'weather'}">
            <img src="@/assets/icons/back-black.svg" alt="" class="h-auto w-3">
        </RouterLink>
        <p class="font-bold text-xl">Edit profile</p>
        <div></div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped>

</style>