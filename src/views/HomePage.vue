<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div class="main-container">
          <div class="img-container"><ion-img class="logo" src="../../assets/veg.png"></ion-img></div>
          <div class="title">
       <i> <h3>MMSU-IEC Materials on Vegetable Production</h3></i>
        </div>
        <h4>English and Iloco Version</h4> 

      </div> 
       
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage,IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonImg
  
  },data(){
    return{
      show: true
    }
  }, methods: {
    selectMenu(){
      this.show = !this.show
    },
    selectback(){
      this.show = !this.show
    },
    h5p(){
      this.$router.push('/h5p')
    }
  }
  
});
</script>

<style scoped>

.main-container{
  text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("/public/assets/vegBg.png"); 
  background-size:100% 100%;
}
.img-container{
  width: 230px;
  display:block;
  position: relative;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title{
  width: 100%;
   display:block;
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h3{
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 30px;
font-weight: bold;
color: #0c4b05;
}
h4{
position: absolute;
right: 0;
bottom: 0;
padding-right: 15px;
color: white;
}

</style>
