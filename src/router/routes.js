import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/CityProfile.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/city/:name',
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