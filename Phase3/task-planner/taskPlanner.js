let http = require("http");
let url = require("url");
let tasks = []

let indexPage = `
            <html>
                    <head>

                    </head>
                    <body>
                    <h2>Task Planner</h2>
                    <ul>
                        <li><a href="addTask">Add Task</a> </li>
                        <li><a href="deleteTask">Delete Task</a> </li>
                        <li><a href="listTask">List Tasks</a> </li>
                    </ul>
                    
                    </body>
            </html>
`
let deleteTask = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Delete Task</h2>
    <form action="deleteForm">
        <label>Task Id</label>
        <input type="text" name="taskId"/><br/>
        <input type="submit" value="submit"/>
       <input type="reset" value="reset"/> <br/>
    </form>
    <a href="indexPage">Back</a>
</body>
</html> 
`

let addTask=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Add Task</h2>
    <form action="addForm">
        <label>Emp Id</label>
        <input type="text" name="empId"/><br/>
        <label>Task Id</label>
        <input type="text" name="taskId"/><br/>
        <label>Task</label>
        <input type="text" name="task"/><br/>
        <label>Deadline</label>
        <input type="date" name="deadline"/><br/>
        <input type="submit" value="submit"/>
       <input type="reset" value="reset"/> 
    </form>
    <a href="indexPage">Back</a>
</body>
</html>
`
let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.path == "/deleteTask"){
            response.write(deleteTask);
        }else if(urlInfo.pathname == "/deleteForm"){
                let task = urlInfo.query;
                let result = tasks.find(l=>l.taskId == task.taskId);
                if(result != undefined){
                        tasks.pop(result);
                        response.write("Task is deleted!!");
                }else {
                        response.write("Task doesn't exist!!");
                }
        }else if(urlInfo.path =="/addTask"){
                response.write(addTask);
        }else if(urlInfo.pathname == "/addForm"){
                let task = urlInfo.query;
                let result = tasks.find(l=>l.taskId == task.taskId);
                response.writeHead(200,{"content-type":"text/html"});
                if(result == undefined){
                    tasks.push(task);  
                    response.write("Task Added Successfully!, Array lenth: "+tasks.length);
                    response.write(indexPage);            
                    }else {
                        response.write("Task Id must be unique!");     
                        response.write(addTask); 
                }
        }
        else if(urlInfo.path =="/listTask"){
            let tableDisplay = "<table border=1><tr><th>Emp Id</th><th>Task Id</th><th>Task</th><th>Date</th></tr>";
            let i=0;
            let cont = "";
            
             while(i<tasks.length){
             cont += "<tr><td>"+tasks[i].empId+"</td><td>"+tasks[i].taskId+" </td><td>"+tasks[i].task+" </td><td>"+tasks[i].deadline+"</td></tr>"
             i++;
             }
            let end = "</table>";
            let total = tableDisplay+cont+end;

            response.write(total);
            response.write(`<a href="indexPage">Back</a>`)
    }
        else {
            response.write(indexPage);  
        }
    }
    
    response.end();

})

server.listen(9090,()=>console.log("Server running on port number 9090"))