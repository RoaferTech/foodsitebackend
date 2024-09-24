import Booking from "../models/bookingModel.js";


export const createBooking = async (req, res) => {
  const { date, time, name, phone, person } = req.body;
  try {
    const booking = new Booking({
      date,
      time,
      name,
      phone,
      person,
    });

    await booking.save();
    res.status(201).json({message:"table booked successfully",booking});
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({message:"all booking fetched successfully",bookings});
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


