import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import booksRoute from './routes/books.routes.js'

const app = express()

app.use(cors(
    {
        origin: 'http://localhost:5173',
        method: ['GET', 'POST', 'PUT', 'DELETE'],
        allowHeaders: ['Content-Type']
    }
))

dotenv.config()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`SERVER HAS STARTED ON THE PORT : ${PORT}`)
})

app.use('/api/books', booksRoute)

mongoose.connect(process.env.mongoDBURL)
    .then(() => {
        console.log("DATABASE CONNECTED !!!");
    })

app.listen(process.env.PORT, () => {
    console.log(`SERVER HAS STARTED ON THE PORT : ${process.env.PORT}`);
})


