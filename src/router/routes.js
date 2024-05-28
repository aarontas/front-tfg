import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Pokemon from '../views/PokemonProfile.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/pokemon/:id',
        name: 'Pokemon',
        component: Pokemon
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: Home
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router