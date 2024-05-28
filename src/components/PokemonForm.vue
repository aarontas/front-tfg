// Book form in a modal
<template>
    <form class="form__form" @submit.prevent="createPokemon">
        <div class="form__form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="pokemon.name" required />
        </div>
        <div class="form__form-group">
            <label for="description">Description</label>
            <input type="text" id="description" v-model="pokemon.description" />
        </div>
        <div class="form__form-group">
            <label for="species">Species</label>
            <input type="text" id="species" v-model="pokemon.species" required />
        </div>
        <div class="form__form-group">
            <label for="types">Types</label>
            <input type="text" id="types" v-model="pokemon.types" required />
        </div>
        <div class="form__form-group">
            <label for="abilities">Abilities</label>
            <input type="text" id="abilities" v-model="pokemon.abilities" />
        </div>
        <div class="form__form-group">
            <label for="height">Height</label>
            <input type="text" id="height" v-model="pokemon.height" />
        </div>
        <div class="form__form-group">
            <label for="weight">Weight</label>
            <input type="text" id="weight" v-model="pokemon.weight" />
        </div>
        <div class="form__form-group">
            <label for="sprite">Sprite</label>
            <input type="text" id="sprite" v-model="pokemon.sprite" />
        </div>
        <div class="form__form-group">
            <label for="captured">Captured</label>
            <input type="checkbox" id="captured" v-model="pokemon.captured" />
        </div>
        <button type="submit" class="form__submit">Add Pokemon</button>
    </form>
</template>

<script setup>
import { reactive } from "vue";
import { uuid } from "vue-uuid";

const pokemon = reactive({
    name: "",
    description: "",
    species: "",
    types: "",
    abilities: "",
    height: "",
    weight: "",
    sprite: "",
    captured: "",
});
const resetPokemon = () => {
    pokemon.value = {
        name: "",
        description: "",
        species: "",
        types: "",
        abilities: "",
        height: "",
        weight: "",
        sprite: "",
        captured: "",
    };
};

const emit = defineEmits(["addPokemon", "closeModal"]);

const closeForm = () => {
    resetPokemon();
    emit("closeModal");
};
const createPokemon = () => {
    if (
        (pokemon.name === "" || pokemon.species === "",
            pokemon.types === "")
    ) {
        alert("Please fill in the required fields");
        return;
    }
    pokemon.id = uuid.v4();
    pokemon.types = pokemon.types.split(",");
    pokemon.abilities = pokemon.abilities.split(",");
    emit("addPokemon", pokemon);
    resetPokemon();
};
</script>

<style scoped>
.form__form {
    display: flex;
    flex-wrap: wrap;
}

.form__form-group {
    margin-bottom: 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
}

.form__form-group label {
    display: block;
    margin-bottom: 10px;
    text-align: left;
    font-size: 14px;
}

.form__form-group input,
.form__form-group select,
.form__form-group textarea {
    width: 80%;
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    outline: none;
    text-align: left;
}

.form__form-group input:focus,
.form__form-group textarea:focus {
    border-color: #000;
}

.form__form-group textarea {
    height: 100px;
}

.form__submit {
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    min-width: 100px;
    background-color: #4caf50;
    color: #fff;
}

.form__submit:hover {
    background-color: #43a047;
}
</style>
