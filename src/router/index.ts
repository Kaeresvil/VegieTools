import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CateGory from '../views/ViewCategory.vue'
import Splash from '../views/Splash.vue'
import SliderPage from '../views/slider.vue'
import H5pStandalone from '../views/categories/H5Psatandalone.vue'
import okraH5pStandalone from '../views/categories/okra.vue'
import CategoriesBackground from '../views/categories/background.vue'
import CategoriesBackground2 from '../views/categories/background2.vue'



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
  },  {
    path: '/okra',
    name: 'okraH5P',
    component: okraH5pStandalone
  }, {
    path: '/background',
    name: 'cateBackground',
    component: CategoriesBackground
  }, {
    path: '/background2',
    name: 'cateBackground2',
    component: CategoriesBackground2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
