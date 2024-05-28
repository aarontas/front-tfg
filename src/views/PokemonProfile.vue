<template>
    <main class="main" v-if="userStore.isLogged">
        <PokemonItem :pokemon="pokemon"  v-on:delete-pokemon="deletePokemon" />
    </main>
</template>
<script setup>
import { ref } from "vue";
import ApiPokemon from "../composition/Api.js"
import PokemonItem from "../components/PokemonItem.vue";
import { watch } from "vue";
import { useStore } from "../store/user.js"
import { useRouter, useRoute } from 'vue-router'
const userStore = useStore();
const router = useRouter()
const route = useRoute()
const pokemon = ref()

const checkIsLoged = (status) => {
    if (!status) {
        router.push('/');
    }
}
const findPokemon = async (pokemonId) => {
    try {
        pokemon.value = await ApiPokemon.findPokemon(pokemonId)
    }
    catch (error) {
        console.error('Failed while try to find pokemon: ' + error);
    }
}

const deletePokemon = async (id) => {
  try {
    await ApiPokemon.deletePokemon(id);
    alert("Pokemon: " + pokemon.value.name + " already deleted");
    router.push('/');
  }
  catch (error) {
    console.error('Failed while try to delete pokemon: ' + error);
  }
}

checkIsLoged(userStore.isLogged)
if (userStore.isLogged) {
    findPokemon(route.params.id)
}

watch(() => userStore.isLogged, (currentyLogged) => {
    checkIsLoged(currentyLogged)
})
</script>