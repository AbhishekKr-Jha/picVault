


<script >   
export default{
    name:'Header',
    data(){
        return{
            listData:[
                {
                    title: 'Grid Layout ',
                    iconClass: 'ri-grid-fill ',
                    viewType:0

                },
                {
                    title: ' List Layout ',
                    iconClass: ' ri-list-check',
                    viewType:1


                },
                {
                    title: 'Home ',
                    iconClass: 'ri-home-2-line',
                    viewType:0

                },
                {
                    title: ' Slider',
                    iconClass: 'ri-contract-left-fill ',
                    viewType:2


                },
                {
                    title: ' Image Upload',
                    iconClass: ' ri-upload-cloud-line',
                    viewType:3

                }
            ]
        }
    }
}

</script>


<template>


<div class="headerContainer" >  
    
    <span @click="$emit('change_layout_btn_clicked',item.viewType)" v-for="item in listData" :key="item.title" class="menuItems active" :title="item.title">
        <i :class="item.iconClass"></i>
    </span>


</div>


</template>
