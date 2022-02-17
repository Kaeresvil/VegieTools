<template>
   <div class="main-container">
       <div class="header">

       </div>

       <div class="content">
           <ion-img class="logo" src="../../assets/veg.png"></ion-img>
           <i><h3>VegieTools</h3></i>
           <h4>English and Iloco Version</h4>
       </div>
       <div class="footer">

       </div>
   </div><!-- end of container div -->
</template>

<script>
export default {
     name: 'SplashLoader',
  

}
</script>

<style scoped>
.main-container{
     text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("/public/assets/VegieTools.png"); 
  background-size:100% 100%;
}
.header{
    width: 100%;
    height: 50px;
    background-color:#0c4b05;
}
.footer{
    position: absolute;
right: 0;
bottom: 0;
    width: 100%;
    height: 50px;
    background-color:#0c4b05;
}
.logo{
     width: 230px;
  display:block;
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h3{
padding-top:80%;
font-size: 45px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-weight: 900;
color:#0c4b05;
}

</style>