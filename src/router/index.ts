import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CateGory from '../views/ViewCategory.vue'
import Splash from '../views/Splash.vue'
import SliderPage from '../views/slider.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Slider'
  },
  {
    path: '/slider',
    name: 'Slider',
    component: SliderPage
  }, 
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }, {
    path: '/splash',
    name: 'SplashLoader',
    component: Splash
  }, {
    path: '/home/category',
    name: 'ViewCategory',
    component: CateGory
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
