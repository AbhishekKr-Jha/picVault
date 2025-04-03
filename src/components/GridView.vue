<script>
export default {
  name: "GridView",
  props: {
    imageData: Object,
    viewType: Number,
  },
  // data(){
  //     return{
  //         sliderImageValue:0
  //     }
  // },
  components: {
    //  ZoomView
  },
  methods: {
    imageClicked(imgItem) {
      this.$emit("image-clicked", imgItem);
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
  created() {
    console.log("the image type value", this.viewType);
    this.sliderImageValue = 0;
  },
  updated() {
    console.log("the props are upadted with type value", this.viewType);
    // this.sliderImageValue=Math.floor(this.imageData?.photos.length/2)
    // this.sliderImageValue=0
  },
};
</script>

<template>
  <div
    class="gridImageContainer"
    :style="{
      display: viewType == 1 ? 'flex' : 'block',
      flexDirection: viewType == 1 ? 'column' : 'row',
    }"
  >
    <div
      class="imageWrapper"
      v-show="viewType !== 2 && viewType !== 3"
      v-for="ele in imageData?.photos"
      :key="ele?.id"
      @click="imageClicked(ele)"
    >
      <img
        class="image"
        :src="ele?.src?.original"
        style="padding: 2px 0px; cursor: pointer"
      />
    </div>
  </div>
</template>

<style>
.gridImageContainer {
  column-width: 250px;
  column-gap: 5px;
}


.imageWrapper {
  width: 100%;
  position: relative;
  border-radius: 8px;
  display: inline-block;
  overflow: hidden;
  margin-bottom: -3px;
}

.image {
  max-width: 400px;
  width: 100%;
  display: block;
  transition: transform 0.3s ease-in;
  overflow: hidden;
}

.imageWrapper:hover .image {
  transform: scale(1.2);
}

/* .imageOverlay {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: bottom 0.4s ease-in-out;
} */

.imageWrapper:hover .imageOverlay {
  bottom: 0;
}


@media (max-width: 800px) {
    .gridImageContainer {
      column-width: 200px; 
    }
  }

  @media (max-width: 620px) {
    .gridImageContainer {
      column-width: 150px;
    }
  }
  @media (max-width: 500px) {
    .gridImageContainer {
      column-width: 100px;
    }
  }
</style>
