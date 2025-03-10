

<template>
    
<div class="inputContainer">
    <div class="inputSection">
        <input type="text"   />
        <i class="ri-search-2-line"></i>
    </div>
</div>
</template>


<style scoped>
.inputContainer{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0px;
    padding: 20px 40px;
    background: red;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    border-radius: 8px;
    width: 85%;
    max-width: 600px;
    outline: none;
    border: none;
    padding: 8px 12px;
    margin-right: 6px;
}
.inputSection{

}
i{
    font-size: 20px;
}
</style>