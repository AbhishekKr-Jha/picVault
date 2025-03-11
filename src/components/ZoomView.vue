
<script> 
export default{
    name:'ZoomView',
    props:{
        imageToZoom:Object ,
        imageViewType:{
            type:Number,
            isVisible:Boolean
        }
        
    },
    data(){
return{
    resizeValue:50
}
    },
    methods:{
        resizeImage(){
            // if(this.resizeValue<100){
            //     this.resizeValue=this.resizeValue+25
            // }
        },
        inc(){
            if(this.resizeValue<100){
                this.resizeValue=this.resizeValue+25
            }  
        }  ,
        dec(){
            if(this.resizeValue>50){
                this.resizeValue=this.resizeValue-25
            }
        },
        closeZoomImage(){
            this.$emit('cancel-image-zoom')
            this.resizeValue=50
        }
    }
}

</script>


<template>

<div v-show="!isVisible"  class="">

    <i @click="closeZoomImage" class="ri-close-large-line closeIconBtn"></i>

<div @click.stop  @click="resizeImage" class="innerZoomContainer">

    <img class="imgClass" :src="imageToZoom?.src?.original" :width="resizeValue + '%'"  style="max-width:75vw;"  />
    <!-- :width="resizeValue + '%'" -->



</div>
<div  class="flex itemsC justifyC resizeButtonContainer">
    <button @click="dec">-</button>
    <button @click="inc">+</button>
</div>

</div>
</template>


<style scoped>

.innerZoomContainer{
    padding: 2px; 
    max-width: max-content;
    max-height: max-content;
    /* background: green; */
   
}
.resizeButtonContainer{
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    gap:10px;
    /* cursor: zoom-in; */
}



.imgClass{
    display: block;
    margin:0 auto;
}
hidden{
    overflow: hidden;
    height: 100vh;

}
 /* img{
    cursor: zoom-in;
 } */
 


</style>