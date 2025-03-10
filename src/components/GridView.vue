

<script>


export default{
    name:'GridView',
    props:{
      imageData:Object,
      viewType:Number

    },
    data(){
        return{
            sliderImageValue:0
        }
    },
    components:{
    //  ZoomView   
    },
    methods:{
imageClicked(imgItem){
    this.$emit('image-clicked',imgItem)
},
slideFront(){
    let photosArrayLength=this.imageData.photos.length-1
  let newVal=this.sliderImageValue+1
  if(photosArrayLength<newVal) {
    this.sliderImageValue=0
  }
  else{
    this.sliderImageValue= this.sliderImageValue+1 
  }
},
slideBack(){
    let photosArrayLength=this.imageData.photos.length-1
  let newVal=this.sliderImageValue-1
  if(newVal<0) {
    this.sliderImageValue=photosArrayLength
  }
  else{
    this.sliderImageValue= this.sliderImageValue-1
  }
}
    },
    created(){
        console.log("the image type value",this.viewType)
        this.sliderImageValue=0
    },
    updated(){
        console.log("the props are upadted with type value",this.viewType)
        // this.sliderImageValue=Math.floor(this.imageData?.photos.length/2) 
        // this.sliderImageValue=0
    }
}   

</script>


<template>
<div class="gridImageContainer"  :style="{ flexDirection: viewType == 1 ? 'column' : 'row' }">
    
<img v-show="viewType!==2 && viewType!==3" v-for="ele in imageData?.photos" :key="ele?.id" @click="imageClicked(ele)" :src="ele?.src?.tiny"  />

.

<div v-show="viewType===2"  class="sliderButton w100 flex itemsC justifyB">
<button @click="slideBack()" type="button"><i class="ri-arrow-left-wide-line"></i></button>
<img :src="imageData?.photos[sliderImageValue]?.src?.original" width="50%" height="" >
<button  @click="slideFront()" type="button"><i style="transform: rotate(180deg);" class="ri-arrow-left-wide-line"></i></button>
</div>

<!-- {{ sliderImageValue }} -->

</div>  


</template>


<style >
.gridImageContainer{
    column-width: 180px;
    display: flex; 
     justify-content: center; 
    align-items: center;flex-wrap: wrap; 
}
/* img{width: 100%;max-width: 800px;} */
img{
    border-radius: 12px;
    padding: 5px 6px;
}
/* .sliderButton{

} */
</style>