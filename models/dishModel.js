import mongoose from "mongoose";

const dishesShcema  = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image: {
         type: String,
         required: false 
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true   
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});
const Dishes = mongoose.model('Dishes',dishesShcema);
export default Dishes;