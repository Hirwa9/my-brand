/**
 * File to handle sending messages from the contact form
 */

import { mailOptions, transporter } from "../../config/nodemailer";

// Utility function to create text template
const createTextTemplate = ({ firstname, lastname, phone, service, message }) => {
    return `
        New contact request from ${firstname} ${lastname}:
        Service: ${service}
        Phone: ${phone}
        
        Message:
        --------------------
        
        ${message}
    `;
};

// Utility function to create HTML template
const createHTMLTemplate = ({ firstname, lastname, phone, service, message }) => {
    return `
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <div style="margin-top: 10px; padding: 10px; border: 1px solid #ccc; background-color: #f9f9f9;">
            <p>${message}</p>
        </div>
    `;
};

// Main handler function
const sendMessage = async (req, res) => {
    if (req.method === "POST") {
        const { firstname, lastname, email, phone, service, message } = req.body;

        // Validate the input
        if (!firstname || !lastname || !email || !phone || !service || !message) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        try {
            // Send the email
            await transporter.sendMail({
                ...mailOptions,
                subject: `Portfolio message: ${service}`,
                text: createTextTemplate({ firstname, lastname, phone, service, message }), // Use text template
                html: createHTMLTemplate({ firstname, lastname, phone, service, message }), // Use HTML template
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