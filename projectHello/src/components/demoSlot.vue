<template>
  <div class="demo-slot" >
      <comptabs title="tieu de cua tabs slot">
          <ul class="tabs-header">
              <li v-for="(item, index) in tabsHeader" :key="index"
                    v-on:click="setAncitve(index)"
              > {{item.text}}</li>
          </ul>
      </comptabs>
      <div class="tab-content-tab1" v-if="tabActive === 0">
          <p>Lorem tab 1 ipsum dolor sit amet consectetur adipisicing elit. Minus a rem praesentium enim totam reiciendis aut modi excepturi, similique aspernatur cumque labore! Consequatur libero officiis voluptates, pariatur alias laudantium ipsum?</p>

      </div>
      <div class="tab-content-tab2"  v-if="tabActive === 1">
          <p>Lorem tab2 ipsum dolor sit amet consectetur adipisicing elit. Minus a rem praesentium enim totam reiciendis aut modi excepturi, similique aspernatur cumque labore! Consequatur libero officiis voluptates, pariatur alias laudantium ipsum?</p>
          
      </div>
      <div class="tab-content-tab3 "  v-if="tabActive === 2"> 
          <p>Lorem tab 3 ipsum dolor sit amet consectetur adipisicing elit. Minus a rem praesentium enim totam reiciendis aut modi excepturi, similique aspernatur cumque labore! Consequatur libero officiis voluptates, pariatur alias laudantium ipsum?</p>
          
      </div>
  </div>
</template>

<script>

import comptabs  from './compTabs.vue';
export default {
  name: 'demo-slot',
  data () {
    return {
      tabsHeader : [
            {text : 'tab1'},
            {text : 'tab2'},
            {text : 'tab3'}
        ],
        tabActive : 0,
    }
  },
  props :{
    
  },
  methods : {
      setAncitve(index){
          this.tabActive=index;
      }
  },
  components : {
    comptabs 

}
  
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
</style>
