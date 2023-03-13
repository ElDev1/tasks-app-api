import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const url = process.env.MONGO_URL

mongoose.connect(url)
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err))