<template>
    <div class="filter-bar">
      <div class="filter-bar__select" >
        <div >
        <label for="selectCity">City</label>
        <select v-model="selectCity">
          <option v-for="city in cities" :key="city" :value=city.name>{{city.name}}</option>
        </select>
        <button type="button" class="Buscar" @click="buscar">Buscar</button>
      </div>
    </div>
    </div>
  </template>
<script setup>
import { ref, watch } from "vue";

defineProps({
    cities: {
        type: Array,
        required: true,
    },
});

const selectCity = ref("");

const emit = defineEmits(["search", "selectCity"]);

const buscar = () => {
  selectCity.value = "";
};

watch(selectCity, () => {
  emit("selectCity", selectCity.value);
});
</script>
<style scoped>
.search-bar .add {
  background-color: #4caf50;
  color: #fff;
}
.filter-bar {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
}
.filter-bar__select {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.filter-bar__select label {
  margin-right: 10px;
}
.filter-bar__select select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}
.filter-bar button {
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  min-width: 100px;
}
</style>