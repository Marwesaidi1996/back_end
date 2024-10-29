// creation serveur 
require('dotenv').config()
const Course = require('./models/course')
const connectToDb = require('./Db/index')


const userRoute = require('./routes/userRoutes')

const User = require('./models/userModels')

const mongoose = require('mongoose')

const express = require('express')

const colors = require('colors')

const app = express()

app.use(express.json())

const courseRoute = require('./routes/courseRoutes')

app.use('/api/courses',courseRoute)



app.use('/api/users',userRoute)


connectToDb()

async function createdoc(){

    await Course.create(
        [
          {"tags":["express","backend"],"date":"2018-01-24T21:42:27.388Z","name":"Express.js Course","author":"Mosh","isPublished":true,"price":10},
          {"tags":["node","backend"],"date":"2018-01-24T21:42:47.912Z","name":"Node.js Course","author":"Mosh","isPublished":true,"price":20},
          {"tags":["aspnet","backend"],"date":"2018-01-24T21:42:59.605Z","name":"ASP.NET MVC Course","author":"Mosh","isPublished":true,"price":15},
          {"tags":["react","frontend"],"date":"2018-01-24T21:43:21.589Z","name":"React Course","author":"Mosh","isPublished":false},
          {"tags":["node","backend"],"date":"2018-01-24T21:44:01.075Z","name":"Node.js Course by Jack","author":"Jack","isPublished":true,"price":12},
          {"tags":["node","backend"],"date":"2018-01-24T21:47:53.128Z","name":"Node.js Course by Mary","author":"Mary","isPublished":false,"price":12},
          {"tags":["angular","frontend"],"date":"2018-01-24T21:56:15.353Z","name":"Angular Course","author":"Mosh","isPublished":true,"price":15}
        ]
        
        )
}



async function CreateUsers() {
    await User.create(
        [
            {"firstName":"moslem", "lastName":"ajra","email":"a@gmail.con","password":"1234RRF?K"},
            {"firstName":"amine", "lastName":"bouhoula","email":"abc23@gmail.con","password":"40"},
            {"firstName":"kamel", "lastName":"hafsi","email":"afj@hotmail.con","password":"ADFGG55"}
        
        ]
        
    )
}



// createdoc()
// CreateUsers()

const port = process.env.PORT || 4000  

app.listen(port, ()=> {
    console.log("server is running on " + port + " ...".green.bold);
    
})