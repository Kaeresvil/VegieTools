<template >
 <div class="VegDiv">

   <div class="Catheader">
     <h2 v-if="catHeader" >Vegetables</h2>
     <h2 v-if="catHeaderIloco">Natnateng</h2>

      <ion-toggle class="lang" color="dark" @click="setLanguage"></ion-toggle> <label v-if="isEnglish">English</label><label  v-if="isIloco">Iloco</label>
   </div>

  
 <!-- container grid for english vegetable -->
  <div v-if="EnglishGrid" class="vegGrid">
      <vegetable  v-bind:englishPlants="englishPlants"/>
  </div>

<!-- container grid for iloco vegetable -->
<Transition name="fade"> 
  <div v-if="IlocoGrid" class="vegGrid">
    <vegetable  v-bind:ilocoPlants="ilocoPlants"/>
  </div>
</Transition>
  

  <!-- Content Div -->
 
       <div class="contents">
   <div v-if="okraEngSelected" class="selectContents"> 
              <Okra/>
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
 <!-- <div v-if="hideFooter" class="footer">


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
     </div>  end of footer div -->
</template>
<script>
import { defineComponent } from 'vue';
import {IonToggle } from '@ionic/vue';
import Okra from './categories/okra.vue'
import vegetable from './vegetable.vue'
import Eggplant from './categories/H5Psatandalone.vue'


export default defineComponent({
     name: 'ViewCategory',
  components: { 
    IonToggle,
     Okra,
     Eggplant,
     vegetable
     
},data(){
      return{
        // for header
        englishPlants:[
          {
            title:'Bitter Gourd',
            src:'../../assets/vegetable/paria.jpg',
            content:'Bitter Gourd'
            },
            {
            title:'Eggplant',
            src:'../../assets/vegetable/tarong.jpg',
            content:'../workspace/eggplantHarvest'
            },
            {
            title:'Okra',
            src:'../../assets/vegetable/okra.jpg',
            content:'../workspace/Okra'
            },   
            {
            title:'Papaya',
            src:'../../assets/vegetable/papaya.jpg',
            content:'PapayaEnglish'
            },
            {
            title:'Pole Sitao',
            src:'../../assets/vegetable/sitao.jpg',
            content:'Pole Siato'
            },
            {
            title:'Squash',
            src:'../../assets/vegetable/karabasa.jpg',
            content:'Squash'
            },
            {
            title:'Tomato',
            src:'../../assets/vegetable/kamatis.jpg',
            content:'Tomato'
            },
            ],

        ilocoPlants:[
          {
            title:'Paria',
            src:'../../assets/vegetable/paria.jpg',
            content:'Paria'
            },
            {
            title:'Tarong',
            src:'../../assets/vegetable/tarong.jpg',
            content:'Tarong'
            },
            
            {
            title:'Okra',
            src:'../../assets/vegetable/okra.jpg',
            content:'OkraIloco'
            }, 
            {
            title:'Bawang',
            src:'../../assets/vegetable/bawang.jpg',
            content:'Bawang'
            },  
            {
            title:'Papaya',
            src:'../../assets/vegetable/papaya.jpg',
            content:'PapayaIloco'
            },
            {
            title:'Utong',
            src:'../../assets/vegetable/sitao.jpg',
            content:'Utong'
            },
            {
            title:'Karabasa',
            src:'../../assets/vegetable/karabasa.jpg',
            content:'Karabasa'
            },
            {
            title:'Kamatis',
            src:'../../assets/vegetable/kamatis.jpg',
            content:'Kamatis'
            },
            ],

          isEnglish: true,
          catHeader: true,
          catHeaderIloco: false,

        // for content and navigation      
          hideNav: false,
          hideShowMoreBtn: false,

        // for Footer
          hideAbout: true,
          hideClick: true,
          hideFooter: true,
        //for grid
          IlocoGrid: false,
          EnglishGrid: true,
      }
  }, methods:{
  
    // selecting language
    setLanguage(){
      if (this.isEnglish) {
        //call method for iloco
        this.iloco();
        this.isEnglish = false;
        this.isIloco = true;
      } else {
        this.english();
        this.isEnglish = true;
         this.isIloco = false;
      }
      console.log(this.isEnglish);
    },

     iloco(){
           this.catHeader = false;
           this.catHeaderIloco = true;
      
           this.IlocoGrid = true;
           this.EnglishGrid = false;
         // console.log("clcick")
      }, 
      english(){
           this.catHeader = true;
           this.catHeaderIloco = false;

           this.IlocoGrid = false;
           this.EnglishGrid = true;
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
        //  this.$router.push("/slider");
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
ion-toggle{
  width: 51px;
height: 31px;
float: right;
margin:20px 10px 0 0;
}
label{
  font-size: 19px;
  color:rgb(46, 46, 46);
  font-family: 'Barlow Condensed', sans-serif;
  float:right;
  padding:24px 7px 5px 7px;

}

h3{
   font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px;
  color:rgb(46, 46, 46);
  font-weight:800;
  float: right;
  padding:20px 7px 5px 7px;
}
h2{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  color:rgb(36, 36, 36);
  font-weight:1000;
  float: left;
  padding:15px 0 5px 10px;
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

.selectContents{
    height: calc(90vh - 142px);
    width: 100vw;
    position: relative;
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