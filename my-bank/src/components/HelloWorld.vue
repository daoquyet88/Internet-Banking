<template>
  <div class="hello">

    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center">TODO List App</h1>
          <form v-on:submit.prevent="addNewTask">
            <label for="tasknameinput">Name</label>
            <input v-model="name" id="nameinput" class="form-control" placeholder="Add New name">

            <button v-if="this.isEdit == false" type="submit" class="btn btn-success btn-block  mt-3">
              Submit
            </button>
            <button v-else type="button" v-on:click="updateTask()" class="btn btn-primary btn-block  mt-3">
              Update
            </button>
          </form>
         

          <table class="table">
            <tr v-for="(todo) in todos" v-bind:key="todo.CatID" v-bind:title="todo.CatName">
              <td class="text-left">{{todo.CatName}}</td>          
              <td class="text-right">
                <button v-on:click="editTask(todo.CatName, todo.CatID)" class=" btn btn-info ">Edit</button>
                <button v-on:click="deleteTask(todo.CatID)" class=" btn btn-danger ">Delete</button>
              </td>    
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        todos: [],
        id: '',
        name: '',
        isEdit : false
      }
    },
    mounted() {
      this.getTasks()
    },
    methods: {
      getTasks() {
        axios.get('http://localhost:3000/categories').then(
          result => {
            console.log(result.data)
            this.todos = result.data
          },
          error => {
            console.error(error)
          }
        )
      },
       addNewTask() {
        axios.post('http://localhost:3000/categories',
          { CatName: this.name }
        ).then((res) => {
          this.name = ''
          this.getTasks()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      },
      editTask(title, id) {
        this.id = id
        this.name = title
        this.isEdit = true
      },
      
      deleteTask(id) {
        axios.delete(`http://localhost:3000/categories/${id}`
        ).then((res) => {
          this.taskname = ''
          this.getTasks()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
      , updateTask() {
        axios.put(`http://localhost:3000/categories/${this.id}`,
          { CatName: this.name }
        ).then((res) => {
          this.name = ''
          this.isEdit = false
          this.getTasks()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      },
    }
  }
</script>