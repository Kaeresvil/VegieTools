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
            content:'../workspace/English/Papaya/Papaya-Production'
            },
            {
            id:'5',
            title:'Pole Sitao',
            src:'../../assets/vegetable/sitao.jpg',
           content:'../workspace/English/Pole Sitao/Pole-Sitao'
            },
            {
            id:'6',
            title:'Squash',
            src:'../../assets/vegetable/karabasa.jpg',
            content:'../workspace/English/Squash/Squash-Production'
            },
            {
            id:'7',
            title:'Tomato',
            src:'../../assets/vegetable/kamatis.jpg',
            content:'../workspace/English/Tomato/Tomato-Production'
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
            id:'9',
            title:'Okra',
            src:'../../assets/vegetable/okra.jpg',
           content:'../workspace/Iloco/Okra/Okra'
            }, 
            {
            id:'10',
            title:'Bawang',
            src:'../../assets/vegetable/bawang.jpg',
           content:'../workspace/Iloco/Bawang/Bawang/workspace'
            },  
            {
            id:'11',
            title:'Papaya',
            src:'../../assets/vegetable/papaya.jpg',
           content:'../workspace/Iloco/Papaya/Papaya Production/workspace'
            },
            {
            id:'12',
            title:'Utong',
            src:'../../assets/vegetable/sitao.jpg',
            content:'Utong'
            },
            {
            id:'13',
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