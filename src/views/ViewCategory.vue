<template >
 <div class="VegDiv">

   <div class="Catheader">
     <h2 v-if="catHeader" >Vegetables</h2>
     <h2 v-if="catHeader2">Natnateng</h2>
    <h3 @click="iloco" >Iloco</h3>
    <div v-if="ilocoliner" class="ilocoliner"></div>
    <h3 @click="english">English</h3>
     <div v-if="englishliner" class="engliner"></div>
   </div>

  
 <!-- container grid for english vegetable -->
  <div v-if="EnglishGrid" class="vegGrid">
 
    <div @click="Bitter" class="vegetableList">
      <ion-img src="../../assets/vegetable/paria.jpg"></ion-img>
      <h1>Bitter Gourd</h1>
    </div>

    <div @click="Eggplant" class="vegetableList"> 
      <ion-img src="../../assets/vegetable/tarong.png"></ion-img>
       <h1>Eggplant</h1>
      </div>

    <div @click="okraEng" class="vegetableList">
       <ion-img src="../../assets/vegetable/okra.png"></ion-img>
       <h1>Okra</h1>
    </div>

    <div @click="papayaEng" class="vegetableList">
       <ion-img src="../../assets/vegetable/papaya.png"></ion-img>
       <h1>Papaya</h1>
    </div>
    <div @click="Sitao" class="vegetableList">
       <ion-img src="../../assets/vegetable/sitao.png"></ion-img>
       <h1>Pole Sitao</h1>
    </div>
    <div @click="Squash" class="vegetableList">
       <ion-img src="../../assets/vegetable/karabasa.png"></ion-img>
       <h1>Squash</h1>
    </div>
    <div @click="Tomato" class="vegetableList">
       <ion-img src="../../assets/vegetable/kamatis.png"></ion-img>
       <h1>Tomato</h1>
    </div>
  </div>

<!-- container grid for iloco vegetable -->
<Transition name="fade"> 
  <div v-if="IlocoGrid" class="vegGridIloco">

    <div @click="paria" class="vegetableListiloco">
      <ion-img src="../../assets/vegetable/paria.jpg"></ion-img>
      <h1>Paria</h1>
    </div>

    <div @click="tarong" class="vegetableListiloco"> 
      <ion-img src="../../assets/vegetable/tarong.png"></ion-img>
       <h1>Tarong</h1>
      </div>

    <div @click="okra" class="vegetableListiloco">
       <ion-img src="../../assets/vegetable/okra.png"></ion-img>
       <h1>Okra</h1>
    </div>

    <div @click="bawang" class="vegetableListiloco">
       <ion-img src="../../assets/vegetable/bawang.png"></ion-img>
       <h1>Bawang</h1>
    </div>
    <div @click="papaya" class="vegetableListiloco">
       <ion-img src="../../assets/vegetable/papaya.png"></ion-img>
       <h1>Papaya</h1>
    </div>
    <div @click="utong" class="vegetableListiloco">
       <ion-img src="../../assets/vegetable/sitao.png"></ion-img>
       <h1>Utong</h1>
    </div>
    <div @click="karabasa" class="vegetableListiloco">
       <ion-img src="../../assets/vegetable/karabasa.png"></ion-img>
       <h1>Karabasa</h1>
    </div>
    <div @click="kamatis" class="vegetableListiloco">
       <ion-img src="../../assets/vegetable/kamatis.png"></ion-img>
       <h1>Kamatis</h1>
    </div>
  </div>
</Transition>
  

  <!-- Content Div -->
 
       <div class="contents">
         <div v-if="okraEngSelected" class="selectContents"> 
              <okraH5P/>
         </div>
      
         <div v-if="EggplantSelect" class="selectContents"> 
              <Eggplant/>
         </div>
      
<!-- for navigation -->
         <div v-if="hideNav" class="navigation">
           <ul>
              <li>Land Preparation</li>
              <li>Crop Establishment</li>
              <li>Fertilizer Application</li>
              <li>Water Management</li>
              <li>Fest Management</li>
              <li>Insect Fest Management</li>
              <li>Harvesting and Post-harvest Practices</li>
            </ul>
              <div class="backMore"><ion-icon @click="backMore" src="../../assets/svg/cross.svg"></ion-icon></div>
         </div>
              <div v-if="hideShowMoreBtn" class="showMore"><ion-icon @click="showMore" src="../../assets/svg/plus.svg"></ion-icon>
          </div><!-- end of content div -->

       </div><!-- end of content div -->

  </div> 

  <!-- footer div -->
 <div v-if="hideFooter" class="footer">

        <div v-if="hideAbout" class="grid-item">
                <ion-icon  @click="aboutClick" class="footerbtn" src="../../assets/svg/info.svg"></ion-icon>
                 <p  @click="aboutClick" >About</p>
            </div>

           <div v-if="hideClick" class="grid-item">
                <ion-icon @click="backClick" class="footerbtn" src="../../assets/svg/arrowBack.svg"></ion-icon>
                 <p  @click="backClick" >Back</p>
            </div>

            <div class="grid-item">
                <ion-icon @click="homeClick"  class="footerbtn" src="../../assets/svg/home.svg"></ion-icon>
                 <p  @click="homeClick" >Home</p>
            </div>
            <div  class="grid-item">
                <ion-icon  @click="categoryClick" class="footerbtn" src="../../assets/svg/apps.svg"></ion-icon>
                <p  @click="categoryClick" >Vegetables</p>
                
            </div>
     </div>  <!-- end of footer div -->
</template>
<script>
import { defineComponent } from 'vue';
import {IonImg, } from '@ionic/vue';
import okraH5P from './categories/okra.vue'
import Eggplant from './categories/H5Psatandalone.vue'


export default defineComponent({
     name: 'ViewCategory',
  components: { 
    IonImg,
     okraH5P,
     Eggplant,
     
},data(){
      return{
        // for header
          catHeader: true,
          catHeader2: false,

        // for content and navigation
        // contentselect: false,
          okraEngSelected: false,
          EggplantSelect: false,
          hideNav: false,
          hideShowMoreBtn: false,

        // for Footer
          hideAbout: true,
          hideClick: false,
          hideFooter: true,

        //for liner language
          englishliner: true,
          ilocoliner: false,
        //for grid
          IlocoGrid: false,
          EnglishGrid: true,
      }
  }, methods:{
    // selecting language
     iloco(){
           this.catHeader = false;
           this.catHeader2 = true;
           this.englishliner = false;
           this.ilocoliner = true;

           this.IlocoGrid = true;
           this.EnglishGrid = false;

            this.okraEngSelected = false;
            this.EggplantSelect = false;
      }, 
      english(){
           this.catHeader = true;
           this.catHeader2 = false;
           this.ilocoliner = false;
           this.englishliner = true;

           this.IlocoGrid = false;
           this.EnglishGrid = true;
      },
  // selecting vegetable iloco
      paria(){
           this.$router.push("/background2");
      },
      tarong(){
          console.log("Clicked")
      },
      okra(){
          console.log("Clicked")
      },
      bawang(){
          console.log("Clicked")
         
      },
      papaya(){
          console.log("Clicked")
         
      },
      utong(){
          console.log("Clicked")
        
      },
      karabasa(){
          console.log("Clicked")
        
      },
      kamatis(){
          console.log("Clicked")
        
      },

  // selecting vegetable english
      Bitter(){
       console.log("Clicked")
      },
      Eggplant(){
           this.EggplantSelect = true;
           //For Footer and the grid and navigation
           this.EnglishGrid = false;
           this.hideAbout = false;      
           this.hideClick = true;  
           this.hideShowMoreBtn = true;  
      },
      okraEng(){
           this.okraEngSelected = true;
           //For Footer and the grid and naviagtion
           this.EnglishGrid = false;
           this.hideAbout = false;      
           this.hideClick = true;      
           this.hideShowMoreBtn = true;      
      },
      Garlic(){
          console.log("Clicked")
        
      },
      papayaEng(){
          console.log("Clicked")
        
      },
      Sitao(){
          console.log("Clicked")
        
      },
      Squash(){
          console.log("Clicked")
        
      },
      Tomato(){
          console.log("Clicked")
        
      },

      // selecting language
      backClick(){
        //for selected vegetables
           this.okraEngSelected = false;
            this.EggplantSelect = false;
          //for grid, footer, naviagtion
           this.EnglishGrid = true;
           this.hideClick = false;
           this.hideAbout = true;
            this.hideShowMoreBtn = false;  
         this.$router.push("/slider");
      },
      homeClick(){
 console.log("Clicked")
        
      },
      categoryClick(){
 
        console.log("Clicked")
      },

      //for Showmore navigation
      showMore(){
        this.hideNav = true;
        this.hideShowMoreBtn = false;  
      },
      backMore(){
        this.hideNav = false;
        this.hideShowMoreBtn = true; 
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
.VegDiv{
  width: 100%;
  height: calc(100vh - 148px);
  /* border: 2px solid red; */
}
.Catheader{
  border-radius: 10px 10px;
  background-color: #ffffffe3;
  color: rgb(3, 3, 3);
  width: 95%;
  height: 70px;
  transform: translate(+2.5%, +5px);
  box-shadow: 6px 6px rgb(141, 141, 141);      
  
}
.engliner{
  border: 1px solid rgb(124, 124, 124);
  background-color: gold;
  position:absolute;
  right: 0;
  float: right;
  width: 60px;
  height:5px;
  margin:43px 59px 0 0;
}
.ilocoliner{
  border: 1px solid rgb(124, 124, 124);
  background-color: gold;
  position:absolute;
  right: 0;
  float: right;
  width: 43px;
  height:5px;
  margin:43px 5px 0 0;
}
h3{
   font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px;
  color:rgb(46, 46, 46);
  font-weight:800;
  float: right;
  padding:20px 7px 5px 7px;
}
h3:visited{
   border-bottom: 3px solid gold;  
}
h2{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  color:rgb(36, 36, 36);
  font-weight:1000;
  float: left;
  padding:15px 0 5px 10px;
}
h1{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 25px;
  color:rgb(51, 51, 51);
  font-weight:1000;
}

/* For VegeList Grid */
.vegGrid{
  display: grid;
  grid-template-columns: auto auto;
  width: 95%;
  transform: translate(+2.5%, +5px);
  margin-top: 6%;
  column-gap: 10px;
  row-gap: 10px;
}
.vegetableList{
  background-color: #ffffffe3;
  box-shadow: 5px 5px rgba(141, 141, 141, 0.719); 
  border: 1px solid rgba(63, 63, 63, 0.603);
  border-radius: 10px 10px;
  padding: 10px 0 10px 0;
  text-align: center;
}

.vegGridIloco{
  display: grid;
  grid-template-columns: auto auto;
  width: 95%;
  transform: translate(+2.5%, +5px);
  margin-top: 6%;
  column-gap: 10px;
  row-gap: 10px;
}
.vegetableListiloco{
  background-color: #ffffffe3;
  box-shadow: 5px 5px rgba(141, 141, 141, 0.719); 
  border: 1px solid rgba(63, 63, 63, 0.603);
  border-radius: 10px 10px;
  padding: 10px 0 10px 0;
  text-align: center;
}
ion-img{
  width:auto;
  height: 100px;
}

.selectContents{
    height: calc(90vh - 142px);
    width: 99vw;
    position: fixed;
    margin-top: 4%;
    /* border: 3px solid red; */
}


.navigation{
   border: 1px solid black;
  position: absolute;
  width: 90%;
  height: 65%;
  top: 53%;  
  left: 50%; 
  transform: translate(-50%, -50%);                                 
  background-color: #000000;
  opacity: 0.92;
  z-index: 1;
  border-radius: 20px 20px;
}

li{
  font-family:  sans-serif;
  font-size: 30px;
  color:#e9e9e9;
  font-weight:600;
  padding: 18px;
  border-bottom: 2px solid rgb(77, 77, 77);
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
/* CSS for the Menu Container Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* 
End of transition */
</style>