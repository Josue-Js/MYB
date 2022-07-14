import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import MakeYourBurger from '../views/MakeYourBurger.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/makeYourBurger',
    name: 'makeYourBurger',
    component: MakeYourBurger
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export { router }