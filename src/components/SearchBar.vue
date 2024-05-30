<template>
    <div class="search-bar">
      <input type="text" placeholder="Search City" v-model="search" />
      <button type="button" class="clear" @click="clearSearch">Clear</button>
    </div>
    <div class="filter-bar">
      <div class="filter-bar__select" >
        <div >
        <label for="sortBy">Sort by</label>
        <select v-model="sortBy">
          <option v-for="city in cities" :key="city" :value=city.name>{{city.name}}</option>
        </select>
        <button type="button" class="Buscar" @click="Buscar">Clear</button>
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

const search = ref("");

const emit = defineEmits(["search"]);

const clearSearch = () => {
  search.value = "";
};

watch(search, () => {
  emit("search", search.value);
});
</script>
<style scoped>
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search-bar input {
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
}
.search-bar button {
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  min-width: 100px;
}
.search-bar .clear {
  margin-right: 10px;
}
.search-bar .add {
  background-color: #4caf50;
  color: #fff;
}
</style>