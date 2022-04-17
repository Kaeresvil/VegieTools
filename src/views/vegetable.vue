<template>
  <div v-if="showMore" class="showMore"><ion-icon class="iconmenu" @click="showMoreBtn(vegetableName, vegetableid)" src="../../assets/svg/menu-burger.svg"></ion-icon>
 </div>
<!-- //Header -->
  <div v-if="ContentisActive" class="Catheader">
     <h2 v-if="catHeader" >Vegetables</h2>
     <h2 v-if="catHeaderIloco">Natnateng</h2>
<!-- //select language -->
      <ion-toggle @click="setLanguage" color="dark"></ion-toggle> <label v-if="isEnglish">English</label><label  v-if="isIloco">Iloco</label>
   </div>
<!-- Vegetable Name -->
    <div v-if="isActive" class="Catheader2">
      <div class="head-grid">
        <h6>{{vegetableName}}</h6>
      </div>
      <div class="head-grid">
          <p class="breadcrumbs"><i>{{breadcrumbs}}</i></p>
      </div>   
        </div>


<!-- Vegtable Selector -->
  <ion-content v-if="grid"
     :scroll-events="true"
   >

  <div  v-if="EnglishGrid" class="vegGrid">

      <div  v-for="(plants, index) in englishPlants" :key="index">
        <div  @click="viewDetails(plants.content, plants.title, plants.subtitle, plants.id)" class="vegetableList">
          <ion-img :src="plants.src"></ion-img>
          <h1>{{plants.title}}</h1>
        </div>      
    </div>
 </div>

     <div v-if="IlocoGrid" class="vegGrid">
      <div  v-for="(plants, index) in ilocoPlants" :key="index">
        <div  @click="viewDetails(plants.content, plants.title, plants.subtitle, plants.id)" class="vegetableList">
          <ion-img :src="plants.src"></ion-img>
          <h1>{{plants.title}}</h1>
        </div>

         </div>
       </div>

       
  </ion-content>

  <!-- H5P StandAlone Content For Vegetable -->
  
 <VegetableContent v-if="isPass" :selectcontent="vegetableContent"   :num="count" class="content"
  />

 
  
 <MoreView v-if="clickShowMore" :vegetable="vegetableTitle" :id="vegetableid"  v-on:backtoShow="moreContentBack" v-on:existContent="hideExistContent"/>
  
<!-- Footer -->
   <div v-if="hideFooter" class="footer">
        <div v-if="hideAbout" class="grid-item">
                <ion-icon  @click="aboutClick" class="footerbtn" src="../../assets/svg/info.svg"></ion-icon>
                 <p  @click="aboutClick" >About</p>
            </div>
           <div v-if="hidebackbtn" class="grid-item">
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
      </div> <!-- end of footer div -->

  
</template>

<script>
import {IonToggle } from '@ionic/vue';
import VegetableContent from './categories/H5Pstandalone.vue'
import MoreView from './moreCategory.vue'

export default {
 name: 'vegeTable',
  props:{
    englishPlants: {
      type: Array,
      required: true
    },
    ilocoPlants: {
      type: Array,
      required: true
    },
  },
    components: {
VegetableContent,
IonToggle,
MoreView
    },
    data(){
       
        return{
            // vegetableContent: null,
            vegetableName: '',
            vegetableTitle: '',
            vegetableid: '',
            breadcrumbs: '',
            existingMorecontent: '',
            isPass: false,
            isPasstoback: false,
            grid: true,

            // show moreContent
            showMore: false,
            clickShowMore: false,
            //switching language
            ContentisActive: true, ///Header for langauge
            isActive: false, /// header for Vegetable name
            isEnglish: true,
            ischeck: false,
            catHeader: true,
            catHeaderIloco: false,

            IlocoGrid: false,
            EnglishGrid: true,
            hideFooter: true,
            count: 0,
            hideAbout: true,
            hidebackbtn: false,
           
        }
      

    },
  
    methods: {
      ///Setting Languge
       setLanguage(){
      if (this.isEnglish) {
        //call method for iloco
        this.iloco();
        this.isEnglish = false;
        this.isIloco = true;
        this.ischeck = false;
     
      } else {
        this.english();
        this.isEnglish = true;
        this.isIloco = false;
        this.ischeck = false;
     
      }
    },

     iloco(){
           this.catHeader = false;
           this.catHeaderIloco = true;
      
           this.IlocoGrid = true;
           this.EnglishGrid = false;
      }, 
      english(){
           this.catHeader = true;
           this.catHeaderIloco = false;

           this.IlocoGrid = false;
           this.EnglishGrid = true;
      },
   
   //////Selecting A vegetable from Grid
          viewDetails(content, title, subtitle, id){
            this.vegetableContent = content;
            this.isPass = true;
            this.isPasstoback = false;
            this.showMore = true;
            this.grid = false;
            this.ContentisActive = false;
            this.isActive = true;
            this.vegetableName = title;
            this.vegetableid = id;
             this.breadcrumbs = subtitle;
             this.count = 0;
            this.hidebackbtn = true;
            this.hideAbout = false;
          
         
         },
        //  backk to vegetable grid
        backClick(){

                    this.isPasstoback = true;
                    this.isPass = false;
                    this.isPassMoreContent = false;
                    this.isBack = 0;
                    this.grid = true;
                    this.ContentisActive = true;
                    this.showMore = false;
                    this.clickShowMore = false;
                    this.isActive = false;
                    this.hidebackbtn = false;
                    this.hideAbout = true;
                   
                  
      },
        isMoreContent(){
          this.isPasstoback = true;
          this.isPass = false;
          this.isBack = 0;
          this.grid = false;
          this.ContentisActive = false;
          this.showMore = true;
           this.clickShowMore = true;
          this.isActive = true;
      },
      homeClick(){
  
           this.$emit('backtoFirstHomePAge');
        this.hideFooter = false;
        this.backClick();
        
      },
      categoryClick(){
          this.backClick();
      },aboutClick(){
         this.$emit('backtoAboutPage');
      },
  
  // Show More Content Categories
  showMoreBtn(vegetableName, vegetableid){
    this.clickShowMore = true;
    this.showMore = false;
     this.isPassMoreContent = false;
      this.vegetableTitle = vegetableName;
      this.vegetableid = vegetableid;
     this.ExistingMoreContent();
  },

  moreContentBack(){
this.showMore = true;
this.clickShowMore = false;

  },

hideExistContent(content, title){
  this.isMoreContent();
  this.moreContentBack();

  this.isPass = false;
this.vegetableContent = content;
  this.breadcrumbs = title;
   this.$nextTick(() => {
        this.isPass = true;
      });
  console.log(content)
},

  ExistingMoreContent(){
            this.vegetableContent = this.existingMorecontent;
            this.isPass = true;
            this.isPasstoback = false;
            this.isBack = 1;
            this.grid = false;
            this.ContentisActive = false;
            this.isActive = true;
      
         },
    
    },




}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* switching language */
.Catheader{
  border-radius: 10px 10px;
  background-color: #f7f7f7e3;
  color: rgb(3, 3, 3);
  width: 95%;
  height: 70px;
  transform: translate(+2.5%, +5px);
  box-shadow: 6px 6px rgb(141, 141, 141);      
  
}
.Catheader2{
  border-radius: 10px 10px;
  background-color: #f7f7f7e3;
  color: rgb(3, 3, 3);
  width: 95%;
  height: auto;
  transform: translate(+2.5%, +5px);
  margin-bottom: 10px;   
  display: grid;
  grid-template-columns: auto auto;
  
}
.breadcrumbs{
  color: black;
  font-weight:500;
  font-size: 13px;
   width: 100%;
    padding: 6px 0 6px 0;
}

h6{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  color:rgb(36, 36, 36);
  font-weight:1000;
   float: left;
   width: auto;
   padding: 3px 0 3px 10px;
}
ion-toggle{
  width: 51px;
height: 31px;
float: right;
margin:20px 10px 0 0;
--background-checked: var(--ion-color-blue);
}
label{
  font-size: 19px;
  color:rgb(46, 46, 46);
  font-family: 'Barlow Condensed', sans-serif;
  float:right;
  padding:24px 7px 5px 7px;

}
h2{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  color:rgb(36, 36, 36);
  font-weight:1000;
  float: left;
  padding:15px 0 5px 10px;
}

/* vegetable grid */
ion-content{ 
   --background: transparent;
  height: calc(100vh - 211px);
 }

.vegGrid{
  display: grid;
  grid-template-columns: auto auto;
  width: 95%;
  transform: translate(+2.5%, +5px);
  margin-top: 4%;
  column-gap: 10px;
  row-gap: 10px;
}
.vegetableList{
  background-color: #ffffffe3;
  box-shadow: 5px 5px rgba(110, 110, 110, 0.719); 
  border: 1px solid rgb(5, 94, 13);
  border-radius: 10px 10px;
  padding: 10px 0 10px 0;
  text-align: center;
}
ion-img{
  height: 100px;
  max-width: auto;
}
h1{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 24px;
  color:rgb(51, 51, 51);
  font-weight:1000;
}

/* For the Vegetable Content */
.content{
   height: calc(96vh - 155px);
}
.showMore{
  position: absolute;
  right: 18px;
  top: 20px;
}
.iconmenu{
    width: 37px;
    height: 37px;

}

/* footer */
.footer{
   display: grid;
   grid-template-columns: 33% 33% 33%;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 58px;
    background-color:#0c4b05;
    justify-items: center;
}
.grid-item{
  padding-top: 7px;
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

.papasali{
  width: 1%
}

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

.footer{
    height: 53px;
}
.footerbtn{ 
    width: 25x;
    height: 25px;
}

p{
    font-size: 11px;
}
h5{
  font-size: 20px;
}


li{
  font-size: 17px;

}
 .content{
    height: calc(96vh - 131px);
}

.showMore{
  right: 18px;
  top: 13px;
}
.iconmenu{
    width: 27px;
    height: 27px;

}

ion-content{ 
  height: calc(100vh - 185px);
 }
 h1{
    font-size: 20px;
 }

}


@media only screen and (min-device-height : 700px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
 .content{
    height: calc(96vh - 143px);
}

}

@media only screen and (min-device-height : 952px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
 .content{
    height: calc(96vh - 138px);
}

}

/* landscpae responsive */

@media only screen and (max-device-height : 450px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
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
    font-size: 11px;
}
 .content{
    height: calc(96vh - 131px);
}

.showMore{
  right: 18px;
  top: 13px;
}
.iconmenu{
    width: 27px;
    height: 27px;

}
ion-content{ 
  height: calc(100vh - 175px);
 }
}
</style>