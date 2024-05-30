<template>
    <main class="main" v-if="userStore.isLogged">
        <cityItem :city="city"/>
    </main>
</template>
<script setup>
import { ref } from "vue";
import Apicity from "../composition/Api.js"
import cityItem from "../components/CityItem.vue";
import { watch } from "vue";
import { useRouter, useRoute } from 'vue-router'
const userStore = useStore();
const router = useRouter()
const route = useRoute()
const city = ref()

const findcity = async (cityId) => {
    try {
        city.value = await Apicity.findcity(cityId)
    }
    catch (error) {
        console.error('Failed while try to find city: ' + error);
    }
}

checkIsLoged(userStore.isLogged)
if (userStore.isLogged) {
    findcity(route.params.id)
}

watch(() => userStore.isLogged, (currentyLogged) => {
    checkIsLoged(currentyLogged)
})
</script>