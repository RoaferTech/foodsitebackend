import transporter from "../config/emailConfig.js";
import Email from "../models/emailModel.js";


export const sendEmail = (req,res) => {
    try {
        const newEmail = new Email(req.body);
        const htmlTemplate =  `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #AD343E; text-align: center;"> ${newEmail.subject}</h2>
          <div style="padding: 10px; border-top: 3px solid #AD343E;">
            <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${newEmail.name}</p>
            <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${newEmail.email}</p>
            <p style="font-size: 16px; color: #333;"><strong>Subject:${newEmail.subject}</strong></p>
            <p style="font-size: 16px; color: #555; white-space: pre-line;">${newEmail.message}</p>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <p style="font-size: 14px; color: #aaa;">&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      `;

      const mailOptions = {
        from: newEmail.email,
        to: process.env.RECEIVER_EMAIL,
        subject: `New message from ${newEmail.name}`,
        html: htmlTemplate,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ success: false, error: error.message });
        } else {
          return res.status(200).json({ success: true, message: 'Email sent successfully!' });
        }
      });
      
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}