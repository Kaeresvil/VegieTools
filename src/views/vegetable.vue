<template>
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
        <div  @click="viewDetails(plants.content, plants.title, plants.id)" class="vegetableList">
          <ion-img :src="plants.src"></ion-img>
          <h1>{{plants.title}}</h1>
        </div>      
    </div>
 </div>

     <div v-if="IlocoGrid" class="vegGrid">
      <div  v-for="(plants, index) in ilocoPlants" :key="index">
        <div  @click="viewDetails(plants.content, plants.title, plants.id)" class="vegetableList">
          <ion-img :src="plants.src"></ion-img>
          <h1>{{plants.title}}</h1>
        </div>

         </div>
       </div>

       
  </ion-content>

  <!-- H5P StandAlone Content For Vegetable -->
  
 <VegetableContent v-if="isPass" :selectcontent="vegetableContent"   :num="count" class="content"
  />

   <div v-if="showMore" class="showMore"><ion-icon class="iconplus" @click="showMoreBtn(vegetableName, vegetableid)" src="../../assets/svg/plus.svg"></ion-icon>
 </div>
  
 <MoreView v-if="clickShowMore" :vegetable="vegetableTitle" :id="vegetableid"  v-on:backtoShow="moreContentBack" v-on:existContent="hideExistContent"/>
  
<!-- Footer -->
   <div v-if="hideFooter" class="footer">
           <div class="grid-item">
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
            catHeader: true,
            catHeaderIloco: false,

            IlocoGrid: false,
            EnglishGrid: true,
            hideFooter: true,
            count: 0,
           
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
     
      } else {
        this.english();
        this.isEnglish = true;
        this.isIloco = false;
     
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
          viewDetails(content, title, id){
            this.vegetableContent = content;
            this.isPass = true;
            this.isPasstoback = false;
            this.showMore = true;
            this.grid = false;
            this.ContentisActive = false;
            this.isActive = true;
            this.vegetableName = title;
            this.vegetableid = id;
             this.breadcrumbs = title;
             this.count = 0;
         
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
  height: 30px;
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
   padding: 7px 0 0 0;
}

h6{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  color:rgb(36, 36, 36);
  font-weight:1000;
   float: left;
   width: auto;
   padding: 3px 0 0 10px;
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
  height: calc(90vh - 128px);
 }

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
ion-img{
  height: 100px;
}
h1{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 25px;
  color:rgb(51, 51, 51);
  font-weight:1000;
}

/* For the Vegetable Content */
.content{
    height: calc(96vh - 151px);
    position: relative; 
}
.showMore{
    position: absolute;
    border-radius: 50px 50px;
    width: 60px;
    height: 60px;
    right: 15px;
    bottom: 0px;
    z-index: 1;
    background-color: #0c4b05;
    padding-top: 11px; 
}


/* footer */
.footer{
   display: grid;
   grid-template-columns: 33% 33% 33%;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 60px;
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

.papasali{
  width: 1%
}
</style>