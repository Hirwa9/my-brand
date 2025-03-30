import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const recipientEmail = process.env.RECIPIENT_EMAIL;

// Create a transporter
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    },
});

export const mailOptions = {
    from: email,
    to: recipientEmail,
}; 