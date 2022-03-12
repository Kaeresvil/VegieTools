<template >

      <vegetable v-bind:englishPlants="englishPlants" v-bind:ilocoPlants="ilocoPlants"/>
  
   
</template>
<script>
import { defineComponent } from 'vue';
import vegetable from './vegetable.vue'


export default defineComponent({
     name: 'ViewCategory',
  components: { 
     vegetable,
 

    
     
},data(){
      return{
        // for header
        englishPlants:[
          {
            title:'Bitter Gourd',
            src:'../../assets/vegetable/paria.jpg',
            content:'../workspace/English/Bitter Gourd/'
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
</style>