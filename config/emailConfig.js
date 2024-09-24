import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure:true,
  port:465,
  auth: {
    user: process.env.SENDER_EMAIL, 
    pass:process.env.EMAIL_PASSWORD,
  },
});

export default transporter;
