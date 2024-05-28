<template>
  <header class="header">
    <div class="left">
      <router-link to="/">
        <img class="logo" src="./assets/uoc-logo.png" alt="UOC logo" />
      </router-link>
      <h1 class="app-name">Pokedex</h1>
    </div>
    <div class="right">
      <router-link to="/profile">
        <h1 class="user"> {{ userStore.getName }}</h1>
      </router-link>
      <button type="button" class="login-button" v-if="!userStore.isLogged" @click="toggleForm">Login</button>
      <button type="button" class="logout-button" v-else @click="logOut">Logout</button>
    </div>
  </header>
  <div id="app">
    <router-view />
  </div>
  <ModalLayer v-if="showModal" v-on:closeModal="toggleForm()" :loginModal="true">
    <template v-slot:header>
      <h2>Login</h2>
    </template>
    <template v-slot:body>
      <LoginForm v-on:loginUser="loginUser" />
    </template>
  </ModalLayer>
</template>


<script setup>
import LoginForm from "./components/LoginForm.vue";
import ModalLayer from "./components/ModalLayer.vue";
import { useStore } from "./store/user.js"
import { ref } from 'vue';
const userStore = useStore();
const showModal = ref(false);

const toggleForm = () => {
  showModal.value = !showModal.value;
}

const loginUser = async (userLoginInfo) => {
  try {
    await userStore.setUserData(userLoginInfo.email, userLoginInfo.password);
    toggleForm();
  }
  catch (error) {
    console.error('Failed while login: ' + error)
  }
}

const logOut = () => {
  userStore.$reset()
}

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
