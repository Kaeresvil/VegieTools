<template>
  <div v-if="showMore" class="showMore"><ion-icon class="iconmenu" @click="showMoreBtn(vegetableName, vegetableid)" src="../../assets/svg/menu-burger.svg"></ion-icon>
   <p  style="margin-top: -9px; color: white; font-size: 13px;">More</p>
 </div>
<!-- //Header -->
  <div v-if="ContentisActive" class="Catheader">
     <h2 v-if="catHeader" >Vegetables</h2>
     <h2 v-if="catHeaderIloco">Natnateng</h2>


<div class="button-box">
			<div id="btn" :style="isRight ? { 'left': '70px'} : null"></div>
			<button type="button" class="toggle-btn1" @click="leftClick()">English</button>
			<button type="button" class="toggle-btn2" @click="rightClick()">Iloco</button>
		</div>
  
    
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
  

   <div v-if="TextSize" class="navigationsize">
           <h3 class="NavHeader" >Adjust Font Size</h3>
           <h3 class="sampleText" v-bind:style="changeSize">Sample Text</h3>
         
       <input class="slider" type="range" min="20" max="35" v-model="fSize">
   <div class="backMore"><ion-icon class="backEx" @click="backTextSize" src="../../assets/svg/cross.svg"></ion-icon></div>
      </div>
    
<!-- Footer -->
   <div v-if="hideFooter" class="footer">
        <div v-if="hideAbout" class="grid-item">
                <ion-icon  @click="aboutClick" class="footerbtn" src="../../assets/svg/info.svg"></ion-icon>
                 <p class="ftext" @click="aboutClick" >About</p>
            </div>
           <div v-if="hidebackbtn" class="grid-item">
                <ion-icon @click="backClick" class="footerbtn" src="../../assets/svg/arrowBack.svg"></ion-icon>
                 <p class="ftext" @click="backClick" >Back</p>
            </div>
           
            <div class="grid-item">
                <ion-icon @click="homeClick"  class="footerbtn" src="../../assets/svg/home.svg"></ion-icon>
                 <p class="ftext" @click="homeClick" >Home</p>
            </div>

             <div v-if="isContent" class="grid-item">
                <ion-icon  @click="categoryClick" class="footerbtn" src="../../assets/svg/apps.svg"></ion-icon>
                <p  class="ftext" @click="categoryClick"  >Vegetables</p>
                
            </div>
              <div v-if="isFont" class="grid-item">
                <ion-icon  @click="TextClick" class="footerbtn" src="../../assets/svg/fontSize.svg"></ion-icon>
                <p class="ftext" @click="TextClick"  >Text Size</p>
                
            </div>
      </div> <!-- end of footer div -->

  
</template>

<script>
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
            isRight: false,

            // show moreContent
            showMore: false,
            clickShowMore: false,
            //switching language
            ContentisActive: true, ///Header for langauge
            isActive: false, /// header for Vegetable name
            ischeck: false,
            catHeader: true,
            catHeaderIloco: false,

            IlocoGrid: false,
            EnglishGrid: true,
            hideFooter: true,
            count: 0,
            hideAbout: true,
            isContent: true,
            hidebackbtn: false,
              hideNav: false,
              isFont: false,
          fSize: 20,
          TextSize: false,
           
        }
      

    },
    computed:{
    changeSize(){
      return {fontSize: this.fSize + 'px'}
    }
    },
  
    methods: {

 leftClick() {
  this.isRight = false;
  this.english();

},
 rightClick() {
  this.isRight =true;
  this.iloco();

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
            this.isContent = false;
            this.isFont = true;
          
         
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
                     this.isContent = true;
                   this.isFont = false;
        this. backTextSize();

                   
                  
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
        this. backTextSize();
        
        
      },
      categoryClick(){
          this.leftClick();
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
      this. backTextSize();
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

         backTextSize(){
        this.TextSize = false;
      },
     
      TextClick(){
        this.TextSize = true;
        this.clickShowMore = false;
      },
    
    },




}
</script>

<style scoped>

.button-box {
	width: 150px;
	margin-right: 10px;
	margin-top: 17px;
  float: right;
	position: relative;
	border-radius: 12px;
	background: rgb(202, 202, 202);
  padding: 2px 2px;
}

.toggle-btn1 {
	padding: 10px 10px;
	cursor: pointer;
	background: transparent;
	border: 0;
	outline: none;
	position: relative;
	text-align: center;
 color:#161616;
  font-size: 15px;
  font-weight: 700;
 
}
.toggle-btn2 {
	padding: 10px 17px;
	cursor: pointer;
	background: transparent;
	border: 0;
	outline: none;
	position: relative;
	text-align: center;
 color:#161616;
  font-size: 15px;
  font-weight: 700;
 
}

#btn {
	left: 0;
	top: 0;
	position: absolute;
	width: 80px;
	height: 100%;
	background: #ffffff;
	border-radius: 12px;
	transition: .5s;
  border: 1px solid green;
}




/* End of toggle button */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navigationsize{
   border: 1px solid black;
  position: absolute;
  width: 75%;
  height: auto;
  top: 53%;  
  left: 50%; 
  transform: translate(-50%, -50%);                                 
  background-color: #161616;
   opacity: .98;
  border-radius: 20px 20px;
  padding-bottom: 10px;
}
.backMore{
    position: absolute;
    border-radius: 50px 50px;
    width: 42px;
    height: 42px;
    right: -17px;
    top: -15px;
     z-index: 1;
     background-color: #0c4b05;
     text-align: center;
     padding-top: 11px;

   
}
.NavHeader{
  font-family:  sans-serif;
  font-size: 26px;
  color:#e9e9e9;
  font-weight:600;
  padding: 18px;
  border-bottom: 2px solid rgb(77, 77, 77);
}
.sampleText{
  padding-top: 5px;
  padding-bottom: 15px;
  font-size: var(--font-size);
  color:#e9e9e9;


}
.iconSmall{
  width: 24px;
  height: 24px;
  padding-right: 7px;
}
.iconLarge{
margin-top: 5px;
  padding-left: 7px;
}

.backEx{
width: 23px;
height: 23px;
}
.slider {
  -webkit-appearance: none;
  width: 75%;
  height: 10px;
  background: rgb(255, 255, 255);
  outline: none;
  margin-bottom: 5px;

}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #0c4b05;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #0c4b05;
  cursor: pointer;
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
  padding: 10px 10px 10px 10px;
  text-align: center;
}
ion-img{
  height: 100px;
  max-width: 100%;
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
.ftext{
    color:#ffffff;
    font-size: 18px;
    padding: 0px 33px;
    
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
    font-size: 15px;
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

.ftext{
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
  height: calc(100vh - 175px);
 }
}
</style>