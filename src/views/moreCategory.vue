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

        3:[
         {
            title:this.vegetable,
             content:'../workspace/English/Okra/Okra'
            },
          {
            title:'Cultural Management Practices ',
            content:'../workspace/English/Okra/Cultural-Management-Practices'
            },
          {
            title:'Pest Management ',
            content:'../workspace/English/Okra/Pest-Management'
            },
          {
            title:'Harvesting and Post-harvest Handling ',
            content:'../workspace/English/Okra/Harvesting-and-Post-harvest-Practices'
            },
              {
             title:'Pre-Test/Self-Test',
             content:'../workspace/English/Okra/Okra-Self-Test'
            },
       
            ],

        4:[
         {
            title:this.vegetable,
            content:'../workspace/English/Papaya/Papaya-Production'
            },
          {
            title:'Disease Management ',
            content:'../workspace/English/Papaya/Disease-Management'
            },
          {
             title:'Disease Management 2 ',
            content:'../workspace/English/Papaya/Disease-Management-Quiz'
            },
          {
            title:'Pest Management ',
            content:'../workspace/English/Papaya/Pest-Management-Practices'
            },
          {
            title:'Harvesting and Post-harvest Handling ',
            content:'../workspace/English/Papaya/Harvesting'
            },
              {
             title:'Pre-Test/Self-Test',
             content:'../workspace/English/Papaya/Papaya Self-test'
            },
       
            ],

        5:[
         {
            title:this.vegetable,
            content:'../workspace/English/Pole Sitao/Pole-Sitao'
            },
          {
            title:'Land Preparation',
            content:'../workspace/English/Pole Sitao/Land-Preparation'
            },
             {
             title:'Varietal and Site Selection',
             content:'../workspace/English/Pole Sitao/Varietal-and-Site-Selection'
            },
          {
            title:'Integrated Nutrient and Water Management ',
            content:'../workspace/English/Pole Sitao/Integrated-Nutrient-and-Water-Management-_1_'
            },
          {
            title:'Integrated Pest Management ',
            content:'../workspace/English/Pole Sitao/Integrated-Pest-Management'
            },
          {
            title:'Harvesting and Post-harvest Handling ',
            content:'../workspace/English/Pole Sitao/Harvesting-and-Postharvest-Handling'
            },
              {
             title:'Pre-Test/Self-Test',
             content:'../workspace/English/Pole Sitao/Pole-sitao-Self-Test'
            },
       
            ],
        6:[
         {
            title:this.vegetable,
            content:'../workspace/English/Squash/Squash-Production'
            },
          {
            title:'Land Preparation/ Crop Establishment',
            content:'../workspace/English/Squash/Crop-Establishment'
            },
             {
             title:'Site Selection and Planting Season',
             content:'../workspace/English/Squash/Site-Selection-and-Planting-Season'
            },
          {
            title:'Water Management ',
             content:'../workspace/English/Squash/Water-Management'
            },
          {
            title:'Pest Management ',
              content:'../workspace/English/Squash/Pest-Management'
            },
          {
            title:'Harvesting and Post-harvest Practices ',
            content:'../workspace/English/Squash/Harvesting-and-Postharvest-Practices'
            },
              {
             title:'Pre-Test/Self-Test',
             content:'../workspace/English/Squash/Squash-Self-Test'
            },
       
            ],
        7:[
         {
            title:this.vegetable,
            content:'../workspace/English/Tomato/Tomato-Production'
            },
          {
            title:'Land Preparation',
            content:'../workspace/English/Tomato/Land-Preparation'
            },
             {
             title:'Site Selection and Planting Season',
             content:'../workspace/English/Tomato/ite Selection-and-Planting-Season'
            },
          {
            title:'Water Management ',
            content:'../workspace/English/Tomato/Water-Management'
            },
          {
            title:'Pest Management ',
            content:'../workspace/English/Tomato/Pest-Management'
            },
          {
            title:'Harvest and Post-harvest Practices ',
            content:'../workspace/English/Tomato/Harvest-and-Postharvest-Practices'
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
            9:[
              {
                  title:this.vegetable,
           content:'../workspace/Iloco/Okra/Okra'
              },
              {
            title:'Panangaywan Kadagiti Mula',
            content:'../workspace/Iloco/Okra/PANANGAYWAN-KADAGITI-MULA'
            },
              {
            title:'Panangtarawidwid Kadagiti Peste',
            content:'../workspace/Iloco/Okra/PANANGTARAWIDWID-KADAGITI-PESTE'
            },
              {
            title:'Panagapit ken Panagidulin',
            content:'../workspace/Iloco/Okra/PANAGAPIT-KEN-PANAGIDULIN'
            },
        
            ],
            10:[
              {
                  title:this.vegetable,
           content:'../workspace/Iloco/Bawang/Bawang/workspace'
              },
              {
            title:'Panaggisagana iti Pagmulaan',
          content:'../workspace/Iloco/Bawang/Daga-apagmulaan/workspace'
            },
              {
            title:'Dagiti Barayti iti Bawang',
              content:'../workspace/Iloco/Bawang/Dagiti Barayti/workspace'
            },
              {
            title:'Panagmanehar iti  Mula',
             content:'../workspace/Iloco/Bawang/Panagmanehar iti Mula/workspace'
            },
            {
            title:'Panagmula',
            content:'../workspace/Iloco/Bawang/Panagmula/workspace'
            },
              {
            title:'Kangrunaan a Sakit',
             content:'../workspace/Iloco/Bawang/Kangrunaan a Sakit/workspace'
            },
             {
            title:'Panangmanehar kadagiti Peste',
            content:'../workspace/Iloco/Bawang/Panagmanehar ti Peste/workspace'
            },
              
        
            ],
            11:[
              {
                  title:this.vegetable,
           content:'../workspace/Iloco/Papaya/Papaya Production/workspace'
              },
              {
            title:'Panangtarawidwid iti Sakit',
          content:'../workspace/Iloco/Papaya/Panagtarawidwid ti sakit/workspace'
            },
              {
           title:'Panangtarawidwid iti Sakit Quiz',
          content:'../workspace/Iloco/Papaya/Panagtarawidiwid quiz/workspace'
            },
              {
           title:'Panangtarawidwid kadagiiti Peste',
          content:'../workspace/Iloco/Papaya/Panangtarawidwid kadagiti peste/workspace'
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