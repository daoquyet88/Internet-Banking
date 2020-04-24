<template>
  <div >
    
    <h1>{{ title }}</h1><br>

    <button v-on:click="changeTitleHeader">clcik thay doi tieu de tu header</button>
    
  </div>
</template>

<script>
export default {
  name: 'comp-header',
  props :{
    title : String
  },
  data () {
    return {
     
    }
  },
  methods : {
    changeTitleHeader(e){
      // khong dc thay doi truoc tiep-> phai truyen khai bao ra ben ngoai-> kich hoat su kien changeTitleEvent trong compheader.vue
      var data = {title :'test->data tu comp header'};
      this.$emit('changeTitleEvent',data);
      //this.title="aaaaaaaaaaaa";
      //console.log(this);
    }
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
</style>
