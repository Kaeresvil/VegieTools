<template >

        <div v-if="hideNav" class="navigation">
            <ion-content
                :scroll-events="true"
                >
                
           <ul  v-for='(plants, index) in Okra' :key='index'>
              <li @click="viewDetails(plants.content ,plants.title)">{{plants.title}}</li>
            </ul>
            </ion-content>

              <div class="backMore"><ion-icon @click="backMore" src="../../assets/svg/cross.svg"></ion-icon></div>

             </div>
          


          
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
     name: 'moreCategory',
     props:{
       vegetable:String
     },
  components: { 
       
},
mounted(){
  // console.log(this.vegetableName)
},
data(){
      return{ 
        // for header  
        Okra:[
          {
            title:this.vegetable,
            content:'../workspace/English/Bitter Gourd/Bitter Gourd Desc'
            },
          {
            title:'Land Preparation and Crop Establishment ',
            content:'../workspace/English/Bitter Gourd/Land-Preparation-and-Crop-Establishment'
            },
          {
            title:'Integrated Nutrient and Water Management',
            content:'../workspace/English/Bitter Gourd/Integrated Nutrient'
            },
          {
           title:'Integrated Pest Management',
            content:'../workspace/English/Bitter Gourd/Fertilizer Application'
            },
          {
             title:'Disease Management',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          {
             title:'Weed Management',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          {
             title:'Harvesting and Post-harvest Handling',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          
            ],

        ilocoPlants:[
          {
            title:'Paria',
            content:'../../assets/vegetable/paria.jpg',
            },
         
            ],

        // for content and navigation      
          hideNav: true,
          isPass: false,
          moreContent: null,
          
        
      }
  }, methods:{
  
   
      //for Showmore navigation
      backMore(){
      this.$emit('backtoShow');
      },
      viewDetails(content){
        // this.isPass = true;
        // this.isBack = 1;
        // this.moreContent = content;
        this.$emit('existContent', content);
          // console.log(content);
      }
     
    }
});
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ion-icon{ 
    width: 30px;
    height: 30px;
}
ion-content{ 
   --background: transparent;
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
  opacity: 0.96;
  z-index: 1;
  border-radius: 20px 20px;
}

li{
  font-family:  sans-serif;
  font-size: 20px;
  color:#e9e9e9;
  font-weight:600;
  padding: 18px;
  border-bottom: 2px solid rgb(77, 77, 77);
}

.backMore{
    position: absolute;
    border-radius: 50px 50px;
    width: 60px;
    height: 60px;
    right: -5px;
    top: -20px;
     z-index: 1;
     background-color: #0c4b05;
     text-align: center;
     padding-top: 15px;

   
}


</style>