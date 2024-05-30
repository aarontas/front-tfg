<template>
    <main class="main" v-if="userStore.isLogged">
        <cityItem :city="city"  v-on:delete-city="deletecity" />
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

const checkIsLoged = (status) => {
    if (!status) {
        router.push('/');
    }
}
const findcity = async (cityId) => {
    try {
        city.value = await Apicity.findcity(cityId)
    }
    catch (error) {
        console.error('Failed while try to find city: ' + error);
    }
}

const deletecity = async (id) => {
  try {
    await Apicity.deletecity(id);
    alert("city: " + city.value.name + " already deleted");
    router.push('/');
  }
  catch (error) {
    console.error('Failed while try to delete city: ' + error);
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