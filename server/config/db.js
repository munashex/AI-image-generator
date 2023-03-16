import mongoose from 'mongoose'  



const connectDb = async() => {
    try {
    mongoose.connect(process.env.MONGO_URI) 
    console.log('connected to database')
    }catch(err) {
        console.log(err)
        process.exit(1)
    }
} 


export default connectDb