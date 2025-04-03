
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
    
    <div  v-show="viewType===2" style="padding:0 20px ;width: 95%;margin: 0 auto;height: 80vh; position: relative;"   class=" w100 flex flexR itemsC justifyC slider-container">
<button @click="slideBack()" type="button" class="sliderButton leftSliderButton"><i class="ri-arrow-left-wide-line"></i></button>
<img class="sliderImg" :src="imageData?.photos[sliderImageValue]?.src?.original" >
<button  @click="slideFront()" type="button" class="sliderButton rightSliderButton" ><i class="ri-arrow-right-wide-line"></i></button>

<div style="margin-top: 30px;gap: 20px;display: none;" class="w-100 flex  justifyC itemsC mobile-slider-button">
  <button @click="slideBack()" type="button" class="sliderButton  "><i class="ri-arrow-left-wide-line"></i></button>
  <button  @click="slideFront()" type="button" class="sliderButton " ><i class="ri-arrow-right-wide-line"></i></button>

</div>

</div>
</template>



<style>  



.sliderButton{
  display: block;
  font-size: 35px;
 height: 60px;
 width: 60px;
  border: none;
  position: absolute;
  top: 50%;
 transform: translateY(-50%) ; 
 border-radius: 100%;
 cursor: pointer;
}
.mobile-slider-button{
  display: none;
position: absolute;
top: 75%;
left: 50%;
transform: translate(-50%,-50%);
}

.leftSliderButton{left: 2%;}
.rightSliderButton{right: 2%;
  transform: translateY(-50%) ; }


.sliderImg {
    max-width: 600px;
    width: 60%;
    height: auto;
    border-radius: 12px;
}


@media (max-width: 800px) {
  .slider-container{
    flex-direction: column;
  }
  .leftSliderButton,
  .rightSliderButton {
    display: none;
  }
  .mobile-slider-button{display: flex !important;}
  .sliderButton{position: static ;  transform: translateY(0%) ; }
 

  .sliderImg{
  width: 98%;
}
  }

</style>