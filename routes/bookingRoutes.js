import express from "express"
import { createBooking, getAllBookings } from "../controllers/bookingController.js";
const router = express.Router();

router.post("/bookings", createBooking);
router.get("/bookings", getAllBookings);

export default router;
