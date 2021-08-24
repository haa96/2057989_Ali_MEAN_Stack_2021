let fs = require("fs");
let readline= require("readline-sync");

let inputFname = readline.question("Enter First Name: ")
let inputLname = readline.question("Enter Last Name: ");
let inputGender = readline.question("Enter Gender: ");
let inputEmail = readline.questionEMail("Enter Email: ");

let inputDate = new Date();
let records = [];


let rec = {fname:inputFname,lname:inputLname,gender:inputGender,email:inputEmail, date:inputDate};
records.push(rec);
let recString = JSON.stringify(records);   
fs.writeFileSync("records.json",recString,{flag:"a+"});


// let records = JSON.parse(fs.readFileSync("records.json").toString());
