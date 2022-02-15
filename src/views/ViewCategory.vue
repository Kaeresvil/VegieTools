<template>
  <div class="main-container">
 <button @click="back" class="btn">back</button><br>
  <h1>Standalone H5P Content Sample</h1>

  <div style="width:100%;" id="h5p-container"></div>
  <div style="width:100%;" id="h5p-container-2"></div>
</div>   
</template>

 
<script>
     import { H5P } from 'h5p-standalone'; // ES6
// const { H5P } = require('h5p-standalone'); AMD
// const { H5P } = 'H5PStandalone'; // object destructuring

export default {
    name: 'ViewCategory',
    components: {

    },

   data(){
       return{
           
       }
   },
  
   methods: {
       back(){
           this.$router.push('/home')
       }
   }, mounted(){
  
const player1Options = {
  h5pJsonPath: '../workspace/presentation',
    frameJs: '../dist/frame.bundle.js',
    frameCss: '../dist/styles/h5p.css',
    fullscreen: false, //enable fullscreen button
    frame: true, 
    copyright: true,
    icon: true,
};

const player2Options = {
   h5pJsonPath: '../workspace/video',
    frameJs: '../dist/frame.bundle.js',
    frameCss: '../dist/styles/h5p.css',
    fullscreen: false, //enable fullscreen button
    frame: true, 
    copyright: true,
    icon: true,
};

const player1 = new H5P(document.getElementById('h5p-container'), player1Options);

player1.then(() => {
  return new H5P(document.getElementById('h5p-container-2'), player2Options);
}).then(() => {
  // do stuff
})


   }// end mounted
};

</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    font-family: Arial, Helvetica, sans-serif;
    color:black;
}
.btn{
    width: 90px;
    height: 30px;
    background: aquamarine;
    font-size: 25px;
    margin: 20px;
}
.main-container{
  width: auto;
  height: 100%;
    background: url("/public/assets/VegieTools.png") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
}

</style>