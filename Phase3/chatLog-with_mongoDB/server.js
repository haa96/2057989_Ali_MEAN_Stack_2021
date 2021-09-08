let express = require("express")    //load the express module
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerChat= require("./router/chat.router");
const { request, response } = require("express");

let app = express();    //create the reference of express module

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//then load the express-ws module and create the reference of express-ws with the help of express reference using IIFE
let ws = require("express-ws")(app);
//url database 
let url = "mongodb://localhost:27017/chat"
mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));

//http://localhost:9090
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.use("/api/chat",routerChat);
app.ws("/", (socket,request)=>{     
    console.log("Client Connected");

    socket.on("message", msg=>{    //receive message from client application.
        console.log("Client say: "+ msg);
        socket.send(Date());
    })

    socket.send("Server: You're successfully connected");       //This is used to send data to the client application
    // socket.send(Date()); 
})
app.listen(9090, ()=>console.log("Server running on port #9090"));