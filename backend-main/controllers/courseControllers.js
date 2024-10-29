const Course = require('../models/course')
// const Instructor = require('../models/course')


const getAllCourses = async (req,res) => {
    try {
        const courses = await Course.find()
        res.status(200).send(courses)
    } catch (error) {
        res.status(500).send('somthing went wrong ', error.message)
    }
}


//Creation new course
const createCourses = async (req,res) => {
    try {
        const course = new Course({
            name:req.body.name,
            author:req.body.author,
            tags:req.body.tags,
            price:req.body.price
        })
        const rslt = await course.save()
        res.status(201).send(rslt)
    } catch (error) {
        res.status(500).send('we could not create a new course')
    }
}

//Update courses
const updateCourse = async (req,res) => {
    try {
        const id = req.params.id
        
        const rslt = await Course.findByIdAndUpdate(id,req.body,{new:true})
        console.log(rslt);
        
        res.send(rslt)
    } catch (error) {
        console.log('there is a problem',error.message);
        
        
    }

}

//Delete course by ID
const deleteCourse = async (req,res) => {
    try {
        const id = req.params.id
        const resultat = await Course.findByIdAndDelete(id)
        res.send(resultat)
    } catch (error) {
        console.log(id + 'not found', error.message);
        
    }

}















// const getAllInstructor = async (req,res) => {
//     try {
//         const courses = await Instructor.find()
//         res.status(200).send(courses)
//     } catch (error) {
//         res.status(500).send('somthing went wrong ', error.message)
//     }
// }


module.exports= {getAllCourses,createCourses,deleteCourse,updateCourse}  