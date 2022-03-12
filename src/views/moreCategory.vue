<template >

        <div v-if="hideNav" class="navigation">
            <ion-content
                :scroll-events="true"
                >
           <ul  v-for="(plants, index) in BitterGourd" :key="index">
              <li @click="viewDetails(plants.title, plants.isback)">{{plants.title}}</li>
            </ul>
            </ion-content>

              <div class="backMore"><ion-icon @click="backMore" src="../../assets/svg/cross.svg"></ion-icon></div>

             </div>


          
</template>
<script>
import { defineComponent } from 'vue';


export default defineComponent({
     name: 'moreCategory',
  components: { 
       
},data(){
      return{
        // for header
        BitterGourd:[
          {
            isback: 'yes',
            title:'Land Preparation',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          {
            title:'Crop Establishment',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          {
           title:'Fertilizer Application',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          {
             title:'Water Management',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          {
             title:'Fest Management',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          {
             title:'Insect Fest Management',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          {
             title:'Harvesting and Post-harvest Practices',
            content:'../workspace/morecontent/Bitter Gourd'
            },
          
            ],

        ilocoPlants:[
          {
            title:'Paria',
            src:'../../assets/vegetable/paria.jpg',
            content:'Paria'
            },
         
            ],

        // for content and navigation      
          hideNav: true,
          back: 1,
        
      }
  }, methods:{
  
   
      //for Showmore navigation
      backMore(){
      this.$emit('backtoShow', this.back);
      },
      viewDetails(content){
          console.log(content);
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