<template>
  <SearchBar v-on:search="setSearchTerm" />
  <FilterBar v-on:sortItems="sortcities" v-on:orderItems="ordercities" v-on:capturedItems="capturedcities" />
  <main class="main">
    <cityList :cities="filteredcities" />
  </main>
</template>
<script setup>
import Apicity from "../composition/Api.js"
import cityList from "../components/CityList.vue";
import SearchBar from "../components/SearchBar.vue";
import FilterBar from "../components/FilterBar.vue";
import { ref, watch, computed } from 'vue';

const citiesList = ref([])
const searchTerm = ref("")
const sortBy = ref("name")
const orderBy = ref("asc")
const captured = ref(false)

const fetchCities = async () => {
  try {
    citiesList.value = await Apicity.getCities();
  }
  catch (error) {
    console.error('Failed while fetch city list.' + error);
  }
}

const setSearchTerm = (value) => {
  searchTerm.value = value;
}

const sortcities = (value) => {
  sortBy.value = value;
}
const ordercities = (value) => {
  orderBy.value = value;
}
const capturedcities = (value) => {
  captured.value = value;
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

  if (!searchTerm.value) {
    return tempcityList;
  } else {
    tempcityList = citiesList.value.filter((city) => {
      return (
        city.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        city.temperature.some((item) =>
          item.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
      );
    });
  }
  return tempcityList;
})

</script>