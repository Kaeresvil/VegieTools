<template>
     <ion-img class="logo" src="../../assets/veg.png"></ion-img>
           <i><h3>VegieTools</h3></i>
           <h4>English and Iloco Version</h4>
</template>

<script>
 import {IonImg, } from '@ionic/vue';

export default {
     name: 'HomeContent',
   components: {
    IonImg,
  },
}
</script>

<style scoped>
.logo{
     width: 280px;
  display:block;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h3{
padding-top:97%;
font-size: 78px;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 1000;
color:#0c4b05;
}
h4{
    font-size: 38px;
    font-family: 'Barlow Condensed', sans-serif;
    color:#000000;
}
</style>