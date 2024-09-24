import mongoose from 'mongoose';
export const connectDB = () =>{
    const MONGO_URL = process.env.MONGO_URL;
    mongoose.connect(`${MONGO_URL}`)
    .then(()=>console.log("Database Conneted"))
    .catch((err)=>console.log(err))
};