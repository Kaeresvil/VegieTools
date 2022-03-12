<template>
  
   <Content :content="iscontent" :backButton="isbackclick"/>

</template>

<script>
import Content from  './H5Pstandalone.vue'
export default {
   name: 'vegeContent',
  props:{
    selectcontent: {
      type: String,
      required: true
    },
    backclick: {
      type: Number,
      required: true
    }
   
  },
 
  data(){
      return{
          iscontent :this.selectcontent,
          isbackclick :this.backclick
      }
  },
    components: {
    Content
    }
}
</script>
