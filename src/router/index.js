import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmeView from '../views/FilmeView.vue'
import FilmesView from '../views/FilmesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/filmes',
    children: [
      {
        path: 'filmes',
        name: 'filmes',
        component: FilmesView,
      },
      {
        path: 'filmes/:id',
        name: 'filme',
        component: FilmeView
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
