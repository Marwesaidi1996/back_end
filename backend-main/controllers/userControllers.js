const User = require('../models/userModels')


//find or print 
const getAllUser = async (req,res) => {
    try {
        const id = req.params.id
        const rlt = await User.find()
        res.status(200).send(rlt)
    } catch (error) {
        res.status(500).send('not found',error.message)
    }
}



//Creation new
const createUser = async (req,res) => {
    try {
        const user = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password
        })

        const rslt = await user.save()
        res.status(201).send(rslt)
    } catch (error) {
        res.status(500).send('we cant add a new user ', error.message)
    }
}

//update user
const updateUser = async (req,res) => {
    try {
        const id = req.params.id
        const reslt = await User.findByIdAndUpdate(id,req.body,{new : true})
        res.status(201).send(reslt)
    } catch (error) {
        res.status(404).send('id not found',error.message)
    }
}


//delete user
const deleteUser = async (req,res)  => {
    try {
        const id = req.params.id
        const resultat = await User.findByIdAndDelete(id)
        res.send(resultat)
    } catch (error) {
        console.log(id + 'not found', error.message);
        
    }
}


module.exports = {getAllUser,createUser,updateUser,deleteUser}