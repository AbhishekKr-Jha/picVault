
<script>   
export default{
    name:'Loader',
    props:{
        isLoading:Boolean
    }
}

</script>


<template>
    
    <div class="loader" :style="{top:isLoading?'100px':'-100px'}">
    Uploading in progress...
</div>

</template>


<style>
.loader{
     position:absolute;
     /* top:100px; */
     left: 50%;
     transform: translateX(-50%);
font-size: 20px;
padding: 10px 20px;
background: blue;
color: white;
transform: all linear 0.4s;
     }
</style>