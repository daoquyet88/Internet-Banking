<template>
  <div id="app">
    <div class="container">
      <button v-on:click="title='hoc lap trinh zens vn'"> click thay doi tieu de tu app</button>
        <comp-header v-bind:title="title" v-on:changeTitleEvent="handleChangeTitle" ></comp-header>
        
          <comp-list-user
          v-on:handleDeleteUser ="handleDeleteUser"
           v-bind:listUser="listUser"></comp-list-user>
          
        <comp-footer v-bind:title="title"></comp-footer>
        
          <img src="./assets/logo.png">
          <h1>{{title}}</h1>
        <demoSlot>
        
        </demoSlot>
    </div>
  </div>
</template>

<script>
/*
props dow : truyen du lieu tu thang cho wa thang con, thang con chi dc xai, ko dc thay doi truoc tiep
event up : truyen du lieu, thong diep cho compnent cha la no muon thay doi du lieu 
-> nhiem vu component cha la nhan thong diep va thay doi data (custon event)
 */
import compHeader from './components/compHeader.vue';
import compFooter from './components/compFooter.vue';
import compListUser from './components/compListUser.vue';
import demoSlot from './components/demoSlot.vue';


export default {
  name: 'app',
  data () {
    return {
      title: 'hello  Vue.js App to word',
      listUser : [
        {id : 0,email : 'test0@gmail.com', active : 'true'},       
        {id : 1,email : 'test1@gmail.com', active : 'true'},
        {id : 2,email : 'test2@gmail.com', active : 'true'},
        {id : 3,email : 'test3@gmail.com', active : 'true'},
        {id : 4,email : 'test4@gmail.com', active : 'false'},
        {id : 5,email : 'test5@gmail.com', active : 'true'},
        {id : 6,email : 'test6@gmail.com', active : 'true'},
        {id : 7,email : 'test7@gmail.com', active : 'true'}
      ]
    }
  },
  methods : {
    handleChangeTitle(data){
      
      //this.title=" test data comp con chay ham cha-> do header doi";
      this.title=data.title;
    },
    handleDeleteUser(data){
      
      var index=-1;
      this.listUser.forEach((u , idx)=>{
        console.log("he so la =",u.id,idx,data.id);
        if(u.id === data.id){
          index=idx;
          
        }
        
       
      });
      console.log("index=",index);
      if(index!=-1){
        this.listUser.splice(index,1);
      }

    }
  },
  components : {
    compHeader,
    compFooter,
    compListUser,
    demoSlot
    
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
.container {
  max-width: 1170px;
  margin: 0;
  padding: 0;
  min-height: 3000px;
}

</style>
