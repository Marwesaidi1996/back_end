const mongoose = require('mongoose')
async function connectToDb() {
    try {
        await mongoose.connect('mongodb://localhost/school')
        console.log('we connect with succesfuly on mongodb'.green.bold);
        
    } catch (error) {
        console.log('we cant connect to mongodb'.red.bold,error.message);
        
    }
}



module.exports = connectToDb