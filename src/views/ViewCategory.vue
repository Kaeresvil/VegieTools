<template >
    <h2>Category</h2>

     <swiper class="slidePage"
    :modules="modules"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @beforeInit="onBeforeInit"
    @slideChange="onSlideChange"
  >
  <!-- slide for first page -->
        <swiper-slide class="page1">
       <ion-img  @click="paria" class="vegetable" src="../../assets/vegetable/paria.png"></ion-img>
       <h1>Bitter Gourd</h1>
       <h3>(Paria)</h3>
        </swiper-slide>


    <!-- slide for HomePage -->
        <swiper-slide class="page1"> 
      <ion-img @click="tarong" class="vegetable" src="../../assets/vegetable/tarong.png"></ion-img>
       <h1>Eggplant</h1>
       <h3>(Tarong)</h3>
        </swiper-slide>

    <!-- slide for HomePage -->
        <swiper-slide class="page1">
       <ion-img @click="utong" class="vegetable" src="../../assets/vegetable/sitao.png"></ion-img>
       <h1>Pole Sitao</h1>
       <h3>(Utong)</h3>
        </swiper-slide>

    <!-- slide for HomePage -->
        <swiper-slide class="page1">
    <ion-img @click="okra" class="vegetable" src="../../assets/vegetable/Okra.png"></ion-img>
       <h1>Okra</h1>
       <h3>(Okra)</h3>
        </swiper-slide>

    <!-- slide for HomePage -->
        <swiper-slide>
      <p>Slide 5</p>
        </swiper-slide>

    <!-- slide for HomePage -->
        <swiper-slide>
      <p>Slide 6</p>
        </swiper-slide>

    <!-- slide for HomePage -->
        <swiper-slide>
      <p>Slide 7</p>
        </swiper-slide>

    <!-- slide for HomePage -->
        <swiper-slide>
      <p>Slide 8</p>
        </swiper-slide> 
      </swiper>

      <Transition name="fade">  
      <div v-if="hidelang" class="select-language">
        <ion-icon @click="menuBack" class="bckbtn" src="../../assets/svg/cross-circle.svg"></ion-icon>
        <div><h4>Select Language</h4></div>

        <div @click="englishbtn" class="language">English</div>
        <div @click="ilocobtn" class="language">Iloco</div>
      </div>
       </Transition>
      
</template>
<script>
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { A11y, Pagination } from 'swiper';



import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@ionic/vue/css/ionic-swiper.css';
export default defineComponent({
     name: 'ViewCategory',
  components: { 
    Swiper,
    SwiperSlide,
},
    setup() {
      

      const onSlideChange = (swiper) => {
      console.log(swiper.activeIndex);
     if (swiper.activeIndex == 7){
        swiper.allowSlideNext = false;
      } else if(swiper.activeIndex == 0){
        swiper.allowSlidePrev = false;
      }
      if(swiper.activeIndex == 1 || swiper.activeIndex == 6 ){
          swiper.allowSlidePrev = true;
          swiper.allowSlideNext = true;
      }
      
    
      

      };


      return {
        onSlideChange,
        modules: [Pagination, A11y]
      
      };


      
    },data(){
      return{
          show: true,
          hidelang: false,
      }
  }, methods:{
      paria(swiper){
           this.hidelang = true;
      },
      utong(swiper){
           this.hidelang = true;
      },
      okra(swiper){
           this.hidelang = true;
      },
      tarong(swiper){
           this.hidelang = true;
      },
      menuBack(){
           this.hidelang = false;
      },
      englishbtn(){
        this.$router.push("/h5p");
           this.hidelang = false;
      },
      ilocobtn(){
        const num = 1;
        this.$router.push("/background");
           this.hidelang = false;
      },
     
    }
});
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    font-family: Arial, Helvetica, sans-serif;
 
   
}
.select-language{
  border: 1px solid black;
  position: absolute;
  width: 90%;
  height: 400px;
  top: 45%;  
  left: 50%; 
  transform: translate(-50%, -50%);                                 
  background-color: #161616;
  opacity: 0.85;
  z-index: 1;
  border-radius: 20px 20px;
  text-align: center;
}
ion-icon{ 
    width: 37px;
    height: 37px;
}
.bckbtn{
    position: absolute;
    right: 0;
    margin-right: 5px;
    margin-top: 5px;
}
.language{
  background-color: white;
  border-radius: 20px 20px;
  width: 90%;
  height: 100px;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  font-weight: 700;
  padding-top: 5%;

}
.slidePage{
    position: absolute;
    z-index: 0;
    height: calc(100vh - 290px);
    width: 100vw;
}
.page1{
  display: block;
  
}
h1{
  padding-top: 20%;
  font-family: 'Bebas Neue', sans-serif;
   font-size: 35px;
   font-weight:600;
   padding-bottom: 3%;
}

h2{
  font-family: 'Barlow Condensed', sans-serif;
  padding-top: 10%;
  font-size: 60px;
  padding-bottom: 30px;
}
h4{
   font-family: 'Bebas Neue', sans-serif;
   font-size: 40px;
   font-weight:600;
   color: white;
   padding-top: 10%;
}
.vegetable{
  width: 90%;
  height: 300px;
   margin-left: auto;
  margin-right: auto;
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