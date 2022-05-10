<template>
  <ion-page>
    <ion-content :fullscreen="true">
       <swiper class="slidePage">
        <swiper-slide>
  <HomePage/>
        </swiper-slide>
       
      </swiper>
    </ion-content>
  </ion-page>
</template>


<script>
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage } from '@ionic/vue';
import HomePage from './HomePage.vue'

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
export default defineComponent({
     name: 'SliderPage',
  
  components: { 
    Swiper,
    SwiperSlide,
    IonContent,
    IonPage,  
    HomePage,  
},
   
});
</script>
<style scoped>
.slidePage{
    height: 100%;
}
.page1{
    background-color: #0c4b05;
    color: white;
}
</style>