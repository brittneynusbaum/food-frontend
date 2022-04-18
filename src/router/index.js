import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DishesNew from '../views/DishesNew.vue'
import DishesIndex from '../views/DishesIndex.vue'
import DishesShow from '../views/DishesShow.vue'
import DishesEdit from '../views/DishesEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dishes',
    name: 'dishes-index',
    component: DishesIndex
  },
  {
    path: '/dishes/new',
    name: 'dishes-new',
    component: DishesNew
  },
  {
    path: '/dishes/:id',
    name: 'dishes-show',
    component: DishesShow
  },
  {
    path: '/dishes/:id/edit',
    name: 'dishes-edit',
    component: DishesEdit
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
