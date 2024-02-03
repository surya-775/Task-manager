const express = require('express')
const app = express()
const tasks = require('./routes/tasks');
const connectdb =  require('./db/connect.js')
require('dotenv').config()
const notfound = require('./middleware/not-found.js')
const errorHandler = require('./middleware/errorhandler.js')


//middleware

app.use(express.static('./public'))
app.use(express.json())



app.use('/api/v1/tasks',tasks)

app.use(notfound)

app.use(errorHandler)

const port = process.env.PORT || 3000;

const start = async() => {
    try{
       await connectdb(process.env.MONGO_URI)
       app.listen(port, console.log('connected!'))
    }
    
    catch(error){
       console.log(error)
    }
}

start()

