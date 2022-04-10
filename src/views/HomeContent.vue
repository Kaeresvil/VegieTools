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
    IonImg,
  },
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
  top: 27%;
  left: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
}

.logo{
  width: 275px;
   display: block;
  margin-left: auto;
  margin-right: auto;
}
h3{
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


/* 
Responsive CSS */


@media only screen and (max-device-height : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 150px;

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

@media only screen and (min-device-height : 481px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 200px;

}

.content{
  top: 25%;

}
h3{
font-size: 63px;
}
h4{
    font-size: 28px;

}

}
@media only screen and (min-device-height : 850px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.logo{
  width: 250px;

}

.content{
  top: 29%;

}
h3{
font-size: 72px;
}
h4{
    font-size: 35px;

}

}
@media screen 
  and (min-height: 1024px){
.logo{
  width: 300px;

}

.content{
  top: 27%;

}
h3{
font-size: 85px;
}
h4{
    font-size: 45px;

}

}
@media screen 
  and (min-height: 1180px){
.logo{
  width: 420px;

}

.content{
  top: 25%;

}
h3{
font-size: 125px;
}
h4{
    font-size: 55px;

}

}
@media screen 
  and (min-height: 1368px){
.logo{
  width: 450px;

}

.content{
  top: 25%;

}
h3{
font-size: 125px;
}
h4{
    font-size: 55px;

}

}

</style>