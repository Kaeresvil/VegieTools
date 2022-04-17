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
            title: "Bitter Gourd Desciption, Nutritive",
            content:'../workspace/English/Bitter Gourd/BitterGourd'
            },
          {
            title:'Land Preparation and Crop Establishment ',
            content:'../workspace/English/Bitter Gourd/LandPreparationandCropEstablishment'
            },
          {
            title:'Integrated Nutrient and Water Management',
            content:'../workspace/English/Bitter Gourd/IntegratedandWaterManagement'
            },
          {
           title:'Integrated Pest Management',
            content:'../workspace/English/Bitter Gourd/IntegratedPestManagement'
            },
          {
             title:'Disease Management',
              content:'../workspace/English/Bitter Gourd/DiseaseManagement'
            },
          {
             title:'Harvesting and Post-harvest Handling',
            content:'../workspace/English/Bitter Gourd/HarvestingandPostHarvestHandling'
            },
          {
             title:'Self-Test',
             content:'../workspace/English/Bitter Gourd/Bittergourdpretest'
            },
            ],

        2:[
         {
            title: "Eggplant Desciption, Nutritive",
            content:'../workspace/English/Eggplant/Eggplant'
            },
          {
            title:'Land Preparation and Crop Establishment ',
            content:'../workspace/English/Eggplant/Land-Preparation-and-Crop-Establishment (1)'
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
             title:'Self-Test',
             content:'../workspace/English/Eggplant/Eggplant-Self-Test'
            },
       
            ],

        3:[
         {
            title: "Description, Nutritive, Site Selection, Varities",
             content:'../workspace/English/Okra/Okra'
            },
          {
            title:'Cultural Management Practices ',
            content:'../workspace/English/Okra/CulturalManagementPractices'
            },
          {
            title:'Pest Management ',
            content:'../workspace/English/Okra/PestManagement'
            },
          {
            title:'Harvesting and Post-harvest Practices ',
            content:'../workspace/English/Okra/HarvestingandPostharvestPractices'
            },
              {
             title:'Self-Test',
             content:'../workspace/English/Okra/OkraSelfTest'
            },
       
            ],

        4:[
         {
            title: "Papaya Desciption, Nutritive",
            content:'../workspace/English/Papaya/Papaya'
            },
          {
            title:'Disease Management ',
            content:'../workspace/English/Papaya/DiseaseManagement'
            },
          {
            title:'Pest Management Practices ',
            content:'../workspace/English/Papaya/PestManagementPractices'
            },
          {
            title:'Harvesting ',
            content:'../workspace/English/Papaya/Harvesting'
            },
              {
             title:'Self-Test',
             content:'../workspace/English/Papaya/PapayaSelftest'
            },
       
            ],

        5:[
         {
            title: "Description, Nutritive Value",
            content:'../workspace/English/Pole Sitao/PoleSitao'
            },
          {
            title:'Land Preparation',
            content:'../workspace/English/Pole Sitao/LandPreparation'
            },
             {
             title:'Varietal and Site Selection',
             content:'../workspace/English/Pole Sitao/VarietalandSiteSelection'
            },
          {
            title:'Integrated Nutrient and Water Management ',
            content:'../workspace/English/Pole Sitao/IntegratedNutrientandWaterManagement'
            },
          {
            title:'Integrated Pest Management ',
            content:'../workspace/English/Pole Sitao/IntegratedPestManagement'
            },
          {
            title:'Harvesting and Post-harvest Handling ',
            content:'../workspace/English/Pole Sitao/HarvestingandPostharvestHandling'
            },
              {
             title:'Self-Test',
             content:'../workspace/English/Pole Sitao/PolesitaoSelfTest'
            },
       
            ],
        6:[
         {
            title: "Description, Nutritive, Varities",
            content:'../workspace/English/Squash/Squash-Production'
            },
          {
            title:'Land Preparation, Crop Establishment',
            content:'../workspace/English/Squash/CropEstablishment'
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
              content:'../workspace/English/Squash/PestManagement'
            },
          {
            title:'Harvesting and Post-harvest Practices ',
            content:'../workspace/English/Squash/HarvestingandPostharvestPractices'
            },
              {
             title:'Self-Test',
             content:'../workspace/English/Squash/Squash-Self-Test'
            },
       
            ],
        7:[
         {
            title:"Description, Nutritive, Varities",
            content:'../workspace/English/Tomato/TomatoProduction'
            },
          {
            title:'Land Preparation',
            content:'../workspace/English/Tomato/LandPreparation'
            },
             {
             title:'Site Selection and Planting Season',
             content:'../workspace/English/Tomato/SiteSelectionandPlantingSeason'
            },
          {
            title:'Water Management ',
            content:'../workspace/English/Tomato/WaterManagement'
            },
          {
            title:'Pest Management ',
            content:'../workspace/English/Tomato/PestManagement'
            },
          {
            title:'Harvest and Post-harvest Practices ',
            content:'../workspace/English/Tomato/HarvestandPostharvestPractices'
            },
             {
             title:'Self-Test',
             content:'../workspace/English/Tomato/TomatoSelfTest'
            },
       
            ],
        
            8:[
              {
            title: "Saguday ti Paria",
            content:'../workspace/Iloco/Paria/Paria'
              },
              {
            title:'Panaggisagana iti Pagmulaan ken Wagas ti Panagmula',
            content:'../workspace/Iloco/Paria/PanangisaganaitiPagmulaankenWagastiPanagmula'
            },
              {
            title:'Panagganagan ken Panagpadanum',
            content:'../workspace/Iloco/Paria/PanagganagankenPanagpadanum'
            },
              {
            title:'Panangmanehar kadagiti Peste',
            content:'../workspace/Iloco/Paria/PanangmaneharkadagitiPeste'
            },
              {
            title:'Panagmanehar iti Sakit',
            content:'../workspace/Iloco/Paria/PanagmaneharitiSakit'
            },
             {
            title:'Panangtariwidwid Kadagti Ruot',
            content:'../workspace/Iloco/Paria/PanangtarawidwidKadagitiRuot'
            },
              {
            title:'Panagapit ken Panangtaming iti Apit',
            content:'../workspace/Iloco/Paria/PanagapitkenPanangtamingitiApit'
            },
        
            ],
            9:[
              {
            title: "Saguday ti Okra",
           content:'../workspace/Iloco/Okra/Okra'
              },
              {
            title:'Panangaywan Kadagiti Mula',
            content:'../workspace/Iloco/Okra/PANANGAYWANKADAGITIMULA'
            },
              {
            title:'Panangtarawidwid Kadagiti Peste',
            content:'../workspace/Iloco/Okra/PANANGTARAWIDWIDKADAGITIPESTE'
            },
              {
            title:'Panagapit ken Panagidulin',
            content:'../workspace/Iloco/Okra/PANAGAPITKENPANAGIDULIN'
            },
        
            ],
            10:[
              {
              title: "Saguday ti Bawang",
           content:'../workspace/Iloco/Bawang/Bawang'
              },
              {
            title:'Daga a Pagmulaan',
          content:'../workspace/Iloco/Bawang/DagaapagmulaankenDagitiaramidenkasangwanantipinagmula'
            },
              {
            title:'Dagiti Barayti iti Bawang',
              content:'../workspace/Iloco/Bawang/DAGITIBARAYTITIBAWANGAMAIMULMULAITIILOCOS'
            },
              {
            title:'Panagmanehar ti  Mula a Bawang',
             content:'../workspace/Iloco/Bawang/Panangmanehartimulaabawang'
            },
            {
            title:'Panagmula ri Bawang',
            content:'../workspace/Iloco/Bawang/PANAGMULAITIBAWANG'
            },
              {
            title:'Kangrunaan a Sakit ti Bawang',
             content:'../workspace/Iloco/Bawang/KANGRUNAANASAKITDAGITIBAWANG'
            },
             {
            title:'Panangmanehar kadagiti Peste',
            content:'../workspace/Iloco/Bawang/PanangmaneharkadagitiPeste'
            },
              
        
            ],
            11:[
              {
                  title:"Saguday ti Papaya",
           content:'../workspace/Iloco/Papaya/PapayaProduksyon'
              },
              {
            title:'Panangtarawidwid iti Sakit',
          content:'../workspace/Iloco/Papaya/PanangtarawidwiditiSakit'
            },
             
              {
           title:'Panangtarawidwid kadagiiti Peste',
          content:'../workspace/Iloco/Papaya/PanangtarawidwidkadagitiPeste'
            },
              {
           title:'Panagapit',
          content:'../workspace/Iloco/Papaya/Panagapit'
            },
            ],
            12:[
              {
                  title:"Saguday ti Utong",
           content:'../workspace/Iloco/Utong/Utong'
              },
              {
            title:'Panagpili ti Umona a Barayti ',
          content:'../workspace/Iloco/Utong/PANAGPILIITIUMNOABARAYTI'
            },
             
              {
           title:'Panagpili iti Lugar a Pagmulaan',
          content:'../workspace/Iloco/Utong/PanagpiliitiLugaraPagmulaan'
            },
              {
           title:'Panagabuno ken Panagpadanum',
          content:'../workspace/Iloco/Utong/PANAGABONOKENPANAGPADANUM'
            },
              {
           title:'Panangtarawidwid kadagiti Peste',
          content:'../workspace/Iloco/Utong/PanangtarawidwidKadagitiSakitkenPeste'
            },
              {
           title:'Panagapit ken Panagidulin',
          content:'../workspace/Iloco/Utong/PANAGAPITKENPANAGIDULIN'
            },
            ],
            13:[
              {
                  title:"Saguday ti Kamatis",
           content:'../workspace/Iloco/Kamatis/Kamatis'
              },
              {
            title:'Panagpili iti Lugar ken Panawen ti Panagmula',
          content:'../workspace/Iloco/Kamatis/PanagpiliitiLugarkenPanawentiPanagmula'
            },
             
              {
           title:'Panangisagana iti Daga a Pagmulaan',
          content:'../workspace/Iloco/Kamatis/PanangisaganaitiDagaaPagmulaan'
            },
              {
           title:'Panagpadanum',
          content:'../workspace/Iloco/Kamatis/Panagpadanum'
            },
              {
           title:'Panangmanehar kadagiti Peste',
          content:'../workspace/Iloco/Kamatis/PanangmaneharkadagitiPeste'
            },
              {
           title:'Panagapit ken Panagidulin',
          content:'../workspace/Iloco/Kamatis/PanangmaneharkadagitiPeste'
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
    width: 28px;
    height: 28px;
}
ion-content{ 
   --background: transparent;
 }
.navigation{
   border: 1px solid black;
  position: absolute;
  width: 90%;
  height: 50%;
  top: 53%;  
  left: 50%; 
  transform: translate(-50%, -50%);                                 
  background-color: #000000;
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
    width: 57px;
    height: 57px;
    right: -5px;
    top: -20px;
     z-index: 1;
     background-color: #0c4b05;
     text-align: center;
     padding-top: 15px;

   
}
@media only screen and (max-device-height : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {


li{
  font-size: 16px;
}

.backMore{
    width: 43px;
    height: 43px;
     padding-top: 11px;

   
}
ion-icon{ 
    width: 22px;
    height: 22px;
}

}

@media only screen and (max-device-height : 450px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {

li{
  font-size: 16px;
}

.backMore{
    width: 43px;
    height: 43px;
     padding-top: 11px;

   
}
ion-icon{ 
    width: 22px;
    height: 22px;
}
}

</style>