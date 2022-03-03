<template>
<ion-page>
  <ion-content>
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

          <div class="Catheader">
            <h2>Bitter Gourd</h2>
        </div>
       
       <div class="content">
  
         <okraH5P/>

         <div v-if="hideNav" class="navigation">

              <div class="backMore"><ion-icon @click="backMore" src="../../assets/svg/cross.svg"></ion-icon></div>
         </div>
              <div v-if="hideShowMoreBtn" class="showMore"><ion-icon @click="showMore" src="../../assets/svg/plus.svg"></ion-icon></div>
         

       </div><!-- end of content div -->

      

       <div class="footer">
           <div class="grid-item">
                <ion-icon @click="backClick" class="footerbtn" src="../../assets/svg/arrowBack.svg"></ion-icon>
                 <p @click="backClick" >Back</p>
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

    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import okraH5P from './okra.vue'
export default {
     name: 'cateBackground2',
    props:{
      activeIndex: Number
    },
    components: {
    IonContent, 
    IonPage,
    okraH5P
    },
     data(){
      return{
          show: true,
          hide: false,
          hideCat: false,
          hideCon: true,
          hideAbout: false,
          hideNav: false,
          hideShowMoreBtn: true,
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
      console.log("Clicked")

      },
      homeClick(){
         console.log("Clicked")
      },
      backClick(){
        this.$router.push("/slider");
      },
      showMore(){
         this.hideNav = true;
         this.hideShowMoreBtn = false;
      },
      backMore(){
         this.hideNav = false;
         this.hideShowMoreBtn = true;
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
.Catheader{
  border-radius: 10px 10px;
  background-color: #ffffffe3;
  color: rgb(3, 3, 3);
  width: 95%;
  height: 60px;
  transform: translate(+2.5%, +5px);
    
}
h2{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  color:rgb(36, 36, 36);
  font-weight:1000;
  text-align: center;
  padding:15px 0 5px 10px;
}
.main-container{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("/public/assets/VegieTools.png"); 
  background-size:100% 100%;
}
.content{
    height: calc(100vh - 147px);
    position: relative;
    margin-top: 3%;
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
   text-align: center;
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

.navigation{
   border: 1px solid black;
  position: absolute;
  width: 90%;
  height: 65%;
  top: 43%;  
  left: 50%; 
  transform: translate(-50%, -50%);                                 
  background-color: #000000;
  opacity: 0.92;
  z-index: 1;
  border-radius: 20px 20px;
}

.backMore{
    position: absolute;
    border-radius: 50px 50px;
    width: 70px;
    height: 70px;
    right: 0;
    bottom: -25px;
     z-index: 1;
     background-color: #0c4b05;
     text-align: center;
     padding-top: 18px;

   
}
.showMore{
    position: absolute;
    border-radius: 50px 50px;
    width: 70px;
    height: 70px;
    right: 15px;
    bottom: 90px;
     z-index: 1;
     background-color: #0c4b05;
     text-align: center;
     padding-top: 18px;

   
}
/* CSS for the Menu Container Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* 
End of transition */

</style>