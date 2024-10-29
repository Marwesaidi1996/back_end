const mongoose = require('mongoose')
const CourseShema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{
        type :Date,
        default:Date.now()
    },
    isisPublished:{
        type:Boolean,
        default:false
    },
    price:Number
})


// const InstShema = new mongoose.Schema({
//     firstName:String,
//     lastName:String,
//     age:Number
// })



// module.exports = Instructor

// const Instructor = mongoose.model('Instructor', InstShema)

const Course = mongoose.model('Course', CourseShema)

module.exports = Course
