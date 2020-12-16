import mongoose from 'mongoose'

const connectDB=async () => {
try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    console.log(`MongoDb Connected:${conn.connection.host}`)
} catch(error){
    console.error(`Error:${error.message}`)
    process.exit(1)
}

}
mongoose.set('useFindAndModify', false);

export default connectDB;