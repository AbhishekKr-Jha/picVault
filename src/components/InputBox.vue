
<script> 
export default {
    name:'InputBox',
    props:{
        isVisible:Boolean
    },
    data() {
    return {
    imageInputValue:'',
    };
},
methods:{
    submitInputValue(){
        // if(this.imageInputValue.trim().length==0) {
        //     alert('Please fil the field')
        //     return
        // }
        this.$emit('image-input-value',this.imageInputValue)
    }
}
}

</script>

<template>
   
      <i @click="$emit('close-input')" class="ri-close-large-line closeIconBtn"></i>
<!-- <div class="flex justifyC itemsC"> -->
    <div class="w100 flex flexC justifyC itemsC">
        <input v-model="imageInputValue" type="text" placeholder="Search Image"  />
        <button v-show="imageInputValue.trim().length!==0" @click="submitInputValue" type="button" >Serach</button>
        

    </div>
  
<!-- </div> -->
</template>


<style scoped>
/* .zoomContainer{
    width: 100%;
    height:100vh;
    position: absolute;
    top: 50%;
    left: 0px;
    padding: 20px 40px;
    background: red;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
} */
input{
    border-radius: 8px;
    width: 85%;
    max-width: 600px;
    outline: none;
    border: none;
    padding: 13px 12px;
    margin-right: 6px;
    max-width: 400px;
    margin-bottom: 45px;
    font-size: 14px;
    font-weight: 600;
}
.inputSection{

}
i{
    font-size: 20px;
}

button{
    padding: 11px 30px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
}
</style>