import mongoose from "mongoose";
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    }
    catch(error){
        console.error(`MongoDB Connection Error: ${error.message}`);
    throw error;
    }
}
export default connectDb;