<template>
   <div class="main-container">
       <div v-if="header" class="header">
           <div>
             <ion-img v-if="logo" class="logo1" src="../../assets/logoW.png"></ion-img>
            </div>  <!--end of logohead -->

             <div>
             <h6 v-if="logo" >VegieTools</h6>
             </div>
              
       </div><!-- end of header div -->
       <div v-if="header" class="liner">
       </div><!-- end of liner div -->
       
       <div class="content">

         <swiper class="slidePage"
    :paginationClickable="true"
    :modules="modules"
    :autoplay="{
      delay: 10,
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >

   <!-- slide for first page -->
        <swiper-slide>
           <About/>
        </swiper-slide>


    <!-- slide for HomePage -->
        <swiper-slide>
          <HomeContent/>
        </swiper-slide>

        
        <swiper-slide>
            <ViewCategory  ref="vegecomp" v-on:backtoFirstHomePAge="homepage" v-on:backtoAboutPage="aboutpage" v-on:backtoGrid="backGrid"  v-on:backtoAboutBTN="backAbout"/>
         
        </swiper-slide>
       


    </swiper>
     
       </div><!-- end of content div -->

      

       <div v-if="hideFooter" class="footer">
           <div v-if="hideAbout" class="grid-item">
                <ion-icon  @click="aboutClick" class="footerbtn" src="../../assets/svg/info.svg"></ion-icon>
                 <p  @click="aboutClick" >About</p>
            </div>
           <div v-if="vegegrid" class="grid-item">
                <ion-icon @click="Click" class="ftext" src="../../assets/svg/arrowBack.svg"></ion-icon>
                 <p class="ftext"  @click="backClick" >Back</p>
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
import {  Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';


export default {
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
          hideFooter: true,
          hideCat: false,
          hideAboutUs: false,
          hideCon: true,
          hideAbout: true,
          hideClick: false,
          isBackClicked: false,
          logo: true,
          heading: true,
          moreContent: false,
          isBack: false,
          vegegrid: false,
          header: true,
        
      }
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
         modules: [ Autoplay, A11y]
      };
    },
  methods:{
   
    
      categoryClick(){
        this.hideCat = true;
        this.hideCon = false;
        this.hideAbout = false;
        this.hideBack = true;
        this.hideAboutUs = false;
      },
      homeClick(){
          this.hideCat = false;
        this.hideCon = true;
         this.hideAboutUs = false;
        this.hideBack = false;
      },
      aboutClick(){
          this.hideAboutUs = true;
        this.hideCon = false;
        this.hideCat = false;
      },
      // backClick(){
      //   // this.hideCat = true;
      //   // this.hideBack = true;
      //   //  this.hideAbout = false;
      //   //  this.hideCon= false;
      //   //  this.isBackClicked= true;
      //   //  this.isBack= true;
      //   //  this.$emit('clickBack')
 
           
        
      // },
      homepage(){
          this.hideFooter = true;
          this.hideCat = false;
          this.hideCon = true;
          this.hideAbout = true;
          this.hideBack = false;
      },
    aboutpage(){
        this.hideFooter = true;
        this.hideCat = false;
        this.hideAboutUs = true;
        this.hideCon = false;
        this.hideAbout = true;
        this.hideBack = false;
      },

      backGrid(){
      this.hideAbout = false;
      this.vegegrid = true;
      this.header = false;
      },
      backAbout(){
      this.hideAbout = true;
      this.vegegrid = false;
      this.header = true;
      }

  }
  
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.content{
  color: black;
  height: calc(96vh - 110px);
}
.ftext{
  color:#0c4b05;
  width: 0;
}
.main-container{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("/public/assets/VegieTools.png"); 
  background-size:100% 100%;
}
/* .content{
    height: calc(96vh - 151px);
    position: relative;
} */
.header{
  position: relative;
    display:flex;
    width: 100%;
    height: 78px;
    background-color:#0c4b05;
}
.showMore{
  position: absolute;
  right: 15px;
  top: 19px;
}
.iconmenu{
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
   font-size: 22px;
   color:rgb(255, 255, 255);
   text-align: center;
   font-weight:800;
   padding-top: 20px;

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
  padding-top: 14px;
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
  padding-top: 8px;
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
}
</style>