// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerCourse= require("./router/course.router");
const { request, response } = require("express");

// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/courses"

// connect the database 
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

// middleware which help to match main path and pass the
// request to router file. 
// http://localhost:9090/api/product/getAllProducts     : Get 
// http://localhost:9090/api/product/storeProduct       : Post 
// http://localhost:9090/api/product/deleteProduct       : Delete 
// http://localhost:9090/api/product/updateProduct       : Update 

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html")
})
app.use(express.static('pages'))
app.use("/api/course",routerCourse);
// app.use("/api/order",routerOrder);
// app.use("/api/login",routerLogin);
app.listen(9090,()=>console.log("Server running on port number 9090"))