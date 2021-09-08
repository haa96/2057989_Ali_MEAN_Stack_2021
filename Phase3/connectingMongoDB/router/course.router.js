// load the express module 
let express = require("express");
// This is use to create the router referene. 
// which help to route to controller function base upon the sub path.
let router = express.Router();
let courseController = require("../controller/course.controller")

router.get("/getAllcourses",courseController.getAllcoursesDetails);
router.post("/storeCourse",courseController.storedCourseInfo);
router.delete("/deleteCourse",courseController.deleteCourseInfo);
router.put("/updateCourse",courseController.updateCourseDetails);

module.exports=router;