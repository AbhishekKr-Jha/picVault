
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
    resizeValue:70
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
                this.resizeValue=this.resizeValue+10
            }  
        }  ,
        dec(){
            if(this.resizeValue>30){
                this.resizeValue=this.resizeValue-10
            }
        },
        closeZoomImage(){
            this.$emit('cancel-image-zoom')
            this.resizeValue=70
        }
    }
}

</script>


<template>

<div v-show="!isVisible"  class="">

    <i @click="closeZoomImage" class="ri-close-large-line closeIconBtn"></i>
    <div class="zoomSize">{{resizeValue}}%</div>

<div @click.stop  @click="resizeImage" class="innerZoomContainer">
<div  style="max-width:75vw;overflow-y: auto;width: max-content;height: 90vh;position:relative"  class="no-scrollbar ">
    <img class="imgClass" :src="imageToZoom?.src?.original" :width="resizeValue + '%'"    />
    <!-- :width="resizeValue + '%'" -->
</div>


</div>
<div  class="flex itemsC justifyC resizeButtonContainer" >
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
    gap:20px;
    /* cursor: zoom-in; */
}



.imgClass{
    display: block;
    margin:auto auto;
    /* position: absolute;
    top:50%;
    left: 50%; */
}
hidden{
    overflow: hidden;
    height: 100vh;

}
 /* img{
    cursor: zoom-in;
 } */
 

 button{
    cursor: pointer;
    font-size: 25px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: none;
 }

 .zoomSize{
    position: absolute;
    top: 30px;
    left: 30px;
    /* background: red; */
    cursor: pointer;
    color: white;
    font-size: 28px;
    font-weight: 600;
 }

</style>