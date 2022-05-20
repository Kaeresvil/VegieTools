<template>
   <div class="main-container">
       <div  class="header">
           <div>
             <ion-img  class="logo1" src="../../assets/logoW.png"></ion-img>
            </div>  <!--end of logohead -->

             <div>
             <h6  >VegieTools</h6>
             </div>

                    
              <div v-if="showMore" class="showMore"><ion-icon class="iconmenu" @click="showMoreBtn(1)" src="../../assets/svg/menu-burger.svg"></ion-icon>
                <p @click="showMoreBtn(1)" class="more" style="margin-top: -5px; color: white; font-size: 13px;">More</p>
              </div>
              
       </div><!-- end of header div -->
       <div  class="liner">
       </div><!-- end of liner div -->
       
<div class="content">
         <swiper ref="form" :options="swiperOptionThumbs" class="slidePage"
    :modules="modules"
    :slideToClickedSlide= true
    :autoplay="{
      delay: 10,
    }"
   @swiper="onSwiper"
    @slideChange="onSlideChange"

  >

   <!-- slide for About page -->
        <swiper-slide >
           <About/>
        </swiper-slide>


    <!-- slide for HomePage -->
        <swiper-slide>
          <HomeContent/>
        </swiper-slide>

         <!-- slide for CategoryPage -->
        <swiper-slide>
            <ViewCategory  :clickBack="trigger"  :clickMore="triggershow" v-on:backtoGrid="backGrid"  v-on:backtoAboutBTN="backAbout" />
         
        </swiper-slide>
       
 

    </swiper>
    </div> 

       <div  class="footer">
           <div v-if="hideAbout" class="grid-item">
                <ion-icon  @click="aboutpage(0)" class="footerbtn" src="../../assets/svg/info.svg"></ion-icon>
                 <p  @click="aboutpage(0)" >About</p>
            </div>

              <div v-if="vegegrid" class="grid-item">
                  <ion-icon type="submit" id="backbtn" @click="click(1)" class="footerbtn" src="../../assets/svg/arrowBack.svg"></ion-icon>
                 <p   @click="click(1)" >Back</p>
            </div>

            <div class="grid-item">
                <ion-icon @click="homeClick(1)" class="footerbtn" src="../../assets/svg/home.svg"></ion-icon>
                 <p  @click="homeClick(1)" >Home</p>
            </div>
            <div  class="grid-item">
                <ion-icon @click="categoryClick(2)" class="footerbtn" src="../../assets/svg/apps.svg"></ion-icon>
                <p  @click="categoryClick(2)" >Vegetables</p>
                
            </div>
      </div> <!-- end of footer div -->



   </div><!-- end of container div -->
</template>

<script>
import {IonImg, IonIcon, } from '@ionic/vue';
import {defineComponent} from 'vue';
import ViewCategory from './ViewCategory.vue'
import HomeContent from './HomeContent.vue'
import About from './About.vue'
import {  Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import 'swiper/css/pagination';
export default defineComponent({
     name: 'HomePage',
   components: {
    IonIcon,
    IonImg,
    ViewCategory,
    HomeContent,
    About,
    Swiper,
    SwiperSlide,


  },
  data(){
 
      return{
          show: true,
          hide: false,
          hideAbout: true,
          vegegrid: false,
          showMore: false,
          trigger: 0,
          triggershow: 0,
          swiper: null,
         
        
      };
  },
    setup() {

      const onSlideChange = (swiper) => {
        swiper.autoplay.running = false;
      

         if (swiper.activeIndex == 2){
        swiper.allowSlideNext = false;
        swiper.allowSlidePrev = true;
  
      }else if(swiper.activeIndex == 0){
         swiper.allowSlideNext = true;
         swiper.allowSlidePrev = false;

      }else if(swiper.activeIndex == 1){
         swiper.allowSlideNext = true;
         swiper.allowSlidePrev = true;
      }
 
      };


      return {
        onSlideChange,
         modules: [  Autoplay, A11y]
      };
    },
  

  methods:{

     onSwiper(swiper) {
      this.swiper = swiper;
      console.log(swiper)
    },
   
    click(incre){
      this.trigger += 1 ;
    },
   showMoreBtn(incre){
      this.triggershow += 1 ;
    },
      categoryClick(index){
         this.swiper.slideTo(index);
      },
      homeClick(index){
         this.swiper.slideTo(index);
      },
    aboutpage(index){
       this.swiper.slideTo(index);
        
      },

      backGrid(){
      this.hideAbout = false;
      this.vegegrid = true;
      this.showMore = true;
     this.swiper.allowSlidePrev = false;

      },
      backAbout(){
      this.hideAbout = true;
      this.vegegrid = false;
      this.showMore = false;
       this.swiper.allowSlidePrev = true;

      }

}
  
})
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.content{
    height: calc(96vh - 120px);
  z-index: 1;
}
.main-container{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("/public/assets/VegieTools.png");
  z-index: 0; 
  background-size:100% 100%;
}

.header{
  position: relative;
    
    width: 100%;
    height: 78px;
    background-color:#0c4b05;
}
.showMore{
position: absolute;
top: 0;
right: 0;
}
.iconmenu{
margin-left: 32px;
margin-top: 15px;
    width: 33px;
    height: 33px;

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
    width: 63px;
}
.about{
  z-index: 1;
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
    z-index: 1;
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
  position: absolute;
  top: 0;
    font-family: 'Bebas Neue', sans-serif;
   font-size: 22px;
   color:rgb(255, 255, 255);
   text-align: center;
   font-weight:800;
   padding-top: 27px;
   padding-left: 67px;

}

.footerbtn{ 
    width: 27px;
    height: 27px;

}

p{
    color:#ffffff;
    font-size: 18px;
    padding: 0px 33px;
    
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


/* 
Responsive CSS */


@media only screen and (max-device-height : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
.header{
    height: 55px;
}
.liner{
    height: 6px;
}
.logo1{
    width: 43px;
}
h6{
   font-size: 18px;
  padding-top: 16px;
  padding-left: 45px;
}
.footer{
    height: 53px;
}
.footerbtn{ 
    width: 25x;
    height: 25px;
}

p{
    font-size: 15px;
}
.iconmenu{
margin-top: 2px;
margin-left: 34px;
    width: 30px;
    height: 30px;

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

/* landscpae responsive */

@media only screen and (max-device-height : 500px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
.header{
    height: 50px;
}
.liner{
    height: 6px;
}
.logo1{
    width: 38px;
}
h6{
   font-size: 17px;
  padding-top: 16px;
  padding-left: 40px;
}
.footer{
    height: 50px;
}
.footerbtn{ 
    width: 22x;
    height: 22px;
}

p{
    font-size: 17px;
}
.iconmenu{
margin-top: 1px;
margin-left: 34px;
    width: 28px;
    height: 28px;

}
}
</style>