<template >
    <div class="city" v-if="cityResponse">
        <div class="city__image">
            <img :src=cityResponse.imageUrl alt="city cover" />
        </div>
        <div class="city__info">
            <h2 class="city__name">{{ cityResponse.cityName }}</h2>
        </div>
        <div class="city__stats">
            <div class="city__stat">
                <div class="city__stat-value"> {{ cityResponse.averageTemperature }} ºC</div>
            </div>
        </div>
        <div class="city__stats">
            <div class="city__stat">
                <div class="city__stat-value-score">Score: {{ cityResponse.score }}</div>
            </div>
        </div>
    </div>
</template>
<script setup>

import { useRoute } from 'vue-router'
import Apicity from "../composition/Api.js"
import { ref } from "vue";
import { onBeforeMount } from "vue"
const route = useRoute()
const cityName = ref()
const cityResponse = ref()

onBeforeMount(() => setQueryParams());

const setQueryParams = async () =>{
    cityResponse.value = await Apicity.getWeather(route.query.name, route.query.startdate, route.query.enddate);
}


</script>
<style scoped>
.city {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    max-width: 400px;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.city__image {
    width: 100%;
    max-width: 200px;
    height: 100%;
    max-height: 200px;
    margin-bottom: 1rem;
}

.city__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.city__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.city__name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #333;
    text-decoration: none;
}

.city__stats {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.city__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.city__stat-name {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
}

.city__stat-value {
    font-size: 1rem;
    font-weight: 700;
}
.city__stat-value-score {
    font-size: 2rem;
    font-weight: 700;
}
</style>