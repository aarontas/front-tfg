<template>
  <SearchBar v-on:selectCity="setSelectCityName" :cities="filteredcities"/>
  <FilterBar v-on:sortItems="sortcities" v-on:orderItems="ordercities"/>
  <main class="main">
    <CityList :cities="filteredcities" />
  </main>
</template>
<script setup>
import Apicity from "../composition/Api.js"
import CityList from "../components/CityList.vue";
import SearchBar from "../components/SearchBar.vue";
import FilterBar from "../components/FilterBar.vue";
import { ref, computed } from 'vue';

const citiesList = ref([])
const searchTerm = ref("")
const selectCityName = ref("")
const sortBy = ref("name")
const orderBy = ref("asc")

const fetchCities = async () => {
  try {
    citiesList.value = await Apicity.getCities();
  }
  catch (error) {
    console.error('Failed while fetch city list.' + error);
  }
}

const setSelectCityName = (value) => {
  selectCityName.value = value;
}

const sortcities = (value) => {
  sortBy.value = value;
}
const ordercities = (value) => {
  orderBy.value = value;
}

fetchCities()

const filteredcities = computed(() => {
  let tempcityList = citiesList.value;

  tempcityList = citiesList.value.sort((a, b) => {
    if (sortBy.value === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy.value === "temperature") {
      return parseFloat(a.temperature) > parseFloat(b.temperature) ? 1 : -1
    }
  });
  if (orderBy.value === "desc") {
    tempcityList = citiesList.value.reverse();
  }
  
  return tempcityList;
})

</script>