<template>

  <ion-content scrollX="true" scrollY="true">
  <div v-if="isActive" id="h5p-container">
  </div>
 </ion-content>

</template>

<script>
   import { H5P } from 'h5p-standalone'; // ES6
import { IonContent } from '@ionic/vue';

export default {
    name: 'H5Pstandalone',
    props:{

        selectcontent: {
      type: String,
      required: true
    },
    num: {
      type: Number,
      required: true
    },
   

    },
    components: {
IonContent, 

    },
data(){
return{
    isActive: true,
}
}, mounted(){

console.log(this.num)
  if(this.num == 0){
    this.isActive = false;
  }

  if(!this.isActive){
    this.isActive = true;
 const el = document.getElementById('h5p-container');
            const options = {
            h5pJsonPath: this.selectcontent,
            frameJs: '../dist/frame.bundle.js',
            frameCss: '../dist/styles/h5p.css',
            fullscreen: false, //enable fullscreen button
            frame: true, 
            copyright: true,
            icon: true,
            };
            new H5P(el, options);

  }

},


};

</script>


<style scoped>
#h5p-container{
max-width: 100%;
}  

</style>