import express from 'express'

import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config()
connectDB()


const app = express()



//app.use(express.limit('30mb'))
app.use(express.json({limit:'30mb'}))
app.use(express.urlencoded({extended:true, limit:'30mb'}))
app.use(cors())

//routes middlewares
app.use('/posts',postRoutes)


const PORT = process.env.PORT || 8000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

 