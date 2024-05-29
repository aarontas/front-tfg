<template>
  <header class="header">
    <div class="left">
      <router-link to="/">
        <img class="logo" src="./assets/uoc-logo.png" alt="UOC logo" />
      </router-link>
      <h1 class="app-name">GoodWeather</h1>
    </div>
  </header>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { useStore } from "./store/user.js"
const userStore = useStore();
</script>


<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
}

.header .left {
  display: flex;
  align-items: center;
}

.header .right {
  display: flex;
  align-items: center;
}

.header .logo {
  max-height: 50px;
}

.header .app-name {
  margin-left: 25px;
  font-weight: bold;
  font-size: 20px;
}

.header .user {
  display: flex;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
}

.header .login-button,
.header .logout-button {
  background: #2c3e50;
  color: #fff;
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 15px;
}
</style>
