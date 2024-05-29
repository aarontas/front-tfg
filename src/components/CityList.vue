<template>
    <div class="city-list">
        <div v-for="city in cities" :key="city">
            <router-link :to="`/city/${city.id}`"
            style="text-decoration: none; color: inherit;">
                <cityItem :city="city"/>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import cityItem from "./cityItem.vue";

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