<template>
  
   <Content :content="iscontent" :backButton="isbackclick" :morecontent="ismoreContent" :morebackButton="ismorebackclick"  />

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
    morecontent: {
      type: String,
      required: true
    },
    backclick: {
      type: Number,
      required: true
    },
    morebackclick: {
      type: Number,
      required: true
    },
   
  },
 
  data(){
      return{
          iscontent :this.selectcontent,
          isbackclick :this.backclick,
          ismorebackclick :this.morebackclick,
          ismoreContent :this.morecontent,
      }
  },
    components: {
    Content
    }
}
</script>
