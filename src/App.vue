<script>
 import GridView from  './components/GridView.vue'
 import ZoomView from  './components/ZoomView.vue'
 import UploadImage from  './components/UploadImage.vue'
 import InputBox from  './components/InputBox.vue'


export default {

  name: "App",
  data() {
    return {
      imageList: [],
      toggleZoom:false,
      zoomImageInfo:null,
      showMenuOption:false,
      imageViewType:JSON.parse(localStorage.getItem('thePage')) || 0,
    
    };
  },
  components: {
    GridView,
    ZoomView,
    UploadImage,
    InputBox
  },
  methods:{
    async fetchImageList(query="lion"){
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10`, {
        headers: {
            Authorization: "eqLtGNKRE2qbMsqETmnrVI5NqRcUIG7bsf6UYUxASOiPNXLSyDLC0pkG"
        }
    });
if(response.status!==200) {
alert("Image Fetching Error")
return []
}

    const data = await response.json();
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
    }
  },
  async created(){
    // console.log("ok dom is crated")
       this.imageList=await this.fetchImageList()
  }
};
</script>

<template>
  <div class="container" :style="{ overflow: toggleZoom ? 'hidden' : 'auto'}">
    <div style="margin: 10px 0;" class="">
      <h1>PicVault</h1>
    </div>


<div style="margin-top: 10px;" class="">
<GridView :imageData="imageList"  :viewType="imageViewType"  @image-clicked="zoomImageFunc"  />
</div>
<!-- @click="toggleZoom=false" -->
<div v-show="toggleZoom"  class="zoomContainer" style="z-index: 100;">
<ZoomView :imageToZoom="zoomImageInfo" @cancel-image-zoom="toggleZoom=false" />
</div>


<div v-show="imageViewType==3" class="">
  <UploadImage />
</div>

    <div @click="showMenu" class="menu">
    <span v-show="!showMenuOption">Menu</span>
    <span v-show="showMenuOption"><i  class="ri-close-large-line" /></span>
    </div>
    <!-- <div @click="showMenu" class="menu">{{ !showMenuOption?"Menu": <i @click="closeZoomImage" class="ri-close-large-line"></i> }}</div> -->




    <div :style="{right:showMenuOption?'10%':'-350px',}" class="menuBox flex flexC justifyC itemsC" :class="!showMenuOption && 'menuBox2'">
<div @click="imageDisplayTypeFunc(0)" :class="['menuItem',imageViewType==0?'selectedItem':'unSelectedItem']">Grid</div>
<div @click="imageDisplayTypeFunc(1)" :class="['menuItem',imageViewType==1?'selectedItem':'unSelectedItem']">List</div>
<div @click="imageDisplayTypeFunc(2)" :class="['menuItem',imageViewType==2?'selectedItem':'unSelectedItem']">Slider</div>
<div @click="imageDisplayTypeFunc(3)" :class="['menuItem',imageViewType==3?'selectedItem':'unSelectedItem']">Upload</div>
    </div>

<!-- <InputBox /> -->

  </div>
</template>

<style>
.menu {
  position: absolute;
  top: 30px; 
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
