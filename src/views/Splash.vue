<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div class="main-container">
          <div class="img-container"><ion-img class="logo" src="../../assets/veg.png"></ion-img>
          <div class="title">
       <i> <h3>MMSU-IEC Materials on Vegetable Production</h3></i>
        </div>
        
        </div>
        <h4>English and Iloco Version</h4> 
      </div> 
       
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage,IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SplashLoader',
  components: {
    IonContent,
    IonPage,
    IonImg
  
  },data(){
    return{
      show: true
    }
  }
  
});
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-container{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("/public/assets/Background.jpg"); 
  background-size:100% 100%;
  
}
.img-container{
  text-align: center;
  max-width: 100%;
   margin-top: 37%;
}
.logo{
  width: 230px;
  display:block;
 margin-left: auto;
  margin-right: auto;
}
.title{
  max-width: 95%;
  margin: 0 auto;
}

h3{
font-family: 'Barlow Condensed', sans-serif;
font-size: 30px;
font-weight: 900;
color: #093803;
}

h4{
position: absolute;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
right: 0;
bottom: 0;
padding-right: 10px;
color: rgb(255, 255, 255);
font-size: 18px;
}


/* 
Responsive CSS */


@media only screen and (max-device-height : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.img-container{
  margin-top: 20%;
}
.logo{
  width: 150px;
}

h3{
font-size: 20px;
font-weight: 700;
}
h4{
font-size: 12px;
}
}

@media only screen and (min-device-height : 481px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.img-container{
  margin-top: 20%;
}
.logo{
  width: 150px;
}

h3{
font-size: 22px;
font-weight: 700;
}
h4{
font-size: 14px;
}

}
@media only screen and (min-device-height : 500px) and 
 (min-device-width : 320px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.img-container{
   margin-top: 20%;
}
.logo{
  width: 170px;
}

h3{
font-size: 20px;
font-weight: 700;
}
h4{
font-size: 14px;
}
}

@media only screen and (min-device-height : 600px) and 
 (min-device-width : 320px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.img-container{
  margin-top: 22%;
}
.logo{
  width: 200px;
}

h3{
font-size: 25px;
font-weight: 700;
}
h4{
font-size: 14px;
}

}

@media only screen and (min-device-height : 700px) and 
 (min-device-width : 320px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.img-container{
 margin-top: 30%;
}.logo{
  width: 230px;
}


h3{
font-size: 28px;
font-weight: 500;
}
h4{
font-size: 14px;
}

}

@media only screen and (min-device-height : 800px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.img-container{
  margin-top: 37%;
}
.logo{
  width: 230px;
}

h3{
font-size: 28px;
font-weight: 700;
}
h4{
font-size: 16px;
}

}

@media screen 
  and (min-height: 1024px){
.img-container{
  margin-top: 15%;
}
.logo{
  width: 350px;
}

h3{
font-size: 40px;
font-weight: 700;
}
h4{
font-size: 20px;
}

}

@media screen 
  and (min-height: 1368px){
.img-container{
  margin-top: 37%;
}
.logo{
  width: 230px;
}

h3{
font-size: 43px;
font-weight: 700;
}
h4{
font-size: 22px;
}

}


</style>
