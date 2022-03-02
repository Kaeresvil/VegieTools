<template>
<ion-page>
  <ion-content>
  <div style="width:100%;" id="h5p-container"></div>
 </ion-content>
  </ion-page>
</template>

<script>
   import { H5P } from 'h5p-standalone'; // ES6
import { IonContent, IonPage } from '@ionic/vue';

export default {
    name: 'H5Pstandalone',
    props:{
      activeIndex: Number
    },
    components: {
IonContent, 
IonPage 
    },
data(){
return{}
}, mounted(){
  const el = document.getElementById('h5p-container');
const options = {
    h5pJsonPath: '../workspace/eggplantHarvest',
    frameJs: '../dist/frame.bundle.js',
    frameCss: '../dist/styles/h5p.css',
    fullscreen: false, //enable fullscreen button
    frame: true, 
    copyright: true,
    icon: true,
};

new H5P(el, options);
}
};

</script>


<style scoped>

</style>