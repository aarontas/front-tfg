<template>
  <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm" />
  <FilterBar v-on:sortItems="sortPokemons" v-on:orderItems="orderPokemons" v-on:capturedItems="capturedPokemons" />
  <main class="main">
    <PokemonList :pokemons="filteredPokemons" />
  </main>
  <ModalLayer v-if="showModal" v-on:closeModal="toggleForm()">
    <template v-slot:header>
      <h2>Add a new Pokemon</h2>
    </template>
    <template v-slot:body>
      <PokemonForm v-on:addPokemon="addPokemon" />
    </template>
  </ModalLayer>
</template>
<script setup>
import ApiPokemon from "../composition/Api.js"
import PokemonList from "../components/PokemonList.vue";
import SearchBar from "../components/SearchBar.vue";
import ModalLayer from "../components/ModalLayer.vue";
import PokemonForm from "../components/PokemonForm.vue";
import FilterBar from "../components/FilterBar.vue";
import { useStore } from "../store/user.js"
import { ref, watch, computed } from 'vue';

const userStore = useStore();
const pokemosList = ref([])
const showModal = ref(false)
const searchTerm = ref("")
const sortBy = ref("name")
const orderBy = ref("asc")
const captured = ref(false)

const fetchPokemos = async () => {
  try {
    pokemosList.value = await ApiPokemon.getPokedex();
  }
  catch (error) {
    console.error('Failed while fetch pokemon list.' + error);
  }
}

const toggleForm = () => {
  if (userStore.isLogged) {
    showModal.value = !showModal.value;
  }
}

const addPokemon = async (pokemon) => {
  try {
    await ApiPokemon.addPokemon(pokemon);
    fetchPokemos()
    toggleForm();
  }
  catch (error) {
    console.error('Faild while try to add pokemon: ' + error);
  }
}

const setSearchTerm = (value) => {
  searchTerm.value = value;
}

const sortPokemons = (value) => {
  sortBy.value = value;
}
const orderPokemons = (value) => {
  orderBy.value = value;
}
const capturedPokemons = (value) => {
  captured.value = value;
}

fetchPokemos()

watch(() => userStore.isLogged, () => {
  fetchPokemos()
})

const filteredPokemons = computed(() => {
  let tempPokemonList = pokemosList.value;

  tempPokemonList = pokemosList.value.sort((a, b) => {
    if (sortBy.value === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy.value === "types") {
      return a.types > b.types ? 1 : -1
    } else if (sortBy.value === "abilities") {
      return a.abilities > b.abilities ? 1 : -1
    }
  });
  if (orderBy.value === "desc") {
    tempPokemonList = pokemosList.value.reverse();
  }
  if (captured.value) {
    tempPokemonList = pokemosList.value.filter((pokemon) => pokemon.captured);
  }

  if (!searchTerm.value) {
    return tempPokemonList;
  } else {
    tempPokemonList = pokemosList.value.filter((pokemon) => {
      return (
        pokemon.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        pokemon.types.some((item) =>
          item.toLowerCase().includes(searchTerm.value.toLowerCase())
        ) ||
        pokemon.abilities.some((item) =>
          item.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
      );
    });
  }
  return tempPokemonList;
})



</script>

<style></style>
