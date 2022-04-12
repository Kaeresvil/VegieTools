<template>
      <div class="vegGrid">

        <div class="vegetableList">
          <!-- <ion-img :src="plants.src">Sample</ion-img> -->
          <h1>Kee</h1>
        </div>      
        <div class="vegetableList">
          <!-- <ion-img :src="plants.src">Sample</ion-img> -->
          <h1>Eloiza</h1>
        </div>      
        <div class="vegetableList">
          <!-- <ion-img :src="plants.src">Sample</ion-img> -->
          <h1>Ruben</h1>
        </div>      
        <div class="vegetableList">
          <!-- <ion-img :src="plants.src">Sample</ion-img> -->
          <h1>Sir Wilben</h1>
        </div>      

        </div>

</template>

<script>

export default {
     name: 'HomeContent',
   components: {
   
  },
}
</script>

<style scoped>
.logo{
     width: 280px;
  display:block;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h3{
padding-top:45%;
font-size: 78px;
font-family: 'Barlow Condensed', sans-serif;
font-weight: 1000;
color:#0c4b05;
}
h4{
    font-size: 18px;
    font-family: 'Barlow Condensed', sans-serif;
    color:#000000;
}

.vegGrid{
  display: grid;
  grid-template-columns: auto auto;
  width: 95%;
  transform: translate(+2.5%, +5px);
  margin-top: 6%;
  column-gap: 10px;
  row-gap: 10px;
}
.vegetableList{
  background-color: #ffffffe3;
  box-shadow: 5px 5px rgba(168, 168, 168, 0.719); 
  border: 1px solid rgba(63, 63, 63, 0.603);
  border-radius: 10px 10px;
  padding: 10px 0 10px 0;
  text-align: center;
}
</style>