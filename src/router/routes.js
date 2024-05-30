import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import City from '../views/CityProfile.vue'
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
        path: '/city/:id',
        name: 'City',
        component: City
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