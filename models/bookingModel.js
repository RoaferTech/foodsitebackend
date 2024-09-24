import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    time: {
         type: String,
          required: true 
    },
    name: {
     type: String, 
     required: true 
    },
    phone: {
     type: String,
      required: true 
    },
    person: {
     type: String,
      required: true 
    },
});
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;