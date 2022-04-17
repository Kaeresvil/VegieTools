<template>

     <ion-content :scroll-events="true" >
           <i><h3>About Us</h3></i>
      
      <div class="vegGrid">
             <div class="vegetableList">
                <h1>Kaeresvil O. Arellano</h1>
                <ion-img src="../../assets/kee.png"></ion-img>
                <h1>Researcher</h1>
              </div>      
              <div class="vegetableList">
                <h1>Ma. Eloiza Joy Q. Raymundo</h1>
                <ion-img src="../../assets/eloi.png"></ion-img>
                <h1>Researcher</h1>
              </div>      
              <div class="vegetableList">
                <h1>Ruben Jose Q. Fernandez</h1>
                <ion-img src="../../assets/ruben.png"></ion-img>
                <h1>Researcher</h1>
              </div>      
              <div class="vegetableList">
                <h1>Prof. Wilben Christie R. Pagtaconan</h1>
                <ion-img src="../../assets/wilben.png"></ion-img>
                <h1>Research Adviser</h1>
              </div>      

        </div>
         <div class="content">
         <p>The VegieTools Application utilized the existing Information, Education and Communication Materials on Vegetable Production from Mariano Marcos State University Extension Directorate. </p>
       </div>
     
  </ion-content>

</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent( {
     name: 'AboutPage',
});
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h3{
font-size: 48px;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 1000;
color:#0c4b05;
}
.content{
  width: 93%;
  height: auto;
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px 10px;
  border: 1px solid rgb(32, 32, 32);
  text-align: justify;
  padding: 12px 8px;
  background-color: #ffffff;
}
p{
  font-size: 20px;
  color: black;

}
ion-content{ 
   --background: transparent;
   height: calc(100vh - 150px);
 }

h1{
  color: white;
  font-size: 15px;
}

.vegGrid{
  display: grid;
  grid-template-columns: auto auto;
  width: 93%; 
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  column-gap: 10px;
  row-gap: 10px;

}
.vegetableList{
  background-color:#295724;
  border-radius: 10px 10px;
  padding: 10px 0 10px 0;
  border-bottom: 8px solid gold;
  text-align: center;
}
@media only screen and (max-device-height : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
ion-content{ 
   --background: transparent;
   height: calc(100vh - 111px);
 }

}

/* landscpae responsive */

@media only screen and (max-device-height : 450px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
ion-content{ 
   --background: transparent;
   height: calc(100vh - 106px);
 }
 .vegGrid{ 
  margin-top: 2%;
}
}
</style>