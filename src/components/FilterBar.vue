<template>
    <div class="filter-bar">
      <div class="filter-bar__select">
        <label for="sortBy">Sort by</label>
        <select v-model="sortBy">
          <option value="name">Name</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>
      <div class="filter-bar__select">
        <label for="orderBy">Order by</label>
        <select v-model="orderBy">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const sortBy = ref("name");
  const orderBy = ref("asc");
  
  const emit = defineEmits(["sortItems", "orderItems"]);
  
  watch(sortBy, (newValue) => {
    emit("sortItems", newValue);
  });
  
  watch(orderBy, (newValue) => {
    emit("orderItems", newValue);
  });
  </script>
  
  <style scoped>
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
  </style>
  