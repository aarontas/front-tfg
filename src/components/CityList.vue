<template>
    <div class="city-list">
        <div v-for="city in cities" :key="city">
            <CityItem :city="city"/>
        </div>
    </div>
</template>
<script setup>
import CityItem from "./CityItem.vue";

defineProps({
    cities: {
        type: Array,
        required: true,
    },
});
</script>
<style scoped>
.city-list {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
}

a { text-decoration: none; }
</style>