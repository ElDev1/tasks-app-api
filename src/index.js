import app from './app'
import * as dotenv from 'dotenv'
import './database' 

dotenv.config()

const PORT = process.env.PORT 
app.listen(PORT)

console.log(`server listen on port ${PORT}`)