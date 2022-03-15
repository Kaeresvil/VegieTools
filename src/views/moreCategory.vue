<template >

        <div v-if="hideNav" class="navigation">
            <ion-content
                :scroll-events="true"
                >
                
           <ul  v-for='(plants, index) in content' :key='index'>
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
       vegetable:String,
       id:String
     },
  components: { 
       
},
mounted(){
  // console.log(this.vegetableName)
  this.content=this[this.id];
},
data(){
      return{ 
        // for header  
        content:null,
        1:[
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
            content:'../workspace/English/Bitter Gourd/Integrated-Pest-Management'
            },
          {
             title:'Disease Management',
              content:'../workspace/English/Bitter Gourd/Disease-Management'
            },
          {
             title:'Weed Management',
              content:'../workspace/English/Bitter Gourd/Weed-management'
            },
          {
             title:'Harvesting and Post-harvest Handling',
            content:'../workspace/English/Bitter Gourd/Harvesting-and-Postharvest-handling'
            },
          {
             title:'Pre-Test/Self-Test',
             content:'../workspace/English/Bitter Gourd/Bitter-gourd-pre-test'
            },
            ],

        2:[
         {
            title:this.vegetable,
            content:'../workspace/English/Eggplant/Eggplant-Description'
            },
          {
            title:'Land Preparation and Crop Establishment ',
            content:'../workspace/English/Eggplant/Land-Preparation-and-Crop-Establishment'
            },
          {
            title:'Integrated Nutrient and Water Management ',
            content:'../workspace/English/Eggplant/Integrated-Nutrient-and-Water-Management'
            },
          {
            title:'Integrated Pest Management ',
            content:'../workspace/English/Eggplant/Integrated-Pest-Management'
            },
          {
            title:'Harvesting and Post-harvest Handling ',
            content:'../workspace/English/Eggplant/Harvesting-and-Postharvest-Handling'
            },
              {
             title:'Pre-Test/Self-Test',
             content:'../workspace/English/Bitter Gourd/Bitter-gourd-pre-test'
            },
       
            ],
            8:[
              {
                  title:this.vegetable,
            content:'../workspace/Iloco/Paria/Paria-Desc'
              },
              {
            title:'Panaggisagana iti Pagmulaan ken Wagas ti Panagmula',
            content:'../workspace/Iloco/Paria/Panangisagana-iti-Pagmulaan-ken-Wagas-ti-Panagmula'
            },
              {
            title:'Panagganagan ken Panagpadanum',
            content:'../workspace/Iloco/Paria/Panagganagan-ken-Panagpadanum'
            },
              {
            title:'Panangmanehar kadagiti Peste',
            content:'../workspace/Iloco/Paria/Panangmanehar-kadagiti-Peste'
            },
              {
            title:'Panagmanehar iti Sakit',
            content:'../workspace/Iloco/Paria/Panagmanehar-iti-Sakit'
            },
             {
            title:'Panangtariwidwid Kadagti Ruot',
            content:'../workspace/Iloco/Paria/Panangtarawidwid-Kadagiti-Ruot'
            },
              {
            title:'Panagapit ken Panangtaming iti Apit',
            content:'../workspace/Iloco/Paria/Panagapit-ken-Panangtaming-iti-Apit'
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
      viewDetails(content, title){
        this.$emit('existContent', content, title);
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