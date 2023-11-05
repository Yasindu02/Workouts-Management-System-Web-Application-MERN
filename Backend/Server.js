require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/Workouts')
const userRoutes = require('./routes/User')
const app = express()
const cors = require('cors');
app.use(
    cors({
        origin: "*"
    })
)



// mongoose.connect('mongodb://localhost:27017/MERN1');

//middleware
app.use(express.json())

app.use((req, res, next ) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen the requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to Db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error);
    })


// listen for requests
/*
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
*/

