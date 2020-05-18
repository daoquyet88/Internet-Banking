<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Sign in</button>
        </form>
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