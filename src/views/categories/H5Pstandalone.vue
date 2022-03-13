<template>

  <ion-content>
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
     content: String,
     morecontent: String,
     backButton: Number,
     morebackButton: Number,
     backclicked: Number,


    },
    components: {
IonContent, 

    },
data(){
return{
    isActive: true,
}
}, mounted(){


if(this.backButton == 1){
 
             this.isActive = true;
            const el = document.getElementById('h5p-container');
            const options = {
            h5pJsonPath: this.content,
            frameJs: '../dist/frame.bundle.js',
            frameCss: '../dist/styles/h5p.css',
            fullscreen: false, //enable fullscreen button
            frame: true, 
            copyright: true,
            icon: true,
        };

        new H5P(el, options);


} if(this.morebackButton == 2 ){
    this.isActive = true;
            const el = document.getElementById('h5p-container');
            const options = {
            h5pJsonPath: this.morecontent,
            frameJs: '../dist/frame.bundle.js',
            frameCss: '../dist/styles/h5p.css',
            fullscreen: false, //enable fullscreen button
            frame: true, 
            copyright: true,
            icon: true,
        };

        new H5P(el, options);

}else if(this.backButton != 1 && this.backclicked != 1){
  console.log("inactive");
  this.isActive = false;
}
},


};

</script>


<style scoped>
#h5p-container{
max-width: 100%;
}  

</style>