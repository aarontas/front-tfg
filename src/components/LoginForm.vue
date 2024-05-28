<template>
    <form class="form__form" @submit.prevent="loginUser">
        <div class="form__form-group">
            <label for="email"> Email </label>
            <input type="text" id="email" v-model="userLoginInfo.email" required />
        </div>
        <div class="form__form-group">
            <label for="password"> Password </label>
            <input type="text" id="password" v-model="userLoginInfo.password" required />
        </div>
        <div class="form__form-group">
        <button type="submit" class="form__submit">Login</button>
      </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue';
const emit = defineEmits(['loginUser'])

const userLoginInfo = reactive({
    email: "",
    password: "",
})

const loginUser = () => {
  if (
    (userLoginInfo.email === "" || userLoginInfo.password === "")
  ) {
    alert("Please fill in the Email and author Password fields");
    return;
  }
  emit("loginUser", userLoginInfo);
  resetLogin();
};

const resetLogin = () => {
    userLoginInfo.email = ""
    userLoginInfo.password = ""
}

</script>

<style scoped>
.form__form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.form__form-group {
    margin-bottom: 20px;
    width: 50%;
    display: block;
    flex-direction: column;
    text-align: center;
}

.form__form-group label {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    font-size: 14px;
}

.form__form-group input,
.form__form-group textarea {
    width: 100%;
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
}</style>