<template>
  <ion-page>
    <ion-content :fullscreen="true">
     

        <div class="main-container">

    <div v-if="show">
      <button @click="selectMenu" class="btnmenu">
        <ion-icon  :src="menu" ></ion-icon>
      </button>
      </div>

      <div v-else class="menuContainer">
         <button @click="selectback" class="btnback">
        <ion-icon :src ="closeCircleOutline"></ion-icon>
      </button><br><br>


      <ul>
        <a @click="h5p" href="/category"><li>Home <ion-icon :src="homeOutline"></ion-icon></li></a>
        <li>Categories <ion-icon :src = "gridOutline"></ion-icon></li>
        <li>Self-Test <ion-icon :src="readerOutline"></ion-icon></li>
        <li>About <ion-icon :src="informationCircleOutline"></ion-icon></li>
        <li>Exit <ion-icon :src="powerOutline"></ion-icon></li>
      </ul>
          </div> 
 
       <ion-img class="logo" src="../../assets/veg.png"></ion-img>
        <h3>Vegetable Production</h3>
        <h4>English and Iloco Version</h4> 

      </div> 
       
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage,IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import { gridOutline,closeCircleOutline,menu,homeOutline,readerOutline,informationCircleOutline, powerOutline} from 'ionicons/icons';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonImg
  }, 
  setup(){
    return{
      gridOutline,closeCircleOutline,menu,homeOutline,readerOutline,informationCircleOutline,powerOutline
    }
  },data(){
    return{
      show: true
    }
  }, methods: {
    selectMenu(){
      this.show = !this.show
    },
    selectback(){
      this.show = !this.show
    },
    h5p(){
      this.$router.push('/h5p')
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
  width: auto;
  height: 100%;
    background: url("/public/assets/VegieTools.png") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
}

.menuContainer{
  
 position:absolute;
   
  width: 355px;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  height: 260px;
  width: 330px;
  background: #e6e6e6;
  border: 1px solid rgb(51, 51, 51);
}
#container {
   text-align: center; 

   position: absolute;
  left: 0;
  right: 0;
  top: 45%;

  width: auto;
  height: 55%;
  background-color: rgb(135, 248, 210);
}
h3{
    text-align: center; 

   position: absolute;
    left: 0;
    right: 0;
    top: 59%;
    font-size: 25px;
    font-weight: 900;
     font-family: Arial, Helvetica, sans-serif;
    color: rgb(6, 51, 17);
  /* border:1px solid black; */
}
h4{
    text-align: center; 

   position: absolute;
   left:0;
   right: 0;
    top: 64%;
    font-size: 15px;
    font-weight: 600;
    font-family: "Lucida Console", "Courier New", monospace;
    color: rgb(5, 5, 5);
  /* border:1px solid black; */
}
.btnmenu{
  float: right;
  margin-right: 18px;
  margin-top: 30px;
  width: 57px;
  background-color: #e6e6e6;
  border: 1px solid rgb(31, 31, 31);
}
.btnback{
  float: right;
  margin-right: -15px;
  margin-top: -15px;
  font-size: 50px;
  background-color: #ffffff;
  color:rgb(5, 54, 28);
}
.btnmenu ion-icon{
 font-size: 50px;
 color:rgb(5, 54, 28)
}

.logo {

  position:absolute;
   
  width: 260px;
  left: 50%;
  top: 43%;
  transform: translate(-50%, -50%);
   /* border: 1px solid black;  */
  
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
ul{
  list-style: none;
  text-align: right;
  font-size: 25px;
  padding: 10px;
 
}
li{
    margin-top: 10px;
    border-bottom:1px solid rgb(155, 155, 155);
}
</style>
