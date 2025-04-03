<script>
 import GridView from  './components/GridView.vue'
 import ZoomView from  './components/ZoomView.vue'
 import UploadImage from  './components/UploadImage.vue'
 import InputBox from  './components/InputBox.vue'
 import SliderView from  './components/SliderView.vue'
 import Loader from  './components/Loader.vue'
import Header from './components/Header.vue'
//  import CustomCursor from  './components/CustomCursor.vue'



export default {

  name: "App",
  data() {
    return {
      imageList: [],
      toggleZoom:false,
      zoomImageInfo:null,
      showMenuOption:false,
      imageViewType:JSON.parse(localStorage.getItem('thePage')) || 0,
    loader:true,
    isInputActive:false,
    cursorX: 0,
    cursorY: 0
    
    };
  },
  components: {
    Header,
    GridView,
    ZoomView,
    UploadImage,
    InputBox,
    SliderView,
    Loader,
    // CustomCursor
  },
  methods:{
    updateCursor(event) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
    },
    async fetchImageList(query="dragons"){

this.loader=true

      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15`, {
        headers: {
            Authorization: "eqLtGNKRE2qbMsqETmnrVI5NqRcUIG7bsf6UYUxASOiPNXLSyDLC0pkG"
        }
    });
    this.loader=false
if(response.status!==200) {
alert("Image Fetching Error")
return []
}

    const data = await response.json();
    this.toggleZoom=false  
    console.log(data)
    return data
    },
    zoomImageFunc(zoomImageDetails){
      console.log("image is clicked")
this.zoomImageInfo=zoomImageDetails
this.toggleZoom=true
    },
    showMenu(){
      this.showMenuOption=!this.showMenuOption
    },
    imageDisplayTypeFunc(viewType=0){
this.imageViewType=viewType
localStorage.setItem('thePage',JSON.parse(viewType))
this.showMenu()
console.log("the view type is now",viewType)
    },
   async handleImageInput(val){
    console.log("thrbutton id clicked",val)
      this.imageList=await this.fetchImageList(val)
      this.imageViewType=0
    }
  },
  async created(){
    console.log("ok dom is crated")
       this.imageList=await this.fetchImageList()
      //  this.$toast.success('You did it!');
  }
};
</script>
  
<template>
  <div @mousemove="updateCursor" class="container" :style="{ overflow: toggleZoom ? 'hidden' : 'auto'}" style="padding-top: 20px;">
    <!-- <CustomCursor /> -->
    <!-- <div class="customCursor" :style="{ top: cursorY + 'px', left: cursorX + 'px' }"></div> -->
    
<div  v-show="!loader" style="width:100%;">

  <div style="position: absolute; top: 10px;left:5px;z-index: 97;" class="header">
       <img @click="imageDisplayTypeFunc(0)" style="cursor: pointer;" class="logo" src="./components/icons/image.png" width="170px"  /> 
          </div>

<Header @change_layout_btn_clicked="imageDisplayTypeFunc"/>
  
<div style="margin-top: 10px;margin: 0 auto;" class="w100  flex justifyC itemsC">
<GridView :imageData="imageList"  :viewType="imageViewType"  @image-clicked="zoomImageFunc"  />
</div>
<!-- @click="toggleZoom=false" -->
<div v-show="toggleZoom && !isInputActive"  class="zoomContainer" style="z-index: 100;">
<ZoomView :imageToZoom="zoomImageInfo" @cancel-image-zoom="toggleZoom=false" :isVisible="isInputActive" />
</div>

<div v-show="toggleZoom && isInputActive"  class="zoomContainer" style="z-index: 100;">
<InputBox  @image-input-value="handleImageInput" @close-input="toggleZoom=false,isInputActive=false" :isVisible="isInputActive"/>
</div>

<div @click="toggleZoom=true,isInputActive=true" class="searchIcon flex justifyC itemsC">
  <i class="ri-search-line"></i>
</div>

<SliderView   :imageData="imageList"  :viewType="imageViewType" />


<div v-show="imageViewType==3" class="">
  <UploadImage />
</div>



    <!-- <div @click="showMenu" class="menu">
    <span v-show="!showMenuOption">Menu</span>
    <span v-show="showMenuOption"><i  class="ri-close-large-line" /></span>
    </div> -->


    <!-- <div @click="showMenu" class="menu">{{ !showMenuOption?"Menu": <i @click="closeZoomImage" class="ri-close-large-line"></i> }}</div> -->




    <!-- <div :style="{right:showMenuOption?'10%':'-350px',}" class="menuBox flex flexC justifyC itemsC" :class="!showMenuOption && 'menuBox2'">
<div @click="imageDisplayTypeFunc(0)" :class="['menuItem',imageViewType==0?'selectedItem':'unSelectedItem']">Grid</div>
<div @click="imageDisplayTypeFunc(1)" :class="['menuItem',imageViewType==1?'selectedItem':'unSelectedItem']">List</div>
<div @click="imageDisplayTypeFunc(2)" :class="['menuItem',imageViewType==2?'selectedItem':'unSelectedItem']">Slider</div>
<div @click="imageDisplayTypeFunc(3)" :class="['menuItem',imageViewType==3?'selectedItem':'unSelectedItem']">Upload</div>
    </div> -->

<!-- <InputBox /> -->

  </div>
  <div v-show="loader" class="w100">
    <Loader />   
  </div>
</div>
</template>

<style>
.menu {
  position: absolute;
  top: 10px; 
  right: 8%;
  background-color: black;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.menuV{
  width: 250px;
  display: flex;
}
.menuH{
  width: 0px;
  display: none;
}
.menu:hover {
  color: black;
  background: white;
  border: 1px solid black;
}

.menuBox {
  position: absolute;
  top: 100px;
  /* right: -100%; */ 
  width: 250px; 
border: 2px solid white; 
background: black;
padding:5px;
transition: all ease-in-out 0.5s;
border-radius: 8px;
overflow: hidden;
}
.menuItem{
  width:100%;
  text-align: center;
  padding:  15px;
  margin:3px ;
  border: 1px solid white;
  background: transparent;
  color:white;
  cursor: pointer;
  border-radius: 8px;
}
.menuItem:hover{
  color:black;
  background: white;
}
.unSelectedItem{
  color:white;
  background: black;
}
.selectedItem{
  color:black;
  background: white;
}

</style>
