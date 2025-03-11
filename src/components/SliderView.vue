
<script>  
export default{
    name:'SliderView',
    props:{
      imageData:Object,
      viewType:Number
    },
    data(){
        return{
            sliderImageValue:0
        }
    },
    methods:{
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
    updated(){
        console.log("the imges are uplaoded",this.imageData)
    }
}


</script>


<template>
    
    <div  v-show="viewType===2" style="padding:0 20px ;width: 90%;margin: 0 auto;height: 80vh; position: relative;"   class=" w100 flex itemsC justifyC">
<button @click="slideBack()" type="button" class="sliderButton leftSliderButton"><i class="ri-arrow-left-wide-line"></i></button>
<img class="sliderImg" :src="imageData?.photos[sliderImageValue]?.src?.original" >
<button  @click="slideFront()" type="button" class="sliderButton rightSliderButton" ><i class="ri-arrow-right-wide-line"></i></button>
</div>
</template>



<style>  
.sliderImg {
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    max-width: 600px;
    width: 60%;
    height: auto;
}

</style>