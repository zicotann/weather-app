<template>
    <div class="flex flex-wrap items-center gap-4">
        <SearchInput></SearchInput>
        <RouterLink :to="{name: 'weather'}" >Cancel</RouterLink>
    </div>
</template>

<script setup lang="ts">
import { SearchInput } from '@/components';
</script>

<style scoped>

</style>