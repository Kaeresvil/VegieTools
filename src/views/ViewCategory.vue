<template >

      <vegetable v-bind:englishPlants="englishPlants" v-bind:ilocoPlants="ilocoPlants" v-on:backtoFirstHomePAge="homepage" />
  
   
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
            id:'1',
            title:'Bitter Gourd',
            src:'../../assets/vegetable/paria.jpg',
            content:'../workspace/English/Bitter Gourd/Bitter Gourd Desc'
            },
            {
            id:'2',
            title:'Eggplant',
            src:'../../assets/vegetable/tarong.jpg',
            content:'../workspace/English/Eggplant/Eggplant-Description'
            },
            {
            id:'3',
            title:'Okra',
            src:'../../assets/vegetable/okra.jpg',
            content:'../workspace/English/Okra/Okra'
            },   
            {
            id:'4',
            title:'Papaya',
            src:'../../assets/vegetable/papaya.jpg',
            content:'../workspace/English/Papaya/PapayaEnglish'
            },
            {
            id:'5',
            title:'Pole Sitao',
            src:'../../assets/vegetable/sitao.jpg',
            content:'Pole Siato'
            },
            {
            id:'6',
            title:'Squash',
            src:'../../assets/vegetable/karabasa.jpg',
            content:'Squash'
            },
            {
            id:'7',
            title:'Tomato',
            src:'../../assets/vegetable/kamatis.jpg',
            content:'Tomato'
            },
            ],

        ilocoPlants:[
          {
            id:'8',
            title:'Paria',
            src:'../../assets/vegetable/paria.jpg',
            content:'../workspace/Iloco/Paria/Paria-Desc'
            },         
            {
            id:'10',
            title:'Okra',
            src:'../../assets/vegetable/okra.jpg',
            content:'OkraIloco'
            }, 
            {
            id:'11',
            title:'Bawang',
            src:'../../assets/vegetable/bawang.jpg',
            content:'Bawang'
            },  
            {
            id:'12',
            title:'Papaya',
            src:'../../assets/vegetable/papaya.jpg',
            content:'PapayaIloco'
            },
            {
            id:'13',
            title:'Utong',
            src:'../../assets/vegetable/sitao.jpg',
            content:'Utong'
            },
            {
            id:'15',
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