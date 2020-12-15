import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/postRoutes.js'


const app = express()



//app.use(express.limit('30mb'))
app.use(express.json({limit:'30mb'}))
app.use(express.urlencoded({extended:true, limit:'30mb'}))
app.use(cors())

//routes middlewares
app.use('/posts',postRoutes)

//connect to mongodb
const CONNECTION_URL='mongodb+srv://traveldiary:traveldiary123@cluster0.kljum.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {   useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true }) .then(()=> app.listen(PORT,()=> console.log(`Server is running on port: ${PORT}`) ) )
    .catch((error)=>console.log(error.message) )

    mongoose.set('useFindAndModify', false)