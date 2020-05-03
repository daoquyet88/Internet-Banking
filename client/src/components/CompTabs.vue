<template>
    <div class="comp-tabs">
        <div class="comp-title">
            <span>  {{title}}</span>         
            <ion-icon name="heart"></ion-icon>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>

        
    </div>
</template>

<script>
    export default {
        name : 'comp-tab',
        data() {
            return {
                
            }
        },
    
        props : {
            title : String
        }
    }
</script>

<style >
.comp-title{
    border: 20x solid #000;
    display: flex;
    justify-content:space-between;
    padding: 15px 30px;
}
.tabsHeader{
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}
.tabsHeader li {
    padding: 10px;
    background-color:#ccc;
}
.tabsHeader li:hover {
    
   color:#fff;
   background-color: #333;
}
.tabs-content{
    border: 2px solid blue;
    padding: 2px;

}
.tabs-content{
    padding: 10px;
    border: 2px solid blue;
}

</style>