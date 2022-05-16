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
            subtitle:'Description, Nutritive, Varities',
            src:'../../assets/vegetable/paria.jpg',
            content:'../workspace/English/Bitter Gourd/BitterGourd'
            },
            {
            id:'2',
            title:'Eggplant',
            subtitle:'Description, Nutritive, Varities',
            src:'../../assets/vegetable/tarong.jpg',
            content:'../workspace/English/Eggplant/Eggplant'
            },
            {
            id:'3',
            title:'Okra',
            subtitle:'Description, Nutritive, Site Selection, Varities',
            src:'../../assets/vegetable/okra.jpg',
            content:'../workspace/English/Okra/Okra'
            },   
            {
            id:'4',
            title:'Papaya',
            subtitle:'Description, Nutritive, Varities',
            src:'../../assets/vegetable/papaya.jpg',
            content:'../workspace/English/Papaya/Papaya'
            },
            {
            id:'5',
            title:'Pole Sitao',
            subtitle:'Description, Nutritive Value',
            src:'../../assets/vegetable/sitao.jpg',
           content:'../workspace/English/Pole Sitao/PoleSitao'
            },
            {
            id:'6',
            title:'Squash',
             subtitle:'Description, Nutritive, Varities',
            src:'../../assets/vegetable/karabasa.jpg',
            content:'../workspace/English/Squash/Squash-Production'
            },
            {
            id:'7',
            title:'Tomato',
             subtitle:'Description, Nutritive, Varities',
            src:'../../assets/vegetable/kamatis.jpg',
            content:'../workspace/English/Tomato/TomatoProduction'
            },
            ],

        ilocoPlants:[
          {
            id:'8',
            title:'Paria',
            subtitle:'Saguday ti Paria',
            src:'../../assets/vegetable/paria.jpg',
            content:'../workspace/Iloco/Paria/Paria'
            },         
            {
            id:'9',
            title:'Okra',
            subtitle:'Saguday ti Okra',
            src:'../../assets/vegetable/okra.jpg',
           content:'../workspace/Iloco/Okra/Okra'
            }, 
            {
            id:'10',
            title:'Bawang',
            subtitle:'Saguday ti Bawang',
            src:'../../assets/vegetable/bawang.jpg',
           content:'../workspace/Iloco/Bawang/Bawang'
            },  
            {
            id:'11',
            title:'Papaya',
            subtitle:'Saguday ti Papaya',
            src:'../../assets/vegetable/papaya.jpg',
           content:'../workspace/Iloco/Papaya/Papaya'
            },
            {
            id:'12',
            title:'Utong',
              subtitle:'Saguday ti Utong',
            src:'../../assets/vegetable/sitao.jpg',
           content:'../workspace/Iloco/Utong/Utong'
            },
            {
            id:'13',
            title:'Kamatis',
             subtitle:'Saguday ti Kamatis',
            src:'../../assets/vegetable/kamatis.jpg',
           content:'../workspace/Iloco/Kamatis/Kamatis'
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