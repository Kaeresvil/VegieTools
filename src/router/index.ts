import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import vegeTable from '../views/vegetable.vue'
import FooterPage from '../views/footer.vue'
import CateGory from '../views/ViewCategory.vue'
import MoreCateGory from '../views/moreCategory.vue'
import Splash from '../views/Splash.vue'
import SliderPage from '../views/slider.vue'
import H5pStandalone from '../views/categories/H5Pstandalone.vue'
import content from '../views/categories/content.vue'
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
    component: SliderPage,
    props: true
  }, 
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }, 
  {
    path: '/vegetable',
    name: 'vegeTable',
    component: vegeTable,
    props: true
  }, {
  
    path: '/footer',
    name: 'Footer',
    component: FooterPage
  }, {
    path: '/splash',
    name: 'SplashLoader',
    component: Splash
  }, {
    path: '/home/category',
    name: 'ViewCategory',
    component: CateGory
  },  {
    path: '/morecategory',
    name: 'moreCategory',
    component: MoreCateGory
  }, {
    path: '/h5p',
    name: 'H5Pstandalone',
    component: H5pStandalone
  },  
   {
    path: '/content',
    name: 'vegeContent',
    component: content
  },  {
    path: '/okra',
    name: 'okraH5P',
    component: okraH5pStandalone
  }, {
    path: '/background/:iscontent?',
    name: 'cateBackground',
    component: CategoriesBackground,
    props: true
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
