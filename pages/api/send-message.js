/**
 * File to handle sending messages from the contact form
 */

import { mailOptions, transporter } from "../../config/nodemailer";

// Utility function to create text template
const createTextTemplate = ({ name, email, phone, service, message }) => {
    return `
        New contact request from ${name}:
        Service: ${service}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        --------------------
        
        ${message}
    `;
};

// Utility function to create HTML template
const createHTMLTemplate = ({ name, email, phone, service, message }) => {
    return `
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <div style="margin-top: 10px; padding: 10px; border: 1px solid #ccc; background-color: #f9f9f9;">
            <p>${message}</p>
        </div>
    `;
};

// Main handler function
const sendMessage = async (req, res) => {
    if (req.method === "POST") {
        const { name, email, phone, service, message } = req.body;

        // Validate the input
        if (!name || !email || !service || !message) {
            return res.status(400).json({ success: false, message: "Name, email and message are required." });
        }

        try {
            // Send the email
            await transporter.sendMail({
                ...mailOptions,
                replyTo: { name, address: email }, // So "Reply" goes to the sender
                subject: `Portfolio message: ${service}`,
                text: createTextTemplate({ name, email, phone, service, message }), // Use text template
                html: createHTMLTemplate({ name, email, phone, service, message }), // Use HTML template
            });

            res.status(200).json({ success: true, message: "Message sent successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Failed to send email." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};

export default sendMessage;