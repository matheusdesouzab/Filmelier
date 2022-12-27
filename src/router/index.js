import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavbarMainLayout from '../layouts/NavbarMainLayout'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      navbar: NavbarMainLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
