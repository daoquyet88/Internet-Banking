
<template>
  <div class="center-container">
    <!--header-->
    <div class="header-w3l">
      <h1>Online Login Form</h1>
    </div>
    <!--//header-->
    <div class="main-content-agile">
      <div class="sub-main-w3">
        <div class="wthree-pro">
          <h2>Login Quick</h2>
        </div>
        <form action="#" method="post">
          <div class="pom-agile">
            <input placeholder="E-mail" name="Name" class="user" type="email" required />
            <span class="icon1">
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>
          <div class="pom-agile">
            <input placeholder="Password" name="Password" class="pass" type="password" required />
            <span class="icon2">
              <i class="fa fa-unlock" aria-hidden="true"></i>
            </span>
          </div>
          <div class="sub-w3l">
            <h6>
              <a href="#">Forgot Password?</a>
            </h6>
            <div class="right-w3l">
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--//main-->
    <!--footer-->
    <div class="footer">
      <p>
        &copy; Trang Dang nhap Ngan Hang wWw | Design by Team wWw
        
      </p>
    </div>
    <!--//footer-->
  </div>
</template>
<style>
body {
  background: url(../assets/1.jpg) no-repeat center top;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-attachment: fixed;
  background-position: center;
  text-align: center;
  font-family: "Open Sans", sans-serif;
}
.header-w3l {
  padding-top: 2em;
}
.header-w3l h1 {
  font-size: 3em;
  color: white;
  letter-spacing: 8px;
  font-weight: 500;
  font-family: "Dosis", sans-serif;
  text-transform: uppercase;
  text-shadow: 5px 3px 5px #101010;
}
/*--//header--*/

/*--main--*/
.wthree-pro h2 {
  font-size: 1.2em;
  color: #fff;
  letter-spacing: 4px;
  margin-bottom: 1.5em;
  text-transform: uppercase;
}
.sub-main-w3 input[type="email"],
.sub-main-w3 input[type="password"] {
  outline: none;
  font-size: 0.9em;
  padding: 1em 3em 1em 1em;
  border: none;
  margin-bottom: 0.3em;
  background: rgba(255, 255, 255, 0.85);
  width: 82%;
  color: #000;
  border-radius: 30px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 1px;
}
.sub-main-w3 {
  width: 26%;
  margin: 10em auto 12em;
}
.sub-w3l h6 a {
  font-size: 0.9em;
  color: #fff;
  letter-spacing: 1px;
  text-align: right;
  display: inherit;
}
.sub-w3l {
  margin-top: 1em;
}
.right-w3l {
  margin-top: 2em;
}
.pom-agile {
  position: relative;
}
input.pass {
  margin-top: 0.7em;
}
span.icon1,
span.icon2 {
  color: #ea2858;
  font-size: 1.1em;
  position: absolute;
  right: 6%;
}
span.icon1 {
  top: 23%;
}
span.icon2 {
  top: 34%;
}
.sub-main-w3 input[type="submit"] {
  color: white;
  background: #ea2858;
  border: none;
  padding: 0.7em 0;
  outline: none;
  width: 44%;
  font-size: 1em;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
  border-radius: 30px;
}
.sub-main-w3 input[type="submit"]:hover {
  background: #fff;
  color: black;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
/*--//main--*/

/*--footer--*/
.footer p {
  font-size: 0.9em;
  color: white;
  letter-spacing: 2px;
}
.footer p a {
  color: #fff;
}
.footer p a:hover {
  color: #ea2858;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
      id: "",
      taskname: "",
      isEdit: false
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      axios.get("/api/tasks").then(
        result => {
          console.log(result.data);
          this.todos = result.data;
        },
        error => {
          console.error(error);
        }
      );
    },
    addNewTask() {
      axios
        .post("/api/task", { task_name: this.taskname })
        .then(res => {
          this.taskname = "";
          this.getTasks();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    editTask(title, id) {
      this.id = id;
      this.taskname = title;
      this.isEdit = true;
    },
    updateTask() {
      axios
        .put(`/api/task/${this.id}`, { task_name: this.taskname })
        .then(res => {
          this.taskname = "";
          this.isEdit = false;
          this.getTasks();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteTask(id) {
      axios
        .delete(`/api/task/${id}`)
        .then(res => {
          this.taskname = "";
          this.getTasks();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>