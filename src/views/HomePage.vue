<template>
   <div class="main-container">
       <div class="header">
           <div>
             <ion-img class="logo1" src="../../assets/veg.png"></ion-img>
            </div>  <!--end of logohead -->

             <div>
             <h6>VegieTools</h6>
             </div>
            <div v-if="show">
             <ion-icon @click="menuClicked" class="menubtn" src="../../assets/svg/menu-burger.svg"></ion-icon>
            </div>
            <div v-else>
             <ion-icon @click="menuBack" class="menubtn" src="../../assets/svg/cross-circle.svg"></ion-icon>
            </div>
       </div><!-- end of header div -->
       <div class="liner">
           <Transition name="fade"> 

            <div v-if="hide" class="menu-container">
               <div @click="SelfTest" class="grid-list">
                   <ion-icon class="self" src="../../assets/svg/document-signed.svg"></ion-icon><h1>Self-Test</h1>
               </div>
               <div @click="ExitApps" class="grid-list">
                  <ion-icon class="power" src="../../assets/svg/power.svg"></ion-icon><h1>Exit</h1>
               </div>
             </div><!-- end of menu container -->
             </Transition>
       </div><!-- end of liner div -->
       
       <div class="content">
           <div v-if="hideCon">
           <HomeContent/>
           </div>
             <div v-if="hideCat" class="viewCategory">
                <ViewCategory/>
            </div>
             <div v-if="hideAbout" class="viewCategory">
                <About/>
            </div>
       </div><!-- end of content div -->

      

       <div class="footer">
           <div class="grid-item">
                <ion-icon @click="aboutClick" class="footerbtn" src="../../assets/svg/info.svg"></ion-icon>
                 <p  @click="aboutClick" >About</p>
            </div>
            <div class="grid-item">
                <ion-icon @click="homeClick"  class="footerbtn" src="../../assets/svg/home.svg"></ion-icon>
                 <p  @click="homeClick" >Home</p>
            </div>
            <div  class="grid-item">
                <ion-icon  @click="categoryClick" class="footerbtn" src="../../assets/svg/apps.svg"></ion-icon>
                <p  @click="categoryClick" >Vegetables</p>
                
            </div>
      </div> <!-- end of footer div -->

  

   </div><!-- end of container div -->
</template>

<script>
import {IonImg, IonIcon, } from '@ionic/vue';
import ViewCategory from './ViewCategory.vue'
import HomeContent from './HomeContent.vue'
import About from './About.vue'

export default {
     name: 'HomePage',
   components: {
    IonIcon,
    IonImg,
    ViewCategory,
    HomeContent,
    About
  },
  data(){
      return{
          show: true,
          hide: false,
          hideCat: false,
          hideCon: true,
          hideAbout: false,
      }
  }, methods:{
      menuClicked(){
          this.show = !this.show;
          this.hide = true;
      },
      menuBack(){
          this.show = !this.show;
          this.hide = false;
      },
      SelfTest(){
          console.log("Click Self Test");
      },
      ExitApps(){
          console.log("Click Exit");
      },
      categoryClick(){
        this.hideCat = true;
        this.hideCon = false;
          this.hideAbout = false;

      },
      homeClick(){
          this.hideCat = false;
        this.hideCon = true;
      },
      aboutClick(){
          this.hideAbout = true;
        this.hideCon = false;
        this.hideCat = false;
      },
  }
  
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.main-container{
  position: relative;
  width: 100%;
  height: 100%;
  background: url("/public/assets/VegieTools.png"); 
  background-size:100% 100%;
}
.content{
    height: 100vh;
}
.header{
    display:flex;
    width: 100%;
    height: 80px;
    background-color:#0c4b05;
}
.liner{
    width: 100%;
    height: 8px;
    background-color: gold;
}
.header > div{
    height: 68px;
  padding: 5px ;
}
.logo1{
    width: 65px;
}

.menu-container{
    display: grid;
    grid-template-rows: auto auto;
    position:absolute;
    right:0;
    width: 55%;
    height: 200px;
    border: 1px solid rgb(87, 87, 87);
    background-color: #161616;
    opacity: 0.85;
    z-index: 1;
    padding: 0 5px 0 5px;
}
.grid-list{
 border-bottom:1px solid rgb(82, 82, 82);
 padding-top:28px;
}
.footer{
   display: grid;
   grid-template-columns: 33% 33% 33%;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color:#0c4b05;
    justify-items: center;
}
.grid-item{
  padding-top: 7px;
}
h1{
    position: absolute;
     padding: 0 0 0 47px;
   font-size: 34px;
   font-family: 'Bebas Neue', sans-serif;
    font-weight:600;
    color:#ffffff; 
}
h6{
    font-family: 'Bebas Neue', sans-serif;
   font-size: 25px;
   color:rgb(255, 255, 255);
   text-align: center;
   font-weight:800;
   padding-top: 19px;

}
ion-icon{ 
    width: 35px;
    height: 35px;
}
.footerbtn{ 
    width: 27px;
    height: 27px;
}
p{
    color:#ffffff;
    font-size: 14px;
    width: 70px;
}
.menubtn{
    position: absolute;
    right: 0;
    margin-right: 10px;
    margin-top: 22px;
}
.self{
    position: absolute;
    left:0;
     padding: 3px 0 0 10px;
}
.power{
    position: absolute;
    left:0;
    padding: 3px 0 0 10px;
}
ion-button{
    background: none;
}

/* CSS for the Menu Container Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* 
End of transition */
</style>