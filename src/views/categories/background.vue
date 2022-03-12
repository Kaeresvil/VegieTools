<template>
<ion-page v-if="hidePage" >
  <ion-content>
 <div class="main-container">
       <div class="header">
           <div>
             <ion-img class="logo1" src="../../assets/veg.png"></ion-img>
            </div>  <!--end of logohead -->

             <div>
             <h6>VegieTools</h6>
             </div>
       </div><!-- end of header div -->
       <div class="liner">
       </div><!-- end of liner div -->
       
          <div class="Catheader">
            <h2>{{name}}</h2>
        </div>
       
       
       <div class="content">
  
         <H5Pstandalone :content="vegeContent"/>
      

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
import H5Pstandalone from './H5Pstandalone.vue'
export default {
     name: 'cateBackground',
     props: {
     iscontent: {
      type: String,
      required: true
    },
     name: {
      type: String,
      required: true
    },
     },
    components: {
    IonContent, 
    IonPage,
    H5Pstandalone
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
          isContent: true,
          vegeContent: this.iscontent,
          hidePage: true,
      }
    
     
  }
  ,methods:{
      categoryClick(){
      console.log("Clicked")

      },
      homeClick(){
         console.log("Clicked")
      },
      backClick(){
        //   const main = document.getElementById('iscontent');
        //    main.remove();
        // this.isContent =false;
        // this.$router.push("/slider");
        this.hidePage = false;
       
        //  this.$router.push({ name: 'Slider', params: {lastcontent: this.vegeContent }});
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
.main-container{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("/public/assets/VegieTools.png"); 
  background-size:100% 100%;
}
.Catheader{
  border-radius: 10px 10px;
  background-color: #ffffffe3;
  color: rgb(3, 3, 3);
  width: 95%;
  height: 30px;
  transform: translate(+2.5%, +5px);
  text-align: center;
  margin-bottom: 10px;    
}
h2{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px;
  color:rgb(36, 36, 36);
  font-weight:1000;
  text-align: center;
}
.content{
    height: calc(96vh - 151px);
    position: relative;
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
  top: 55%;  
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
    bottom: 35px;
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