import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import dotenv from 'dotenv';
import emailRoutes from "./routes/emailRoutes.js"  
import DishRoutes from "./routes/dishesRoutes.js"  
import bookingRoutes from "./routes/bookingRoutes.js"  
import { connectDB } from "./config/database.js";
dotenv.config();
const app = express();



connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/public/uploads", express.static("public/uploads"));

app.use("/api/dish",DishRoutes)
app.use('/api', emailRoutes);
app.use("/api", bookingRoutes);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
    
})

