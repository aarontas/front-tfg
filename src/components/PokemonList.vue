<template>
    <div class="pokemon-list">
        <div v-for="pokemon in pokemons" :key="pokemon">
            <router-link :to="`/pokemon/${pokemon.id}`"
            style="text-decoration: none; color: inherit;">
                <PokemonItem :pokemon="pokemon" :isFromPokemonProfile="true"/>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import PokemonItem from "./PokemonItem.vue";

defineProps({
    pokemons: {
        type: Array,
        required: true,
    },
});
</script>
<style scoped>
.pokemon-list {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
}

a { text-decoration: none; }
</style>