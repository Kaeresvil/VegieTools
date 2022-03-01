<template>
<ion-page>
  <ion-content>
  <div style="width:100%;" id="h5p-container"></div>
  <div style="width:100%;" id="h5p-container-2"></div>
 </ion-content>
  </ion-page>
</template>

<script>
   import { H5P } from 'h5p-standalone'; // ES6
// const { H5P } = require('h5p-standalone'); AMD
// const { H5P } = 'H5PStandalone'; // object destructuring
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
},
  methods: {
}, mounted(){
  
const player1Options = {
  h5pJsonPath: '../workspace/Okra1',
    frameJs: '../dist/frame.bundle.js',
    frameCss: '../dist/styles/h5p.css',
    fullscreen: false, //enable fullscreen button
    frame: true, 
    copyright: true,
    icon: true,
};



const player1 = new H5P(document.getElementById('h5p-container'), player1Options);

player1.then(() => {
  return new H5P(document.getElementById('h5p-container-2'), player2Options);
}).then(() => {
  // do stuff
})
},// end mounted
methods:{
  Back(){
     this.$router.push("/slider");
  }
}


};

</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    font-family: Arial, Helvetica, sans-serif;
    color:black;
    border: 1px solid black;
}
.btn{
    width: 90px;
    height: 30px;
    background: aquamarine;
    font-size: 25px;
    margin: 20px;
}
.main-container{
  width: auto;
  height: 100%;
    background: url("/public/assets/VegieTools.png") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
}
h1{
  color: rgb(0, 0, 0);
}

</style>