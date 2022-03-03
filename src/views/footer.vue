<template>
<div class="main-container">
     <div v-if="hideFooter" class="footer">

           <div v-if="hideClick" class="grid-item">
                <ion-icon @click="backClick" class="footerbtn" src="../../assets/svg/arrowBack.svg"></ion-icon>
                 <p  @click="backClick" >Back</p>
            </div>

            <div class="grid-item">
                <ion-icon @click="homeClick"  class="footerbtn" src="../../assets/svg/home.svg"></ion-icon>
                 <p  @click="homeClick" >Home</p>
            </div>
            <div  class="grid-item">
                <ion-icon  @click="categoryClick" class="footerbtn" src="../../assets/svg/apps.svg"></ion-icon>
                <p  @click="categoryClick" >Vegetables</p>
                
            </div>
      </div> <!-- end of footer div -->

      </div>
</template>

<script>

export default {
    name: 'footerPage',
  
  data(){
      return{
          hideAbout: true,
          hideClick: true,
          hideFooter: true,
      }
  }, methods:{
      menuClicked(){
          this.show = !this.show;
          this.hide = true;
      },
      menuBack(){
          this.show = !this.show;
          this.hide = false;
      },
      SelfTest(){
          console.log("Click Self Test");
      },
      ExitApps(){
          console.log("Click Exit");
      },
      categoryClick(){
        this.hideCat = true;
        this.hideCon = false;
        this.hideAbout = false;
        this.hideClick = true;
        this.hideFooter = false;

      },
      homeClick(){
          this.hideCat = false;
        this.hideCon = true;
         this.hideAbout = true;
        this.backClick = false;
      },
      aboutClick(){
          this.hideAbout = true;
        this.hideCon = false;
        this.hideCat = false;
      },
      backClick(){
        this.hideCat = true;
      },
  }
}
</script>

<style scoped>
.footer{
   display: grid;
   grid-template-columns: 33% 33% 33%;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color:#0c4b05;
    justify-items: center;
}
.grid-item{
  padding-top: 7px;
}
ion-icon{ 
    width: 35px;
    height: 35px;
}
.footerbtn{ 
    width: 27px;
    height: 27px;
}
p{
    color:#ffffff;
    font-size: 14px;
    width: 70px;
}
</style>
