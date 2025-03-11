

<script>


export default{
    name:'GridView',
    props:{
      imageData:Object,
      viewType:Number

    },
    // data(){
    //     return{
    //         sliderImageValue:0
    //     }
    // },
    components:{
    //  ZoomView   
    },
    methods:{
imageClicked(imgItem){
    this.$emit('image-clicked',imgItem)
},
// slideFront(){
//     let photosArrayLength=this.imageData.photos.length-1
//   let newVal=this.sliderImageValue+1
//   if(photosArrayLength<newVal) {
//     this.sliderImageValue=0
//   }
//   else{
//     this.sliderImageValue= this.sliderImageValue+1 
//   }
// },
// slideBack(){
//     let photosArrayLength=this.imageData.photos.length-1
//   let newVal=this.sliderImageValue-1
//   if(newVal<0) {
//     this.sliderImageValue=photosArrayLength
//   }
//   else{
//     this.sliderImageValue= this.sliderImageValue-1
//   }
// }
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
<div class="gridImageContainer justifyC itemsC"  :style="{display:viewType==1?'flex':'block', flexDirection: viewType == 1 ? 'column' : 'row' }">
  <!-- width="40%"  style="max-width: 400px; -->
<!-- <img style="padding:2px 0px;cursor: pointer;" class="image" v-show="viewType!==2 && viewType!==3" v-for="ele in imageData?.photos" :key="ele?.id" @click="imageClicked(ele)" :src="ele?.src?.original"   /> -->


<div class="imageWrapper" v-show="viewType !== 2 && viewType !== 3" 
       v-for="ele in imageData?.photos" :key="ele?.id" @click="imageClicked(ele)">
       
    <img class="image" :src="ele?.src?.original" style="padding:2px 0px;cursor: pointer;" />
    
    <!-- <div class="imageOverlay"></div> -->

  </div>



<!-- <div v-show="viewType===2" style=""  class="sliderButton w100 flex itemsC justifyB">
<button @click="slideBack()" type="button"><i class="ri-arrow-left-wide-line"></i></button>
<img :src="imageData?.photos[sliderImageValue]?.src?.original" width="50%"  height="" >
<button  @click="slideFront()" type="button"><i style="transform: rotate(180deg);" class="ri-arrow-left-wide-line"></i></button>
</div> -->

<!-- {{ sliderImageValue }} -->

</div>  
</template>


<style >
.gridImageContainer{
    column-width: 221px;
    /* column-width: 280px; */
    gap: 10px;
    /* background: yellow; */
    /* width: 100%; */
    /* display: flex; 
     justify-content: center; 
    align-items: center;flex-wrap: wrap;  */
}
/* img{width: 100%;max-width: 800px;} */
.image{
    border-radius: 12px;
    /* padding: 5px 6px; */
    max-width:400px;
    width: 100%;

}
img{
  border-radius: 12px;
  padding: 5px 6px;
}
/* .sliderImage{
  max-width: 600px;
} */


.imageWrapper {
  position: relative;
  border-radius: 12px;
  display: inline-block;
  overflow: hidden;
}

.image {
  display: block;
  width: 100%;
  transition: transform 0.3s ease-in;
}

.imageWrapper:hover .image {
  transform: scale(1.28); 
}

.imageOverlay {
  position: absolute;
  bottom: -100%; 
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  transition: bottom 0.4s ease-in-out;
}

.imageWrapper:hover .imageOverlay {
  bottom: 0; 
}



</style>