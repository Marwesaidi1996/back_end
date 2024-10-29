const express = require('express')
const router = express.Router()
const User = require('../models/userModels')

const {getAllUser,createUser,updateUser,deleteUser} = require('../controllers/userControllers')


router.get('/',getAllUser)
router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)




module.exports = router