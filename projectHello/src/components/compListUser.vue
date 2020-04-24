<template>
  <div class="list-user" >
   <compUser
     v-for="user in  listUser "
     v-bind:key="user.id"
     v-bind:user="user"
     v-on:deleteListUser="deleteListUser"
   ></compUser>
    
  </div>
</template>

<script>
 import compUser from './compUser.vue';

export default {
 
  name: 'comp-list-user',
  props : {
    listUser : {
      type: Array,
      default : []
    }
  },
  data () {
    return {
      text: 'footer  Vue.js App'
    }
  },
  methods : {
    deleteListUser(data){
      
      this.$emit('handleDeleteUser',data);
    }
  },

  components : {
   
    compUser
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
.list-user{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 10px;
}
.list-user .user {
  padding: 10px;
  border: 1px solid black;
  width:30%;
}
</style>
