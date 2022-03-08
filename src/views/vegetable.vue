<template>
      <div v-for="(plants, index) in englishPlants" :key="index">
        <div @click="viewDetails(plants.content)" class="vegetableList">
          <ion-img :src="plants.src"></ion-img>
          <h1>{{plants.title}}</h1>
        </div>
    </div>

    
      <div v-for="(plants, index) in ilocoPlants" :key="index">
        <div @click="viewDetails(plants.content)" class="vegetableList">
          <ion-img :src="plants.src"></ion-img>
          <h1>{{plants.title}}</h1>
        </div>
         </div>

        <VegetableContent v-if="clickVeg" :content="vegetableContent"/>
</template>

<script>
import VegetableContent from './categories/background.vue'

export default {
 name: 'vegeTable',
  props:[
      "englishPlants",
      "ilocoPlants",
    ],
    components: {
VegetableContent
    },
    data(){
        return{
            vegetableContent: null,
            clickVeg : false,
        }
    },
    methods: {
        
          viewDetails(content){
            this.vegetableContent = content;
            this.$router.push("/background");
           //For Footer and the grid and navigatio
    },
    }

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.vegetableList{
  background-color: #ffffffe3;
  box-shadow: 5px 5px rgba(141, 141, 141, 0.719); 
  border: 1px solid rgba(63, 63, 63, 0.603);
  border-radius: 10px 10px;
  padding: 10px 0 10px 0;
  text-align: center;
}
ion-img{
  height: 100px;
}
h1{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 25px;
  color:rgb(51, 51, 51);
  font-weight:1000;
}
</style>