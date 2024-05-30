<template>
    <div class="profile__info">
        <div class="profile__image">
            <img :src="userStore.getAvatar" />
        </div>
        <div class="profile__data">
            <p class="profile__name">{{ userStore.getName }}</p>
            <p class="profile__city">{{ userStore.getCity }}</p>
            <p class="profile__country">{{ userStore.getCountry }}</p>
            <p class="profile__email">{{ userStore.getEmail }}</p>
            <p class="profile__phone">{{ userStore.getPhone }}</p>
            <p class="profile__address">{{ userStore.getAddress }}</p>
        </div>
    </div>
</template>

<script setup>
import { watch } from "vue";
import { useRouter } from 'vue-router'
const userStore = useStore();
const router = useRouter()

const checkIsLoged = (status) => {
    if (!status) {
        router.push('/');
    }
}

checkIsLoged(userStore.isLogged)

watch(() => userStore.isLogged, (currentyLogged) => {
    checkIsLoged(currentyLogged)
})

</script>

<style scoped>
.profile__info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.profile__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 50px;
}

.profile__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile__data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.profile__name {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}

.profile__city,
.profile__country,
.profile__email,
.profile__phone,
.profile__address {
    font-size: 20px;
    margin-bottom: 10px;
}
</style>