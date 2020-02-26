var express = require("express");
// goi modul ramdom
var  myRamdom= require('./public/myRamdom.js');
 
var app = express();
 
app.use(express.static("public"));
 
app.set("view engine", "ejs");
app.set("views", "./views");
 
app.listen(3000);
 
app.get("/", function(request, response)  {
    
    response.render("homePage");
});
 
app.get("/test", function(request, response)  {
    
    response.render("testPage");
});
