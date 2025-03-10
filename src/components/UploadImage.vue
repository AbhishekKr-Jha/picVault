<script>
import Loader from './Loader.vue'

export default {
  data() {
    return {
      imageUrls: [],
      loader:false
    };
  },
  components:{
    Loader
  },
  methods: {
    async uploadImage(event) {
      const file = event.target.files[0];
    //   console.log("the evenets is",event.target.files)
      if (!file) return alert("Select an image first!");

      this.loader=true

      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=57b9253125dae760bce3b52072042e81`, {
          method: "POST",
          body: formData,
        });
this.loader=false
        const data = await response.json();
        console.log("trhe retrirned dta is",data)

        if (data.success) {
          const imageArray=JSON.parse(localStorage.getItem('imageList')) || []
          imageArray.push(data && data.data.url)
          this.imageUrls=imageArray
          localStorage.setItem('imageList',JSON.stringify(imageArray))
          event.target.value=''
        } else {
          alert("Upload failed!");
        }
      } catch (error) {
        console.error("Error uploading:", error);
      }
    },
deleteImage(id){
    let getImageList=JSON.parse(localStorage.getItem('imageList'))

    getImageList.splice(id,1)
    this.imageUrls=getImageList
    localStorage.setItem('imageList',JSON.stringify(getImageList))
}

   
  },
  created(){
    this.imageUrls=JSON.parse(localStorage.getItem('imageList'))|| []
  }
};
</script>





<template>
    <div>
      <input type="file" @change="uploadImage" accept=".jpeg, .jpg, .png">

<div style="margin: 20px 0;" class="flex wrap justifyC itemsC">
    <div v-for="(item,index) in imageUrls" :key="index" style="max-width: 400px;width:90%;position:relative;">
        <img  :src="item" width="100%"  />
        <i @click="deleteImage(index)" class="ri-delete-bin-6-line deleteIcon"></i>

    </div>
    <p v-show="imageUrls.length==0" style="margin-top:30px; text-align:center;font-size:30px;color:black;">No images Yet! Upload it. <span style="font-size:50px">📸</span></p>

    

</div>

<Loader :isLoading="loader" />

    </div>

  </template>
  

  <style >
    .deleteIcon{
        position: absolute;
        top: 10px;
        right: 10px;
        background: red;
        font-size: 22px;
        color: white;
        border-radius: 100%;
        width: 35px;height: 35px;
        display: flex;justify-content: center;align-items: center;
        /* padding: 5px; */
        cursor: pointer;
    }
    
  </style>
 