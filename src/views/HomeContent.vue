<template>
    
<div class="content">
     <ion-img class="logo" src="../../assets/veg.png"></ion-img>
           <i><h3>VegieTools</h3></i>
           <h4>English and Iloco Version</h4>
</div>

</template>

<script>
 import {IonImg, } from '@ionic/vue';

export default {
     name: 'HomeContent',
   components: {
    IonImg 
  },
  data(){
    return{
        grid: true,
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content{
  text-align: center;
  position: absolute;
  top: 31%;
  left: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
}

.logo{
  width: 260px;
   display: block;
  margin-left: auto;
  margin-right: auto;
}
h3{

font-size: 68px;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 1000;
color: #0c4b05;
}
h4{
    font-size: 35px;
    font-family: 'Barlow Condensed', sans-serif;
    color:#000000;
    
}


/* 
Responsive CSS */


@media only screen and (max-device-height : 640px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 190px;

}

.content{
  top: 26%;

}

h3{
font-size: 48px;
}
h4{
    font-size: 23px;

}
}
@media only screen and (min-device-height : 641px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 210px;

}

.content{
  top: 29%;

}

h3{
font-size: 50px;
}
h4{
    font-size: 26px;

}
}
@media only screen and (min-device-height : 800px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 240px;

}

.content{
  top: 30%;

}

h3{
font-size: 54px;
}
h4{
    font-size: 29px;

}
}


@media only screen and (min-device-height : 1000px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
 width: 330px;

}

.content{
  top: 28%;

}

h3{
font-size: 83px;
}
h4{
  font-size: 58px;
}

}
@media only screen and (min-device-height : 1100px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
 width: 390px;

}

.content{
  top: 28%;

}

h3{
font-size: 100px;
}
h4{
  font-size: 58px;
}

}



@media only screen and (max-device-height : 369px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 125px;

}

.content{
  top: 20%;

}

h3{
font-size: 45px;
}
h4{
    font-size: 20px;

}
}
@media only screen and (max-device-height : 322px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 100px;

}

.content{
  top: 20%;

}

h3{
font-size: 40px;
}
h4{
    font-size: 17px;

}
}
@media only screen and (min-device-height : 370px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 150px;

}

.content{
  top: 20%;

}

h3{
font-size: 45px;
}
h4{
    font-size: 20px;

}
}
@media only screen and (min-device-height : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
 width: 190px;

}

.content{
  top: 20%;

}

h3{
font-size: 68px;
}
h4{
    font-size: 38px;

}
}
@media only screen and (min-device-height : 520px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
 width: 255px;

}

.content{
  top: 20%;

}

h3{
font-size: 58px;
}
h4{
    font-size: 28px;

}
}
@media only screen and (min-device-height : 570px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
 width: 255px;

}

.content{
  top: 20%;

}

h3{
font-size: 60px;
}
h4{
    font-size: 32px;

}
}
@media only screen and (min-device-height : 670px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
 width: 335px;

}

.content{
  top: 20%;

}

h3{
font-size: 78px;
}
h4{
    font-size: 40px;

}
}

</style>