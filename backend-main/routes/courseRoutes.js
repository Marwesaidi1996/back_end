const express = require('express')
const router = express.Router()

const {getAllCourses,createCourses,deleteCourse,updateCourse} = require('../controllers/courseControllers')

router.get('/',getAllCourses)
// router.getById('/',)

router.post('/',createCourses)
router.put('/:id',updateCourse)
router.delete('/:id',deleteCourse)



module.exports = router