<template>
  <div class="comp-tabs" >
     <div class="tabs-title">
         <span>{{title}} </span><ion-icon name="heart"></ion-icon>
     </div>
     <div class="tab-content">
         <slot></slot>
     </div>
  </div>
</template>

<script>


export default {
  name: 'comp-tabs',
  data () {
    return {
       
     
    }
  },
  props :{
    title : String
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.demo-slot{
    border:1 solid black;
    width: 500px;
}
.tabs-title{
    padding: 15px 30px;
    border: 2px solid #000;
    display: flex;
    justify-content: space-between;
}
.tabs-header{
    margin: 0;
    padding:0 ;
    list-style-type: none;
    display: flex;

}
.tabs-header li{
    padding: 8px ;
    background-color: aliceblue;
}
.tabs-header li:hover{
    
    color: red;
}
.tab-content {
    border: 2px solid forestgreen;
}
</style>
