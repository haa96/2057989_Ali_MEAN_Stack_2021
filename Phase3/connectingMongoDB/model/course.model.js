// load the module 
let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let courseSchema = mongoose.Schema({
    _id : Number,
    cname : String,
    desc : String,
    amount:Number
});

// using scheam creating model 
//1st parameter collection name 
// 2nd parameter schema reference. 
let courseModel = mongoose.model("Courses",courseSchema);

module.exports=courseModel;    // we can import using require.
                                // in anothe file 