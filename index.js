require('dotenv').config();
const mongoString = process.env.DATABASE_URL
const express = require('express');
const mongoose = require('mongoose');


mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


const app = express();



app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

// app.get('/',(request,response)=>{


//     response.send('Welcome To API');
// })

app.listen(3000, () => {

    
    console.log(`Server Started at ${3000}`)
})