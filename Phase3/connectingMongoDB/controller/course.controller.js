// load the model file  ie user-defined module like a import in ts file 
let courseModel = require("../model/course.model");

let getAllcoursesDetails = (request,response)=> {
    
    courseModel.find({},(err,data)=> {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}

let storedCourseInfo = (request,response)=> {
    let course = request.body;

    courseModel.insertMany(course,(err,result)=> {
        if(!err){
                response.send("Record stored successfully")
        }else {
                response.send(err);
        }
    })
}

let deleteCourseInfo = (request,response)=> {
    let pid = request.body;
    courseModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}

let updateCourseDetails = (request,response)=> {
    let course = request.body;
    courseModel.updateOne({_id:course._id},{$set:{amount:course.amount}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}

module.exports= {getAllcoursesDetails,storedCourseInfo,deleteCourseInfo,updateCourseDetails}