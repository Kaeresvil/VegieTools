import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CateGory from '../views/ViewCategory.vue'
import Splash from '../views/Splash.vue'
import SliderPage from '../views/slider.vue'
import H5pStandalone from '../views/categories/H5Psatandalone.vue'
import CategoriesBackground from '../views/categories/background.vue'



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
  }, {
    path: '/h5p',
    name: 'H5Pstandalone',
    component: H5pStandalone
  }, {
    path: '/background',
    name: 'cateBackground',
    component: CategoriesBackground
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
