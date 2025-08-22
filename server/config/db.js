import mongoose from "mongoose";

const connectDB= async ()=>{
    try {
        mongoose.connection.on('connected',()=> console.log('✅ Database Connected'))
        await mongoose.connect(`${process.env.MONGO_URI}/flickpass`)
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}

export default connectDB