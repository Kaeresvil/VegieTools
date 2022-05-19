<template>
  <ion-page>
   
  <HomePage/>
        
  </ion-page>
</template>


<script>
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import HomePage from './HomePage.vue'

export default defineComponent({
     name: 'SliderPage',
  
  components: { 
    IonPage,  
    HomePage,  
},
   
});
</script>
